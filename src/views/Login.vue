<template>
<cabeza-pag/>
        <div><br></div>
        <div class="container"><br><br><br>
            <h2 class="titulo"><b>Iniciar Sesión</b></h2>
            <div class="row">
                <div id="formulario" >
                  <!-- Row-> ˆ class="col-lg-10 col-md-10 col-sm-10 col-xs-12" -->
                    <form>
                        <br>
                        <div class="campos-formulario form-group">
                            <input v-model="cliente.email" type="email" class="form-control" id="email" name="email" placeholder="Correo electrónico" required>
                        </div>

                        <div class="campos-formulario form-group">
                            <input v-model="cliente.contrasena" type="password" class="form-control" id="contrasena" name="contrasena" placeholder="Contraseña" required>
                        </div>
                        <br>
                        <!-- <div class="campos-formulario form-group">
                          <div class="form-check">
                            <input v-model="cliente.mostrarContrasena" type="checkbox" class="form-check-input is-invalid" id="mostrarContrasena" onclick="mostrarContrasena()" name="mostrarContrasena">Mostrar contraseña
                          </div> -->
                        <!-- </div> -->
                        <br>
                        <div class="campos-formulario form-group">
                            <input @click="registrarCliente()" class="btn btn-primary" value="Registrarme" ><router-link to="/registro"></router-link>
                            <input @click="inicioSesion()" class="btn btn-primary" value="Iniciar sesión">
                        </div>
                    </form>
                </div>
            </div>
        </div>



</template>

    <script>
    import CabezaPag from '@/components/Header.vue'
    import axios from 'axios'

    export default {
    name: 'Login',
    components: {
        CabezaPag,
    },
    data () {
        return {
              cliente: {
                nombres: '',
                apodo: '',
                email: '',
                contrasena: '',
                c_contrasena: '',
                tipo_doc: '',
                numero_doc: '',
                direccion: '',
                telefono: '',
            }
        }
    },
  //   methods: {
  //       mostrarContrasena() {
  //       var x = document.getElementById("contrasena");
  //           if (x.type === "password") {
  //               x.type = "text";
  //           } else {
  //               x.type = "password";
  //       }
  //   }
  // },


    methods: {
        inicioSesion () {
            axios.get(`https://del-campo-api.herokuapp.com/api/cliente/${this.cliente.email}`,
            {
                data: this.cliente
            })
            .then(response => {
                if (response.data !== null) {
                    console.log("Holi funciono hasta aqui")
                    console.log = response.data
                    this.$swal.fire(
                        '¡Hola!',
                        '¿cómo estas ' + this.cliente.email + '?',
                        'success')
                    this.$router.push('/?c='+this.cliente.email)
                } else {
                    this.$swal.fire(
                        'Cliente no encontrado',
                        'Este correo no esta registrado: ' + this.cliente.email,
                        'warning'
                    )
                }
            })
        }
    }}

    </script>


<style scoped>
.campos-formulario {
    margin-left: 50px;
    justify-content:center;
    font-family: Roboto;
    display:flex;
    text-align:center;
    }

.titulo{
    text-align: center;
    margin-left: 65px;
    color: #16573f;
}

input[type=password] {
  width: 400px;
  padding: 10px 15px;
  margin: 5px 0;
  display: inline-flex;
  border: 1px solid #ccc;
  background: rgb(235, 234, 234);
  border-radius: 10px;
  box-sizing: border-box;
  color:#707070;
  flex-flow: row wrap;
  align-items: center;
  justify-content:center;
}

input[type=email] {
  width: 400px;
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
  justify-content:center;
}

input[type=checkbox] {
  margin-right: 10px;
  text-align: left;
  border: solid 1px #c9c9c9;
  background: rgb(255, 255, 255);
}

.btn {
  width: 150px;
  background-color: #23815f;
  color: white;
  padding: 10px 20px;
  margin: 8px 0;
  border: none;
  border-radius: 10px;
  cursor: pointer;
  align-self: center;
  margin-right: 20px;
  margin-left: 20px;
  -moz-box-align: right;
  display: inline-flex;

}

.btn:hover {
  background-color: #6bce70;
}

.invalid-feedback{
  margin-left: 35px;
}

</style>