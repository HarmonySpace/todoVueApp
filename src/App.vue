import { connect } from 'mongoose';
<template>
  <div class="window">
    <div class="button"></div>
    <div class="button"></div>
    <div class="button"></div>
  </div>
  <div class="container">
    <router-view />
  </div>
</template>

<style scoped>
.window {
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-end;
  transform: translate(20px, -200%);
}

.window div:nth-child(1) {
  background-color: var(--anc2);
}

.window div:nth-child(2) {
  background-color: var(--anc3);
}

.window div:nth-child(3) {
  background-color: var(--anc);
}

.button {
  width: 35px;
  height: 35px;
  border-radius: 50%;
  margin-left: 20px;
  transition-duration: 0.2s;
}

.button:hover {
  cursor: pointer;
  transform: scale(1.2);
}

.container {
  display: flex;
  flex-wrap: wrap;
  justify-content: start;
  align-items: center;
  width: 100%;
}
</style>