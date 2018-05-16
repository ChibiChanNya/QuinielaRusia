<template>
  <div class="row">
    <span class="match-time">{{matchModel.date}} {{matchModel.time}}</span>
    <span v-bind:class="{winner: winner ==='local',loser: winner ==='visitor'}">{{matchModel.local_team}}</span>
    <span class="score"><input v-model="matchModel.localScore" type="number"> - <input v-model="matchModel.visitorScore" type="number"> </span>
    <span v-bind:class="{winner: winner ==='visitor',loser: winner ==='local'}" >{{matchModel.visitor_team}}</span>
    <span class="location">{{matchModel.location}}</span>
  </div>

</template>

<script>
  import Vue from 'vue';

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

</style>
