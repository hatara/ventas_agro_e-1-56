import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Login from '../views/Login.vue'
import Registro from '../views/Registro.vue'
import Productos from '../views/Productos.vue'
import AuxTest from '../views/AuxTest.vue'
import NotFound from '../views/NotFound.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/login',
    name: 'Login',
    component: Login
  },
  {
    path: '/registro',
    name: 'Registro',
    component: Registro
  },
  {
    path: '/productos/:categoria',
    name: 'Productos',
    component: Productos,
    props: true
  },
  {
    path: '/aux',
    name: 'AuxTest',
    component: AuxTest
  },
  {
    path: '/:catchAll(.*)',
    name: 'NoExiste',
    component: NotFound
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
