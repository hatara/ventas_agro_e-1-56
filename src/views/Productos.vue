<template>
    <cabeza-pag/>
    <banner-sup imagen="bannerSup-productos.jpg"/>
    <barra-utils/>
    <div class="row">
        <h1>Productos de {{ categoria.nombre }}</h1>
    </div>
    <pie-pagina/>
</template>
<script>
import CabezaPag from '@/components/Header.vue'
import BannerSup from '@/components/BannerSup.vue'
import BarraUtils from '@/components/BarraUtils.vue'
import PiePagina from '@/components/Footer.vue'

export default {
    name: 'Productos',
    components: {
        CabezaPag,
        BannerSup,
        BarraUtils,
        PiePagina
    },
    props: {
        escogida: String
    },
    data () {
        return {
            categoria: String,
            categorias: [
                { id: '1', nombre: 'Frutas'},
                { id: '2', nombre: 'Verduras'},
                { id: '3', nombre: 'Raíces'},
                { id: '4', nombre: 'Granos'},
                { id: '5', nombre: 'Carnes'},
                { id: '6', nombre: 'Pollo'},
                { id: '7', nombre: 'Pescado'},
                { id: '8', nombre: 'Lácteos'},
                { id: '9', nombre: 'Otros'} 
            ]
        }
    },
    created () {
        this.categoria = this.categorias.find(fcat => fcat.id === this.escogida)
    }
}
</script>