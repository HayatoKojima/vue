<script setup lang="ts">
import artboard from './src/components/artboard';
</script>

<template>
    <div id="app">
        <artboard></artboard>
    </div>
</template>

<style lang="scss">
* {
    margin: 0;
    padding: 0;
}
#app {
    box-sizing: border-box;
    width: 100%;
    min-height: 100vh;
}
</style>
