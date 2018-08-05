<template>
  <div id="app">
    <img src="./assets/logo.png">
    {{#router}}
    <router-view/>
    {{else}}
    <HelloWorld/>
    {{/router}}
  </div>
</template>

<script>
import Vue from 'vue'
import Component from 'vue-class-component'{{#unless router}}
import HelloWorld from './components/HelloWorld'{{/unless}}

{{#router}}
@Component
{{else}}
@Component({
  components: {
    HelloWorld
  }
})
{{/router}}
export default class App extends Vue {
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
