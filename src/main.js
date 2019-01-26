import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

let vm = new Vue({
  router,
  store,
  render: h => h(App)
})
vm.$mount('#app')
