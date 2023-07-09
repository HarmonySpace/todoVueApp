<template>
  <nav-bar />
  <h1>Task Form</h1>
  <form @submit.prevent="saveTask()">
    <label>Task</label>
    <input type="text" placeholder="Insert your task here" v-model="component.title">
    <label>Description</label>
    <textarea rows="5" placeholder="Write a description" v-model="component.description"></textarea>
    <button>Save</button>
  </form>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { Task } from '../interfaces/Task';
import { createTask } from '../services/TaskService.ts'
import { useRouter } from 'vue-router';
import navBar from './NavBar.vue'

let component = ref({} as Task);
const router = useRouter();

const saveTask = async () => {
  //console.log(component.value)
  const res = await createTask(component.value)
  console.log(res)
  router.push({ name: 'tasks' })
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
  font-size: 2rem;
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