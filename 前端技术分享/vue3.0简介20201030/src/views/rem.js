import {reactive} from 'vue';
function useRemoveStudent() {
    let state = reactive({
        stus:[
            {id:1, name:'zs', age:10},
            {id:2, name:'ls', age:20},
            {id:3, name:'ww', age:30},
        ]
    });
    function remStu(index) {
        state.stus = state.stus.filter((stu, idx) => idx !== index);
    }
    return {state, remStu};
}
export default useRemoveStudent;
