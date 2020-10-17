import Vue from 'vue'
import VueRouter from 'vue-router'
import {firebase} from '../main'

Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name:'start',
    component: () => import('../views/Start.vue')
  },
  {
    path: '/product/:id',
    name:'product',
    component: () => import('../views/Product.vue'),
    meta: { requiresAuth: true }
  },
  {
    path: '/login',
    name:'login',
    component: () => import('../views/Login.vue'),
  },
  {
    path:'/cart',
    name:'cart',
    component: () => import('../views/Cart.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

router.beforeEach((to, from, next) => {
  const protectedRoute = to.matched.some(record => record.meta.requiresAuth)
  const user = firebase.auth().currentUser

  if(protectedRoute && user === null ){
    next({name:'login'})
  }else{
    next()
  }

})

export default router
