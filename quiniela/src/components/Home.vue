<template>
  <div class="home">
    <!--<app-nav></app-nav>-->

    <img class="logo center-block img-fluid" src="../assets/Home/logo_blanco.png"/>

    <div class="content">
      <h1>Vive al máximo la copa mundial Russia 2018</h1>

      <h1>Participa y gana con la primera quiniela digital que BINDIVA y FUTHUB crearon para ti</h1>

      <router-link class="btn btn-join" to="/matches"><span>INSCRÍBETE AHORA</span></router-link>

      <p>Inscripción: $500.00 MXN por participante</p>
      <p>Inscripciones abiertas hasta el 13 de junio a las 23:59:59</p>
      <p>Premio mínimo garantizado a repartir: $32,000.00 MXN<span class="asterisk">&#x2731;</span></p>
      <br>
      <h1>¡Aún estás a tiempo, inscríbete!</h1>

      <Countdown style="margin: 30px 0" end="June 14, 2018"></Countdown>

      <h3>Premios en porcentaje del total acumulado:</h3>
      <p>Se premiará al 20% de los ganadores</p>
      <ul>
        <li>1er Lugar: 40%</li>
        <li>2do Lugar: 20%</li>
        <li>3er Lugar: 12.5%</li>
        <li>4to Lugar: 7.5%</li>
        <li>5to Lugar en adelante: Se premiará acorde al número de participantes</li>
      </ul>
      <p><span class="asterisk">&#x2731;</span>Los premios se calcularán con base al número de participantes y se publicarán una vez cerrados los registros</p>

      <router-link class="btn btn-join" to="/matches">INSCRÍBETE AHORA</router-link>

      <p><sub>Este es un evento privado, la participación está sujeta a invitación</sub></p>

    </div>

    <Footer></Footer>
  </div>
</template>

<script>
  import Footer from './Footer';
  import { isLoggedIn } from '../../utils/auth';
  import Countdown from './Countdown'

  export default {
    name: 'Home',
    components: {
      Footer,
      Countdown
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
      fbq('track', 'ViewContent', {
        content_name: 'Landing Page',
      });
    },
  };
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

  .home{
    background-image: url("../assets/Home/bg-home.png");
    background-size: cover;
    color: white;
  }

  .home .content{
    padding: 0px 15px;
    font-size: 1.2em;
  }

  p{
    margin-bottom: 0px;
  }

  img.logo{
    max-width: 200px;
  }


  .btn.btn-join {
    font-size: 1.3em;
    color: white;
    background-image: url("../assets/Home/btn-join.png");
    background-size: cover;
    background-repeat: no-repeat;
    padding: 0px 12px 0px 12px;
  }

  @media (min-width: 700px) {
    .btn.btn-join{
      margin: 10px 0;
      font-size: 1.5em;
      padding: 0px 20px 0px 20px;
    }
  }
  .asterisk{
    font-size: 1em;
  }

  a{
    text-shadow: 0 0 3px black;
  }
</style>
