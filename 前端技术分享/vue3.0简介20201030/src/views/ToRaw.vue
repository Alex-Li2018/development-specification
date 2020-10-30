<template>
    <div>
        <p>{{ state.name }}</p>
        <p>{{ state.age }}</p>
        <button @click="myFn">按钮</button>
    </div>
</template>

<script>
/*
  1.toRaw
  从Reactive 或 Ref中得到原始数据

  2.toRaw作用
  做一些不想被监听的事情(提升性能)
  * */
import { reactive, toRaw } from "vue";
export default {
    name: "App",
    setup() {
        // let obj = ;
        /*
      ref/reactive数据类型的特点:
      每次修改都会被追踪, 都会更新UI界面, 但是这样其实是非常消耗性能的
      所以如果我们有一些操作不需要追踪, 不需要更新UI界面, 那么这个时候,
      我们就可以通过toRaw方法拿到它的原始数据, 对原始数据进行修改
      这样就不会被追踪, 这样就不会更新UI界面, 这样性能就好了
      * */
        let state = reactive({ name: "小明", age: 18 });
        let obj2 = toRaw(state);
        console.log(obj === obj2); // true

        // console.log(obj === state); // false
        // state和obj的关系:
        // 引用关系, state的本质是一个Proxy对象, 在这个Proxy对象中引用了obj

        function myFn() {
            // 如果直接修改obj, 那么是无法触发界面更新的
            // 只有通过包装之后的对象来修改, 才会触发界面的更新
            // obj2.name = "zs";
            state.name = 'zs';
            console.log(obj2); // {name: "zs", age: 18}
            console.log(state); // {name: "zs", age: 18}
            // console.log(state);
        }
        return { state, myFn };
    },
};
</script>

<style>
</style>
