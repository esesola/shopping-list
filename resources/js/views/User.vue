<template>
    <div >
        <div class="container">
            <button class="btn-foto">
            add foto
        </button>
        <br>
        <span>dirección de correo eléctronico</span> <br>
        <span>nombre de usuario</span> <br>
        <span>cambiar contraseña</span> <br>

        <div class="dangerZone">
            <h1>DANGER ZONE</h1>
            <button class="btn-deleteacount" v-on:click="openModal()" >borrar cuenta</button>
                <div class="modal-background">
                    <div class="modal">
                        <button class="modal-close">
                            X
                        </button>
                        <div class="modal-content">
                            <p>Ahora mismo no esta disponible la acción de borrar la cuenta, <br>
                            pongase en contacto con nosotros o siga disfrutando de las listas</p>
                        </div>

                    </div>

                </div>

        </div>
        </div>
        
    


    </div>
</template>
<script>


</script>

<style>
@import url("https://fonts.googleapis.com/css?family=DM+Sans:400,500,700&display=swap");
.container{
    display: flex;
    flex: 0;
    flex-direction: column;
    font-family: var(--font);
  position: relative;
  margin: 5% auto;
  width: 600px;
  background: #FFF;
  color:#668989;
  border: 0.125em solid black;
  align-items: center;
  justify-content: center;
  
}
.btn-foto{
    background-image: url(https://services-media.propertylogic.net/website/1453828797/default_profile.jpg) !important;
    background-size: contain;
    cursor: pointer;
    width: 200px;
    height: 200px;
    border-radius: 120px;
    border: 3px solid black;
    margin-top: 20px;
    background-color: #FFF;
    color: lightgray;
}
.dangerZone{
    background-color: #ff8080;
    margin: 30px;
    width: 70%;
    border-radius: 20px;
    color: #990000;
    text-align: center;

}
.btn-deleteacount{
    cursor: pointer;
    margin:30px;
    width: 200px;
    height: 100px;
    background-color: #e60000;
    border: 3px solid black;
    font-size: xx-large;

}
.modal-background{
    background-color: rgba(0, 0, 0, 0.5);
  width: 100vw;
  height: 100vh;
  z-index: 1;
  top: 0;
  left: 0;
  position: fixed;
  margin: 0;
  display: none;
}
.modal-background .modal {
  position: fixed;
  border-radius: 15px;
  border: 5px solid #EFEFEF;
  background-color: white;
  width: 40vw;
  height: 40vw;
  margin: 2em auto;
  color: #000;
  top: 0;
  right: 30vw;
  -webkit-box-shadow: 10px 50px 30px rgba(0, 0, 0, 0.2);
          box-shadow: 10px 50px 30px rgba(0, 0, 0, 0.2);
  -webkit-transition: -webkit-transform 1s;
  transition: -webkit-transform 1s;
  transition: transform 1s;
  transition: transform 1s, -webkit-transform 1s;
}



.modal-background .modal-close {
  position: absolute;
  content: '';
  color: white;
  width: 20px;
  height: 20px;
  background-color: #fd6c98;
  border-radius: 10%;
  margin-right: 10px;
}

 .modal-background .modal-content {
  color: red;
  padding: 4em;
  text-align: center;
 }

</style>