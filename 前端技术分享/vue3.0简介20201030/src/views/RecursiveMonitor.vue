<template>
    <div>
        <p>{{ state.a }}</p>
        <p>{{ state.gf.b }}</p>
        <p>{{ state.gf.f.c }}</p>
        <p>{{ state.gf.f.s.d }}</p>
        <button @click="myFn">按钮</button>
    </div>
</template>

<script>
/*
  1.递归监听
  默认情况下, 无论是通过ref还是reactive都是递归监听

  2. 
  如果数据量比较大, 非常消耗性能

  3.非递归监听
  * */
import { reactive } from "vue";
// import {ref} from 'vue';
export default {
    name: "App",
    setup() {
        // let state = reactive({
            let state = ref({
            a: "a",
            gf: {
                b: "b",
                f: {
                    c: "c",
                    s: {
                        d: "d",
                    },
                },
            },
        });
        function myFn() {
            // state.a = '1';
            // state.gf.b = '2';
            // state.gf.f.c = '3';
            // state.gf.f.s.d = '4';

            state.value.a = '1';
            state.value.gf.b = '2';
            state.value.gf.f.c = '3';
            state.value.gf.f.s.d = '4';

            console.log(state);
            console.log(state.gf);
            console.log(state.gf.f);
            console.log(state.gf.f.s);
        }
        return { state, myFn };
    },
};
</script>

<style>
</style>
