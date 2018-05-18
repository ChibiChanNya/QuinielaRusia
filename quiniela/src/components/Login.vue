<template>
  <div>
    <div class="login">
      <div class="screen">
        <div class="row justify-content-md-center">
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
            <img src="http://clubdefundraising.com/wp-content/uploads/2016/04/facebook-logo_small_sw.png"
                 class="fb-icon">
            <span class="label buttonText">Iniciar Sesión con Facebook</span>
          </b-button>
        </div>
      </div>

      <Footer style="position:absolute;width: 100%;bottom: 0;"></Footer>
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
        axios.post(`http://quinielasports.com/api/auth/login/`, this.login)
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
        let access_token;
        window.authenticateCallback = function (token, user_id, has_paid) {
          console.log("Got this data".token, user_id, has_paid);
          access_token = token;
          localStorage.setItem('jwtToken', access_token);
          localStorage.setItem('user_id', user_id);
          localStorage.setItem('has_paid', has_paid);

          document.location.href = '/matches'
        };
        window.open(start_auth(provider));
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

  #googleBtn {
    display: inline-block;
    background: white;
    color: #444;
    border-radius: 5px;
    border: thin solid #f1f1f1;
    box-shadow: 1px 1px 1px grey;
    white-space: nowrap;
    min-width: 300px;
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
    min-width: 300px;
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
    background: url('https://google-developers.appspot.com/identity/sign-in/g-normal.png') transparent 5px 50% no-repeat;
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
    font-size: 3em;
  }
  .btn-group-lg{
    margin-top: 50px;
  }

  @media (min-width: 700px) {
    .screen{
      min-height: 600px;
    }
  }
  .screen{
    min-height: 300px;
  }



</style>
