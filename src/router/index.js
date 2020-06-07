import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import ShopCart from '../views/ShopCart'
import Close from '../views/Close'

Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/shopcart',
    name: 'ShopCart',
    component:ShopCart
  },
  {
    path:'/close',
    name:'Close',
    component:Close
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
