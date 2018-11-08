import Vue from 'vue'
import Router from 'vue-router'

import Home from '@/components/Home'

Vue.use(Router)
let routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    meta: {}
  }
]

const router = new Router({
  mode: 'history',
  routes: routes,
})

export default router
