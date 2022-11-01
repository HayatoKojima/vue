<script setup lang="ts">
const {data, pending} = await useFetch(
    'https://www.edsm.net/api-v1/sphere-systems'
);
console.log(data.value);
</script>

<template>
    <div id="systems">
        <div v-for="d in data">
            <div>Name: {{ d.name }}</div>
            <div>Distance: {{ d.distance }}</div>
        </div>
    </div>
</template>

<style scoped lang="scss">
#systems {
    display: flex;
    flex-direction: column;
    gap: 10px;
    > div {
        padding: 10px;
        border: 1px solid #ffffff;
        color: #ffffff;
    }
}
</style>
