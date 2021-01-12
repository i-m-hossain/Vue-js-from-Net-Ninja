import Vue from 'vue'
import App from './App.vue'
import VueResourece from 'vue-resource'
import VueRouter from 'vue-router'
import Routes from './routes' 

// http request
Vue.use(VueResourece);

// Vue Router
Vue.use(VueRouter); 

const router = new VueRouter({
  routes: Routes,
  mode: 'history',  //This mode removes the '*' option from route link

});

Vue.config.productionTip = false
new Vue({

  el:'#app',
  render: h => h(App),
  router:router,
}) 
