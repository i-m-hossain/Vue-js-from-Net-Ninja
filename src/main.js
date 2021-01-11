import Vue from 'vue'
import App from './App.vue'
import VueResourece from 'vue-resource'

// http request
Vue.use(VueResourece); 



Vue.config.productionTip = false
new Vue({

  el:'#app',
  render: h => h(App),
}) 
