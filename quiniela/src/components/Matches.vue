<template>
  <div>
    <app-nav></app-nav>
    <h3 class="text-center">Tabla de Predicciones</h3>
    <hr/>


    <div>
      <tabs >
        <!-- GRUPO A-->
        <tab name="Grupo A">
          <component :is="table"
                     v-for="match in groupA"
                     :key="match.id"
                     :match="match"
                     @match-change="onMatchChange(match.id, $event)"
          ></component>
        </tab>
        <!-- GRUPO B-->
        <tab name="Grupo B">
          <component :is="table"
                     v-for="match in groupB"
                     :key="match.id"
                     :match="match"
                     @match-change="onMatchChange(match.id, $event)"
          ></component>
        </tab>
        <!-- GRUPO C-->
        <tab name="Grupo C">
          <component :is="table"
                     v-for="match in groupC"
                     :key="match.id"
                     :match="match"
                     @match-change="onMatchChange(match.id, $event)"
          ></component>
        </tab>

        <!-- GRUPO D-->
        <tab name="Grupo D">
          <component :is="table"
                     v-for="match in groupD"
                     :key="match.id"
                     :match="match"
                     @match-change="onMatchChange(match.id, $event)"
          ></component>
        </tab>

        <!-- GRUPO E -->
        <tab name="Grupo E">
          <component :is="table"
                     v-for="match in groupE"
                     :key="match.id"
                     :match="match"
                     @match-change="onMatchChange(match.id, $event)"
          ></component>
        </tab>

        <!-- GRUPO F-->
        <tab name="Grupo F">
          <component :is="table"
                     v-for="match in groupF"
                     :key="match.id"
                     :match="match"
                     @match-change="onMatchChange(match.id, $event)"
          ></component>
        </tab>

        <!-- GRUPO G-->
        <tab name="Grupo G">
          <component :is="table"
                     v-for="match in groupG"
                     :key="match.id"
                     :match="match"
                     @match-change="onMatchChange(match.id, $event)"
          ></component>
        </tab>
        <!-- GRUPO H-->
        <tab name="Grupo H">
          <component :is="table"
                     v-for="match in groupH"
                     :key="match.id"
                     :match="match"
                     @match-change="onMatchChange(match.id, $event)"
          ></component>
        </tab>
      </tabs>
    </div>

    <paypal v-if="!premium"></paypal>
    <button v-if="premium"  @click.stop="saveChanges()" class="btn btn-lg btn-success">Actualizar Quiniela</button>

  </div>
</template>

<script>
  import AppNav from './AppNav';
  import { isLoggedIn } from '../../utils/auth';
  import { getMatches, savePredictions } from '../../utils/matches-api';
  import Paypal from './Paypal'
  import Match from './Match'


  export default {
    name: 'Matches',
    components: {
      Match,
      AppNav,
      'paypal': Paypal
    },
    attributes: null,
    matches: [],
    groupA: [],
    groupB: [],
    groupC: [],
    groupD: [],
    groupE: [],
    groupF: [],
    groupG: [],
    groupH: [],


    data() {
      return {
        premium: localStorage.getItem('has_paid'),
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
        table: null
      };
    },

    methods: {
      isLoggedIn() {
        return isLoggedIn();
      },

      saveChanges(){
        console.log(this.matches, this.groupA);
        this.save();
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
        this.table= "Match";
      },

      onMatchChange(id, newMatch) {
        const match = this.matches.find((m) => m.id == id);
        Object.assign(match, newMatch);
      },

      save: function(){
        let matches = this.matches;
        savePredictions(matches, localStorage.getItem('user_id')).then((response) => {
            console.log("PREDICTION RESPONSE", response);
          });
      }
    },

    async created() {
      getMatches().then((matches) => {
        this.setMatches(matches);
      });

    },
  };
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
