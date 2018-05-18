<template>
  <div class="home">
    <!--<app-nav></app-nav>-->

    <img class="logo center-block" src="../assets/Home/logo_blanco.png"/>

    <div class="content">
      <h1>Vive al máximo la copa mundial Russia 2018</h1>

      <h1>Participa y gana con la primera quiniela digital que BINDIVA y FUTHUB crearon para ti</h1>

      <router-link class="btn btn-join btn-lg" to="/matches"><span>INSCRÍBETE AHORA</span></router-link>

      <p>Inscripción: $500.00 MXN por participante</p>
      <p>80 participantes garantizados </p>
      <p>$32,000.00 MXN en premios<span class="asterisk">&#x2731;</span></p>
      <p>Se premiará al 20% de los ganadores<span class="asterisk">&#x2731;</span></p>
      <br>
      <p>Inscripciones abiertas hasta el 13 de junio a las 23:59:59</p>

      <h3>Premios en porcentaje del total acumulado:</h3>
      <ul>
        <li>1er Lugar: 40%</li>
        <li>2do Lugar: 20%</li>
        <li>3er Lugar: 12.5%</li>
        <li>4to Lugar: 7.5%</li>
        <li>5to Lugar en adelante: Se premiará acorde al número de participantes</li>
      </ul>
      <p><span class="asterisk">&#x2731;</span>Los premios se calcularán con base al número de participantes y se publicarán una vez cerrados los registros.</p>

      <router-link class="btn btn-join btn-lg" to="/matches">INSCRÍBETE AHORA</router-link>

      <p><sub>Éste es un evento privado, la participación esta sujeta a invitación</sub></p>

    </div>

    <Footer></Footer>
  </div>
</template>

<script>
  import Footer from './Footer';
  import { isLoggedIn } from '../../utils/auth';

  export default {
    name: 'Home',
    components: {
      Footer
    },
    data() {
      return {
      };
    },
    methods: {
      isLoggedIn() {
        return isLoggedIn();
      },

    },
    mounted() {
    },
  };
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

  .home{
    background-image: url("../assets/Home/bg-home.png");
    background-size: cover;
    color: white;
    font-size: 1.2em;
  }

  .home .content{
    padding: 0px 15px;
  }

  p{
    margin-bottom: 0px;
  }

  img.logo{
    max-width: 200px;
  }

  .btn.btn-join{
    font-size: 2em;
    color: white;
    background-image: url("../assets/Home/btn-join.png");
    background-size: contain;
    background-repeat: no-repeat;
    padding: 0px 20px 0px 20px;
  }

  .asterisk{
    font-size: 1em;
  }

  a{
    text-shadow: 0 0 3px black;
  }


</style>
