<script setup lang="ts">
const counter = ref(1);
</script>

<template>
    <div id="counter">
        <div id="counter-num">{{ counter }}</div>
        <div id="counter-button">
            <button @click="counter--">-</button>
            <button @click="counter++">+</button>
        </div>
    </div>
</template>

<style scoped lang="scss">
#counter {
    width: 200px;
    height: auto;
    padding: 10px;
    margin: 30px;
    color: #ffffff;
    background-color: #038c73;
    border-radius: 10px;

    &-num {
        text-align: center;
        font-size: 40px;
    }
    &-button {
        display: flex;
        gap: 10px;
        > button {
            flex: 1;
            padding: 4px;
            background-color: #02735e;
            border: none;
            color: #ffffff;
            font-size: 20px;
            border-radius: 10px;

            &:hover {
                box-shadow: 0 0 3px #fff;
            }
        }
    }
}
</style>
