<template>
    <header>
        <div class="row cabecera">
            <div class="col-lg-3">
                <router-link to="/">Ventas Agro (logo)</router-link>
            </div>
            <div class="col-lg-6"></div>
            <div class="col-lg-1 div-tomate">
                <img alt="Ventas Agro logo" src="../assets/ico-tomate.png" class="tomate">
            </div>
            <div class="col-lg-2 ader">
                <router-link to="/login">Ingreso</router-link>&nbsp;|&nbsp;
                <router-link to="/registro">Registro</router-link>
            </div>
        </div>
    </header>
</template>
<style scoped>
.cabecera {
    height: 60px;
    align-content: center;
}
.div-tomate {
    text-align: center;
}
.tomate {
    height: 36px;
    width: 36px;
}
</style>