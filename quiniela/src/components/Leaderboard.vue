<template>
  <div id="leaderboard">
    <div class="header">
      <a href="https://bindiva.com"  style="top:3px" target="_blank"><img  src="../assets/Interna/logo-bindiva-blanco.png"></a>
      <router-link to="/"><img class="central-logo"  src="../assets/Interna/logo-blanco.png"></router-link>
      <a href="https://futhub.com" target="_blank"><img  src="../assets/Interna/logo-futhub-blanco.png"></a>
    </div>

    <div style="margin: 2em">
      <h1 class="russia-badge instructions-badge"><span>RESULTADOS</span></h1>
    </div>
    <h1>Tabla de puntos y posiciones</h1>
    <h3>Esta tabla se actualizará cada día con los resultados de la quiniela</h3>
    <div id="table-wrapper" style="overflow-x:auto;">
      <table>
        <tr>
          <th>NOMBRE</th>
          <th>CORREO</th>
          <th>PUNTOS</th>
        </tr>
        <tr v-for="user in users">
          <td>{{user.profile.display_name}}</td>
          <td>{{ user.auth.email}}</td>
          <td>{{user.points}}</td>
        </tr>
      </table>
    </div>


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
        users.forEach(function(user){
          if(!user.auth){
            user.auth = {};
            user.auth.email = "";
          }
        });
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

  tr>td:first-child{
    max-width: 200px;
  }

  th:first-child{
    border-top-left-radius: 6px;
    /*border-bottom-left-radius: 6px;*/
  }

  th:last-child{
    border-top-right-radius: 6px;
    /*border-bottom-right-radius: 6px;*/
  }

  table{
    margin: 50px auto;
  }


  tr th{
    color: white;
    background: rgb(175,37,41);
    padding: 6px 20px;
    text-align: center;
  }

  @media(max-width: 1024px){
    tr th{
      padding: 6px;
    }
    td{
      max-width: 150px;
      font-size: 0.7em;
      word-wrap:break-word;
    }
  }

  tr{
    margin: 15px ;
    font-size: 1.5em;
    border-bottom: 1px solid rgba(255,255,255,0.4);
  }
  td{
    padding: 10px 10px;
    border-bottom: 2px solid rgba(136, 136, 136, 0.3);
    color: rgb(70, 70, 70);
  }
</style>
