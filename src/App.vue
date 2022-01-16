<template>
  <div>
    <h2>Game Development Trilemma</h2>
    <Trilemma label1="Fun" label2="No bugs" label3="Has release date"></Trilemma>
  </div>
</template>

<script setup lang="ts">
import Trilemma from "./components/Trilemma.vue";
</script>

<style>
#app {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
  font-size: 30px;
  background: linear-gradient(-45deg, #ee7752, #e73c7e, #23a6d5, #23d5ab);
  background-size: 400% 400%;
}

body {
  margin: 0;
}

h2 {
  margin-bottom: 80px;
}
</style>
