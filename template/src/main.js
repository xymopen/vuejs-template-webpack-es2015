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
(new (@Component({
  el: '#app',
  {{#router}}
  router,
  {{/router}}
  {{#if_eq build "standalone"}}
  components: { App }{{#unless jsx}},
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
