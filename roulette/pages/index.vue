<script lang="ts" setup>
import PieWraper from '../src/PieController.vue';
import PieCanvas from '../src/PieCanvas.vue'
</script>

<template>
    <div id="page">
        <p>some text...</p>
        <div id="roulette">
            <PieWraper></PieWraper>
            <PieCanvas></PieCanvas>
        </div>
    </div>
</template>


<style lang="scss">
#page {
    width: 100%;
    max-width: 1000px;
    margin: 0 auto;
    #roulette {
        display: flex;
        flex-wrap: nowrap;
    }
}
</style>