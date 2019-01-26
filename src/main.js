import Vue from 'vue'
import App from './App.vue'
import router from './router'

let vm = new Vue({
  router,
  render: h => h(App)
})
vm.$mount('#app')
