import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import Register from '../views/Register.vue'
import Login from '../views/Login.vue'
import Note from '../views/Note.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/sign-up',
      name: 'register',
      component: Register
    },
    {
      path: '/sign-in',
      name: 'login',
      component: Login
    },
    {
      path: '/notes',
      name: 'notes',
      component: Note
    }
  ]
})

export default router
