import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify'
import variables from '../src/scss/_variables.scss'

Vue.config.productionTip = false

new Vue({
  router,
  store,
  vuetify,
  variables,
  render: h => h(App)
}).$mount('#app')
