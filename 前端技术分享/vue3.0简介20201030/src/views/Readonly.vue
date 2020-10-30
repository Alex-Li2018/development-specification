<template>
    <div>
        <p>{{ state.name }}</p>
        <p>{{ state.attr.age }}</p>
        <p>{{ state.attr.height }}</p>
        <button @click="myFn">按钮</button>
    </div>
</template>

<script>
/*
  1.readonly
  - 只读数据

  2.isReadonly
  - 判断是否是readonly

  3.shallowReadonly
  - 非递归保护
  * */
import { readonly, isReadonly, shallowReadonly } from "vue";
export default {
    name: "App",
    setup() {
        // readonly:用于创建一个只读的数据, 并且是递归只读
        let state = readonly({ name: "小明", attr: { age: 18, height: 1.88 } });
        // shallowReadonly: 用于创建一个只读的数据, 但是不是递归只读的
        // shallowReadonly: 用于创建一个只读的数据, 但是不是递归只读的
        // let state = shallowReadonly({name:'lnj', attr:{age:18, height: 1.88}});
        // readonly: 属性保护, 不能给属性重新赋值
        function myFn() {
            state.name = "小红";
            state.attr.age = 666;
            state.attr.height = 1.66;
            console.log(state);
            console.log(isReadonly(state));
        }
        return { state, myFn };
    },
};
</script>

<style>
</style>
