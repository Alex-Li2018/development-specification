<template>
    <div>
        <form>
            <input type="text" v-model="state2.stu.id" />
            <input type="text" v-model="state2.stu.name" />
            <input type="text" v-model="state2.stu.age" />
            <input type="submit" @click="addStu" />
        </form>
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
import { reactive, ref } from "vue";
import useRemoveStudent from "./rem";
import useAddStudent from "./add";
export default {
    name: "App",
    setup() {
        let { state, remStu } = useRemoveStudent();
        let { state2, addStu } = useAddStudent(state);
        return { state, remStu, state2, addStu };
    },
};

// function useAddStudent(state) {
//     let state2 = reactive({
//         stu: {
//             id: "",
//             name: "",
//             age: "",
//         },
//     });
//     function addStu(e) {
//         e.preventDefault();
//         const stu = Object.assign({}, state2.stu);
//         state.stus.push(stu);
//         state2.stu.id = "";
//         state2.stu.name = "";
//         state2.stu.age = "";
//     }
//     return { state2, addStu };
// }

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
