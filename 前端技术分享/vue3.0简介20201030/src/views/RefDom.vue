<template>
    <div ref="box">我是div</div>
</template>

<script>
/*
  1.获取元素
  在Vue2.x中我们可以通过给元素添加ref='xxx',
  然后再代码中通过refs.xxx的方式来获取元素
  在Vue3.x中我们也可以通过ref来获取元素
  * */
import { ref, onMounted } from "vue";
export default {
    name: "App",
    /*
  beforeCreate
  setup
  Created
  * */
    setup() {
        // console.log(this.$refs.box);
        let box = ref(null); // reactive({value: null})

        onMounted(() => {
            console.log("onMounted", box.value);
        });

        console.log(box);

        return { box };
    },
};
</script>

<style>
</style>
