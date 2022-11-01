<script setup lang="ts"></script>

<template>
    <nav>
        <NuxtLink to=“/”>
        index
        </NuxtLink>
        <NuxtLink to=“/sss”>
        secondary
        </NuxtLink>
    </nav>
</template>

<style scoped lang="scss">
nav {
    a {
        display: block;
        padding: 4px;
        border: 1px solid #000;
        margin: 4px;

    }
}
</style>
