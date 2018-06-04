<template>
  <div id="matches">
    <ModalRules v-if="showModal" @close="showModal = false"></ModalRules>

    <div class="header">
      <a href="https://bindiva.com"  style="top:3px" target="_blank"><img  src="../assets/Interna/logo-bindiva-blanco.png"></a>
      <router-link to="/"><img class="central-logo"  src="../assets/Interna/logo-blanco.png"></router-link>
      <a href="https://futhub.com" target="_blank"><img  src="../assets/Interna/logo-futhub-blanco.png"></a>
    </div>
    <div class="header-russia">
      <img class="img-fluid" style="padding:10px" src="../assets/Interna/russia.png">
    </div>
    <div style="margin-bottom: 2em">
      <h1 class="russia-badge instructions-badge"><span>Instrucciones</span></h1>
    </div>
    <div class="row">
      <div class="instructions offset-md-3 col-md-6" style="margin-bottom: 3em; ">
        <h1>¡Participa!</h1>
        <ol>
          <li><b>1.</b> Llena todos los partidos de la primera fase con marcador.</li>
          <li><b>2.</b> Completa los partidos y resultados de las finales.</li>
          <li><b>3.</b> Predice quién será el campeón goleador del mundial.</li>
          <li><b>4.</b> Si quieres cambiar un resultado, puedes hacerlo hasta antes del 13 de junio a las 23:59:59.</li>
          <li><b>5.</b> Para que tu quiniela se guarde en nuestro sistema, es necesario que hagas tu pago con cualquier tarjeta de crédito o Paypal.</li>
        </ol>
        <p>Para cualquier información, puedes contactarnos al correo info@bindiva.com</p>
        <p>Gracias por participar</p>
        <p>Equipo de Bindiva y Futhub</p>
      </div>
    </div>


    <div style="margin-bottom: 3em">
      <h1 class="russia-badge rules" id="show-modal" @click="showModal = true"><span>Ver Esquema de Puntos</span></h1>
    </div>
    <h1 class="russia-badge"><span>Grupos</span></h1>

    <div>
      <tabs >
        <!-- GRUPO A-->
        <tab name="A">
          <div class="row">
            <div class="offset-md-3 col-md-6">
              <component :is="pending_component"
                         v-for="match in groupA"
                         :key="match.id"
                         :match="match"
                         @match-change="onMatchChange(match.id, $event)"
              ></component>
            </div>

            <div class="table" id="resultsA">

              <h1 class="russia-badge" style="padding: 15px 40px 10px;">Resultados</h1>
              <table>
                <tr>
                  <th></th>
                  <th>Pts</th>
                  <th>Gan.</th>
                  <th>Emp.</th>
                  <th>Per.</th>
                  <th>GF</th>
                  <th>GC</th>
                  <th>Dif.</th>
                </tr>
                <tr v-for="team in results.groupA">
                  <td>{{team.name}}</td>
                  <td>{{team.points}}</td>
                  <td>{{team.wins}}</td>
                  <td>{{team.draws}}</td>
                  <td>{{team.loses}}</td>
                  <td>{{team.goals}}</td>
                  <td>{{team.goals_against}}</td>
                  <td>{{team.goals - team.goals_against}}</td>
                </tr>
              </table>
            </div>
          </div>
        </tab>
        <!-- GRUPO B-->
        <tab name="B">
          <div class="row">
            <div class="offset-md-3 col-md-6">
              <component :is="pending_component"
                         v-for="match in groupB"
                         :key="match.id"
                         :match="match"
                         @match-change="onMatchChange(match.id, $event)"
              ></component>
            </div>

            <div class="table" id="resultsB">
              <h1 class="russia-badge" style="padding: 15px 40px 10px;">Resultados</h1>
              <table>
                <tr>
                  <th></th>
                  <th>Pts</th>
                  <th>Gan.</th>
                  <th>Emp.</th>
                  <th>Per.</th>
                  <th>GF</th>
                  <th>GC</th>
                  <th>Dif.</th>
                </tr>
                <tr v-for="team in results.groupB">
                  <td>{{team.name}}</td>
                  <td>{{team.points}}</td>
                  <td>{{team.wins}}</td>
                  <td>{{team.draws}}</td>
                  <td>{{team.loses}}</td>
                  <td>{{team.goals}}</td>
                  <td>{{team.goals_against}}</td>
                  <td>{{team.goals - team.goals_against}}</td>
                </tr>
              </table>
            </div>
          </div>
        </tab>
        <!-- GRUPO C-->
        <tab name="C">
          <div class="row">
            <div class="offset-md-3 col-md-6">
              <component :is="pending_component"
                         v-for="match in groupC"
                         :key="match.id"
                         :match="match"
                         @match-change="onMatchChange(match.id, $event)"
              ></component>
            </div>

            <div class="table" id="resultsC">
              <h1 class="russia-badge" style="padding: 15px 40px 10px;">Resultados</h1>
              <table>
                <tr>
                  <th></th>
                  <th>Pts</th>
                  <th>Gan.</th>
                  <th>Emp.</th>
                  <th>Per.</th>
                  <th>GF</th>
                  <th>GC</th>
                  <th>Dif.</th>
                </tr>
                <tr v-for="team in results.groupC">
                  <td>{{team.name}}</td>
                  <td>{{team.points}}</td>
                  <td>{{team.wins}}</td>
                  <td>{{team.draws}}</td>
                  <td>{{team.loses}}</td>
                  <td>{{team.goals}}</td>
                  <td>{{team.goals_against}}</td>
                  <td>{{team.goals - team.goals_against}}</td>
                </tr>
              </table>
            </div>

          </div>
        </tab>

        <!-- GRUPO D-->
        <tab name="D">
          <div class="row">
            <div class="offset-md-3 col-md-6">
              <component :is="pending_component"
                         v-for="match in groupD"
                         :key="match.id"
                         :match="match"
                         @match-change="onMatchChange(match.id, $event)"
              ></component>
            </div>

            <div class="table" id="resultsD">
              <h1 class="russia-badge" style="padding: 15px 40px 10px;">Resultados</h1>
              <table>
                <tr>
                  <th></th>
                  <th>Pts</th>
                  <th>Gan.</th>
                  <th>Emp.</th>
                  <th>Per.</th>
                  <th>GF</th>
                  <th>GC</th>
                  <th>Dif.</th>
                </tr>
                <tr v-for="team in results.groupD">
                  <td>{{team.name}}</td>
                  <td>{{team.points}}</td>
                  <td>{{team.wins}}</td>
                  <td>{{team.draws}}</td>
                  <td>{{team.loses}}</td>
                  <td>{{team.goals}}</td>
                  <td>{{team.goals_against}}</td>
                  <td>{{team.goals - team.goals_against}}</td>
                </tr>
              </table>
            </div>

          </div>
        </tab>

        <!-- GRUPO E -->
        <tab name="E">
          <div class="row">
            <div class="offset-md-3 col-md-6">
              <component :is="pending_component"
                         v-for="match in groupE"
                         :key="match.id"
                         :match="match"
                         @match-change="onMatchChange(match.id, $event)"
              ></component>
            </div>

            <div class="table" id="resultsE">
              <h1 class="russia-badge" style="padding: 15px 40px 10px;">Resultados</h1>
              <table>
                <tr>
                  <th></th>
                  <th>Pts</th>
                  <th>Gan.</th>
                  <th>Emp.</th>
                  <th>Per.</th>
                  <th>GF</th>
                  <th>GC</th>
                  <th>Dif.</th>
                </tr>
                <tr v-for="team in results.groupE">
                  <td>{{team.name}}</td>
                  <td>{{team.points}}</td>
                  <td>{{team.wins}}</td>
                  <td>{{team.draws}}</td>
                  <td>{{team.loses}}</td>
                  <td>{{team.goals}}</td>
                  <td>{{team.goals_against}}</td>
                  <td>{{team.goals - team.goals_against}}</td>
                </tr>
              </table>
            </div>

          </div>
        </tab>

        <!-- GRUPO F-->
        <tab name="F">
          <div class="row">
            <div class="offset-md-3 col-md-6">
              <component :is="pending_component"
                         v-for="match in groupF"
                         :key="match.id"
                         :match="match"
                         @match-change="onMatchChange(match.id, $event)"
              ></component>
            </div>

            <div class="table" id="resultsF">
              <h1 class="russia-badge" style="padding: 15px 40px 10px;">Resultados</h1>
              <table>
                <tr>
                  <th></th>
                  <th>Pts</th>
                  <th>Gan.</th>
                  <th>Emp.</th>
                  <th>Per.</th>
                  <th>GF</th>
                  <th>GC</th>
                  <th>Dif.</th>
                </tr>
                <tr v-for="team in results.groupF">
                  <td>{{team.name}}</td>
                  <td>{{team.points}}</td>
                  <td>{{team.wins}}</td>
                  <td>{{team.draws}}</td>
                  <td>{{team.loses}}</td>
                  <td>{{team.goals}}</td>
                  <td>{{team.goals_against}}</td>
                  <td>{{team.goals - team.goals_against}}</td>
                </tr>
              </table>
            </div>

          </div>
        </tab>

        <!-- GRUPO G-->
        <tab name="G">
          <div class="row">
            <div class="offset-md-3 col-md-6">
              <component :is="pending_component"
                         v-for="match in groupG"
                         :key="match.id"
                         :match="match"
                         @match-change="onMatchChange(match.id, $event)"
              ></component>
            </div>

            <div class="table" id="resultsG">
              <h1 class="russia-badge" style="padding: 15px 40px 10px;">Resultados</h1>
              <table>
                <tr>
                  <th></th>
                  <th>Pts</th>
                  <th>Gan.</th>
                  <th>Emp.</th>
                  <th>Per.</th>
                  <th>GF</th>
                  <th>GC</th>
                  <th>Dif.</th>
                </tr>
                <tr v-for="team in results.groupG">
                  <td>{{team.name}}</td>
                  <td>{{team.points}}</td>
                  <td>{{team.wins}}</td>
                  <td>{{team.draws}}</td>
                  <td>{{team.loses}}</td>
                  <td>{{team.goals}}</td>
                  <td>{{team.goals_against}}</td>
                  <td>{{team.goals - team.goals_against}}</td>
                </tr>
              </table>
            </div>

          </div>
        </tab>
        <!-- GRUPO H-->
        <tab name="H" >
          <div class="row">
            <div class="offset-md-3 col-md-6">
              <component :is="pending_component"
                         v-for="match in groupH"
                         :key="match.id"
                         :match="match"
                         @match-change="onMatchChange(match.id, $event)"
              ></component>
            </div>

            <div class="table" id="resultsH">
              <h1 class="russia-badge" style="padding: 15px 40px 10px;">Resultados</h1>
              <table>
                <tr>
                  <th></th>
                  <th>Pts</th>
                  <th>Gan.</th>
                  <th>Emp.</th>
                  <th>Per.</th>
                  <th>GF</th>
                  <th>GC</th>
                  <th>Dif.</th>
                </tr>
                <tr v-for="team in results.groupH">
                  <td>{{team.name}}</td>
                  <td>{{team.points}}</td>
                  <td>{{team.wins}}</td>
                  <td>{{team.draws}}</td>
                  <td>{{team.loses}}</td>
                  <td>{{team.goals}}</td>
                  <td>{{team.goals_against}}</td>
                  <td>{{team.goals - team.goals_against}}</td>
                </tr>
              </table>
            </div>
          </div>
        </tab>
        <!-- OCTAVOS DE FINAL-->
        <tab name="Octavos" v-if="octavos_ready">
          <div class="row">
            <div class="offset-md-3 col-md-6">
              <div class="warning">Se toma el resultado final, después de penales. <b>(No hay empates)</b> </div>
              <component :is="octavos_ready"
                         v-for="match in finals.octavos"
                         :key="match.id"
                         :match="match"
                         @match-change="onMatchChange(match.id, $event)"
              ></component>
            </div>
          </div>
        </tab>

        <tab name="Cuartos" v-if="cuartos_ready">
          <div class="row">
            <div class="offset-md-3 col-md-6">
              <span class="warning">Se toma el resultado final, después de penales. <b>(No hay empates)</b></span>
              <component :is="cuartos_ready"
                         v-for="match in finals.cuartos"
                         :key="match.id"
                         :match="match"
                         @match-change="onMatchChange(match.id, $event)"
              ></component>
            </div>
          </div>
        </tab>

        <tab name="Semifinales" v-if="semis_ready">
          <div class="row">
            <div class="offset-md-3 col-md-6">
              <span class="warning">Se toma el resultado final, después de penales. <b>(No hay empates)</b></span>
              <component :is="semis_ready"
                         v-for="match in finals.semifinales"
                         :key="match.id"
                         :match="match"
                         @match-change="onMatchChange(match.id, $event)"
              ></component>
            </div>
          </div>
        </tab>

        <tab name="Finales" v-if="final_ready">
          <div class="row">
            <div class="offset-md-3 col-md-6">
              <span class="warning">Se toma el resultado final, después de penales. <b>(No hay empates)</b></span>
              <h2> Tercer Lugar </h2>
              <component :is="final_ready"
                         v-for="match in finals.tercer"
                         :key="match.id"
                         :match="match"
                         @match-change="onMatchChange(match.id, $event)"
              ></component>
              <h2> Gran Final </h2>
              <component :is="final_ready"
                         v-for="match in finals.final"
                         :key="match.id"
                         :match="match"
                         @match-change="onMatchChange(match.id, $event)"
              ></component>
            </div>
          </div>
        </tab>

      </tabs>
    </div>

    <h1 class="russia-badge rules" ><span>Predicciones Especiales</span></h1>
    <br><br>
    <span class="warning">Son adicionales a la quiniela principal </span>

    <div class="offset-md-4" style="margin-top:50px;margin-bottom:50px">
      <div class="v-select-block">
        <label class=" col-md-4" for="first-place">Campeón:</label><vSelect id="first-place"  v-model="specials.selected_1st" :options="team_names"></vSelect>
      </div>
      <div class="v-select-block">
        <label class="col-md-4 " for="second-place">Subcampeón:</label><vSelect id="second-place" v-model="specials.selected_2nd" :options="team_names"></vSelect>
      </div>
      <div class="v-select-block">
        <label class="col-md-4" for="third-place">Tercer Lugar:</label><vSelect id="third-place" v-model="specials.selected_3rd" :options="team_names"></vSelect>
      </div>
      <div class="v-select-block">
        <label class="col-md-4" for="fourth-place">Cuarto Lugar:</label><vSelect id="fourth-place" v-model="specials.selected_4th" :options="team_names"></vSelect>
      </div>
      <div class="v-select-block">
        <label class="col-md-4" for="champion-goaler">Campeón Goleador:</label> <vSelect id="champion-goaler" v-model="specials.selected_goaler" :options="players"></vSelect>
      </div>
    </div>


    <div class="container">
      <paypal v-if="!premium" @payment-success="onPaymentComplete( $event)"></paypal>
      <!--<button  @click.stop="calculateTable()" class="btn btn-lg btn-success">Calcular Tabla</button>-->
      <button v-if="premium"  @click.stop="saveChanges()" :disabled="loading" class="btn btn-lg btn-success">Actualizar Quiniela</button>
      <!--<button  @click.stop="clear()" class="btn btn-lg btn-success">CLEAR</button>-->
    </div>

    <img src="../assets/Footer/separador.png" style="max-width: 100vw">
    <Footer style="margin-top: 0px"></Footer>
  </div>
