import {ref} from 'vue';

// パイの情報の形
interface RoulettePie {
    name: string,
    value: number
}


// パイの内容を定義
export const Roulette = ref<RoulettePie[]>([{
    name: '',
    value: 1
}])


export const getStroke = (index:number):string => {
    const colors: string[] = [
        '#D94C6D',
        '#D9C457',
        '#B041D9',
        '#86DA93',
        '#3E36D9',
    ];
    return colors[index];
} 


// パイを追加
export const add = ():void => {
    const newPie: RoulettePie = {
        name: '',
        value: 1
    }
    Roulette.value.push(newPie);
}

// インデックスでパイを削除
export const remove = (index: number):void => {
    Roulette.value.splice(index, 1)
}

// パイをリセット
export const reset = ():void => {
    Roulette.value = [{
        name: '',
        value: 1
    }];
}

// パイの傾き
export const rotate = (index:number):number => {
    let previousTotalValue: number = 0;
    for (let i:number = 0; i < index; i++) {
        previousTotalValue += Roulette.value[i].value;
    }
    return previousTotalValue / totalValue() * 360;
}

// インデックスからパイの値を取得
export const getValue = (index:number):number => {
    return Roulette.value[index].value;
}

// valueの合計
export const totalValue = ():number => {
    let total:number = 0;
    Roulette.value.forEach(pie => {
        total += pie.value;
    });
    return total;
}
