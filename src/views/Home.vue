<template>
  <cabeza-pag/>
  <banner-sup imagen="bannerSup-home.jpg"/>
  <barra-utils/>
  <div class="home">
    <br>
    <h1>Tarjetas de Productos</h1>
    <br>
    <br>
    <br>
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
  }
}
</script>
