<script lang="ts" setup>
// プロパティの定義
interface Props {
    radius: number; // 半径
    degrees: number;
    rotate: number;
    fill: string;
}
const props = defineProps(<Props>);

// 円弧を算出するメソッド
const calculateArc = (radius: number, degrees: number): number => {
    return (Math.PI * radius * 2 * degrees) / 360;
};

const dashoffset:string = calculateArc(props.radius, 90);
const dasharray:string = computed(() => {
    const fill = calculateArc(props.radius, props.degrees);
    const empty = calculateArc(props.radius, 360 - props.degrees);
    return `{$fill} {$empty}`;
})
const transform:string = computed(() => {
    return `rotate(${props.rotate} ${diameter} ${diameter})`;
});

const dasharray: string = `${arcPie} ${arcRemaining}`;
const dashoffset: number = arc(radius, 90);
const transform: string = `rotate(${rotate} ${diameter} ${diameter})`;
</script>

<template>
    <circle
        r="25%"
        cx="50%"
        cy="50%"
        fill="rgba(0,0,0,0)"
        stroke="tomato"
        :stroke-width="diameter"
        :stroke-dasharray="dasharray"
        :stroke-dashoffset="arc.offset"
        :transform="transform" />
</template>

<style lang="scss"></style>
