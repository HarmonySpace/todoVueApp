<template>
  <navBar />
  <h1>Task Details</h1>
  <form @submit.prevent="handleUpdate()">
    <label>Task</label>
    <input type="text" placeholder="Write your task" v-model="currentTask.title">
    <label>Description</label>
    <textarea rows="5" placeholder="Write a description" v-model="currentTask.description"></textarea>
    <button>update</button>
    <button @click="handkeDelete()">delete</button>
  </form>
</template>
<script setup lang="ts">
import { onMounted, ref } from 'vue'
import { useRouter } from 'vue-router';
import { Task } from '../interfaces/Task'
import { getTask, updateTask, deleteTask } from '../services/TaskService';
import navBar from './NavBar.vue'

const router = useRouter()
const currentTask = ref({} as Task)

onMounted(() => {
  console.log('mounted')
  console.log(router.currentRoute.value.params.id)
  if (typeof router.currentRoute.value.params.id === 'string') {
    loadTask(router.currentRoute.value.params.id)
  }
})

const loadTask = async (id: string) => {
  const res = await getTask(id)
  currentTask.value = res.data
  console.log(res)
}

const handleUpdate = async () => {
  if (typeof router.currentRoute.value.params.id === 'string') {
    const res = await updateTask(router.currentRoute.value.params.id, currentTask.value)
    console.log(res)
    router.push({ name: 'tasks' })
  }
}
const handkeDelete = async () => {
  if (typeof router.currentRoute.value.params.id === 'string') {
    const res = await deleteTask(router.currentRoute.value.params.id)
    console.log(res)
    router.push({ name: 'tasks' })
  }
}
</script>

<style scoped>
h1 {
  font-size: 4rem;
  text-align: start;
  width: 100%;
}

form {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  width: 100%;
}

label {
  font-size: 2.5rem;
  align-items: center;
  width: 100%;
}

form label:nth-child(1) {
  margin-top: 100px;
}

input,
textarea {
  width: 100%;
  margin: 10px 0 50px 0;
  outline: none;
  border: none;
  transition: 0.2s;
}

input {
  border-radius: 10px;
  padding: 10px 20px;
  font-size: 20px;
}

input[type="text"],
textarea {
  color: var(--fr3)
}

textarea {
  border-radius: 15px;
  padding: 20px 20px;
  font-size: 15px;
}

input:focus,
textarea:focus {
  outline: 5px solid var(--anc);
}

button {
  outline: none;
  border: none;
  margin: 0.5rem;
  padding: 1rem 2rem;
  background-color: var(--anc);
  color: var(--bg2);
  font-size: 1rem;
  border-radius: 15px;
  transition: 0.2s;
}

button:hover {
  cursor: pointer;
  padding: 1rem 3rem;
}
</style>