</template>

<script>
  import AppNav from './AppNav';
  import { isLoggedIn } from '../../utils/auth';
  import { getMatches, savePredictions , getTeams, getPredictions} from '../../utils/matches-api';
  import Paypal from './Paypal'
  import Footer from './Footer'
  import Match from './Match'
  import ModalRules from './ModalRules'
  import vSelect from 'vue-select'
  import players from '../assets/data/players'


  export default {
    name: 'Matches',
    components: {
      Match,
      Footer,
      // AppNav,
      'paypal': Paypal,
      ModalRules,
      vSelect
    },

    data() {
      return {

        showModal:false,

        premium: localStorage.getItem('has_paid') === "true",
        loading: false,
        matches: null,

        specials:{
          selected_1st: null,
          selected_3rd: null,
          selected_2nd: null,
          selected_4th: null,
          selected_goaler: null,
        },
        players : players,

        team_names: [],

        groupA: [],
        groupB: [],
        groupC: [],
        groupD: [],
        groupE: [],
        groupF: [],
        groupG: [],
        groupH: [],

        teams:[],

        pending_component: null,

        octavos_ready:false,
        cuartos_ready:false,
        semis_ready:false,
        final_ready: false,

        finals: {
          octavos:[],
          cuartos:[],
          semifinales:[],
          tercer:[],
          final:[]
        },
        results: {
          groupA: [],
          groupB: [],
          groupC: [],
          groupD: [],
          groupE: [],
          groupF: [],
          groupG: [],
          groupH: [],
        },
      };
    },

    methods: {
      isLoggedIn() {
        return isLoggedIn();
      },

      findTeam(name){
        let result= this.teams.find( (team)=> team.name === name);
        if(result){
          return result;
        }
        else{
          // console.log("Failed to find team: ", name);
          return {};
        }
      },

      calculateTable(){

        this.teams.forEach((t)=>{
          t.points=0;
          t.wins=0;
          t.goals=0;
          t.loses=0;
          t.draws=0;
          t.goals_against=0;
        });

        let groupMatches = this.matches.filter((m)=> m.group.length === 1);

        groupMatches.forEach(function(m){

          let local = this.findTeam(m.local_team);
          let visitor = this.findTeam(m.visitor_team);
          let ls = parseInt(m.localScore);
          let vs = parseInt(m.visitorScore);
          let winner= {};
          let loser = {};

          // console.log("Match betwen ", local.name, " and ", visitor.name);

          visitor.goals += vs;
          visitor.goals_against += ls;
          local.goals += ls;
          local.goals_against += vs;

          if(ls === vs) {

            // console.log("Ended in a draw");
            // console.log(m);

            local.draws +=1;
            local.points +=1;
            visitor.draws +=1;
            visitor.points +=1;
          }
          else{
            if(ls > vs){
              winner = local;
              loser = visitor;
            }
            else{
              winner = visitor;
              loser = local;
            }
            // console.log(winner.name, " WON!");

            winner.wins += 1;
            winner.points += 3;
            loser.loses += 1;
          }
        }, this);

        this.results.groupA.sort(this.compare);
        this.results.groupB.sort(this.compare);
        this.results.groupC.sort(this.compare);
        this.results.groupD.sort(this.compare);
        this.results.groupE.sort(this.compare);
        this.results.groupF.sort(this.compare);
        this.results.groupG.sort(this.compare);
        this.results.groupH.sort(this.compare);

        this.generate_octavos();
        this.generate_cuartos();
        this.generate_semis();
        this.generate_final();
      },

      compare(teamA, teamB){
        let scoreA = teamA.points;
        let scoreB = teamB.points;
        let goalsA = teamA.goals;
        let goalsB = teamB.goals;

        if(scoreA > scoreB)
          return -1;
        if(scoreB > scoreA)
          return 1;
        if(goalsA > goalsB)
          return -1;
        if(goalsB > goalsA)
          return 1;
        return 0;
      },

      sortDate(A, B){
        let dateA = A.date;
        let dateB = B.date;
        let timeA = A.time;
        let timeB = B.time;

        let dtA = new Date(dateA+" "+timeA);
        let dtB= new Date(dateB+" "+timeB);

        if(dtA > dtB)
          return -1;
        if(dtB > dtA)
          return 1;
        return 0;
        },


      setTeams: function (teams){

        this.team_names = teams.map((t)=> t.name);
        teams.forEach( (t) =>{
          t.name = t.name.toUpperCase();
          t.points=0;
          t.wins=0;
          t.loses=0;
          t.draws=0;
          t.goals=0;
          t.goals_against=0;
        });
        this.teams = teams;
        this.results.groupA = teams.filter( (t)=> t.group==="A");
        this.results.groupB = teams.filter( (t)=> t.group==="B");
        this.results.groupC = teams.filter( (t)=> t.group==="C");
        this.results.groupD = teams.filter( (t)=> t.group==="D");
        this.results.groupE = teams.filter( (t)=> t.group==="E");
        this.results.groupF = teams.filter( (t)=> t.group==="F");
        this.results.groupG = teams.filter( (t)=> t.group==="G");
        this.results.groupH = teams.filter( (t)=> t.group==="H");
      },

      setMatches: function (response){
        response.forEach((m) =>{
          if(m.localScore == null)
            m.localScore= 0;
          if(m.visitorScore == null)
            m.visitorScore= 0;
        });
        this.matches = response;
        this.setGroups(response);
      },

      setGroups: function(matches){

        this.groupA = matches.filter((m)=> m.group === 'A');
        this.groupB = matches.filter((m)=> m.group === 'B');
        this.groupC = matches.filter((m)=> m.group === 'C');
        this.groupD = matches.filter((m)=> m.group === 'D');
        this.groupE = matches.filter((m)=> m.group === 'E');
        this.groupF = matches.filter((m)=> m.group === 'F');
        this.groupG = matches.filter((m)=> m.group === 'G');
        this.groupH = matches.filter((m)=> m.group === 'H');
        this.pending_component= "Match";

        this.finals.octavos = this.matches.filter((m)=> m.group ==="Octavos");
        this.finals.cuartos = this.matches.filter((m)=> m.group ==="Cuartos");
        this.finals.semifinales = this.matches.filter((m)=> m.group ==="Semifinales");
        this.finals.tercer = this.matches.filter((m)=> m.group ==="Tercer Lugar");
        this.finals.final = this.matches.filter((m)=> m.group ==="Final");
      },


      get_winner(match){
        if(match.localScore > match.visitorScore)
          return match.local_team;
        else if(match.localScore < match.visitorScore)
          return match.visitor_team;
        else return match.local_team;

      },

      get_loser(match){
        if(match.localScore > match.visitorScore)
          return match.visitor_team;
        else if(match.localScore < match.visitorScore)
          return match.local_team;
        else return match.visitor_team;

      },

      generate_octavos(){

        // console.log("Generating Octavos");

        let octavos1 = this.finals.octavos[0];
        octavos1.local_team = this.results.groupA[0].name;
        octavos1.visitor_team = this.results.groupB[1].name;

        let octavos2 = this.finals.octavos[1];
        octavos2.local_team = this.results.groupC[0].name;
        octavos2.visitor_team = this.results.groupD[1].name;

        let octavos3 = this.finals.octavos[2];
        octavos3.local_team = this.results.groupD[0].name;
        octavos3.visitor_team = this.results.groupC[1].name;

        let octavos4 = this.finals.octavos[3];
        octavos4.local_team = this.results.groupB[0].name;
        octavos4.visitor_team = this.results.groupA[1].name;

        let octavos5 = this.finals.octavos[4];
        octavos5.local_team = this.results.groupE[0].name;
        octavos5.visitor_team = this.results.groupF[1].name;

        let octavos6 = this.finals.octavos[5];
        octavos6.local_team = this.results.groupG[0].name;
        octavos6.visitor_team = this.results.groupH[1].name;

        let octavos7 = this.finals.octavos[6];
        octavos7.local_team = this.results.groupH[0].name;
        octavos7.visitor_team = this.results.groupG[1].name;

        let octavos8 = this.finals.octavos[7];
        octavos8.local_team = this.results.groupF[0].name;
        octavos8.visitor_team = this.results.groupE[1].name;

        this.octavos_ready="Match";

      },

      generate_cuartos(){

        let cuartos1 = this.finals.cuartos[0];
        cuartos1.local_team = this.get_winner(this.finals.octavos[0]);
        cuartos1.visitor_team = this.get_winner(this.finals.octavos[1]);

        let cuartos2 = this.finals.cuartos[1];
        cuartos2.local_team = this.get_winner(this.finals.octavos[4]);
        cuartos2.visitor_team = this.get_winner(this.finals.octavos[5]);

        let cuartos3 = this.finals.cuartos[2];
        cuartos3.local_team = this.get_winner(this.finals.octavos[3]);
        cuartos3.visitor_team = this.get_winner(this.finals.octavos[2]);

        let cuartos4 = this.finals.cuartos[3];
        cuartos4.local_team = this.get_winner(this.finals.octavos[7]);
        cuartos4.visitor_team = this.get_winner(this.finals.octavos[6]);

        this.cuartos_ready="Match";
      },

      generate_semis(){

        let semifinals1 = this.finals.semifinales[0];
        semifinals1.local_team = this.get_winner(this.finals.cuartos[0]);
        semifinals1.visitor_team = this.get_winner(this.finals.cuartos[1]);

        let semifinals2 = this.finals.semifinales[1];
        semifinals2.local_team = this.get_winner(this.finals.cuartos[2]);
        semifinals2.visitor_team = this.get_winner(this.finals.cuartos[3]);

        this.semis_ready="Match";

      },

      generate_final(){
        let final1 = this.finals.final[0];
        final1.local_team = this.get_winner(this.finals.semifinales[0]);
        final1.visitor_team = this.get_winner(this.finals.semifinales[1]);

        let tercer1 = this.finals.tercer[0];
        tercer1.local_team = this.get_loser(this.finals.semifinales[0]);
        tercer1.visitor_team = this.get_loser(this.finals.semifinales[1]);

        this.final_ready="Match";
        // console.log("final", final1);

      },

      clear(){
        this.octavos_ready = null;
        this.semis_ready = null;
        this.cuartos_ready = null;
        this.final_ready = null;
      },



      onMatchChange(id, newMatch) {
        let match = this.matches.find((m) => m.match_id === newMatch.match_id);
        match.localScore = newMatch.localScore;
        match.visitorScore = newMatch.visitorScore;
        if(match.group.length === 1 ){
          this.clear();
          this.$nextTick(this.calculateTable);
        }
        else if(match.group === "Octavos"){
          this.cuartos_ready = null;
          this.semis_ready = null;
          this.final_ready = null;
          this.$nextTick(
            ()=>{
              this.generate_cuartos();
              this.generate_semis();
              this.generate_final();
            });
        }
        else if(match.group === "Cuartos"){
          this.semis_ready = null;
          this.final_ready = null;
          this.$nextTick(
            ()=>{
              this.generate_semis();
              this.generate_final();
            });
        }
        else if(match.group === "Semifinales"){
          this.final_ready = null;
          this.$nextTick(this.generate_final);
        }
      },

      onPaymentComplete(event){
        // console.log(event);
        this.premium = true;
        this.save();
      },

      saveChanges(){
        this.save();
      },

      save: function(){

        this.loading = true;
        let matches = this.matches.map((m)=>{
          return {
            match_id: m.match_id,
            localScore: m.localScore,
            visitorScore: m.visitorScore,
            visitorTeam: m.visitor_team,
            localTeam: m.local_team,
            }
          }, this);

       let orderA={
         group: "A",
         first_place: this.results.groupA[0].name,
         second_place: this.results.groupA[1].name,
         third_place: this.results.groupA[2].name,
         fourth_place: this.results.groupA[3].name,
       };
        let orderB={
          group: "B",
          first_place: this.results.groupB[0].name,
          second_place: this.results.groupB[1].name,
          third_place: this.results.groupB[2].name,
          fourth_place: this.results.groupB[3].name,

        };
        let orderC={
          group: "C",
          first_place: this.results.groupC[0].name,
          second_place: this.results.groupC[1].name,
          third_place: this.results.groupC[2].name,
          fourth_place: this.results.groupC[3].name,

        };
        let orderD={
          group: "D",
          first_place: this.results.groupD[0].name,
          second_place: this.results.groupD[1].name,
          third_place: this.results.groupD[2].name,
          fourth_place: this.results.groupD[3].name,

        };
        let orderE={
          group: "E",
          first_place: this.results.groupE[0].name,
          second_place: this.results.groupE[1].name,
          third_place: this.results.groupE[2].name,
          fourth_place: this.results.groupE[3].name,

        };
        let orderF={
          group: "F",
          first_place: this.results.groupF[0].name,
          second_place: this.results.groupF[1].name,
          third_place: this.results.groupF[2].name,
          fourth_place: this.results.groupF[3].name,

        };
        let orderG={
          group: "G",
          first_place: this.results.groupG[0].name,
          second_place: this.results.groupG[1].name,
          third_place: this.results.groupG[2].name,
          fourth_place: this.results.groupG[3].name,

        };
        let orderH={
          group: "H",
          first_place: this.results.groupH[0].name,
          second_place: this.results.groupH[1].name,
          third_place: this.results.groupH[2].name,
          fourth_place: this.results.groupH[3].name,

        };

        let table =[orderA, orderB, orderC, orderD, orderE, orderF, orderG, orderH];


        savePredictions(matches ,table, this.specials, localStorage.getItem('user_id')).then((response) => {
          // console.log("PREDICTION RESPONSE", response);
          if(response === "OK"){
            alert("Tu Quiniela se ha guardado exitosamente! Puedes modificarla gratuitamente hasta que comience el Mundial.");
          }
          this.loading = false;
        });
      }


    },

    async created() {

      if(localStorage.getItem('has_paid') === "true"){
        getPredictions().then((predictions) => {
          // console.log("PRED", predictions);
          this.setMatches(predictions.matches);
          this.specials = {
            selected_1st: predictions.specials.first_place,
            selected_2nd: predictions.specials.second_place,
            selected_3rd: predictions.specials.third_place,
            selected_4th: predictions.specials.fourth_place,
            selected_goaler: predictions.specials.goal_champion,
          };
          this.calculateTable();
        });
      }
      else{
        getMatches().then((matches) => {
          this.setMatches(matches);
          this.calculateTable();
        });
      }
      getTeams().then((teams) => {
        this.setTeams(teams);
        this.calculateTable();
      })

    },
    mounted() {
      fbq('track', 'ViewContent', {
        content_name: 'Quiniela',
        content_type: 'Product',
        value: 500.00,
        currency: 'MXN'
      });
    },
  };
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

  table{
    margin-top: 30px;
  }
  th,td{
    padding: 5px 5px;
    font-size: 1.2em;
    color: #003973;
  }

  @media(min-width: 700px){
    th,td{
      padding: 5px 20px !important;
      font-size: 1.5em;
    }
  }

  th{
    color:#898f92;
    font-size: 1em;
    font-family: centrale, sans-serif;
  }

  tr:not(:first-child){
    border-top: 1px solid rgba(137,143,146,0.3);
  }

  #matches{
    background-image: url("../assets/Home/bg-white.png");
    background-size: contain;
  }

  .table{
    margin-top: 50px;

  }

  table{margin-left:auto;
    margin-right:auto;}


  .header-russia{
    padding: 30px 0 20px 0;
  }
  .header-russia img{
    max-height: 80px;
  }

  .header{

  }
  .header img {
    max-width: 80px;
  }
  .header img.central-logo{
    margin: 0 20px;
  }

  @media(min-width: 900px){
    .header img{
      max-width: 150px;
    }

    .header img.central-logo{
      margin: 0 10vw;
    }
  }


  .btn.btn-lg{
    font-size: 1.5em;
    background: #003973;
    border-color: #898f92;
  }

  .russia-badge{
    background-image: url("../assets/Interna/badge-small.png");
    background-size: cover;
    background-repeat: no-repeat;
    color: white;
    display: inline;
    width: 150px;
    padding: 15px 40px 15px 50px;
  }

  .russia-badge.rules{
    background-image: url("../assets/Home/btn-join.png");
    padding: 10px 30px;
    cursor: pointer;
  }

  .russia-badge.instructions-badge{
    background-image: url("../assets/Home/btn-join.png");
    padding: 5px 60px;
  }

  .warning{
    color:red;
    font-size: 1.5em;
    padding: 0 1em;
  }

  .v-select{
    /*min-width: 280px;*/
    /*max-width: 180px;*/
    /*max-width: 250px;*/
    width: 280px;
    display: flex;
  }

  .dropdown-toggle input{
    width: 5em;
  }

  .v-select.searchable .dropdown-toggle{
    width: 100%;

  }

  .v-select-block{
    margin-bottom: 15px;
    text-align: left;
    padding-left: 20px;

  }
  @media(min-width: 700px){
    .v-select-block{
      padding-left: 0;
    }
    .v-select{
      max-width: 300px;
    }
    .dropdown-toggle input{
      width: 10em;
    }
  }

  label{
    font-size: 1.3em;
    color: #003973;
  }

  .instructions{
    font-size: 1.2em;
    color: #003973;
    text-align: justify;
    padding: 0 3em;

  }

  .instructions ol{
    text-align: justify;
    line-height: 2em;
  }

  .instructions ol li{
    list-style: initial;
  }


</style>
