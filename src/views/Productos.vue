<template>
    <cabeza-pag/>
    <banner-sup imagen="bannerSup-productos.jpg"/>
    <barra-utils/>
    <div class="row">
        <h3>Productos de {{ categoria.nombre }}</h3>
    </div>
    <div v-for="producto in productos" :key="producto.id" class="row">
        <div class="col-lg-2">{{ producto.imagen }}.jpg</div>
        <div class="col-lg-4">{{ producto.nombre }}</div>
        <div class="col-lg-2">$ {{ producto.precio }}</div>
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
    data () {
        return {
            categoria: {},
            productos: {},
            categorias: [
                { id: 1, nombre: 'Frutas'},
                { id: 2, nombre: 'Verduras'},
                { id: 3, nombre: 'Raíces'},
                { id: 4, nombre: 'Granos'},
                { id: 5, nombre: 'Carnes'},
                { id: 6, nombre: 'Pollo'},
                { id: 7, nombre: 'Pescado'},
                { id: 8, nombre: 'Lácteos'},
                { id: 9, nombre: 'Otros'} 
            ],
            todosProductos: [
                { id: 1, categoria: 1, nombre: 'Banano', unidad: '', precio: 0, imagen: '' },
                { id: 2, categoria: 1, nombre: 'Naranja', unidad: '', precio: 0, imagen: '' },
                { id: 3, categoria: 1, nombre: 'Limón', unidad: '', precio: 0, imagen: '' },
                { id: 4, categoria: 1, nombre: 'Guayaba', unidad: '', precio: 0, imagen: '' },
                { id: 5, categoria: 1, nombre: 'Mora', unidad: '', precio: 0, imagen: '' },
                { id: 6, categoria: 1, nombre: 'Fresa', unidad: '', precio: 0, imagen: '' },
                { id: 7, categoria: 1, nombre: 'Piña', unidad: '', precio: 0, imagen: '' },
                { id: 8, categoria: 1, nombre: 'Lulo', unidad: '', precio: 0, imagen: '' },
                { id: 9, categoria: 1, nombre: 'Mango', unidad: '', precio: 0, imagen: '' },
                { id: 10, categoria: 2, nombre: 'Pepino', unidad: '', precio: 0, imagen: '' },
                { id: 11, categoria: 2, nombre: 'Lechuga', unidad: '', precio: 0, imagen: '' },
                { id: 12, categoria: 2, nombre: 'Repollo', unidad: '', precio: 0, imagen: '' },
                { id: 13, categoria: 2, nombre: 'Batavia', unidad: '', precio: 0, imagen: '' },
                { id: 14, categoria: 2, nombre: 'Coliflor', unidad: '', precio: 0, imagen: '' },
                { id: 15, categoria: 2, nombre: 'Brócoli', unidad: '', precio: 0, imagen: '' },
                { id: 16, categoria: 2, nombre: 'Apio', unidad: '', precio: 0, imagen: '' },
                { id: 17, categoria: 2, nombre: 'Habichuela', unidad: '', precio: 0, imagen: '' },
                { id: 18, categoria: 2, nombre: 'Zanahoria', unidad: '', precio: 0, imagen: '' },
                { id: 19, categoria: 3, nombre: 'Papa Amarilla', unidad: '', precio: 0, imagen: '' },
                { id: 20, categoria: 3, nombre: 'Papa Guata', unidad: '', precio: 0, imagen: '' },
                { id: 21, categoria: 3, nombre: 'Papa Parda', unidad: '', precio: 0, imagen: '' },
                { id: 22, categoria: 3, nombre: 'Yuca', unidad: '', precio: 0, imagen: '' },
                { id: 23, categoria: 3, nombre: 'Arracacha', unidad: '', precio: 0, imagen: '' },
                { id: 24, categoria: 3, nombre: 'Gengibre', unidad: '', precio: 0, imagen: '' },
                { id: 25, categoria: 3, nombre: 'Ullucos', unidad: '', precio: 0, imagen: '' },
                { id: 26, categoria: 3, nombre: 'Remolacha', unidad: '', precio: 0, imagen: '' },
                { id: 27, categoria: 3, nombre: 'Cebolla', unidad: '', precio: 0, imagen: '' },
                { id: 28, categoria: 4, nombre: 'Arroz', unidad: '', precio: 0, imagen: '' },
                { id: 29, categoria: 4, nombre: 'Lentejas', unidad: '', precio: 0, imagen: '' },
                { id: 30, categoria: 4, nombre: 'Fríjol Cargamanto', unidad: '', precio: 0, imagen: '' },
                { id: 31, categoria: 4, nombre: 'Fríjol Negro', unidad: '', precio: 0, imagen: '' },
                { id: 32, categoria: 4, nombre: 'Fríjol Verde', unidad: '', precio: 0, imagen: '' },
                { id: 33, categoria: 4, nombre: 'Garbanzo', unidad: '', precio: 0, imagen: '' },
                { id: 34, categoria: 4, nombre: 'Blanquillo', unidad: '', precio: 0, imagen: '' },
                { id: 35, categoria: 4, nombre: 'Arveja', unidad: '', precio: 0, imagen: '' },
                { id: 36, categoria: 4, nombre: 'Maní', unidad: '', precio: 0, imagen: '' },
                { id: 37, categoria: 5, nombre: 'Caderita', unidad: '', precio: 0, imagen: '' },
                { id: 38, categoria: 5, nombre: 'Sobrebarriga', unidad: '', precio: 0, imagen: '' },
                { id: 39, categoria: 5, nombre: 'Falda', unidad: '', precio: 0, imagen: '' },
                { id: 40, categoria: 5, nombre: 'Costilla', unidad: '', precio: 0, imagen: '' },
                { id: 41, categoria: 5, nombre: 'Espaldilla', unidad: '', precio: 0, imagen: '' },
                { id: 42, categoria: 5, nombre: 'Lomo', unidad: '', precio: 0, imagen: '' },
                { id: 43, categoria: 5, nombre: 'Muchacho', unidad: '', precio: 0, imagen: '' },
                { id: 44, categoria: 5, nombre: 'Pepino', unidad: '', precio: 0, imagen: '' },
                { id: 45, categoria: 5, nombre: 'Bola Negra', unidad: '', precio: 0, imagen: '' },
                { id: 46, categoria: 6, nombre: 'Pollo', unidad: '', precio: 0, imagen: '' },
                { id: 47, categoria: 6, nombre: 'Pechuga', unidad: '', precio: 0, imagen: '' },
                { id: 48, categoria: 6, nombre: 'Muslo', unidad: '', precio: 0, imagen: '' },
                { id: 49, categoria: 6, nombre: 'Contramuslo', unidad: '', precio: 0, imagen: '' },
                { id: 50, categoria: 6, nombre: 'Alas', unidad: '', precio: 0, imagen: '' },
                { id: 51, categoria: 6, nombre: 'Corazones', unidad: '', precio: 0, imagen: '' },
                { id: 52, categoria: 6, nombre: 'Menudencias', unidad: '', precio: 0, imagen: '' },
                { id: 53, categoria: 6, nombre: 'Huevos AA', unidad: '', precio: 0, imagen: '' },
                { id: 54, categoria: 6, nombre: 'Huevos AAA', unidad: '', precio: 0, imagen: '' },
                { id: 55, categoria: 7, nombre: 'Tilapia', unidad: '', precio: 0, imagen: '' },
                { id: 56, categoria: 7, nombre: 'Corvina', unidad: '', precio: 0, imagen: '' },
                { id: 57, categoria: 7, nombre: 'Atún', unidad: '', precio: 0, imagen: '' },
                { id: 58, categoria: 7, nombre: 'Cachama', unidad: '', precio: 0, imagen: '' },
                { id: 59, categoria: 7, nombre: 'Trucha', unidad: '', precio: 0, imagen: '' },
                { id: 60, categoria: 7, nombre: 'Camarón', unidad: '', precio: 0, imagen: '' },
                { id: 61, categoria: 7, nombre: 'Bagre', unidad: '', precio: 0, imagen: '' },
                { id: 62, categoria: 7, nombre: 'Pargo rojo', unidad: '', precio: 0, imagen: '' },
                { id: 63, categoria: 7, nombre: 'Bocachico', unidad: '', precio: 0, imagen: '' },
                { id: 64, categoria: 8, nombre: 'Leche', unidad: '', precio: 0, imagen: '' },
                { id: 65, categoria: 8, nombre: 'Mantequilla', unidad: '', precio: 0, imagen: '' },
                { id: 66, categoria: 8, nombre: 'Queso Campesino', unidad: '', precio: 0, imagen: '' },
                { id: 67, categoria: 8, nombre: 'Queso Cuajada', unidad: '', precio: 0, imagen: '' },
                { id: 68, categoria: 8, nombre: 'Queso Costeño', unidad: '', precio: 0, imagen: '' },
                { id: 69, categoria: 8, nombre: 'Queso Pera', unidad: '', precio: 0, imagen: '' },
                { id: 70, categoria: 8, nombre: 'Crema de Leche', unidad: '', precio: 0, imagen: '' },
                { id: 71, categoria: 8, nombre: 'Yogur', unidad: '', precio: 0, imagen: '' },
                { id: 72, categoria: 8, nombre: 'Kumis', unidad: '', precio: 0, imagen: '' },
                { id: 73, categoria: 9, nombre: 'Café', unidad: '', precio: 0, imagen: '' },
                { id: 74, categoria: 9, nombre: 'Panela', unidad: '', precio: 0, imagen: '' },
                { id: 75, categoria: 9, nombre: 'Miel', unidad: '', precio: 0, imagen: '' },
                { id: 76, categoria: 9, nombre: 'Propóleo', unidad: '', precio: 0, imagen: '' },
                { id: 77, categoria: 9, nombre: 'Bocadillo', unidad: '', precio: 0, imagen: '' },
                { id: 78, categoria: 9, nombre: 'Arepas', unidad: '', precio: 0, imagen: '' },
                { id: 79, categoria: 9, nombre: 'Tortillas', unidad: '', precio: 0, imagen: '' },
                { id: 80, categoria: 9, nombre: 'Chocolate', unidad: '', precio: 0, imagen: '' },
                { id: 81, categoria: 9, nombre: 'Pulpas', unidad: '', precio: 0, imagen: '' }                
            ]
        }
    },
    created () {
        let idcat = parseInt( this.$route.params.categoria )
        this.categoria = this.categorias.find( fcat => fcat.id === idcat )
        this.productos = this.todosProductos.filter( fprod => fprod.categoria === idcat )
        console.log( this.productos )
    }
}
</script>