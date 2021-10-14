<template>
    <footer>
        <div class="row pie-pag">
            <div class="col-lg-2">
                <img v-bind:src="require('@/assets/logo_delcampo_b.svg')" alt="" class="logo">
                <!-- <span style="background-color: #DDE11D;">&nbsp;Logo&nbsp;</span> -->
            </div>
            <div class="col-lg-8 reservados">
                © Todos los derechos reservados 2021
            </div>
            <div class="col-lg-2 pqrs">
                PQRS
            </div>
        </div>
    </footer>
</template>
<style>
.pie-pag {
    height: 60px;
    background-color: #586934;
    align-content: center;
}
.reservados {
    font-weight: 100 !important;
    color: #FFF;
}
.pqrs {
    font-size: 20pt;
    font-weight: bold;
    color: #FFF;
    text-align: center;
}
.logo{
    width: 150px;
}
</style>
