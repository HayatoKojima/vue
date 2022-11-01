<script setup lang="ts">
import {initializeArtboard} from './../lib/initializeArtboard.js';

onMounted(() => {
    initializeArtboard();
});
</script>

<template>
    <div id="drawing"></div>
</template>

<style lang="scss"></style>
