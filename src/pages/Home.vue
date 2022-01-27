<template>
  <div class="py-6 min-h-screen flex flex-col items-center bg-gray-50 justify-center">
    <h1 class="font-bold text-6xl my-7 text-center">Trilemma Generator</h1>
    <input v-model="title" class="input" placeholder="Title" />
    <input v-model="item1" class="input" placeholder="Item 1" />
    <input v-model="item2" class="input" placeholder="Item 2" />
    <input v-model="item3" class="input" placeholder="Item 3" />
    <button
      class="px-6 py-6 text-5xl text-blue-500 font-semibold rounded-full border my-7 min-w-fit border-blue-200 hover:text-white hover:bg-blue-500 hover:border-transparent focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
      @click="generate"
    >Generate</button>
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
.input {
  @apply placeholder:italic placeholder:text-slate-400 block m-4 min-w-fit w-1/3 h-21 px-3 py-2 bg-white border border-slate-300 rounded-md text-4xl shadow-sm text-center placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500;
}
</style>