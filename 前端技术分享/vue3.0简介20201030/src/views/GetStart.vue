<script>
import { ref } from "vue";
export default {
    setup() {
        const msg = ref("Hello World");

        return {
            msg
        };
    },
    render() {
        return (
            <div style="padding: 40px">
                Vue3.0-快速上手<br/>
                    - 创建Vue3的3种方式<br/>
                        &nbsp;&nbsp;&nbsp;&nbsp;+ Vite<br/>
                        &nbsp;&nbsp;&nbsp;&nbsp;+ Webpack<br/>
                        &nbsp;&nbsp;&nbsp;&nbsp;+ Vue-CLI<br/><br/>

                    1.Vite<br/>
                    - Vite是Vue作者开发的一款意图取代webpack的工具<br/>
                    - 其实现原理是利用ES6的import会发送请求去加载文件的特性,<br/>
                    拦截这些请求, 做一些预编译, 省去webpack冗长的打包时间<br/>

                    - 安装Vite<br/>
                        npm install -g create-vite-app<br/>
                    - 利用Vite创建Vue3项目<br/>
                        create-vite-app projectName<br/>
                    - 安装依赖运行项目<br/>
                        cd projectName<br/>
                        npm install<br/>
                        npm run dev<br/><br/>

                    2. Webpack<br/>
                    git clone https://github.com/vuejs/vue-next-webpack-preview.git projectName<br/>
                    cd projectName<br/>
                    npm install<br/>
                    npm run dev<br/><br/>

                    3. Vue-CLI<br/>
                    npm install -g @vue/cli<br/>
                    vue create projectName<br/>
                    cd projectName<br/>
                    vue add vue-next<br/>
                    npm run serve<br/>
            </div>
        );
    },
};
</script>

<!--
附录: PatchFlags
export const enum PatchFlags {
  TEXT = 1,// 动态文本节点
  CLASS = 1 << 1, // 2  // 动态 class
  STYLE = 1 << 2, // 4 // 动态 style
  PROPS = 1 << 3, // 8 // 动态属性，但不包含类名和样式
  FULL_PROPS = 1 << 4, // 16 // 具有动态 key 属性，当 key 改变时，需要进行完整的 diff 比较。
  HYDRATE_EVENTS = 1 << 5, // 32 // 带有监听事件的节点
  STABLE_FRAGMENT = 1 << 6, // 64 // 一个不会改变子节点顺序的 fragment
  KEYED_FRAGMENT = 1 << 7, // 128 // 带有 key 属性的 fragment 或部分子字节有 key
  UNKEYED_FRAGMENT = 1 << 8, // 256 // 子节点没有 key 的 fragment
  NEED_PATCH = 1 << 9, // 512 // 一个节点只会进行非 props 比较
  DYNAMIC_SLOTS = 1 << 10, // 1024 // 动态 slot
  HOISTED = -1, // 静态节点
  // 指示在 diff 过程应该要退出优化模式
  BAIL = -2
}
-->