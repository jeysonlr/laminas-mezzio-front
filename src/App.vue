<template>
  <div id="app">
    <h1 class="ui header"> Listagem</h1>
    <p>
      Exemplo de exibição dos dados da <a href="https://github.com/jeysonlr/laminas-mezzio-api" target="_blank">Laminas-Mezzio API</a>
      <span class="ui icon" data-tooltip="Obs: token usado nesse exemplo é e0f66c28-f348-4304-9609-3169f0cd07cf">
      <i class="info icon"></i>
    </span>
    </p>
    <h3 class="ui header">&lt;Estados&gt;</h3>
    <state-table></state-table>
    <h3 class="ui header">&lt;Cidades&gt;</h3>
    <city-table></city-table>
  </div>
</template>

<script>
import StateTable from './components/StateTable.vue';
import CityTable from './components/CityTable.vue';

export default {
  name: 'App',
  components: {
    StateTable,
    CityTable
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
body {
  background-color: aliceblue;
}
</style>
