<template>
    <cabeza-pag/>
    <banner-sup :imagen="'banner-2-' + categoria.banner"/>
    <barra-utils/>
    <div class="row">
        <h3>Productos de {{ categoria.nombre }}</h3>
    </div>
    <div class="row items">
        <tarjetas-producto v-for="producto in productos" :key="producto.id" :nombre="producto.nombre" :imagen="producto.imagen" :id="producto.id"/> 
    </div>
    <pie-pagina/>
</template>
<script>
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
            categorias: [
                { id: 1, nombre: 'Frutas', banner: 'frutas.jpg'},
                { id: 2, nombre: 'Verduras', banner: 'verduras.jpg'},
                { id: 3, nombre: 'Legumbres', banner: 'legumbres.jpg'},
                { id: 4, nombre: 'Tuberculos', banner: 'tuberculos.jpg'},
                { id: 5, nombre: 'Lácteos', banner: 'lacteos.jpg'},
                { id: 6, nombre: 'Huevos', banner: 'huevos.jpg'},
                { id: 7, nombre: 'Carne, Pollo y Pescado', banner: 'carnes.jpg'},
                { id: 8, nombre: 'Otros', banner: 'otros.jpg'},
            ],
            todosProductos: [
                { id: 1, categoria: 1, nombre: 'Banano', unidad: '', precio: 0, imagen: '1_Banano.png' },
                { id: 2, categoria: 1, nombre: 'Durazno', unidad: '', precio: 0, imagen: '1_Durazno.png' },
                { id: 3, categoria: 1, nombre: 'Fresa', unidad: '', precio: 0, imagen: '1_Fresa.png' },
                { id: 4, categoria: 1, nombre: 'Guanabana', unidad: '', precio: 0, imagen: '1_Guanabana.png' },
                { id: 5, categoria: 1, nombre: 'Guayaba', unidad: '', precio: 0, imagen: '1_Guayaba.png' },
                { id: 6, categoria: 1, nombre: 'Limon', unidad: '', precio: 0, imagen: '1_Limon.png' },
                { id: 7, categoria: 1, nombre: 'Lulo', unidad: '', precio: 0, imagen: '1_Lulo.png' },
                { id: 8, categoria: 1, nombre: 'Mandarina', unidad: '', precio: 0, imagen: '1_Mandarina.png' },
                { id: 9, categoria: 1, nombre: 'Mango', unidad: '', precio: 0, imagen: '1_Mango.png' },
                { id: 10, categoria: 1, nombre: 'ManzanaR', unidad: '', precio: 0, imagen: '1_ManzanaR.png' },
                { id: 11, categoria: 1, nombre: 'ManzanaV', unidad: '', precio: 0, imagen: '1_ManzanaV.png' },
                { id: 12, categoria: 1, nombre: 'Melon', unidad: '', precio: 0, imagen: '1_Melon.png' },
                { id: 13, categoria: 1, nombre: 'Mora', unidad: '', precio: 0, imagen: '1_Mora.png' },
                { id: 14, categoria: 1, nombre: 'Naranja', unidad: '', precio: 0, imagen: '1_Naranja.png' },
                { id: 15, categoria: 1, nombre: 'Papaya', unidad: '', precio: 0, imagen: '1_Papaya.png' },
                { id: 16, categoria: 1, nombre: 'Pera', unidad: '', precio: 0, imagen: '1_Pera.png' },
                { id: 17, categoria: 1, nombre: 'Pina', unidad: '', precio: 0, imagen: '1_Pina.png' },
                { id: 18, categoria: 1, nombre: 'Quiwi', unidad: '', precio: 0, imagen: '1_Quiwi.png' },
                { id: 19, categoria: 1, nombre: 'Uva', unidad: '', precio: 0, imagen: '1_Uva.png' },
                { id: 20, categoria: 2, nombre: 'Acelga', unidad: '', precio: 0, imagen: '2_Acelga.png' },
                { id: 21, categoria: 2, nombre: 'Aguacate', unidad: '', precio: 0, imagen: '2_Aguacate.png' },
                { id: 22, categoria: 2, nombre: 'Apio', unidad: '', precio: 0, imagen: '2_Apio.png' },
                { id: 23, categoria: 2, nombre: 'Berenjena', unidad: '', precio: 0, imagen: '2_Berenjena.png' },
                { id: 24, categoria: 2, nombre: 'Brocoli', unidad: '', precio: 0, imagen: '2_Brocoli.png' },
                { id: 25, categoria: 2, nombre: 'Cebolla', unidad: '', precio: 0, imagen: '2_Cebolla.png' },
                { id: 26, categoria: 2, nombre: 'Cilantro', unidad: '', precio: 0, imagen: '2_Cilantro.png' },
                { id: 27, categoria: 2, nombre: 'Espinaca', unidad: '', precio: 0, imagen: '2_Espinaca.png' },
                { id: 28, categoria: 2, nombre: 'Habichuela', unidad: '', precio: 0, imagen: '2_Habichuela.png' },
                { id: 29, categoria: 2, nombre: 'Lehuga', unidad: '', precio: 0, imagen: '2_Lehuga.png' },
                { id: 30, categoria: 2, nombre: 'Pepino', unidad: '', precio: 0, imagen: '2_Pepino.png' },
                { id: 31, categoria: 2, nombre: 'Perejil', unidad: '', precio: 0, imagen: '2_Perejil.png' },
                { id: 32, categoria: 2, nombre: 'Pimenton', unidad: '', precio: 0, imagen: '2_Pimenton.png' },
                { id: 33, categoria: 2, nombre: 'Tomate', unidad: '', precio: 0, imagen: '2_Tomate.png' },
                { id: 34, categoria: 3, nombre: 'Arroz', unidad: '', precio: 0, imagen: '3_Arroz.png' },
                { id: 35, categoria: 3, nombre: 'Arveja', unidad: '', precio: 0, imagen: '3_Arveja.png' },
                { id: 36, categoria: 3, nombre: 'Avena', unidad: '', precio: 0, imagen: '3_Avena.png' },
                { id: 37, categoria: 3, nombre: 'Cafe', unidad: '', precio: 0, imagen: '3_Cafe.png' },
                { id: 38, categoria: 3, nombre: 'Frijol', unidad: '', precio: 0, imagen: '3_Frijol.png' },
                { id: 39, categoria: 3, nombre: 'Frijol Blanco', unidad: '', precio: 0, imagen: '3_Frijol_Blanco.png' },
                { id: 40, categoria: 3, nombre: 'Frijol Negro', unidad: '', precio: 0, imagen: '3_Frijol_Negro.png' },
                { id: 41, categoria: 3, nombre: 'Garbanzo', unidad: '', precio: 0, imagen: '3_Garbanzo.png' },
                { id: 42, categoria: 3, nombre: 'Lenteja', unidad: '', precio: 0, imagen: '3_Lenteja.png' },
                { id: 43, categoria: 3, nombre: 'Maiz', unidad: '', precio: 0, imagen: '3_Maiz.png' },
                { id: 44, categoria: 3, nombre: 'Mazorca', unidad: '', precio: 0, imagen: '3_Mazorca.png' },
                { id: 45, categoria: 4, nombre: 'Ajo', unidad: '', precio: 0, imagen: '4_Ajo.png' },
                { id: 46, categoria: 4, nombre: 'Arracacha', unidad: '', precio: 0, imagen: '4_Arracacha.png' },
                { id: 47, categoria: 4, nombre: 'Jengibre', unidad: '', precio: 0, imagen: '4_Jengibre.png' },
                { id: 48, categoria: 4, nombre: 'Papa criolla', unidad: '', precio: 0, imagen: '4_Papa_criolla.png' },
                { id: 49, categoria: 4, nombre: 'Papa Pastusa', unidad: '', precio: 0, imagen: '4_Papa_Pastusa.png' },
                { id: 50, categoria: 4, nombre: 'Papa Sabanera', unidad: '', precio: 0, imagen: '4_Papa_Sabanera.png' },
                { id: 51, categoria: 4, nombre: 'Platano', unidad: '', precio: 0, imagen: '4_Platano.png' },
                { id: 52, categoria: 4, nombre: 'Remolacha', unidad: '', precio: 0, imagen: '4_Remolacha.png' },
                { id: 53, categoria: 4, nombre: 'Yuca', unidad: '', precio: 0, imagen: '4_Yuca.png' },
                { id: 54, categoria: 4, nombre: 'Zanahoria', unidad: '', precio: 0, imagen: '4_Zanahoria.png' },
                { id: 55, categoria: 5, nombre: 'Leche', unidad: '', precio: 0, imagen: '5_Leche.png' },
                { id: 56, categoria: 5, nombre: 'Mantequilla', unidad: '', precio: 0, imagen: '5_Mantequilla.png' },
                { id: 57, categoria: 5, nombre: 'Quajada', unidad: '', precio: 0, imagen: '5_Quajada.png' },
                { id: 58, categoria: 5, nombre: 'Queso Campesino', unidad: '', precio: 0, imagen: '5_Queso_Campesino.png' },
                { id: 59, categoria: 5, nombre: 'Queso Cheedar', unidad: '', precio: 0, imagen: '5_Queso_Cheedar.png' },
                { id: 60, categoria: 5, nombre: 'Queso Doble crema', unidad: '', precio: 0, imagen: '5_Queso_Doble_crema.png' },
                { id: 61, categoria: 5, nombre: 'Yogurt Natural', unidad: '', precio: 0, imagen: '5_Yogurt_Natural.png' },
                { id: 62, categoria: 6, nombre: 'HuevosAAA X30', unidad: '', precio: 0, imagen: '6_HuevosAAA_X30.png' },
                { id: 63, categoria: 6, nombre: 'HuevosAA X12', unidad: '', precio: 0, imagen: '6_HuevosAA_X12.png' },
                { id: 64, categoria: 6, nombre: 'HuevosAA X30', unidad: '', precio: 0, imagen: '6_HuevosAA_X30.png' },
                { id: 65, categoria: 6, nombre: 'HuevosA X12', unidad: '', precio: 0, imagen: '6_HuevosA_X12.png' },
                { id: 66, categoria: 6, nombre: 'HuevosA X30', unidad: '', precio: 0, imagen: '6_HuevosA_X30.png' },
                { id: 67, categoria: 7, nombre: 'Alas Pollo', unidad: '', precio: 0, imagen: '7_Alas_Pollo.png' },
                { id: 68, categoria: 7, nombre: 'Bagre', unidad: '', precio: 0, imagen: '7_Bagre.png' },
                { id: 69, categoria: 7, nombre: 'Carne Cerdo', unidad: '', precio: 0, imagen: '7_Carne_Cerdo.png' },
                { id: 70, categoria: 7, nombre: 'Carne Res', unidad: '', precio: 0, imagen: '7_Carne_Res.png' },
                { id: 71, categoria: 7, nombre: 'Chuleta Cerdo', unidad: '', precio: 0, imagen: '7_Chuleta_Cerdo.png' },
                { id: 72, categoria: 7, nombre: 'Colombinas Pollo', unidad: '', precio: 0, imagen: '7_Colombinas_Pollo.png' },
                { id: 73, categoria: 7, nombre: 'Costilla Cerdo', unidad: '', precio: 0, imagen: '7_Costilla_Cerdo.png' },
                { id: 74, categoria: 7, nombre: 'Mojarra', unidad: '', precio: 0, imagen: '7_Mojarra.png' },
                { id: 75, categoria: 7, nombre: 'Pechuga Pollo', unidad: '', precio: 0, imagen: '7_Pechuga_Pollo.png' },
                { id: 76, categoria: 7, nombre: 'Picuda', unidad: '', precio: 0, imagen: '7_Picuda.png' },
                { id: 77, categoria: 7, nombre: 'Pollo', unidad: '', precio: 0, imagen: '7_Pollo.png' },
                { id: 78, categoria: 7, nombre: 'Solomillo Res', unidad: '', precio: 0, imagen: '7_Solomillo_Res.png' },
                { id: 79, categoria: 7, nombre: 'Tilapia', unidad: '', precio: 0, imagen: '7_Tilapia.png' },
                { id: 80, categoria: 8, nombre: 'Aceite Oliva', unidad: '', precio: 0, imagen: '8_Aceite_Oliva.png' },
                { id: 81, categoria: 8, nombre: 'Azucar', unidad: '', precio: 0, imagen: '8_Azucar.png' },
                { id: 82, categoria: 8, nombre: 'Chocolate', unidad: '', precio: 0, imagen: '8_Chocolate.png' },
                { id: 83, categoria: 8, nombre: 'Miel', unidad: '', precio: 0, imagen: '8_Miel.png' },
                { id: 84, categoria: 8, nombre: 'Panela', unidad: '', precio: 0, imagen: '8_Panela.png' }            ]
        }
    },
    created () {
        let idcat = parseInt( this.$route.params.categoria )
        this.categoria = this.categorias.find( fcat => fcat.id === idcat )
        this.productos = this.todosProductos.filter( fprod => fprod.categoria === idcat )
    }
}
</script>
<style scoped>
.items{
  justify-content: space-around;
}
</style>
