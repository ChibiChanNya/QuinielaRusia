<template>
  <div id="leaderboard">
    <div class="header">
      <a href="https://bindiva.com"  style="top:3px" target="_blank"><img  src="../assets/Interna/logo-bindiva-blanco.png"></a>
      <router-link to="/"><img class="central-logo"  src="../assets/Interna/logo-blanco.png"></router-link>
      <a href="https://futhub.com" target="_blank"><img  src="../assets/Interna/logo-futhub-blanco.png"></a>
    </div>

    <div style="margin: 2em">
      <h1 class="russia-badge instructions-badge"><span>Resultados</span></h1>
    </div>
    <table>
      <tr>
        <th>Nombre</th>
        <th>Correo</th>
        <th>Puntos</th>
      </tr>
      <tr v-for="user in users">
        <td>{{user.profile.display_name}}</td>
        <td>{{user.auth.email}}</td>
        <td>{{user.points}}</td>
      </tr>
    </table>

    <img src="../assets/Footer/separador.png" style="max-width: 100vw">
    <Footer style="margin-top: 0px"></Footer>
  </div>

</template>

<script>

  import {getUsers} from '../../utils/matches-api';
  import Footer from './Footer'

  export default {
    name: "Leaderboard",

    data() {
      return {
        users: [],
      }
    },
    components:{Footer},

    methods: {},

    async created() {
      getUsers().then(users => {
        console.log(users);
        this.users = users;
      })
    }
  }
</script>

<style scoped>
  #leaderboard {
    background-image: url("../assets/Home/bg-white.png");
    background-size: contain;
  }

  .header{

  }
  .header img {
    max-width: 80px;
  }
  .header img.central-logo{
    margin: 0 20px;
  }

  @media(min-width: 900px){
    .header img{
      max-width: 150px;
    }

    .header img.central-logo{
      margin: 0 10vw;
    }
  }

  tr{
    margin: 15px ;
    font-size: 1.5em;
  }
  td{
    padding: 0 10px;
  }
</style>
