<template>
    <div class="container">
        <router-link :to="{ path: '/productos/' + id }"> 
        <img class="img-cat" :src="getImageCategoria(id+'_'+imagen)">
        <img class="img-cat-top" :src="getImageCategoriaH('h'+id+'_'+imagen)">
        </router-link>
    </div>
</template>

<script>
export default {
    name: "Tarjetas",  
    props: {
        nombre: String,
        imagen: String,
        id: Number
    },
    methods: {
    getImageCategoria (nombre_archivo) {
      let images = require.context('@/assets/categorias', false, /\.jpg$|\.png$/)
      return images('./' + nombre_archivo)
    },
    getImageCategoriaH (nombre_archivo) {
      let images = require.context('@/assets/categoriashover', false, /\.jpg$|\.png$/)
      return images('./' + nombre_archivo)
    }
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
    position: relative;
}
.img-cat{
    display: flex;
    width: 200px;
    box-shadow: 1px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 15px;
    position: absolute;
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
</style>