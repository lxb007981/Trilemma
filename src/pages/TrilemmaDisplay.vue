<template>
  <div id="trilemmaDisplay">
    <Trilemma
      :title="(query.title as string)"
      :item1="(query.item1 as string)"
      :item2="(query.item2 as string)"
      :item3="(query.item3 as string)"
    ></Trilemma>
  </div>
</template>

<script setup lang="ts">
import Trilemma from "~/components/Trilemma.vue";
import { useRoute } from 'vue-router'
const query = useRoute().query



</script>

<style>
#trilemmaDisplay {
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  height: 100vh;
  font-size: 30px;
  background: linear-gradient(-45deg, #ee7752, #e73c7e, #23a6d5, #23d5ab);
  background-size: 400% 400%;
}

body {
  margin: 0;
}
</style>
