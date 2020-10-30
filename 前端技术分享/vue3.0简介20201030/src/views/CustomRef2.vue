<template>
    <p>{{ text }}</p>
    <button @click="myFn">按钮</button>
</template>

<script>
/*
  1.customRef
  返回一个ref对象,可以显式地控制依赖追踪和触发响应
  * */
import { ref, customRef } from "vue";

function useDebouncedRef(value, delay = 200) {
  let timeout
  return customRef((track, trigger) => {
    return {
      get() {
        track()
        return value
      },
      set(newValue) {
        clearTimeout(timeout)
        timeout = setTimeout(() => {
          value = newValue
          trigger()
        }, delay)
      }
    }
  })
}

export default {
  setup() {
    let text = useDebouncedRef(0);
    function myFn() {
        text.value += 1;
    }
    return {
      text,
      myFn
    }
  }
}

</script>