<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
@font-face {
  font-family: centrale;
  src: url('./assets/font/Centrale_Sans_Medium.otf');
}

@font-face {
  font-family: centrale;
  src: url('./assets/font/Centrale_Sans_Bold.otf');
  font-weight: bold;
}

@font-face {
  font-family: centrale-italics;
  src: url('./assets/font/Centrale_Sans_Light.otf');
}

@font-face {
  font-family: centrale-italics;
  src: url('./assets/font/Centrale_Sans_Bold_Italic.otf');
  font-weight: bold;
}

@font-face {
  font-family: dusha;
  src: url('./assets/font/Dusha.ttf');
}


#app {
  font-family: dusha, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  font-size: 10pt;
}

li{
  list-style: none;
}
  /* TABS*/
.tabs-component {
  margin: 2em 0 0 0;
}

.tabs-component-tabs {
  border: solid 1px #ddd;
  border-radius: 6px;
  margin-bottom: 5px;
  display: inline-block;
}

@media (min-width: 700px) {
  .tabs-component-tabs {
    border: 0;
    align-items: stretch;
    display: flex;
    justify-content: flex-start;
    margin-bottom: -1px;
    display:inline-block;
  }
}


@media (max-width: 700px) {

}
.tabs-component-tab {
  color: #f9f9f9;
  font-size: 18px;
  font-weight: 600;
  margin-right: 0;
  list-style: none;
  background-image: url("./assets/Interna/tab-inactive.png");
  background-size: contain;
  background-repeat: no-repeat;
  display: inline-block;
}

.tabs-component-tab.is-active {
  background-image: url("./assets/Interna/tab-active.png");
}

.tabs-component-tab:nth-child(n+9){
  background-image: url("./assets/Interna/tab-big-inactive.png");
  background-size: contain;
  width: 120px;
}

.tabs-component-tab:nth-child(n+9)>a{
  justify-content:  center;
}

.tabs-component-tab:nth-child(n+9).is-active{
  background-image: url("./assets/Interna/tab-big-active.png");
}



.tabs-component-tab.is-disabled * {
  color: #cdcdcd;
  cursor: not-allowed !important;
}

@media (min-width: 700px) {
  .tabs-component-tab {

    border-radius: 3px 3px 0 0;
    margin-right: .5em;
    transform: translateY(2px);
    transition: transform .3s ease;
  }

  .tabs-component-tab.is-active {
    /*border-bottom: solid 1px #fff;*/
    z-index: 2;
    transform: translateY(0);
  }
}

.tabs-component-tab-a {
  align-items: center;
  color: inherit;
  display: flex;
  padding: .75em 1em;
  text-decoration: none;
  top: -5px;
}

.tabs-component-tab-a:hover, .tabs-component-tab-a:focus, .tabs-component-tab-a:active{
  color:white;
}

.tabs-component-panels {
  padding: 2em 0;
}

@media (min-width: 700px) {
  .tabs-component-panels {
    border-top-left-radius: 0;
    /*background-color: #fff;*/
    /*border: solid 1px #ddd;*/
    /*border-radius: 0 6px 6px 6px;*/
    /*box-shadow: 0 0 10px rgba(0, 0, 0, .05);*/
    padding: 4em 2em;
  }
}


/* Page styles */

*,
*:after,
*:before {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  position: relative;
}

body {
  background-color: #efefef;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen-Sans, Ubuntu, Cantarell, 'Helvetica Neue', sans-serif;
  font-size: 16px;
}



.page {
  background-color: #fff;
  border-radius: 3px;
  box-shadow: 0 2px 20px rgba(0, 0, 0, .025);
  margin: 0 auto;
  max-width: 66em;
  padding: 4em 2em;
}

@media (min-width: 700px) {
  .page {
    padding: 4em;
  }
}

.page-title {
  font-size: 2.4rem;
  margin-bottom: 1em;
}

.page-title a {
  color: inherit;
  text-decoration: none;
}

.page-title a:hover {
  color: #007593;
}

.page-subtitle {
  font-size: 1.25rem;
  margin-bottom: 1em;
  padding-top: .25em;
}

.page-about {
  background-color: #d1e8eb;
  margin: 0 -2em;
  padding: 2em 1em;
}

@media (min-width: 700px) {
  .page-about {
    border-radius: 3px;
    margin: 0;
    padding: 2em;
  }
}

.page-about h2 {
  color: #003345;
}

.page-about p {
  color: #003345;
  line-height: 1.45;
  margin-bottom: 1em;
}

.page-about a {
  color: #007593;
}

.page-about code {
  background-color: rgba(255, 255, 255, .75);
  border-radius: 3px;
  padding: 0 .25em;
}

.page-outro {
  color: #999;
  display: block;
  margin-top: 4em;
  text-align: center;
}

.page-outro a {
  color: #999;
}

.prefix,
.suffix {
  align-items: center;
  border-radius: 1.25rem;
  display: flex;
  font-size: .75rem;
  flex-shrink: 0;
  height: 1.25rem;
  justify-content: center;
  line-height: 1.25rem;
  min-width: 1.25rem;
  padding: 0 .1em;
}

.prefix {
  background-color: #d1e8eb;
  color: #0c5174;
  margin-right: .35em;
}

.suffix {
  background-color: #c03;
  color: #fff;
  margin-left: .35em;

}

@media (min-width: 700px) {
  .suffix {
    position: absolute;
    right: -.725em;
    top: -.725em;
  }
}

.header{
  background-image: url("./assets/Interna/background-header.png");
  background-size: cover;
}

.header img{
  max-height: 100px;
}

.btn.btn-lg{
  font-size: 1.5em;
  background: #003973;
  border-color: #898f92;
}

.russia-badge{
  background-image: url("assets/Interna/badge-small.png");
  background-size: cover;
  background-repeat: no-repeat;
  color: white;
  display: inline;
  width: 150px;
  padding: 15px 40px 15px 50px;
}

.russia-badge.rules{
  background-image: url("assets/Home/btn-join.png");
  padding: 10px 30px;
  cursor: pointer;
}

.russia-badge.instructions-badge{
  background-image: url("assets/Home/btn-join.png");
  padding: 5px 60px;
}

.disabled{
  cursor: not-allowed;
}

</style>
