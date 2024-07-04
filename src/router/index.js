import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/home.vue'
Vue.use(VueRouter)
const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
//   {
//     path: '/login',
//     name: 'login',
//     component: () => import('../views/login.vue')
//   }
]

const router = new VueRouter({
    routes
  })
  
  export default router
