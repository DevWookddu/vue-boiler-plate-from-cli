import Vue from 'vue'
import Router from 'vue-router'
import Home from './page/Home.vue'

Vue.use(Router)

const router = new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      component: Home
    },
    {
      path: '/temp',
      component: () => import(/* webpackChunkName : "temp" */ './page/Temp.vue')
    },
    {
      path: '/temp2',
      component: () => import(/* webpackChunkName : "temp" */ './page/Temp2.vue')
    }
  ]
})

export default router
