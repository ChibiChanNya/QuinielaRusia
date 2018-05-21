<template>
  <transition name="modal">
    <div class="modal-mask">
      <div class="modal-wrapper">
        <div class="modal-container">

          <div class="modal-header">
            <slot name="header">
              <div class="close" @click="$emit('close')">X</div>
              <h1>Esquema de Puntuación</h1>
            </slot>
          </div>

          <div class="modal-body">
            <slot name="body">
              <h2>Fase de Grupos (48 Partidos)</h2>
              <ul>
                <li><b>5 puntos</b> por predicción de partido correcta (ganador o empate)</li>
                <li><b>10 puntos</b> por predicción de partido y marcador correcto</li>
                <li><b>25 puntos</b> por predicción del orden del grupo (8 grupos)</li>
              </ul>

              <h2>Octavos de Final (8 Partidos)</h2>
              <ul>
                <li><b>15 puntos</b> por prediccion de partido correcta</li>
                <li><b>30 puntos</b> por predicción de partido y marcador correcto</li>
              </ul>

              <h2>Cuartos de Final (4 Partidos)</h2>
              <ul>
                <li><b>40 puntos</b> por prediccion de partido correcta</li>
                <li><b>80 puntos</b> por predicción de partido y marcador correcto</li>
              </ul>

              <h2>Semifinales</h2>
              <ul>
                <li><b>75 puntos</b> por prediccion de partido correcta</li>
                <li><b>150 puntos</b> por predicción de partido y marcador correcto</li>
              </ul>

              <h2>Final</h2>
              <ul>
                <li><b>150 puntos</b> por prediccion de partido correcta</li>
                <li><b>300 puntos</b> por predicción de partido y marcador correcto</li>
              </ul>

              <h2>Especiales</h2>
              <ul>
                <li><b>60 puntos</b> por Campeón Goleador</li>
                <li><b>20 puntos</b> por Cuarto Lugar</li>
                <li><b>40 puntos</b> por Tercer Lugar</li>
                <li><b>60 puntos</b> por Subcampeón</li>
                <li><b>80 puntos</b> por Campeón</li>
              </ul>
            </slot>
          </div>

          <div class="modal-footer">
            <slot name="footer">
              <button class="btn btn-success btn-lg" @click="$emit('close')">Cerrar</button>
            </slot>
          </div>
        </div>
      </div>
    </div>
  </transition>
</template>

<script>
    export default {
        name: "ModalRules"
    }
</script>

<style scoped>

  .modal-mask {
    position: fixed;
    z-index: 9998;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, .5);
    display: table;
    transition: opacity .3s ease;
  }

  .modal-wrapper {
    display: table-cell;
    vertical-align: middle;
  }

  .close{
    position:absolute;
    font-size: 2em;
    top: -5px;
    right: -5px;
  }

  .modal-container {
    width: 300px;
    margin: 0px auto;
    padding: 20px 30px;
    border-radius: 4px;
    background-color: white;
    box-shadow: 0 2px 8px rgba(0, 0, 0, .33);
    transition: all .3s ease;
    font-family: centrale, sans-serif;
    color: #003973;
  }

  @media(min-width: 700px){
    .modal-container{
      width: 500px;
    }
  }

  .modal-header h3 {
    margin-top: 0;
    color: #42b983;
  }

  .modal-body {
    margin: 20px 0;
  }

  .btn{
    padding: 5px 20px;
    font-size: 1.5em;
    background: #003973;
    border-color: #898f92;
  }

  .modal-footer{
    display:block;
  }


  /*
   * The following styles are auto-applied to elements with
   * transition="modal" when their visibility is toggled
   * by Vue.js.
   *
   * You can easily play with the modal transition by editing
   * these styles.
   */

  .modal-enter {
    opacity: 0;
  }

  .modal-leave-active {
    opacity: 0;
  }

  .modal-enter .modal-container,
  .modal-leave-active .modal-container {
    -webkit-transform: scale(1.1);
    transform: scale(1.1);
  }

  ul li{
  }

</style>
