<template>
  <cabeza-pag/>
  <banner-sup imagen="bannerSup-home.jpg"/>
  <barra-utils/>
  <div class="row">&nbsp;</div>
  <div class="row cat-container">
    <div v-for="categoria in categorias" :key="categoria.id" class="col-lg-3 div-cat">
        <!-- <router-link :to="{ name: 'Productos', params: { escogida:'2' }}"> -->
        <!-- <router-link :to="{ path: '/productos', query: { escogida: '2' }}"> -->
        <!-- <router-link to="/aux"> -->
        <!-- <router-link :to="{ name:'AuxTest' }"> -->
        <router-link :to="{ path: '/productos/' + categoria.id }">
        <img class="img-cat" :src="getImageCategoria(categoria.imagen)">
      </router-link>
      <h3>{{ categoria.nombre }}</h3>
      <br>
    </div>
  </div>
  <pie-pagina/>
</template>

<script>
import CabezaPag from '@/components/Header.vue'
import BannerSup from '@/components/BannerSup.vue'
import BarraUtils from '@/components/BarraUtils.vue'
import PiePagina from '@/components/Footer.vue'

export default {
  name: 'Home',
  components: {
    CabezaPag,
    BannerSup,
    BarraUtils,
    PiePagina
  },
  data () {
    return {
      categorias: [
        {
          id: 1,
          nombre: 'Frutas',
          imagen: 'cat-1-frutas.jpg'},
        {
          id: 2,
          nombre: 'Verduras',
          imagen: 'cat-2-verduras.jpg'},
        {
          id: 3,
          nombre: 'Raíces',
          imagen: 'cat-3-raices.jpg'},
        {
          id: 4,
          nombre: 'Granos',
          imagen: 'cat-4-granos.jpg'},
        {
          id: 5,
          nombre: 'Carnes',
          imagen: 'cat-5-carnes.jpg'},
        {
          id: 6,
          nombre: 'Pollo',
          imagen: 'cat-6-pollo.jpg'},
        {
          id: 7,
          nombre: 'Pescado',
          imagen: 'cat-7-pescado.jpg'},
        {
          id: 8,
          nombre: 'Lácteos',
          imagen: 'cat-8-lacteos.jpg'},
        {
          id: 9,
          nombre: 'Otros',
          imagen: 'cat-9-otros.jpg'} 
      ]
    }
  },
  methods: {
    getImageCategoria (nombre_archivo) {
      let images = require.context('@/assets/', false, /\.jpg$|\.png$/)
      return images('./' + nombre_archivo)
    }
  }
}
</script>
<style scoped>
.cat-container {
  align-content: center;
}
.div-cat {
  /* padding: 5px; */
  /* margin: 10px; */
  text-align: center;
}
.img-cat {
    border: solid;
    border-radius: 15px;
    width: 250px;
}
</style>
