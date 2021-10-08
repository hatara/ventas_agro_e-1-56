<template>
    <div id="banner" class="row">
        <img alt="Banner superior" :src="getBannerImage()" class="banner-img">
    </div>
</template>
<script>
export default {
    name: 'BannerSup',
    props: {
        imagen: String
    },
    methods: {
        getBannerImage () {
            /* Función para cargar imágenes dinámicamente */
            let images = require.context('@/assets/banners/', false, /\.jpg$|\.png$/)
            return images('./' + this.imagen)
        }
    }
}
</script>
<style scoped>
.banner-img {
    height: 140px;
    width: 100%;
    background-color: darkgoldenrod;
}
</style>