import Vue from 'vue'
import App from './App.vue'
import router from './router'
import vuetify from './plugins/vuetify'
import Default from './layouts/Default.vue'
import Nonavbar from './layouts/Nonavbar.vue'

Vue.component('default-layout', Default)
Vue.component('no-navbar-layout', Nonavbar)

Vue.config.productionTip = false

new Vue({
  router,
  vuetify,
  render: h => h(App)
}).$mount('#app')
