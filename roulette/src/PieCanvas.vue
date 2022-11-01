<script lang="ts" setup>

import Pie from './Pie.vue';
import {Roulette} from '../store/store' 

</script>

<template>
    <div id="pie-wrapper">
        <svg>
            <template v-for="(pie, index) in Roulette">
                <Pie :index="index"></Pie>
            </template>
        </svg>
    </div>
</template>


<style lang="scss">
    #pie-wrapper {
        flex: 1;
    }
    svg {
        display: block;
        width: 100%;
    }
</style>