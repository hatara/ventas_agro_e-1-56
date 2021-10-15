<template>
  <cabeza-pag :nombreCliente="cliente"/>
  <banner-sup imagen="banner-1-home.jpg"/>
  <barra-utils/>
  <div class="items">
    <tarjetas-categoria v-for="categoria in categorias" :key="categoria.id" :nombre="categoria.nombre" :imagen="categoria.imagen" :id="categoria.id"/> 
  </div>
  <pie-pagina/>
</template>

<script>
import axios from 'axios'
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
      cliente: 'nologin',
      categorias: [],
      categoria: {}
    }
  },
  created () {
    try {
      if(typeof this.$route.query.c !== 'undefined') {
        this.cliente = this.$route.query.c
      }
    } catch (error) {
      console.log( this.$route.query )
    }
    axios.get('http://localhost:3000/api/categorias')
    .then(response =>{
      let status_peticion = response.status
      console.log('Estado de la Peticion: ' + status_peticion)
      this.categorias = response.data
    })
  }
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
