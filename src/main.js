import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

import '@fortawesome/fontawesome-free/css/all.css'
import '@fortawesome/fontawesome-free/js/all.js'

new Vue({
  render: h => h(App),
}).$mount('#app')
