<template>
  <nav>
    <ul>
      <li><router-link to="/">Tasks</router-link></li>
      <li><router-link to="/tasks/new">New Task</router-link></li>
    </ul>
  </nav>
</template>

<style scoped>
nav {
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
}

ul {
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  margin-bottom: 30px;
}

li {
  margin-right: 20px;
  text-decoration: none;
  list-style: none;
}

a {
  text-decoration: none;
}
</style>