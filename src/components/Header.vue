<template>
    <header>
        <div class="row cabecera">
            <div class="col-lg-3">
                <router-link to="/"><img v-bind:src="require('@/assets/logo_delcampo_c.svg')" alt="" class="logo"></router-link>
            </div>
            <div class="col-lg-6"></div>
            <div class="col-lg-1 div-tomate">
                <img alt="Ventas Agro logo" src="../assets/ico-tomate.png" class="tomate">
            </div>
            <div class="col-lg-2 ader">
                <span v-if="nombreCliente==='nologin'"><router-link to="/login">Ingreso</router-link></span>
                <span v-if="nombreCliente!='nologin'">{{nombreCliente}}</span>
                &nbsp;|&nbsp;
                <router-link to="/registro">Registro</router-link>
            </div>
        </div>
    </header>
</template>
<script>
export default {
    name: 'Header',
    props: {
        nombreCliente: String
    },
    created () {
        console.log('Header cliente:'+this.nombreCliente)
    }
}
</script>
<style scoped>
.cabecera {
    height: 80px;
    align-content: center;
}
.div-tomate {
    text-align: center;
}
.tomate {
    height: 36px;
    width: 36px;
}
.logo{
    width: 250px;
}
</style>