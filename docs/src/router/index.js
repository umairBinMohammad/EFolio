import { createRouter, createWebHistory } from 'vue-router'
import FirebaseSigninView from '@/assets/components/FirebaseSigninView.vue'
import HomeView from '@/assets/components/HomeView.vue'
import FirebaseRegisterView from '@/assets/components/FirebaseRegisterView.vue'
import AddBookView from '@/assets/components/AddBookView.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: HomeView
  },
  {
    path:  '/FireLogin',
    name: 'FireLogin',
    component: FirebaseSigninView
  },
  {
    path: '/FireRegister',
    name: 'FireRegister',
    component: FirebaseRegisterView
  },
  {
    path: '/addbook',
    name: 'AddBook',
    component: AddBookView
  }
]

const router = createRouter({
  // Use Vite's base URL so routes work under /EFolio/ on GitHub Pages
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})

export default router