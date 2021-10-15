<template>
    <cabeza-pag/>
    <banner-sup :imagen="'banner-2-' + $route.params.categoria + '.jpg'"/>
    <!-- <banner-sup :imagen="'banner-2-' + categoria.imagen"/> -->
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
            //idcat: Number, 
            auxcat: [],
            categoria: {},
            productos: {},
            categorias: [],
            todosProductos: []      
        }
    },
    created () {
        let banner = this.$route.params.categoria + '.jpg'
        axios.get('http://localhost:3000/api/categorias')
            .then(response =>{
            let status_peticion = response.status
            console.log('Peticion Categorias: ' + status_peticion)
            this.categorias = response.data
            // this.categoria = this.categorias.find( fcat => fcat.id === idcat )
            let i = 0
            for (i=0;i<8;i++) {
                if ( this.categorias[i].imagen === banner ) {
                    this.categoria = this.categorias[i]
                }
            }
            })
        // let idcat = parseInt( this.$route.params.categoria ) 
        axios.get('http://localhost:3000/api/productos')
            .then(response =>{
            let status_peticion = response.status
            console.log('Peticion Productos: ' + status_peticion)
            this.todosProductos = response.data
            // this.productos = this.todosProductos.filter( fprod => fprod.categoria === idcat )
            this.productos = this.todosProductos.filter( fprod => fprod.categoria === this.categoria.id )
        })
    },
}
</script>
<style scoped>
    .items{
        justify-content: space-around;
    }
</style>
