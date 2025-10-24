<template>
  <div class="container mt-5">
    <h2>Add a New Book</h2>
    <form @submit.prevent="addBook">
      <div class="mb-3">
        <label for="isbn" class="form-label">ISBN (number)</label>
        <input v-model.number="isbn" type="number" class="form-control" id="isbn" required />
      </div>
      <div class="mb-3">
        <label for="name" class="form-label">Book Name</label>
        <input v-model="name" type="text" class="form-control" id="name" required />
      </div>
      <button type="submit" class="btn btn-success">Add Book</button>
      <div v-if="message" class="text-success mt-2">{{ message }}</div>
      <div v-if="error" class="text-danger mt-2">{{ error }}</div>
    </form>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import db from '@/firebase/init.js'
import { collection, addDoc } from 'firebase/firestore'

const isbn = ref(null)
const name = ref('')
const message = ref('')
const error = ref('')

const addBook = async () => {
  message.value = ''
  error.value = ''
  try {
    if (!isbn.value || !name.value) {
      error.value = 'Both fields are required.'
      return
    }
    await addDoc(collection(db, 'books'), {
      isbn: Number(isbn.value),
      name: name.value
    })
    message.value = 'Book added successfully!'
    isbn.value = null
    name.value = ''
  } catch (err) {
    error.value = err.message
  }
}
</script>

<style scoped>
.container {
  max-width: 400px;
  margin: 0 auto;
}
</style>