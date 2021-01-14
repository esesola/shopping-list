<template>
    <div id="app">
        <div class="container">
            <div class="add-item">
                <button class="add-button" v-on:click="add()">+</button>
            <input
                class="input"
                v-model="newSuper"
                v-on:keyup.enter="add()"
                placeholder="add super"
            />
            </div>
            <ul style="list-style-type: none;">

                <li v-for="(supers) in existingSupers" :key="supers.id">
                    <button class="span">
                        <span>
                        {{supers.text}}
                        </span>
                         <button class="delete-button" v-on:click="deleteSuper()">
                        X
                    </button>
                    </button>
                   
                </li>
            </ul>

        </div>
        <div clas="tabs">
<div class="warpper">
  <input class="radio" id="one" name="group" type="radio" checked>
  <input class="radio" id="two" name="group" type="radio">
  <input class="radio" id="three" name="group" type="radio">
  <div class="tabs">
  <label class="tab" id="one-tab" for="one">Mercadona</label>
  <label class="tab" id="two-tab" for="two">Skills</label>
  <label class="tab" id="three-tab" for="three">Prerequisites</label>
    </div>
  <div class="panels">
  <div class="panel" id="one-panel">
    <div class="panel-title">MErcadona</div>
    
    <p>Without CSS, every web page would be drab plain text and images that flowed straight down the page. With CSS, you can add color and background images and change the layout of your page — your web pages can feel like works of art!</p>
  </div>
  <div class="panel" id="two-panel">
    <div class="panel-title">Take-Away Skills</div>
    <p>You will learn many aspects of styling web pages! You’ll be able to set up the correct file structure, edit text and colors, and create attractive layouts. With these skills, you’ll be able to customize the appearance of your web pages to suit your every need!</p>
  </div>
  <div class="panel" id="three-panel">
    <div class="panel-title">Note on Prerequisites</div>
    <p>We recommend that you complete Learn HTML before learning CSS.</p>
  </div>
  </div>
</div>

        </div>
    </div>
</template>

<script>
export default {
    name:'app',
    data(){
        return{
            newSuper:'',
            existingSupers:[
                {text:'Mercadona',id:0},
                {text:'Lidl',id:1},
                {text:'Alcampo',id:2},
                
            ]
        }
            
        },
        methods:{
            add(){
                this.existingSupers.push({
                    text: this.newSuper,
                    id: new Date().valueOf()
                }),
                this.newSuper=''
            },
            deleteSuper(i){
                this.existingSupers.splice(i,1)
            }
    }
    
}
</script>

<style>
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
  padding: 5px;
  cursor: pointer;
  width: 95%;
  background-color: #fff;
  border: 1px solid lightgray;
  border-radius:18px ;
  
  
}
.delete-button{
  margin-left: 0.5em;
  background: none;
  border: 1px solid;
  color: inherit;
  padding: 0;
  line-height: 1;
  width: 2em;
  height: 2em;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  font-size: 80%;
}



.warpper{
  display:flex;
  flex-direction: column;
  align-items: center;
}
.tab{
  cursor: pointer;
  padding:10px 20px;
  margin:0px 2px;
  background:#000;
  display:inline-block;
  color:#fff;
  border-radius:3px 3px 0px 0px;
  box-shadow: 0 0.5rem 0.8rem #00000080;
}
.panels{
  background:#fffffff6;
  box-shadow: 0 2rem 2rem #00000080;
  min-height:200px;
  width:100%;
  max-width:500px;
  border-radius:3px;
  overflow:hidden;
  padding:20px;  
}
.panel{
  display:none;
  animation: fadein .8s;
}
@keyframes fadein {
    from {
        opacity:0;
    }
    to {
        opacity:1;
    }
}
.panel-title{
  font-size:1.5em;
  font-weight:bold
}
.radio{
  display:none;
}
#one:checked ~ .panels #one-panel,
#two:checked ~ .panels #two-panel,
#three:checked ~ .panels #three-panel{
  display:block
}
#one:checked ~ .tabs #one-tab,
#two:checked ~ .tabs #two-tab,
#three:checked ~ .tabs #three-tab{
  background:#fffffff6;
  color:#000;
  border-top: 3px solid #000;
}
</style>