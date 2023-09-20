import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import Register from '../views/Register.vue'
import Login from '../views/Login.vue'
import Note from '../views/Note.vue'
import store from '../store'

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
      name: 'Register',
      component: Register
    },
    {
      path: '/sign-in',
      name: 'Login',
      component: Login
    },
    {
      path: '/notes',
      name: 'Notes',
      component: Note,
      meta: { requiresAuth: true }
    }
  ]
})

router.beforeEach((to, from, next) => {
  if (to.meta.requiresAuth && !store.state.user.token) {
    next({ name: 'Login' })
  } else if (store.state.user.token && (to.name === 'Login' || to.name === 'Register')) {
    next({ name: 'Notes' })
  } else {
    next()
  }
})

export default router
