<template>
    <div>
        <p>{{ state }}</p>
        <button @click="myFn">按钮</button>
    </div>
</template>

<script>
import { reactive, ref, toRef } from "vue";
export default {
    name: "App",
    setup() {
        let obj = reactive({ name: "小明" });
        let state = toRef(obj, "name");

        function myFn() {
            state.value = "zs";
            console.log(obj);
            
            console.log(state);
        }
        return { state, myFn };
    },
};
</script>

<style>
</style>
