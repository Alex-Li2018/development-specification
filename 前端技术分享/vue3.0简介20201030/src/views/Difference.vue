<template>
  <div>
    <!--
    ref和reactive区别:
    如果在template里使用的是ref类型的数据, 那么Vue会自动帮我们添加.value
    如果在template里使用的是reactive类型的数据, 那么Vue不会自动帮我们添加.value

    Vue是如何决定是否需要自动添加.value的
    Vue在解析数据之前, 会自动判断这个数据是否是ref类型的,
    如果是就自动添加.value, 如果不是就不自动添加.value

    Vue是如何判断当前的数据是否是ref类型的
    通过当前数据的__v_ref来判断的
    如果有这个私有的属性, 并且取值为true, 那么就代表是一个ref类型的数据
    -->
    <p>{{age}}</p>
    <button @click="myFn">按钮</button>
  </div>
</template>

<script>
  /*
  1.ref和reactive区别
  - 如果是reactive在template中不会自动添加.value

  2.reactive为什么不会自动添加.value?
  - 因为Vue在添加的时候首先会判断当前数据类型是ref还是reactive

  3.Vue如何判断?
  通过包装后的是有属性
  __v-isRef

  4.我们如何判断数据到底是ref还是reactive?
  通过isRef / isReactive 方法
  * */
  import {isRef, isReactive} from 'vue';
  import {reactive} from 'vue';
  // import {ref} from 'vue';
export default {
  name: 'App',
  setup() {
    // ref(18) -> reactive({value: 18})
    // let age = ref(18);
    let age = reactive({value: 18});
    function myFn() {
        console.log(isRef(age));
        console.log(isReactive(age));
        age.value = 666;
    }
    return {age, myFn}
  }
}
</script>

<style>

</style>
