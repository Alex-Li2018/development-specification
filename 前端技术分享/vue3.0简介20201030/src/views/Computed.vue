<template>
    <div>
        <p>{{ age }}</p>
        <p>computed后的年龄{{ agePlus }}</p>
        <button @click="myFn">按钮</button>
    </div>
</template>

<script>
import { ref, computed } from "vue";
export default {
    name: "App",
    setup() {
        let age = ref(18);
        function myFn() {
            age.value++;
            console.log(age);
        }
        
        let agePlus = computed(() => age.value + 1);
        return { age, agePlus, myFn };
    },
};
</script>

<style>
</style>
