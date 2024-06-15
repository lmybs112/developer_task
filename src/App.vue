<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <div id="app">
    <RouterView />
  </div>
</template>

<style scoped>
*{
  outline:1px solidd red;
}
#app{
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
}
</style>
