<template>
  <div id="matches">
    <div class="header">
      <router-link to="/"><img  src="../assets/Interna/logo-blanco.png"></router-link>
    </div>
    <div class="header-russia">
      <img class="img-fluid" style="padding:10px" src="../assets/Interna/russia.png">
    </div>
    <h1 class="russia-bage">Partidos</h1>
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

            <div class="offset-md-3 col-md-6 col-xs-12 offset-xs-0 table" id="resultsA">
              <h1 class="russia-bage" style="padding: 15px 40px 10px;">Resultados</h1>
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

            <div class="offset-md-3 col-md-6 table" id="resultsB">
              <h1 class="russia-bage" style="padding: 15px 40px 10px;">Resultados</h1>
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

            <div class="offset-md-3 col-md-6 table" id="resultsC">
              <h1 class="russia-bage" style="padding: 15px 40px 10px;">Resultados</h1>
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

            <div class="offset-md-3 col-md-6 table" id="resultsD">
              <h1 class="russia-bage" style="padding: 15px 40px 10px;">Resultados</h1>
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

            <div class="offset-md-3 col-md-6 table" id="resultsE">
              <h1 class="russia-bage" style="padding: 15px 40px 10px;">Resultados</h1>
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

            <div class="offset-md-3 col-md-6 table" id="resultsF">
              <h1 class="russia-bage" style="padding: 15px 40px 10px;">Resultados</h1>
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

            <div class="offset-md-3 col-md-6 table" id="resultsG">
              <h1 class="russia-bage" style="padding: 15px 40px 10px;">Resultados</h1>
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
        <tab name="H">
          <div class="row">
            <div class="offset-md-3 col-md-6">
              <component :is="pending_component"
                         v-for="match in groupH"
                         :key="match.id"
                         :match="match"
                         @match-change="onMatchChange(match.id, $event)"
              ></component>
            </div>

            <div class="offset-md-3 col-md-6 table" id="resultsH">
              <h1 class="russia-bage" style="padding: 15px 40px 10px;">Resultados</h1>
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
        <tab name="8vos" v-if="octavos_ready">
          <div class="row">
            <div class="offset-md-3 col-md-6">
              <component :is="octavos_ready"
                         v-for="match in finals.octavos"
                         :key="match.id"
                         :match="match"
                         @match-change="onMatchChange(match.id, $event)"
              ></component>
            </div>
          </div>
        </tab>

        <tab name="4tos" v-if="cuartos_ready">
          <div class="row">
            <div class="offset-md-3 col-md-6">
              <component :is="cuartos_ready"
                         v-for="match in finals.cuartos"
                         :key="match.id"
                         :match="match"
                         @match-change="onMatchChange(match.id, $event)"
              ></component>
            </div>
          </div>
        </tab>

        <tab name="Semis" v-if="semis_ready">
          <div class="row">
            <div class="offset-md-3 col-md-6">
              <component :is="semis_ready"
                         v-for="match in finals.semifinales"
                         :key="match.id"
                         :match="match"
                         @match-change="onMatchChange(match.id, $event)"
              ></component>
            </div>
          </div>
        </tab>

        <tab name="Final" v-if="final_ready">
          <div class="row">
            <div class="offset-md-3 col-md-6">
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

    <paypal v-if="!premium" @payment-success="onPaymentComplete( $event)"></paypal>
    <!--<button  @click.stop="calculateTable()" class="btn btn-lg btn-success">Calcular Tabla</button>-->
    <button v-if="premium"  @click.stop="saveChanges()" class="btn btn-lg btn-success">Actualizar Quiniela</button>
    <!--<button  @click.stop="clear()" class="btn btn-lg btn-success">CLEAR</button>-->

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


  export default {
    name: 'Matches',
    components: {
      Match,
      Footer,
      // AppNav,
      'paypal': Paypal
    },

    data() {
      return {
        premium: localStorage.getItem('has_paid') === "true",
        loading: true,
        matches: null,

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
        // let groupMatches = this.matches.filter((m)=> m.group === "A");

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
        this.loading = false;
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
        let matches = this.matches.map((m)=>{
          return {
            match_id: m.match_id,
            localScore: m.localScore,
            visitorScore: m.visitorScore,
            winner: this.get_winner(m)
          }
        }, this);
        savePredictions(matches, localStorage.getItem('user_id')).then((response) => {
          // console.log("PREDICTION RESPONSE", response);
          if(response === "OK"){
            alert(" Tu Quiniela se ha guardado exitosamente! Puedes modificarla gratuitamente hasta que comience el Mundial.");
          }
        });
      },
    },

    async created() {
      if(localStorage.has_paid === "true"){
        getPredictions().then((matches) => {
          this.setMatches(matches);
          this.generate_octavos();
          this.generate_cuartos();
          this.generate_semis();
          this.generate_final();
        });
      }
      else{
        getMatches().then((matches) => {
          this.setMatches(matches);
        });
      }
      getTeams().then((teams) => {
        this.setTeams(teams);
      })

    },
  };
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

  table{
    margin-top: 30px;
  }
  th,td{
    padding: 5px 20px;
    font-size: 1.5em;
    color: #003973;
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
    background-size: cover;
  }

  .table{
    margin-top: 50px;
  }


  .header-russia{
    padding: 30px 0 20px 0;
  }
  .header-russia img{
    max-height: 100px;
  }

  .btn.btn-lg{
    font-size: 1.5em;
    background: #003973;
    border-color: #898f92;
  }

  .russia-bage{
    background-image: url("../assets/Interna/badge-small.png");
    background-size: cover;
    background-repeat: no-repeat;
    color: white;
    display: inline;
    width: 150px;
    padding: 8px 30px 3px 30px;
  }

</style>
