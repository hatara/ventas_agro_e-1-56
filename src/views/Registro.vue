<template>
    <cabeza-pag/>
        <div><br></div>
        <div class="container">
            <h3 class="titulo"><b>Regístrate</b></h3>
    <div><br></div>
    <div class="container">
    <form action="/action_page.php">
        <div class="datos">
        <input type="text" id="nombre" name="Nombre" placeholder="Nombre y apellido">
        <input type="text" id="apodo" name="Apodo" placeholder="Apodo">
        <input type="text" id="email" name="Email" placeholder="Correo electrónico">
        <input type="t" id="apodo" name="libre" placeholder="">
        <input type="text" id="contraseña" name="Contraseña" placeholder="Contraseña">
        <input type="text" id="c-contraseña" name="C-Contraseña" placeholder="Confirma tu contraseña">
        <select class="selector" id="tipoDoc" name="Tipo de documento" >
            <option value="CC">Tipo de documento</option>
            <option value="CC">Cédula de ciudadanía</option>
            <option value="TI">Tarjeta de identidad</option>
            <option value="CE">Cédula de extranjería</option>
            <option value="P">Pasaporte</option>
        </select>
        <input type="text" id="n-documento" name="N_Documento" placeholder="Número de documento">
        
            <!-- <input type="checkbox" id="myCheck" onclick= tratamiento()>
            <label for="myCheck">Acepto política de tratamiento de datos</label>  -->

        <input type="submit" value="Registrarme">
        </div>
    </form>
</div>
    </div>
</template>

    <script>
    import CabezaPag from '@/components/Header.vue'

    export default {
        name: 'Registro',
        components: {
            CabezaPag},
    }

    // function tratamiento() {
    //     var checkBox = document.getElementById("myCheck");
    //     var text = document.getElementById("text");
    //     if (checkBox.checked == true){
    //         text.style.display = "block";
    //     } else {
    //         text.style.display = "none";
    //     }
    // }

    </script>

<style>

.datos{
    justify-content:center;
    font-family: Roboto;
    display:inline-block;
    text-align:center;
}

.titulo{
    text-align: center;
    color: #16573f;
}


input[type=text], select {
  width: 40%;
  padding: 10px 15px;
  margin: 10px 0;
  display: inline-flex;
  border: 1px solid #ccc;
  background: rgb(235, 234, 234);
  border-radius: 10px;
  box-sizing: border-box;
  color:#707070;
  flex-flow: row wrap;
  align-items: center;
  margin-left: 15px;
  margin-right: 15px;
  justify-content:center;
}

input[type=t] {
  width: 40%;
  padding: 5px 10px;
  margin: 10px 0;
  display: inline-flex;
  border: none;
  background: rgb(255, 255, 255);
  border-radius: 10px;
  box-sizing: border-box;
  flex-flow: row wrap;
  align-items: center;
  margin-left: 15px;
  margin-right: 15px;
}

input[type=submit] {
  width: 40;
  background-color: #23815f;
  color: white;
  padding: 10px 20px;
  margin: 4px 0;
  border: none;
  border-radius: 10px;
  cursor: pointer;
  align-self: center;
  margin-right: 50px;
  margin-left: 50px;
  margin-top: 20px;
}

input[type=submit]:hover {
  background-color: #6bce70;
}



</style>