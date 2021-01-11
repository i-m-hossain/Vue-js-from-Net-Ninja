import Vue from 'vue'
import App from './App.vue'
import VueResourece from 'vue-resource'

// http request
Vue.use(VueResourece); 

// custom directives
Vue.directive('rainbow', {
  bind:function(el) {
    el.style.color = '#' + Math.random().toString().slice(3, 9);
    
  }
})
Vue.directive('theme', {
  bind: function (el,binding) {
    if (binding.value == 'wide') {
      el.style.maxWidth = "1200px";
    } else if(binding.value=='narrow'){
      el.style.maxWidth = "560px";
    }
    if (binding.arg == 'column') {
      el.style.background = "#ddd"
      el.style.padding="20px"
    }
  }
})

Vue.config.productionTip = false
new Vue({

  el:'#app',
  render: h => h(App),
}) 
