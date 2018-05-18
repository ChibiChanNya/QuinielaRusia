import Vue from 'vue';
import Router from 'vue-router';
import Matches from '@/components/Matches';
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
      name: 'Home',
      component: Home,
    },
    {
      path: '/matches',
      name: 'Matches',
      component: Matches,
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path: '/authenticated',
      name: 'Authenticated',
      component: Authenticated
    },
    {
      path: '/privacy-policy',
      name: 'Privacy',
      component: Privacy
    },
    {
      path: '/terms',
      name: 'Terms',
      component: Terms
    },
  ],


});
