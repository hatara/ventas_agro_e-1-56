<template>
    <cabeza-pag/>
    <banner-sup :imagen="'banner-2-' + categoria.imagen"/>
    <!-- <banner-sup :imagen="'banner-2-frutas.jpg'"/> -->
    <barra-utils/>
    <div class="row">
        <h3>Productos de {{ categoria.nombre }}</h3>
    </div>
    <div class="row items">
        <tarjetas-producto v-for="producto in productos" 
            :key="producto.id" :nombre="producto.nombre" :unidad="producto.unidad"
            :precio="producto.precio" :imagen="producto.imagen"/> 
    </div>
    <pie-pagina/>
</template>
<script>
import axios from 'axios'
import CabezaPag from '@/components/Header.vue'
import BannerSup from '@/components/BannerSup.vue'
import BarraUtils from '@/components/BarraUtils.vue'
import PiePagina from '@/components/Footer.vue'
import TarjetasProducto from '@/components/TarjetasProducto.vue'

export default {
    name: 'Productos',
    components: {
        CabezaPag,
        BannerSup,
        BarraUtils,
        PiePagina,
        TarjetasProducto
    },
    data () {
        return {
            categoria: {},
            productos: {},
            categorias: [],
            todosProductos: []      
        }
    },
    beforeCreate () {
        let idcat = parseInt( this.$route.params.categoria ) 
        axios.get('http://localhost:3000/api/categorias')
            .then(response =>{
            let status_peticion = response.status
            console.log('Peticion Categorias: ' + status_peticion)
            this.categorias = response.data
            this.categoria = this.categorias.find( fcat => fcat.id === idcat )
            })
    },
    created () {
        let idcat = parseInt( this.$route.params.categoria ) 
        axios.get('http://localhost:3000/api/productos')
            .then(response =>{
            let status_peticion = response.status
            console.log('Peticion Productos: ' + status_peticion)
            this.todosProductos = response.data
            this.productos = this.todosProductos.filter( fprod => fprod.categoria === idcat )
        })
    },
}
</script>
<style scoped>
    .items{
        justify-content: space-around;
    }
</style>
