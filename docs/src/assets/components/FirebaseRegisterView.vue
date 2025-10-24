<template>
  <div class="container mt-5">
    <h2>Firebase Registration</h2>
    <form @submit.prevent="register">
      <div class="mb-3">
        <label for="email" class="form-label">Email</label>
        <input v-model="email" type="email" class="form-control" id="email" required />
      </div>
      <div class="mb-3">
        <label for="password" class="form-label">Password</label>
        <input v-model="password" type="password" class="form-control" id="password" required />
      </div>
      <button type="submit" class="btn btn-success">Register</button>
      <div v-if="error" class="text-danger mt-2">{{ error }}</div>
      <div v-if="user" class="text-success mt-2">Registered as: {{ user.email }}</div>
    </form>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth'

const email = ref('')
const password = ref('')
const error = ref('')
const user = ref(null)

const register = async () => {
  error.value = ''
  try {
    const auth = getAuth()
    const result = await createUserWithEmailAndPassword(auth, email.value, password.value)
    user.value = result.user
  } catch (err) {
    error.value = err.message
    user.value = null
  }
}
</script>

<style scoped>
.container {
  max-width: 400px;
  margin: 0 auto;
}
</style>