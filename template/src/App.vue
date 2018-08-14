{{#unless jsx}}
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

{{/unless}}
<script>
import Vue from 'vue'
import Component from 'vue-class-component'{{#unless router}}
import HelloWorld from './components/HelloWorld'{{/unless}}{{#jsx}}
import logo from './assets/logo.png'{{/jsx}}

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
  {{#jsx}}
  render (h) {
    return (<div id="app">
      <img src={logo}/>
      {{#router}}
      <router-view/>
      {{else}}
      <HelloWorld/>
      {{/router}}
    </div>)
  }
  {{/jsx}}
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
