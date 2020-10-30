<template>
    <div>
        <p>{{ age }}</p>
        <p>{{ state.name }}</p>
        <button @click="myFn">按钮</button>
    </div>
</template>

<script>
import { ref, reactive, watch } from "vue";
export default {
    name: "App",
    setup() {
        let age = ref(18);

        watch(age, (current, prev) => {
            console.log('当前：', current);
            console.log('之前：', prev);
        });

        let state = reactive({
            name: '小明'
        });
        
        watch(() => state.name, (current, prev) => {
            console.log('当前：', current);
            console.log('之前：', prev);
        });

        watch([age, () => state.name], ([current, current2], [prev, prev2]) => {
            console.log('当前：', current, current2);
            console.log('之前：', prev, prev2);
        })



        function myFn() {
            age.value++;
            state.name = '小红';
        }

        return { age, state, myFn };
    },
};
</script>

<style>
</style>
