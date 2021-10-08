  <template>
    <cabeza-pag/>
    <div><br></div>
    <div class="container">
            <h3 class="titulo"><b>Iniciar sesión</b></h3>
            <div><br></div>
    
      <form action="/action_page.php">
          <div>
            <input type="email"  id="email" name="Email" placeholder="Correo electrónico">
          </div>
          <div>
            <input type="password"  id="contraseña" name="Contraseña" placeholder="Contraseña">
          </div>
          <div aling=left> 
            <input type="checkbox"  onclick="mostrarContraseña()"> Mostrar contraseña  
            <input type="checkbox" class="registro"  onclick="registro()"> olvidé mi contraseña 
          </div>
          <div> 
            <input type="submit"  value="Registrarme">
            <input type="submit"  value="Iniciar sesión">
          </div>
      </form>
    </div>
  </template>

<script>
    import CabezaPag from '@/components/Header.vue'

    export default {
        name: 'Registro',
        components: {
            CabezaPag},
    }

    // function mostrarContraseña() {
    //     var x = document.getElementById("myInput");
    //         if (x.type === "password") {
    //             x.type = "text";
    //         } else {
    //             x.type = "password";
    //     }
    // }

</script>


<style>

  .container{
      justify-content:center;
      font-family: Roboto;
      display:inline-block;
      text-align:center;
  }


  .titulo{
      text-align: center;
      color: #16573f;
      margin-top: 50px;
  }


  input[type=password] {
    width: 50%;
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
    margin-top:10px
  }

  input[type=email] {
    width: 50%;
    padding: 10px 15px;
    margin: 10px 0;
    display: inline-flex;
    border: 1px solid #ccc;
    background: rgb(235, 234, 234);
    border-radius: 10px;
    box-sizing: border-box;
    color:#707070;
    flex-flow: row wrap;
  }

  input[type=checkbox] {
    margin-right: 5px;
    text-align: left;
    margin-left: 20px;
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
    margin-top:20px;
    margin-right:20px;
  }

  input[type=submit]:hover {
    background-color: #6bce70;
  }

</style>
    