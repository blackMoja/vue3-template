import { RouteRecordRaw, createRouter, createWebHistory } from 'vue-router'

import Main from '@/view/Main.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Main',
    component: Main
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
