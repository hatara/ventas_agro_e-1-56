<template>
    <div class="container">
        <img class="img-prod" :src="getImageProducto(imagen)">
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
    methods: {
        getImageProducto( nombre_archivo ) {
            let images = require.context('@/assets/productos', false, /\.jpg$|\.png$/)
            return images('./' + nombre_archivo)
        },
    }
}
</script>

<style scoped>
.container{
    display: flex;
    width: min-content;
    height: 100%;
    padding: 5px;
    margin: 10px;
    position:relative;
}
.img-prod{
    display: flex;
    width: 200px;
    box-shadow: 1px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 15px;
    position:absolute;
}
.img-cat-top{
    display: flex;
    width: 200px;
    box-shadow: 1px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 15px;
}
.img-cat:hover{
    transition: all 0,50;
    display: block;
    -moz-box-sizing: border-box;
    box-sizing: border-box;
    width: 200px;
    opacity: 0;
}



/* .img-cat:hover{
    filter: brightness(60%);
    transition: all 0,50;
} */



</style>