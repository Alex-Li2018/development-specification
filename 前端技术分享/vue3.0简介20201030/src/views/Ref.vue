<template>
    <div>
        <!--    <p>{{state.age}}</p>-->
        <!--
    注意点:
    如果是通过ref创建的数据, 那么在template中使用的时候不用通过.value来获取
    因为Vue会自动给我们添加.value
    -->
        <p>{{ age }}</p>
        <button @click="myFn">按钮</button>
    </div>
</template>

<script>
/*
  1.什么是ref?
    - ref和reactive一样, 也是用来实现响应式数据的方法
    - 由于reactive必须传递一个对象, 所以导致在企业开发中
      如果我们只想让某个变量实现响应式的时候会非常麻烦
      所以Vue3就给我们提供了ref方法, 实现对简单值的监听
  2.ref本质:
    - ref底层的本质其实还是reactive
      系统会自动根据我们给ref传入的值将它转换成
      ref(xx) -> reactive({value:xx})
  3.ref注意点:
    - 在Vue中使用ref的值不用通过value获取
    - 在JS中使用ref的值必须通过value获取
  * */
// import {reactive} from 'vue';
import { ref, reactive } from "vue";
export default {
    name: "App",
    setup() {
        // let age = reactive({
        //   value: 18
        // })
        /*
    ref本质:
    ref本质其实还是reactive
    当我们给ref函数传递一个值之后, ref函数底层会自动将ref转换成reactive
    ref(18) -> reactive({value: 18})
    * */
        let age = ref(18);
        function myFn() {
            // state.age = 666;
            // age = 666;
            age.value = 666;
            console.log(age);
        }
        return { age, myFn };
    },
};
</script>

<style>
</style>
