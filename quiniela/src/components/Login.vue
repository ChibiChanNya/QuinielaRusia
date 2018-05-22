<template>
  <div>
    <div class="login">
      <div class="screen">
        <div class="header-blank">
          <a href="https://bindiva.com" style="top:3px" target="_blank"><img  src="../assets/Interna/logo-bindiva-blanco.png"></a>
          <router-link to="/"><img class="central-logo" src="../assets/Interna/logo-blanco.png"></router-link>
          <a href="https://futhub.com" target="_blank"><img  src="../assets/Interna/logo-futhub-blanco.png"></a>
        </div>
        <div class="container">
          <h1>Iniciar Sesión</h1>
        </div>

        <div class="btn-group-lg center-block">
          <b-button type="button" id="googleBtn" @click.stop="social_login('google')">
            <span class="g-icon"></span>
            <span class="label buttonText">Iniciar Sesión con Google</span>
          </b-button>
          <br>
          <br>
          <b-button type="button" id="facebookBtn" variant="success" @click.stop="social_login('facebook')">
            <img src="../assets/Home/fb-logo.png"
                 class="fb-icon">
            <span class="label buttonText">Iniciar Sesión con Facebook</span>
          </b-button>
        </div>
      </div>

      <Footer style=""></Footer>
    </div>
  </div>

</template>

<script>

  import axios from 'axios'
  import {start_auth} from "../../utils/auth";
  import Footer from './Footer';

  export default {
    name: 'Login',
    components:{
      Footer
    },

    data() {
      return {
        login: {},
        errors: []
      }
    },
    methods: {
      onSubmit(evt) {
        evt.preventDefault();
        axios.post(process.env.SERVER_URL+`/api/auth/login/`, this.login)
          .then(response => {
            localStorage.setItem('jwtToken', response.data.token);
            this.$router.push({
              name: '/matches'
            })
          })
          .catch(e => {
            console.log(e);
            this.errors.push(e)
          })
      },

      social_login(provider) {
        document.location.href = start_auth(provider);
      },

    },
  }

</script>
<style scoped>

  .login{
    background-image: url("../assets/Home/bg-home.png");
    background-size: cover;
    color: white;
    min-height: 100vh;
  }

  .screen{
    min-height: 60vh;
  }

  #googleBtn {
    display: inline-block;
    background: white;
    color: #444;
    border-radius: 5px;
    border: thin solid #f1f1f1;
    box-shadow: 1px 1px 1px grey;
    white-space: nowrap;
    max-width: 300px;
  }

  #googleBtn span.buttonText {
    color: #444;
  }

  #facebookBtn {
    display: inline-block;
    background: #3c5a99;
    color: #fff;
    border-radius: 5px;
    border: thin solid #f5f5f5;
    box-shadow: 1px 1px 1px grey;
    white-space: nowrap;
    max-width: 300px;
  }

  span.label {
    font-family: serif;
    font-weight: normal;
  }

  img.fb-icon {
    display: inline-block;
    vertical-align: middle;
    width: 32px;
    height: 32px;
  }

  span.g-icon {
    background: url('../assets/Home/g-logo.png') transparent 5px 50% no-repeat;
    display: inline-block;
    vertical-align: middle;
    width: 42px;
    height: 42px;
  }

  span.buttonText {
    display: inline-block;
    vertical-align: middle;
    padding-left: 12px;
    padding-right: 12px;
    font-size: 14px;
    font-weight: bold;
    /* Use the Roboto font that is loaded in the <head> */
    font-family: 'Roboto', sans-serif;
  }

  h1{
    margin-top: 50px;
    font-size: 2.5em;
  }
  .btn-group-lg{
    margin-top: 50px;
  }

  @media (min-width: 700px) {
    .screen{
      /*min-height: 600px;*/
    }
    .footer{
      position:absolute;width: 100%;bottom: 0;
    }

    #googleBtn{
      min-width: 300px;
      max-width: none;
    }

    #facebookBtn{
      min-width: 300px;
      max-width:none;
    }
  }

  .header-blank img {
    max-width: 80px;
  }
  .header-blank img.central-logo{
    margin: 0 20px;
  }

  @media(min-width: 900px){
    .header-blank img{
      max-width: 150px;
    }

    .header-blank img.central-logo{
      margin: 0 10vw;
    }
  }



</style>
