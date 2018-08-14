{{#if_eq build "standalone"}}
// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
{{/if_eq}}
import Vue from 'vue'
import App from './App'
{{#router}}
import router from './router'
{{/router}}

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  {{#router}}
  router,
  {{/router}}
  {{#if_eq build "runtime"}}
  {{#jsx}}
  render (h) {
    return <App/>
  }
  {{else}}
  render: h => h(App)
  {{/jsx}}
  {{/if_eq}}
  {{#if_eq build "standalone"}}
  {{#jsx}}
  render (h) {
    return <App/>
  }
  {{else}}
  components: { App },
  template: '<App/>'
  {{/jsx}}
  {{/if_eq}}
})
