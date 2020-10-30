<template>
    <div>
        <p>{{ state }}</p>
        <button @click="myFn">按钮</button>
    </div>
</template>

<script>
import { shallowReactive } from "vue";
import { shallowRef } from "vue";
export default {
    name: "App",
    setup() {
        // ref -> reactive
        // ref(10) ->  reactive({value:10})
        // shallowRef ->  shallowReactive
        // shallowRef(10)  ->  shallowReactive({value: 10})
        // 所以如果是通过shallowRef创建的数据, 它监听的是.value的变化
        // 因为底层本质上value才是第一层
        let state = shallowRef({
            a: "a",
            gf: {
                b: "b",
                f: {
                    c: "c",
                    s: {
                        d: "d",
                    },
                },
            },
        });
        let state2 = shallowReactive({
            value: {
                a: "a",
                gf: {
                    b: "b",
                    f: {
                        c: "c",
                        s: {
                            d: "d",
                        },
                    },
                },
            },
        });

        function myFn() {}
        return { state, myFn };
    },
};
</script>

<style>
</style>
