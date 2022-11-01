<script lang="ts" setup>

import {Roulette, add, remove, reset} from '../store/store' 

</script>

<template>
    <div id="pie-controller">
        
        <template v-for="(pie, index) in Roulette" :key="pie">
            <div>
                <input
                    type="text"
                    v-model="pie.name" />
                <input
                    type="range"
                    v-model="pie.value"
                    min="1"
                    max="10" />
                <span>{{ pie.value }}</span>
                <button v-if="Roulette.length > 1" class="remove-pie" @click="remove(index)">
                    x
                </button>
            </div>
        </template>
        <button class="add-pie" @click="add">+</button>
        <button class="add-pie" @click="reset">reset</button>
    </div>
</template>


<style lang="scss">
    #pie-controller {
        width: 200px;
        border: 1px solid #88F2E8;
    }
    button {
        box-sizing: border-box;
        border: none;
        border-radius: 6px;
        &.add-pie {
            width: 200px;
            height: 30px;
            background-color: #2A8C82;
        }
        &.remove-pie {
            color: red;
            width: 20px;
            height: 20px;
        }
    }
</style>