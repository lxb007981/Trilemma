<template>
  <div id="homeContainer">
    <h1>Trilemma Generator</h1>
    <el-input v-model="title" placeholder="Title" />
    <el-input v-model="item1" placeholder="Item 1" />
    <el-input v-model="item2" placeholder="Item 2" />
    <el-input v-model="item3" placeholder="Item 3" />
    <el-button type="primary" round size="large" @click="generate">Generate</el-button>
  </div>
</template>
<script lang="ts" setup>
import { router } from '~/router'
import { ref } from 'vue'
const item1 = ref('')
const item2 = ref('')
const item3 = ref('')
const title = ref('')
function generate() {
  router.push({ path: '/trilemma', query: { title: title.value, item1: item1.value, item2: item2.value, item3: item3.value } })
}
</script>
<style lang="css" scoped>
h1 {
  text-align: center;
  font-size: 4em;
  margin-bottom: 0.5em;
}
#homeContainer {
  margin: 1em auto;
  display: flex;
  flex-direction: column;
  align-items: center;
}
:deep(.el-input__inner) {
  border: 2px solid #aaa;
  margin: 20px;
  font-size: 3.8em;
  height: 1.6em;
  text-align: center;
  color: black;
}
:deep(.el-input__inner:focus) {
  border-color: cornflowerblue;
  box-shadow: 0 4px 10px rgb(0 0 0 / 10%);
}

:deep(.el-input) {
  width: 50%;
}

:deep(.el-button) {
  font-size: 3em;
  margin-top: 1em;
}
</style>