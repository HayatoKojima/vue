<script lang="ts" setup>
import PageHeader from './src/PageHeader.vue';
</script>

<template>
  <div id="app">
    <PageHeader></PageHeader>
    <NuxtPage/>
  </div>
</template>

<style lang="scss">
  * {
    padding: 0;
    margin: 0;
    color: #ffffff;
  }
  #app {
    width: 100%;
    min-height: 100vh;
    background-color: #193C40;
  }
</style>
