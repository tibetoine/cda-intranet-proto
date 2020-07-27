import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Liens from '../views/Liens.vue'

Vue.use(VueRouter)

const routes = [  
  { path: '/home', component: Home },
  { path: '/cards', component: Liens },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
