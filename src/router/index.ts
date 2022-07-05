import { createRouter, createWebHistory } from 'vue-router'
import MainEmbedd from '../views/MainEmbedd.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: MainEmbedd
    },

  ]
})

export default router
