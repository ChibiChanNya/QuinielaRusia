<template>
  <div class="hello">
    <h1>Autenticación exitosa</h1>
  </div>
</template>

<script>
export default {
  name: 'Authenticated',
  data () {
    return {
    }
  },
  methods:{
    authenticate(){
      let token=this.$route.query.token;
      let user_id =this.$route.query.user_id;
      let has_paid = this.$route.query.has_paid;
      localStorage.setItem('jwtToken', token);
      localStorage.setItem('user_id', user_id);
      localStorage.setItem('has_paid', has_paid);
      document.location.href = '/matches'
    }
  },
  mounted() {

    fbq('track', 'CompleteRegistration', {
      content_name: 'User Logged in',
      status: 'Complete'
    });


    this.authenticate();
  },
}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
