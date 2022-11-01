<script lang="ts" setup>
const degrees: number = 90; // 中心核
const rotate: number = 45; // 回転
const boxSize: number = 200; // 親のサイズ

const arc = (radius: number, degrees: number): number => {
    return (Math.PI * radius * 2 * degrees) / 360;
};

const viewBox: string = `0 0 ${boxSize} ${boxSize}`;
const diameter: number = boxSize / 2;
const radius: number = diameter / 2;
const arcPie: number = arc(radius, degrees);
const arcRemaining: number = arc(radius, 360 - degrees);
const dasharray: string = `${arcPie} ${arcRemaining}`;
const dashoffset: number = arc(radius, 90);
const transform: string = `rotate(${rotate} ${diameter} ${diameter})`;
</script>

<template>
    <div>
        <svg :width="boxSize" :height="boxSize" :viewBox="viewBox">
            <circle :r="diameter" :cx="diameter" :cy="diameter" fill="#ccc" />
            <circle
                class="pie"
                :r="radius"
                :cx="diameter"
                :cy="diameter"
                fill="rgba(0,0,0,0)"
                stroke="tomato"
                opacity="0.8"
                :stroke-dashoffset="dashoffset"
                :stroke-width="diameter"
                :stroke-dasharray="dasharray"
                :transform="transform" />
        </svg>
    </div>
</template>

<style lang="scss">
.pie {
    &:hover {
        cursor: pointer;
        opacity: 1;
        scale: 1.05;
    }
}
</style>
