<template>
    <div>
        <p>{{ state }}</p>
        <button @click="myFn">按钮</button>
    </div>
</template>

<script>
/*
  1.markRaw
  将数据标记为永远不能追踪的数据
  一般在编写自己的第三方库时使用
  * */
import { reactive, markRaw } from "vue";
export default {
    name: "App",
    setup() {
        let obj = { name: "lnj", age: 18 };
        obj = markRaw(obj);
        let state = reactive(obj);
        function myFn() {
            state.name = "zs";
        }
        return { state, myFn };
    },
};
</script>

<style>
</style>
