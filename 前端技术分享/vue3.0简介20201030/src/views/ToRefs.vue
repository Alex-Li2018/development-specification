<template>
    <div>
        <p>{{ name }}</p>
        <p>{{ age }}</p>
        <button @click="myFn">按钮</button>
    </div>
</template>

<script>
import { reactive, toRef, toRefs } from "vue";
export default {
    name: "App",
    setup() {
        let obj = reactive({ name: "lnj", age: 18 });
        // let name = toRef(obj, 'name');
        // let age = toRef(obj, 'age');
        let { name, age } = toRefs(obj);

        function myFn() {
            name.value = 'zs';
            age.value = 666;
            // state.name.value = "zs";
            // state.age.value = 666;
            // console.log(obj);
            // console.log(state);
            // console.log(name);
            // console.log(age);
        }
        return { name, age, myFn };
    },
};
</script>

<style>
</style>
