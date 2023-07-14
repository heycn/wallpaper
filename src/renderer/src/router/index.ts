import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '@renderer/views/Home.vue'
import Settting from '@renderer/views/Settting.vue'

const routes = [
  { name: 'home', path: '/', component: Home },
  { name: 'setting', path: '/setting', component: Settting }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
