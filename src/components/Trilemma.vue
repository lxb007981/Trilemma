<template>
  <div class="container">
    <div class="flexbox">
      <div class="switch-label">
        <el-switch v-model="value1" class="mb-2" name="switch1" :width="switchWidth" />
        <label for="switch1">{{ label1 }}</label>
      </div>
      <div class="switch-label">
        <el-switch
          v-model="value2"
          class="mb-2"
          active-color="#13ce66"
          name="switch2"
          :width="switchWidth"
        />
        <label for="switch2">{{ label2 }}</label>
      </div>
      <div class="switch-label">
        <el-switch
          v-model="value3"
          class="mb-2"
          active-color="#f56c6c"
          name="switch3"
          :width="switchWidth"
        />
        <label for="switch3">{{ label3 }}</label>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref, watch } from 'vue'
const switchWidth = ref(60)
const value1 = ref(false)
const value2 = ref(false)
const value3 = ref(false)

interface Props {
  label1: string
  label2: string
  label3: string
}

defineProps<Props>()

watch([value1, value2, value3], ([val1, val2, val3], [prevVal1, prevVal2, prevVal3]) => {
  if (value1.value && value2.value && value3.value) {
    if (val1 !== prevVal1) {
      switch (Math.floor(Math.random() * 2)) {
        case 0:
          value2.value = false;
          break;
        case 1:
          value3.value = false;
          break;
      }
      return;
    }
    if (val2 !== prevVal2) {
      switch (Math.floor(Math.random() * 2)) {
        case 0:
          value1.value = false;
          break;
        case 1:
          value3.value = false;
          break;
      }
      return;
    }
    if (val3 !== prevVal3) {
      switch (Math.floor(Math.random() * 2)) {
        case 0:
          value2.value = false;
          break;
        case 1:
          value1.value = false;
          break;
      }
      return;
    }
  }
})
</script>
<style lang="css" scoped>
.flexbox {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
}
.container {
  display: flex;
  justify-content: center;
}
.switch-label {
  margin-bottom: 60px;
  margin-left: 70px;
}
.mb-2 {
  margin-right: 40px;
}

label {
  font-weight: bold;
}

:deep(.el-switch__core .el-switch__action) {
  top: 0.6px;
}
</style>