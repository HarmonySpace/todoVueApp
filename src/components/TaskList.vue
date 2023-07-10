<template>
  <nav-bar />
  <h1>Task List</h1>
  <ul>
    <li v-for="task in tasks" :key="task._id" @click="router.push(`/tasks/${task._id}`)">
      <h2>{{ task.title }}</h2>
      <p>{{ task.description }}</p>
      <div class="delete">
        <button @click="handkeDelete()">Delete</button>
      </div>
    </li>
  </ul>
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue'
import { getTasks, deleteTask } from '../services/TaskService.ts'
import { Task } from '../interfaces/Task'
import { useRouter } from 'vue-router'
import navBar from './NavBar.vue'

onMounted(() => {
  console.log("mounted")
  loadTasks()
})

const tasks = ref([] as Task[]);
const router = useRouter();

const loadTasks = async () => {
  const res = await getTasks()
  tasks.value = res.data
  console.log(res)
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

h2 {
  font-size: 2rem;
  text-align: start;
  width: 100%;
  color: var(--fr)
}

p {
  text-align: start;
  width: 100%;
  color: var(--fr3)
}

ul {
  display: flex;
  flex-direction: column;
  justify-content: start;
  margin: 50px 0;
  width: 90%;
}

li {
  list-style: none;
  width: 100%;
  margin: 5px;
  padding: 10px 20px;
  background-color: var(--bg2);
  border-radius: 10px;
  box-shadow: 5px 5px 10px var(--sha);
  transition-duration: 0.2s;
}

li:hover {
  cursor: pointer;
  border-bottom: 5px solid var(--anc);
  overflow: hidden;
}
</style>