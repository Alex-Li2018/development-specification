<template>
    <div>
        <p>{{ age }}</p>
    </div>
</template>

<script>
import { ref, watchEffect } from "vue";
export default {
    name: "App",
    setup() {
        let age = ref(18);
        // watchEffect(() => console.log(age.value));

        // setTimeout(() => {
        //     age.value++;
        // }, 100);

        
        const stop = watchEffect(() => console.log(age.value));

        setInterval(() => {
            if (age.value === 20) {
                stop();
                return;
            }
            age.value++;
        }, 100);

        return { age };
    },
};
    // 第一点我们可以从示例代码中看到 watchEffect 不需要指定监听的属性，他会自动的收集依赖， 只要我们回调中引用到了 响应式的属性， 那么当这些属性变更的时候，这个回调都会执行，而 watch 只能监听指定的属性而做出变更(v3开始可以同时指定多个)。
    // 第二点就是 watch 可以获取到新值与旧值（更新前的值），而 watchEffect 是拿不到的。
    // 第三点是 watchEffect 如果存在的话，在组件初始化的时候就会执行一次用以收集依赖（与computed同理），而后收集到的依赖发生变化，这个回调才会再次执行，而 watch 不需要，因为他一开始就指定了依赖。
</script>

<style>
</style>
