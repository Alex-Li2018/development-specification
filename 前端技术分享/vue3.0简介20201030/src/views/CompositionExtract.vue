<template>
    <div>
        <ul>
            <li
                v-for="(stu, index) in state.stus"
                :key="stu.id"
                @click="remStu(index)"
            >
                {{ stu.name }} - {{ stu.age }}
            </li>
        </ul>
    </div>
</template>

<script>
import { reactive } from "vue";
export default {
    name: "App",
    setup() {
        // ref函数注意点:
        // ref函数只能监听简单类型的变化, 不能监听复杂类型的变化(对象/数组)
        let state = reactive({
            stus: [
                { id: 1, name: "zs", age: 10 },
                { id: 2, name: "ls", age: 20 },
                { id: 3, name: "ww", age: 30 },
            ],
        });
        function remStu(index) {
            state.stus = state.stus.filter((stu, idx) => idx !== index);
        }

        // let { state, remStu } = useRemoveStudent();

        return { state, remStu };
    },
};

// function useRemoveStudent() {
//     let state = reactive({
//         stus: [
//             { id: 1, name: "zs", age: 10 },
//             { id: 2, name: "ls", age: 20 },
//             { id: 3, name: "ww", age: 30 },
//         ],
//     });
//     function remStu(index) {
//         state.stus = state.stus.filter((stu, idx) => idx !== index);
//     }
//     return { state, remStu };
// }
</script>

<style>
</style>
