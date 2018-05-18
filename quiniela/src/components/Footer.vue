<template>
  <footer>
    <!--<img src="../assets/Footer/separador.png">-->
    <div class="row">
      <img style="max-height: 150px" src="../assets/Footer/logo_quiniela.png">
    </div>
    <div class="row">
      <img class="img-fluid" src="../assets/Footer/logo_bindiva.png">
      <img class="img-fluid" src="../assets/Footer/logo_futhub.png">
    </div>
    <div>
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
    max-width: 200px;
    height: auto;
    margin: 0 auto 0 auto;
  }

</style>
