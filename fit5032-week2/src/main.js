import { createApp } from 'vue'
import App from './App.vue'

import 'bootstrap/dist/css/bootstrap.min.css'
import router from './router'

// --- Firebase setup ---
import { initializeApp } from 'firebase/app'

// Your web app's Firebase configuration

const firebaseConfig = {

  apiKey: "AIzaSyDzdm4NYJi7XMVXj7DPpd3PPpWP4OSZlQU",

  authDomain: "week7-umair.firebaseapp.com",

  projectId: "week7-umair",

  storageBucket: "week7-umair.firebasestorage.app",

  messagingSenderId: "12311454294",

  appId: "1:12311454294:web:1125e0ca0d1d5b41d451f7"

};


initializeApp(firebaseConfig)
// --- End Firebase setup ---

createApp(App).use(router).mount('#app')