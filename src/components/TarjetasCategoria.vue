<template>
  <div class="container">
        <router-link :to="{ path: '/productos/' + id }"> 
        <div class="titulo">{{nombre}}</div>
        <img class="img-cat" :src="getImageCategoria(imagen)">
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
      let images = require.context('@/assets/Imagenes/Categorias', false, /\.jpg$|\.png$/)
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
    position:relative;
}
.titulo{
    position: absolute;
    font-family: 'Roboto';
    font-style:normal;
    font-size: larger;
    font-weight: 700;
    color:transparent;
    top:45%;
    right: 50%;
}

.titulo:hover{
    position:absolute;
    color: white;
}

.img-cat{
    display: flex;
    width: 200px;
    box-shadow: 1px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 15px;
    
}

/* .img-cat:hover{
    filter: brightness(60%);
    transition: all 0,50;
} */



</style>