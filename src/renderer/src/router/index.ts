import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '@renderer/views/Home.vue'
import Settting from '@renderer/views/Settting.vue'

const routes = [
  { name: 'home', path: '/', component: Home },
  { name: 'settting', path: '/settting', component: Settting }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
