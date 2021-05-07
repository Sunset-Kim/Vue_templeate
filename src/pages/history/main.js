import Vue from 'vue'
import App from './App.vue'
import 'reset.css'
import '../../css/custom_reset.css'
import '../../css/modules.css'
import '../../css/grid.css'
import '../../css/modules_text.css'

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
