<template>
    <div class="tarjeta" @mouseover="mostrarBoton()">
        <img class="img-prod" :src="getImageProducto(imagen)">
        <div class="boton">
            <!-- <div v-show="verBoton" class="boton">&nbsp;</div> -->
            <div v-show="verBoton" class="boton">Agregar</div>
        </div>
    </div>
</template>

<script>
export default {
    name: "TarjetasProducto",  
    props: {
        nombre: String,
        imagen: String,
        id: Number
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
    background-color: #DDE11D;
    -moz-box-sizing: border-box;
    box-sizing: border-box;
}
.botonContainer {
    display: flex;
}
.boton {
    width: 100px;
    background-color: white;
    text-align: center;
    margin: 2px;
    border-radius: 5px;
    /* position: absolute; */
    /* border: 1px solid black; */
}
</style>