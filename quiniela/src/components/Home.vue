<template>
  <div class="home">
    <!--<app-nav></app-nav>-->

    <img class="logo center-block" src="../assets/Home/logo_blanco.png"/>

    <h1>Reglas:</h1>

    <p>Costo: $500 por pesona</p>
    <p>Garantizado 50 participantes con un premio mínimo de $20,000 en premios</p>
    <p>Inscripción en esta plataforma</p>
    <p>Para participar deberás hacer tu pago con Paypal</p>
    <br>
    <p>Se premiarán al 20% de los participantes</p>
    <p>Los premios se calcularán con base al número de participantes</p>
    <h3>Tabla de premios:</h3>
    <ul>
      <li>1er Lugar: 40%</li>
      <li>2do Lugar: 20%</li>
      <li>3er Lugar: 12.5%</li>
      <li>4to Lugar: 7.5%</li>
      <li>5to Lugar en adelante: Se repartirá 20% del monto recaudado</li>
    </ul>
    <br>
    <p>La tabla de premios se publicará al terminar las inscripciones</p>
    <p>Los resultados se actualizarán cada día en la plataforma</p>
    <p>Se contactará a los ganadores via electrónica para la premiación</p>
    <p>Los premios se entregarán una semana después de la final en un evento de premiación (15-Jul-2018)</p>
    <br>
    <p>Éste es un evento privado, la participación esta sujeta a invitación</p>

    <router-link class="btn btn-link btn-lg" to="/matches">DA CLIC AQUÍ PARA LLENAR TU QUINIELA</router-link>
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
  }

  p{
    margin-bottom: 0px;
  }

  img.logo{
    max-width: 200px;
  }

  .btn.btn-link{
    font-size: 2em;
    color: white;
  }



</style>
