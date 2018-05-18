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
    printToken(){
      let token=this.$route.query.token;
      let user_id =this.$route.query.user_id;
      let has_paid = this.$route.query.has_paid;
      window.opener.authenticateCallback(token, user_id, has_paid);
      window.close();
    }
  },
  mounted() {
    this.printToken();
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
