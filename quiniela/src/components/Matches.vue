<template>
  <div>
    <app-nav></app-nav>
    <h3 class="text-center">Tabla de Predicciones</h3>
    <hr/>

    <!--<div class="row" v-for="match in matches">-->
      <!--<span class="match-time">{{match.date}} {{match.time}}</span>-->
      <!--<span>{{match.local_team}}</span>-->
      <!--<span class="score"><input type="number"> - <input type="number"> </span>-->
      <!--<span>{{match.visitor_team}}</span>-->
      <!--<span class="location">{{match.location}}</span>-->
    <!--</div>-->

    <paypal v-if="!premium"></paypal>
    <button v-if="premium" class="btn btn-success">Actualizar Quiniela </button>

  </div>
</template>

<script>
  import AppNav from './AppNav';
  import { isLoggedIn } from '../../utils/auth';
  import { getMatches } from '../../utils/matches-api';
  import Paypal from './Paypal'

  export default {
    name: 'Matches',
    components: {
      AppNav,
      'paypal': Paypal
    },
    data() {
      return {
        matches: '',
        premium: localStorage.getItem('has_paid')
      };
    },

    methods: {
      isLoggedIn() {
        return isLoggedIn();
      },
      getMatches() {
        getMatches().then((matches) => {
          this.matches = matches;
        });
      },
    },

    mounted() {
      this.getMatches();
    },
  };
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
