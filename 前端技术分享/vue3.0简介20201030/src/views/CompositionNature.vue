<template>
    <div>
        <p>{{ name }}</p>
        <button @click="myFn1">按钮</button>
        <p>{{ age }}</p>
        <button @click="myFn2">按钮</button>
    </div>
</template>

<script>
/*
  1.Composition API 和Option API混合使用
  2.Composition API本质 (组合API/注入API)
  3.setup执行时机
  4.setup注意点
  * */
import { ref } from "vue";
export default {
    name: "App",
    data: function () {
        return {
            name: "小明",
            // age: 18
        };
    },
    methods: {
        myFn1() {
            alert("小明");
        },
        // myFn2() {
        //   alert(18);
        // }
    },
    setup() {
        let age = ref(18);
        function myFn2() {
            alert(18);
        }
        return { age, myFn2 };
    },
};
</script>

<style>
</style>
