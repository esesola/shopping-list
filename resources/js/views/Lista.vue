<template>
    <div id="app">
    <div class="container">
      <div class="add-item">

        <button class="add-button" v-on:click="add()">+</button>
      <input class="imput"
      v-model="newToDo" v-on:keyup.enter="add()"
      placeholder="add product"
      />
      
      </div>
      
      <ul style="list-style-type: none;">

        <div >
        <li v-bind:class="['list-item', todo.completed ? 'producto' : '']" v-for="(todo,i) in lista_ordenada" :key="todo.id">
          <input class="checkbox"  v-model="todo.completed" type="checkbox" @change="checked(todo)">
          <span class="span">
            {{todo.text}}
          </span>
          <input type="button" class="delete-button" v-on:click="deleteToDo(i,todo)" value=""/>
        </li>
        </div>
      </ul>
    </div>
  </div>
</template>

<script>

import axios from "axios";
export default {
    name: 'app',
    data () {
      return{
        newToDo: '',
        existingToDo:[
        ]
      }
    },
    created () {
    window.addEventListener('scroll', this.handleScroll);
  },
  mounted() {
    axios
    .get('http://127.0.0.1:8000/api/productos')
    .then(response => {
      console.log('Response OK');
      console.log(response.data);
      let list = response.data.map(p => {return {text:p.name, completed: p.completed, id:p.id};})
      list.forEach(element => {
        this.existingToDo.push(element)
      });
      }).catch(error => {
          console.log('Mal');
          console.log(error)
      });
  },
  destroyed () {
    window.removeEventListener('scroll', this.handleScroll);
  },
    methods:{
      add(){
        var post= {
              producto:{
                name: this.newToDo
            }
        }
        axios
        .post('http://127.0.0.1:8000/api/producto/store',post)
        .then((result)=>{
            var data = result.data;
            console.log(data);
            var todo ={
                        text: data.name,
                        id: data.id,
                        completed: false
                      }
            this.existingToDo.push(
                                    todo
                                  )
              this.newToDo=''
          }).catch(err=>{console.log(err)});
        
        
      },
      deleteToDo(i,todo){
        this.existingToDo.splice(i,1)
        axios
        .delete('http://127.0.0.1:8000/api/producto/'+todo.id)
      },
      checked(todo){
        var body= {
              producto:{
                completed: todo.completed
            }
        }
        axios
        .put('http://127.0.0.1:8000/api/producto/'+todo.id,body)
      },
    },
    computed:{
        lista_ordenada: function(){
            const array = this.existingToDo;
            return array.sort(function(a,b){
                return a.completed - b.completed;
            });
        }
    }
}
</script>
<style>
@import url("https://fonts.googleapis.com/css?family=Montserrat:600&display=swap");
@import url("https://fonts.googleapis.com/css?family=DM+Sans:400,500,700&display=swap");
*{
  outline: 0;
}
:root{
   --font: "DM Sans", sans-serif;
}
body{
  background: linear-gradient(102.7deg, #fddaff 8.2%, #dfadfc 19.6%, #adcdfc 36.8%, #adfcf4 73.2%, #caf8d0 90.9%);
  background-attachment: fixed;
  font-size: 16px;
  color: #586b6a;
  overflow: hidden;
}
#app{
  font-family: var(--font);
  margin: 2em auto;
  padding: 1rem 2rem;
  display: block;
  background: #fff;
  width: 600px;
  border: 0.125em solid black;
  
}
#app ul{
  margin: 0;
  padding: 0 .2rem;
  }
.add-item{
  padding: 0 0 1rem 0;
  
}
.add-item button{
  background: none;
  border: none;
  display: table-cell;
  vertical-align: middle;
  border-radius: 5px;
  padding: .5rem 0;
  font-size: 2em;
  cursor: pointer;
  color: #668989;
  transition: all .5s linear;
  width: 10%;
  text-align: left;
  font-weight: 300;
}
.add-item button:hover{
  color: #84AAA9;
}
.add-item input{
  padding: .5rem .7rem;
  vertical-align: middle;
  display: table-cell;
  border-radius: 5px;
  border: 1px solid #ccc;
  width: 80%;
}
.list-item{
  width: 100%;
  display: flex;
  align-items: center;
  transition: all 1s linear;
  margin: 0 0 .5rem 0;
  padding: .5rem 0rem;
  border-radius: 10px 10px 10px 10px;
  -moz-border-radius: 10px 10px 10px 10px;
  -webkit-border-radius: 10px 10px 10px 10px;
  border: lightgray 1px solid;
  

}
.span{
  position: relative;
  margin: .3rem .5rem .3rem 1.2rem;
  cursor: pointer;
  width: 85%;
  
  
}
.checkbox{
  position: relative;
  top: 0;
  margin: 0 .7rem 0 0;
  cursor: pointer;
  margin-left: 5px;
  background-color: transparent;

}.checkbox:before{
  -webkit-transition: all 0.3s ease-in-out;
  -moz-transition: all 0.3 ease-in-out;
  transition: all 0.3s ease-in-out;
  content: "";
  position: absolute;
  left: 0;
  z-index: 1;
  width: 1rem;
  height: 1rem;
  border: 2px solid #BFD7D6;
}
.checkbox:checked:before {
	-webkit-transform: rotate(-45deg);
	-moz-transform: rotate(-45deg);
	-ms-transform: rotate(-45deg);
	-o-transform: rotate(-45deg);
	transform: rotate(-45deg);
	height: .5rem;
	border-color: #668989;
	border-top-style: none;
	border-right-style: none;
    -webkit-text-decoration: line-through wavy rgba(0, 0, 0, 0.3);
    text-decoration: line-through wavy rgba(0, 0, 0, 0.3);
    
}
.checkbox:after {
	content: "";
	position: absolute;
	top: -0.1rem;
	left: -0.1rem;
	width: 1.2rem;
	height: 1.3rem;
	background: #fff;
	cursor: pointer;
}
.delete-button{
  border: 0;
  width: 18px;
  height: 18px;
  padding: 0;
  overflow: hidden;
  background-color: transparent;
  background-image: url("data:image/svg+xml;charset=UTF-8,%3csvg fill='%23dc4771' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 174.239 174.239'%3e%3cpath d='M87.12 0C39.082 0 0 39.082 0 87.12s39.082 87.12 87.12 87.12 87.12-39.082 87.12-87.12S135.157 0 87.12 0zm0 159.305c-39.802 0-72.185-32.383-72.185-72.185S47.318 14.935 87.12 14.935s72.185 32.383 72.185 72.185-32.384 72.185-72.185 72.185z'/%3e%3cpath d='M120.83 53.414c-2.917-2.917-7.647-2.917-10.559 0L87.12 76.568 63.969 53.414c-2.917-2.917-7.642-2.917-10.559 0s-2.917 7.642 0 10.559l23.151 23.153-23.152 23.154a7.464 7.464 0 000 10.559 7.445 7.445 0 005.28 2.188 7.437 7.437 0 005.28-2.188L87.12 97.686l23.151 23.153a7.445 7.445 0 005.28 2.188 7.442 7.442 0 005.28-2.188 7.464 7.464 0 000-10.559L97.679 87.127l23.151-23.153a7.465 7.465 0 000-10.56z'/%3e%3c/svg%3e");
  background-repeat: no-repeat;
  background-size: cover;
  cursor: pointer;
  display: none;

}
.list-item:hover > .delete-button{
    display: flex;
}
.imput{
  border-radius: 2em;
}
.producto{
  color: rgba(255, 99, 71, 0.5);
}
</style>