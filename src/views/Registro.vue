<template>
<cabeza-pag/>
        <div><br></div>
        <div class="container">
            <h2 class="titulo"><b>Regístrate</b></h2>
    <div><br></div>
            <div class="row">
                <div id="formulario" >
                  <!-- Row-> ˆ class="col-lg-10 col-md-10 col-sm-10 col-xs-12" -->
                    <form>
                        <br>
                        <div class="campos-formulario form-group">
                            <input v-model="cliente.nombres" type="text" class="form-control" id="nombre" name="nombre" placeholder="Nombre y apellido" required>
                        </div>    
                        <div class="campos-formulario form-group">
                            <input v-model="cliente.apodo" type="text" class="form-control" id="apodo" name="apodo" placeholder="Apodo" required>
                        </div>
                        <div class="campos-formulario form-group">
                            <input v-model="cliente.email" type="email" class="form-control" id="email" name="email" placeholder="Correo electrónico" required>
                            <br>
                        </div>
                        <br>

                        <div class="campos-formulario form-group">
                            <input v-model="cliente.contrasena" type="password" class="form-control" id="contrasena" name="contrasena" placeholder="Contraseña" required>
                        </div>
                        <div class="campos-formulario form-group">
                            <input v-model="cliente.c_contrasena" type="password" class="form-control" id="c_contrasena" name="c_contrasena" placeholder="Confirma tu contraseña" required>
                        </div>
                        <br>
                        <!-- <div class="campos-formulario form-group">
                          <div class="form-check">
                            <input v-model="cliente.mostrarContrasena" type="checkbox" class="form-check-input is-invalid" id="mostrarContrasena" onclick="mostrarContrasena()" name="mostrarContrasena">Mostrar contraseña
                          </div>
                        </div>
                        <br> -->
                        <div class="campos-formulario form-group">
                            <input v-model="cliente.tipo_doc" type="text" class="form-control" id="tipo_doc" name="tipo_doc" placeholder="Tipo de documento" required>
                            <!-- <select  v-model="cliente.tipo_doc" type="select" class="form-control"  id="tipoDoc" name="Tipo de documento" >
                                <option value="CC">Tipo de documento</option>
                                <option value="CC">Cédula de ciudadanía</option>
                                <option value="TI">Tarjeta de identidad</option>
                                <option value="CE">Cédula de extranjería</option>
                                <option value="P">Pasaporte</option>
                            </select> -->
                        </div>
                        <div class="campos-formulario form-group">
                            <input v-model="cliente.numero_doc" type="text" class="form-control" id="num_doc" name="num_doc" placeholder="Número de documento" required>
                        </div>
                        <div class="campos-formulario form-group">
                            <input v-model="cliente.telefono" type="number" class="form-control" id="telefono" name="telefono" placeholder="Número de teléfono">
                        </div>
                        <div class="campos-formulario form-group">
                            <input v-model="cliente.direccion" type="text" class="form-control" id="direccion" name="direccion" placeholder="Dirección">
                        </div>
                        <br>
                        <div class="campos-formulario form-group">
                            <div class="form-check">
                                <input v-model="cliente.tratamiento" type="checkbox" class="form-check-input is-invalid" id="tratamiento_datos" name="tratamiento_datos" required> He leído y acepto el tratamiento de mis datos
                                <!-- <div class="invalid-feedback">
                                    Debes aceptar los términos y condiciones antes de enviar
                                </div> -->
                            </div>
                        </div>
                        <br>
                        <div class="campos-formulario form-group">
                            <input @click="registrarCliente()" class="btn btn-primary" value="Registrarme">
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
    name: 'Productos',
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
    methods: {
    //             mostrarContrasena() {
    //     var x = document.getElementById("contrasena");
    //         if (x.type === "password") {
    //             x.type = "text";
    //         } else {
    //             x.type = "password";
    //     }
    // },

        registrarCliente () {
            axios.post('http://localhost:3000/api/nuevo-cliente',
            {
                data: this.cliente
            })
            .then(response => {
                let status_peticion = response.status
                let mensaje = response.data
                if (status_peticion === 200 ) {
                    this.$swal.fire(
                        'Cliente registrado',
                        this.cliente.apodo + ' ¡Se ha registrado exitosamente!',
                        'success',
                    )
                    this.cliente = {}
                } else {
                    this.$swal.fire(
                        'Cliente NO registrado',
                        'Ocurrió un error al registrar a ' + this.cliente.apodo,
                        'error'
                    )
                }
                console.log(mensaje)
            })
        }
    }
  }


    </script>


<style scoped>
.campos-formulario {
    margin-left: 50px;
    justify-content:center;
    font-family: Roboto;
    display:inline-block;
    text-align:center;
    }

.titulo{
    text-align: left;
    margin-left: 65px;
    color: #16573f;
}


input[type=text], select{
  width:400px;
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
  justify-content:flex;
}

input[type=number], select{
  width:400px;
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
  justify-content:flex;
}


input[type=password] {
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
  margin-left: 15px;
  margin-right: 15px;
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
  margin-left: 15px;
  margin-right: 15px;
  justify-content:center;
}

input[type=select] {
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
  margin-left: 15px;
  margin-right: 15px;
  justify-content:center;
}


input[type=checkbox] {
  margin-left: 5px;
  margin-right: 10px;
  text-align: left;
  border: solid 1px #c9c9c9;
  background: rgb(255, 255, 255);
}

.btn {
  width: 200px;
  background-color: #23815f;
  color: white;
  padding: 10px 20px;
  margin: 4px 0;
  border: none;
  border-radius: 10px;
  cursor: pointer;
  align-self: center;
  margin-right: 20px;
  margin-left: 20px;
  margin-top: 20px;
  -moz-box-align: right;

}

.btn:hover {
  background-color: #6bce70;
}

.invalid-feedback{
  margin-left: 35px;
}



</style>