<template>
  <footer>
    <div class="row">
      <router-link to="/"><img style="max-height: 150px" src="../assets/Footer/logo_quiniela.png"></router-link>
    </div>
    <div class="row">
      <a href="https://bindiva.com" target="_blank"><img class="img-fluid" src="../assets/Footer/logo_bindiva.png"></a>
      <a href="https://futhub.com" target="_blank"><img class="img-fluid" src="../assets/Footer/logo_futhub.png"></a>
    </div>
    <div class="links">
      <router-link class="btn btn-link btn-sm" to="/terms">Términos y Condiciones</router-link>
      <router-link class="btn btn-link btn-sm" to="/privacy-policy">Aviso de Privacidad</router-link>
      <button class="btn btn-link log" v-show="isLoggedIn()" @click="handleLogout()">Cerrar Sesión </button>
      <button class="btn btn-link log" v-show="!isLoggedIn()" @click="handleLogin()">Iniciar Sesión</button>
    </div>
  </footer>
</template>

<script>
  import { isLoggedIn, login, logout } from '../../utils/auth';

  export default {
    name: "Footer",
    methods: {
      handleLogin() {
        login();
      },
      handleLogout() {
        logout();
      },
      isLoggedIn() {
        return isLoggedIn();
      },
    }
  }
</script>

<style scoped>
  footer{
    background-color: white;
    text-align: center;
    margin-top: 30px;
    float: bottom;
  }
  footer img{
    max-height: 80px;
    /*max-width: 200px;*/
    height: auto;
    margin: 0 auto 0 auto;
  }

  .btn.btn-link{
    font-size: 1.2em;
  }

  .links a, .links .btn-link{
    color: #003973;
  }

  footer .row{
    justify-content: space-around;
  }
</style>
