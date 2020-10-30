<script>
import { ref } from "vue";

function Test(props) {
    console.log(props);
    return <div>hello{props.title}</div>
}
export default {
    setup() {
        let visible = ref(false);
        function showImg() {
            visible.value = !visible.value;
        }
        return { visible, showImg }
    },
    render() {
        const lt = "<<";
        return (
            <div style="padding: 40px; position: relative">
            <Test title="小明" />
            <img style={{ opacity: this.visible ? 1 : 0 }} onClick={() => this.showImg()} class="img" src={require('./diff.png')} />
                1. Vue3.0六大亮点<br/>
                    - Performance：性能比Vue 2.x快1.2~2倍<br/>
                    - Tree shaking support：按需编译,体积比Vue2.x更小<br/>
                    - Composition API: 组合API(类似React Hooks) <a href="https://composition-api.vuejs.org/zh/" target="_blank">（https://composition-api.vuejs.org/zh/）</a><br/>
                    - Better TypeScript support：更好的 Ts 支持<br/>
                    - Custom Renderer API：暴露了自定义渲染API<a href="http://www.zhufengpeixun.com/jg-vue/vue-analyse/custom-render.html#%E4%B8%80-%E8%87%AA%E5%AE%9A%E4%B9%89%E6%B8%B2%E6%9F%93%E5%99%A8" target="_blank">（如何实现一个自定义渲染器）</a><br/>
                    - Fragment, Teleport(Protal), Suspense：更先进的组件<br/><br/>

                2. Vue3.0是如何变快的?<br/><br/>
                    - diff算法优化: <a href="https://vue-next-template-explorer.netlify.app/" target="_blank">https://vue-next-template-explorer.netlify.app/</a><br/>
                        &nbsp;&nbsp;&nbsp;&nbsp;+ Vue2中的虚拟dom是进行全量的对比<br/>
                        &nbsp;&nbsp;&nbsp;&nbsp;+ Vue3新增了静态标记(PatchFlag),<br/>
                        在与上次虚拟节点进行对比时候，只对比带有patch flag的节点<br/>
                        并且可以通过flag的信息得知当前节点要对比的具体内容<br/><br/>
                    - hoistStatic 静态提升<br/>
                        &nbsp;&nbsp;&nbsp;&nbsp;+ Vue2中无论元素是否参与更新, 每次都会重新创建, 然后再渲染<br/>
                        &nbsp;&nbsp;&nbsp;&nbsp;+ Vue3中对于不参与更新的元素, 会做静态提升, 只会被创建一次, 在渲染时直接复用即可<br/><br/>
                    - cacheHandlers 事件侦听器缓存<br/>
                        &nbsp;&nbsp;&nbsp;&nbsp;+ 默认情况下onClick会被视为动态绑定, 所以每次都会去追踪它的变化<br/>
                        但是因为是同一个函数，所以没有追踪变化, 直接缓存起来复用即可<br/><br/>
                    - ssr渲染<br/>
                        &nbsp;&nbsp;&nbsp;&nbsp;+ 当有大量静态的内容时候，这些内容会被当做纯字符串推进一个buffer里面，<br/>
                        即使存在动态的绑定，会通过模板插值嵌入进去。这样会比通过虚拟dom来渲染的快上很多很多。<br/>
                        &nbsp;&nbsp;&nbsp;&nbsp;+ 当静态内容大到一定量级时候，会用_createStaticVNode方法在客户端去生成一个static node，<br/>
                        这些静态node，会被直接innerHtml，就不需要创建对象，然后根据对象渲染。<br/><br/><br/>


                3. `附录: enum PatchFlags<br/>
                    TEXT = 1,// 动态文本节点<br/>
                    CLASS = 1 { lt } 1, // 2  // 动态 class<br/>
                    STYLE = 1 { lt } 2, // 4 // 动态 style<br/>
                    PROPS = 1 { lt } 3, // 8 // 动态属性，但不包含类名和样式<br/>
                    FULL_PROPS = 1 { lt } 4, // 16 // 具有动态 key 属性，当 key 改变时，需要进行完整的 diff 比较。<br/>
                    HYDRATE_EVENTS = 1 { lt } 5, // 32 // 带有监听事件的节点<br/>
                    STABLE_FRAGMENT = 1 { lt } 6, // 64 // 一个不会改变子节点顺序的 fragment<br/>
                    KEYED_FRAGMENT = 1 { lt } 7, // 128 // 带有 key 属性的 fragment 或部分子字节有 key<br/>
                    UNKEYED_FRAGMENT = 1 { lt } 8, // 256 // 子节点没有 key 的 fragment<br/>
                    NEED_PATCH = 1 { lt } 9, // 512 // 一个节点只会进行非 props 比较<br/>
                    DYNAMIC_SLOTS = 1 { lt } 10, // 1024 // 动态 slot<br/>
                    HOISTED = -1, // 静态节点<br/>
                    // 指示在 diff 过程应该要退出优化模式<br/>
                    BAIL = -2`<br/>

            </div>
        );
    },
};
</script>

<style>
    .img {
        position: absolute;
        width: 700px;
        right: 0;
        top: 0;
    }
</style>

