import Vue from 'vue'
import Router from 'vue-router'
import principal from '@/components/principal'
import Perfil from '@/components/Perfil'
import LoginRegistro from '@/components/LoginRegistro'
Vue.use(Router)
export default new Router({
  routes: [
    {
      path: '/',
      name: 'LoginRegistro',
      component: LoginRegistro
    },
    {
      path: '/principal',
      name: 'principal',
      component: principal
    },
    {
      path: '/Perfil',
      name: 'Perfil',
      component: Perfil
    },
  ]
})
