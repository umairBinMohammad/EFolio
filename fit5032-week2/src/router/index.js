import { createRouter, createWebHistory } from 'vue-router'
import App from '@/App.vue'
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
  history: createWebHistory(),
  routes
})

export default router