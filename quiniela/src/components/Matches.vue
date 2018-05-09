<template>
  <div>
    <app-nav></app-nav>
    <h3 class="text-center">Tabla de Predicciones</h3>
    <hr/>

    <div class="row" v-for="match in matches">
      <span class="match-time">{{match.date}} {{match.time}}</span>
      <span>{{match.local_team}}</span>
      <span class="score"><input type="number"> - <input type="number"> </span>
      <span>{{match.visitor_team}}</span>
      <span class="location">{{match.location}}</span>
    </div>

    <div class="col-sm-12">
      <div class="jumbotron text-center">
        <h2>View Public Startup Battles</h2>
        <router-link class="btn btn-lg btn-success" to="/"> Public Startup Battles </router-link>
      </div>
    </div>
  </div>
</template>

<script>
  import AppNav from './AppNav';
  import { isLoggedIn } from '../../utils/auth';
  import { getMatches } from '../../utils/matches-api';

  export default {
    name: 'Matches',
    components: {
      AppNav,
    },
    data() {
      return {
        matches: '',
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
