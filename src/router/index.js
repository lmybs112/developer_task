import { createRouter, createWebHistory } from 'vue-router'
import SignUpView from '../views/SignUpView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'signUp',
      component: SignUpView
    }
  ]
})

export default router
