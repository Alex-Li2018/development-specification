<template>
    <div>
        <p>{{ state }}</p>
        <button @click="myFn">按钮</button>
    </div>
</template>

<script>
/*
  1.什么是reactive?
    - reactive是Vue3中提供的实现响应式数据的方法 相当于2.0的Vue.observable()
    - 在Vue2中响应式数据是通过defineProperty来实现的
      而在Vue3中响应式数据是通过ES6的Proxy来实现的
  2.reactive注意点:
    - reactive参数必须是对象(json/arr)
    - 如果给reactive传递了其它对象
      + 默认情况下修改对象, 界面不会自动更新
      + 如果想更新, 可以通过重新赋值的方式
  * */
import { reactive } from "vue";
export default {
    name: "App",
    setup() {
        // 创建一个响应式数据
        // 本质: 就是将传入的数据包装成一个Proxy对象
        let state = reactive(123);
        // let state = reactive({
        //   age: 123
        // });
        // let state = reactive([1, 3, 5]);
        function myFn() {
            state = 666; // 由于在创建响应式数据的时候传递的不是一个对象, 所以无法实现响应式
            // state.age = 666;
            // state[0] = 666;
            console.log(state)
        }
        return { state, myFn };
    },
};
</script>

<style>
</style>
