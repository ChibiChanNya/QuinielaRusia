<template>
  <b-row class="justify-content-md-center">
    <b-col cols="6">
      <div v-if="errors && errors.length">
        <div v-for="error of errors">
          <b-alert show>{{error.message}}</b-alert>
        </div>
      </div>
      <b-form @submit="onSubmit">
        <b-form-group id="fieldsetHorizontal"
                      horizontal
                      :label-cols="4"
                      breakpoint="md"
                      label="Enter Username">
          <b-form-input id="username" v-model.trim="login.username"></b-form-input>
        </b-form-group>
        <b-form-group id="fieldsetHorizontal"
                      horizontal
                      :label-cols="4"
                      breakpoint="md"
                      label="Enter Password">
          <b-form-input type="password" id="password" v-model.trim="login.password"></b-form-input>
        </b-form-group>
        <b-button type="submit" variant="primary">Login</b-button>
        <b-button type="button" variant="success" @click.stop="register()">Register</b-button>
        <b-button type="button" variant="success" @click.stop="social_login('google')">Gooogle</b-button>

      </b-form>
    </b-col>
  </b-row>
</template>

<script>

  import axios from 'axios'
  import {start_auth} from "../../utils/auth";

  export default {
    name: 'Login',
    data () {
      return {
        login: {},
        errors: []
      }
    },
    methods: {
      onSubmit (evt) {
        evt.preventDefault();
        axios.post(`http://localhost:3000/api/auth/login/`, this.login)
          .then(response => {
            localStorage.setItem('jwtToken', response.data.token);
            this.$router.push({
              name: '/'
            })
          })
          .catch(e => {
            console.log(e);
            this.errors.push(e)
          })
      },

      register () {
        this.$router.push({
          name: 'Register'
        })
      },

      social_login (provider){
        let access_token;
        window.authenticateCallback = function(token) {
          access_token = token;
          alert(access_token);
        };
        window.open(start_auth(provider));
      }
    }
  }


  function onSignIn(googleUser) {
    var profile = googleUser.getBasicProfile();
    console.log('ID: ' + profile.getId()); // Do not send to your backend! Use an ID token instead.
    console.log('Name: ' + profile.getName());
    console.log('Image URL: ' + profile.getImageUrl());
    console.log('Email: ' + profile.getEmail()); // This is null if the 'email' scope is not present.
  }

</script>
