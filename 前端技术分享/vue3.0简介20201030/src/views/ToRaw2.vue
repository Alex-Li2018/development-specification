<template>
    <div>
        <p>{{ state.name }}</p>
        <p>{{ state.age }}</p>
        <button @click="myFn">按钮</button>
    </div>
</template>

<script>
import { reactive, toRaw, ref } from "vue";
export default {
    name: "App",
    setup() {
        let obj = { name: "小明", age: 18 };
        let state = ref(obj);
        // 注意点: 如果想通过toRaw拿到ref类型的原始数据(创建时传入的那个数据)
        //        那么就必须明确的告诉toRaw方法, 要获取的是.value的值
        //        因为经过Vue处理之后, .value中保存的才是当初创建时传入的那个原始数据
        // let obj2 = toRaw(state);
        let obj2 = toRaw(state.value);

        console.log(obj);
        console.log(state);
        console.log(obj2);
        console.log(obj2 === obj);

        function myFn() {
            obj2.name = "zs";
            console.log(obj2); // {name: "zs", age: 18}
            console.log(state); // {name: "zs", age: 18}
        }
        return { state, myFn };
    },
};
</script>

<style>
</style>
