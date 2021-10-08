<template>
  <cabeza-pag/>
  <banner-sup imagen="banner-1-home.jpg"/>
  <barra-utils/>
  <div class="row">&nbsp;</div>
  <div class="items">
    <tarjetas-categoria v-for="categoria in categorias" :key="categoria.id" :nombre="categoria.nombre" :imagen="categoria.imagen" :id="categoria.id"/> 
  </div>
  <pie-pagina/>
</template>

<script>
import CabezaPag from '@/components/Header.vue'
import BannerSup from '@/components/BannerSup.vue'
import BarraUtils from '@/components/BarraUtils.vue'
import PiePagina from '@/components/Footer.vue'
import TarjetasCategoria from '@/components/TarjetasCategoria.vue'

export default {
  name: 'Home',
  components: {
    CabezaPag,
    BannerSup,
    BarraUtils,
    PiePagina,
    TarjetasCategoria
  },
  data () {
    return {
      categorias: [
        {
          id: 1,
          nombre: 'Frutas',
          imagen: 'cat_1_frutas.jpg'},
        {
          id: 2,
          nombre: 'Verduras',
          imagen: 'cat_2_Verduras.jpg'},
        {
          id: 3,
          nombre: 'Legumbres',
          imagen: 'cat_3_Legumbres.jpg',},
        {
          id: 4,
          nombre: 'Tubérculos',
          imagen: 'cat_4_Tuberculos.jpg',},
        {
          id: 5,
          nombre: 'Lácteos',
          imagen: 'cat_5_Lacteos.jpg',},
        {
          id: 6,
          nombre: 'Huevos',
          imagen: 'cat_6_Huevos.jpg',},
        {
          id: 7,
          nombre: 'Carne, pollo y pescado',
          imagen: 'cat_7_Carne_pollo_pescado.jpg'},
        {
          id: 8,
          nombre: 'Otros',
          imagen: 'cat_8_Otros.jpg',}
      ]
    }
  },
}
</script>
<style scoped>
.items{
  display:flex;
  justify-content: space-around;
  width: 100%;
  flex-wrap: wrap;
}
</style>
