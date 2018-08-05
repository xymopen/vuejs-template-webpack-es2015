{{#if_eq build "standalone"}}
// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
{{/if_eq}}
import Vue from 'vue'
import Component from 'vue-class-component'
import App from './App'
{{#router}}
import router from './router'
{{/router}}

Vue.config.productionTip = false;

/* eslint-disable no-new */
{{#router}}
new Vue({
  el: '#app',
  router,
  {{#if_eq build "runtime"}}
  render: h => h(App)
  {{/if_eq}}
  {{#if_eq build "standalone"}}
  {{#jsx}}
  render (h) {
    return <App/>
  }{{else}}
  components: { App },
  template: '<App/>'
  {{/jsx}}
  {{/if_eq}}
}){{else}}
(new (@Component({
  el: '#app',
  {{#if_eq build "standalone"}}{{#unless jsx}}
  components: { App },
  template: '<App/>'{{/unless}}
  {{/if_eq}}
})
  class extends Vue {
    {{#if_eq build "runtime"}}
    render: h => h(App)
    {{/if_eq}}
    {{#if_eq build "standalone"}}
    {{#jsx}}
    render (h) {
      return <App/>
    }{{/jsx}}
    {{/if_eq}}
  }))()
{{/router}}
