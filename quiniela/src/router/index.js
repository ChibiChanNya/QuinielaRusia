import Vue from 'vue';
import Router from 'vue-router';
import PrivateBattles from '@/components/privateBattles';
import PublicBattles from '@/components/publicBattles';
import Matches from '@/components/matches';
import Login from '@/components/Login'
import HelloWorld from '@/components/HelloWorld'


Vue.use(Router);

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'PublicBattles',
      component: PublicBattles,
    },
    {
      path: '/private-battles',
      name: 'PrivateBattles',
      component: PrivateBattles,
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
      name: 'authenticated',
      component: HelloWorld
    },
  ],
});
