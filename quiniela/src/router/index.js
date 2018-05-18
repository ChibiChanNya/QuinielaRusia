import Vue from 'vue';
import Router from 'vue-router';
import Matches from '@/components/matches';
import Login from '@/components/Login'
import Authenticated from '@/components/Authenticated'
import Home from '@/components/Home'
import Privacy from '@/components/Privacy'
import Terms from '@/components/Terms'

Vue.use(Router);

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Quiniela',
      component: Home,
    },
    {
      path: '/matches',
      name: 'Quiniela',
      component: Matches,
    },
    {
      path: '/login',
      name: 'Iniciar Sesión',
      component: Login
    },
    {
      path: '/authenticated',
      name: 'Autenticado',
      component: Authenticated
    },
    {
      path: '/privacy-policy',
      name: 'Política de Privacidad',
      component: Privacy
    },
    {
      path: '/terms',
      name: 'Términos y Condiciones',
      component: Terms
    },
  ],

  
});
