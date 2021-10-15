<template>
    <div class="tarjeta" @mouseover="mostrarBoton()" @mouseleave="ocultarBoton()">
        <img class="img-prod" :src="getImageProducto(imagen)">
        <div class="nombre"><h4><b>{{ nombre }} x {{unidad}}</b></h4> </div>
        <!-- <div class ="unidad"><h5><b>{{unidad}}</b></h5></div> -->
        <div class="precio"><h5>$ {{ precio }}</h5></div>
        <div v-show="!verBoton" class="boton">&nbsp;</div>
        <div v-show="verBoton" class="boton" @click="pedirCantidad()">Agregar</div>
    </div>
</template>

<script>
export default {
    name: "TarjetasProducto",  
    props: {
        nombre: String,
        unidad: String,
        precio: Number,
        imagen: String,
        key: Number
    },
    data () {
        return {
            verBoton: Boolean
        }
    },
    methods: {
        getImageProducto( nombre_archivo ) {
            let images = require.context('@/assets/productos', false, /\.jpg$|\.png$/)
            return images('./' + nombre_archivo)
        },
        mostrarBoton() {
            this.verBoton = true
        },
        ocultarBoton() {
            this.verBoton = false
        },
        pedirCantidad () {
            alert('Ingresa la Cantidad:')
        }
    },
    created () {
        this.verBoton = false
    }
}
</script>
<style scoped>
.tarjeta {
    display: flex;
    flex-flow: column;
    flex-wrap: wrap;
    width: min-content;
    padding: 5px;
    margin: 10px;
    align-items: center;
    box-shadow: 1px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 15px;
}
.img-prod {
    width: 200px;
    /* border: 1px solid black; */
}
.tarjeta:hover {
    background-color: #f5f7d0;
    -moz-box-sizing: border-box;
    box-sizing: border-box;
}
.nombre {
    text-align: center;
    font-weight:900;
    color: #044d0a;
}
.unidad {
    text-align: center;
}

.precio {
    text-align: center;
}
.boton {
    width: 100px;
    background-color: rgb(255, 255, 255);
    text-align: center;
    margin: 2px;
    border-radius: 5px;
    /* border: 1px solid black; */
}
.boton:hover{
background-color: rgb(4, 90, 40);
color: white;
font-weight: bold;
} 
</style>