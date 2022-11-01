<script lang="ts" setup>

import {getValue, getStroke, rotate, totalValue} from '../store/store' 

// プロパティの定義
interface Props {
    index: number;
}
const props = defineProps<Props>();


// デフォルトで45度回ってるから0度に戻す
const dashoffset:string =`calc(50% * 45 * ${Math.PI} / 180)`;


// 色
const stroke = computed(() => {
    return getStroke(props.index)
})


// 回転角度
const transform = computed(():string => {
    return `rotate(${rotate(props.index)} 50% 50%)`
})


// 円弧の長さ
const dasharray = computed(() => {
    // 全体の割合を算出
    const percent:number = getValue(props.index) / totalValue();
    // 百分率を角度に変換
    const degrees = {
        fill: 360 * percent,
        empty: 360 - 360 * percent
    };
    console.log(degrees)
    // 50%の具体的な値は取得せず文字列として渡して計算させる
    const arcs = {
        fill: `calc(50% * ${degrees.fill} * ${Math.PI} / 180)`,
        empty: `calc(50% * ${degrees.empty} * ${Math.PI} / 180)`
    };
    // 塗りの円弧と抜きの円弧のそれぞれを計算する式
    return `${arcs.fill} ${arcs.empty}`;
});
</script>

<template>
    <circle
        r="25%"
        cx="50%"
        cy="50%" 
        fill="transparent"
        stroke-width="50%"
        :stroke="stroke"
        :stroke-dasharray="dasharray"
        :stroke-dashoffset="dashoffset"
        :transform="transform" />
</template>
