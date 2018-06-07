<template>
  <div class="row match">
    <div class="col-xs-4 no-padding">
      <img class="flag" v-bind:src='local_flag_url'><br>
      <span class="country-name" v-bind:class="{winner: winner ==='local',loser: winner ==='visitor'}">{{matchModel.local_team}}</span><br>
      <span class="score"><input disabled="disabled" class="disabled" min="0" max="99" v-model="matchModel.localScore" type="number"></span>
    </div>
    <div class="col-xs-4 date-location no-padding">
      <div >{{matchModel.date}}-2018</div>
      <div >{{matchModel.time}} hrs</div>
      <span >{{matchModel.location}}</span>
    </div>
    <div class="col-xs-4 no-padding">
      <img class="flag" v-bind:src='visitor_flag_url'><br>
      <span class="country-name" v-bind:class="{winner: winner ==='visitor',loser: winner ==='local'}">{{matchModel.visitor_team}}</span><br>
      <span class="score"><input disabled="disabled" class="disabled" min="0" max="99" v-model="matchModel.visitorScore" type="number"></span>
    </div>
  </div>
</template>

<script>
  import Vue from 'vue'

    export default {
        name: "Match",
        props: ['match'],
      data(){
          return{
            matchModel: Object.assign({}, this.match)
          }
      },
      computed:{
        winner: function(){
            if(this.matchModel.localScore == this.matchModel.visitorScore)
              return "draw";
            else if(parseInt(this.matchModel.localScore) > parseInt(this.matchModel.visitorScore))
              return "local";
            else return "visitor";
          },
        local_flag_url:  function(){
          return "/static/img/flags/"+ this.matchModel.local_team + ".png";
        },
        visitor_flag_url: function(){
          return "/static/img/flags/"+ this.matchModel.visitor_team + ".png";
        }
      },
      watch: {
        matchModel: {
          handler(val) {
            this.$emit('match-change', val)
          },
          deep: true,
        }
      }

    }
</script>

<style scoped>
  .winner{
    color:green;
    font-weight: bold;
  }

  .loser{
    color:red;
  }

  input{
    max-width: 100px;
  }

  .match{
    margin-bottom: 20px;
  }

  .flag{
    max-height: 60px;
  }

  .date-location{
    margin: auto 0 auto 0;
    font-family: centrale, sans-serif;
    color: #898f92;
  }

  .country-name{
    font-size: 1.2em;
    padding: 5px;
  }

  @media (min-width: 700px) {
    .country-name{
      font-size: 1.5em;

    }
  }

  .score input{
    background: #c8d0d5;
    border-radius: 8px;
    color: black;
    width: 40px;
    text-align: center;
    padding-left: 5px;
  }

  .no-padding{
    padding: 0;
  }

  .disabled{
    cursor: not-allowed;
  }
</style>
