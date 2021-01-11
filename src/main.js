import Vue from 'vue'
import App from './App.vue'
import VueResourece from 'vue-resource'

// http request
Vue.use(VueResourece); 

//filters
Vue.filter('to-uppercase', function (value) {
  return value.toUpperCase();
})
Vue.filter('snippet', function (value) {
  return value.slice(0, 100) + '...';
})

Vue.config.productionTip = false
new Vue({

  el:'#app',
  render: h => h(App),
}) 
