import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify';
import router from './router'
import wb from "./registerServiceWorker"

Vue.config.productionTip = false
Vue.prototype.$workbox = wb

new Vue({
  vuetify,
  router,
  render: h => h(App)
}).$mount('#app')
