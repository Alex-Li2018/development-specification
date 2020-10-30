<template>
  <a-layout id="components-layout-demo-top-side-2">
    <a-layout-header class="header">
      <img class="logo" src="https://static.vue-js.com/6280b990-ff19-11ea-85f6-6fac77c0c9b3.png"/>
      <a-menu
        theme="dark"
        mode="horizontal"
        v-model:selectedKeys="selectedKeys1"
        :style="{ lineHeight: '64px' }"
      >
        <a-menu-item key="1">
          vue3.0
        </a-menu-item>
        <!-- <a-menu-item key="2">
          nav 2
        </a-menu-item>
        <a-menu-item key="3">
          nav 3
        </a-menu-item> -->

      </a-menu>
    </a-layout-header>
    <a-layout>
      <a-layout-sider width="240" style="background: #fff">
        <a-menu
          mode="inline"
          v-model:selectedKeys="selectedKeys2"
          v-model:openKeys="openKeys"
          :style="{ height: '100%', borderRight: 0 }"
        >
          <a-sub-menu key="sub1">
            <template v-slot:title>
              <span><user-outlined />Vue3.0开篇</span>
            </template>
            <a-menu-item key="1" @click="goto('/vue2-highlights')">Vue3.0六大亮点</a-menu-item>
            <a-menu-item key="2" @click="goto('/get-start')">如何开始</a-menu-item>
            <a-menu-item key="3" @click="goto('/list-optionApi')">Vue2.0的代码</a-menu-item>
            <a-menu-item key="4" @click="goto('/list-compositionApi')">Vue3.0的代码</a-menu-item>
          </a-sub-menu>
          <a-sub-menu key="sub2">
            <template v-slot:title>
              <span><laptop-outlined />Composition-API</span>
            </template>
            <a-menu-item key="5" @click="goto('/composition-base')">Composition-API基本用法</a-menu-item>
            <a-menu-item key="6" @click="goto('/composition-extract')">Composition-API抽取</a-menu-item>
            <a-menu-item key="7" @click="goto('/composition-combine')">Composition-API组合</a-menu-item>
            <a-menu-item key="8" @click="goto('/composition-nature')">Composition-API本质</a-menu-item>
            <a-menu-item key="9" @click="goto('/composition-timing')">setup函数执行时机和注意点</a-menu-item>
            <a-menu-item key="10" @click="goto('/reactive')">reactive</a-menu-item>
            <a-menu-item key="11" @click="goto('/ref')">ref</a-menu-item>
            <a-menu-item key="12" @click="goto('/recursive-monitor')">递归监听</a-menu-item>
            <a-menu-item key="13" @click="goto('/non-recursive-monitor')">非递归监听</a-menu-item>
            <a-menu-item key="14" @click="goto('/shallow-ref')">shallowRef本质</a-menu-item>
            <a-menu-item key="15" @click="goto('/to-raw')">toRaw上</a-menu-item>
            <a-menu-item key="16" @click="goto('/to-raw2')">toRaw下</a-menu-item>
            <a-menu-item key="17" @click="goto('/mark-raw')">markRaw</a-menu-item>
            <a-menu-item key="18" @click="goto('/to-ref')">toRef</a-menu-item>
            <a-menu-item key="19" @click="goto('/to-refs')">toRefs</a-menu-item>
            <a-menu-item key="20" @click="goto('/custom-ref')">customRef上</a-menu-item>
            <a-menu-item key="21" @click="goto('/custom-ref2')">customRef下</a-menu-item>
            <a-menu-item key="22" @click="goto('/ref-dom')">ref获取元素</a-menu-item>
            <a-menu-item key="23" @click="goto('/readonly')">readonly</a-menu-item>
            <a-menu-item key="23-2" @click="goto('/computed')">computed</a-menu-item>
            <a-menu-item key="24" @click="goto('/watch')">watch</a-menu-item>
            <a-menu-item key="25" @click="goto('/watch-effect')">watchEffect</a-menu-item>
            <a-menu-item key="26" @click="goto('/principle')">响应式原理</a-menu-item>
          </a-sub-menu>
          <!-- <a-sub-menu key="sub3">
            <template v-slot:title>
              <span><notification-outlined />subnav 3</span>
            </template>
            <a-menu-item key="9">option9</a-menu-item>
            <a-menu-item key="10">option10</a-menu-item>
            <a-menu-item key="11">option11</a-menu-item>
            <a-menu-item key="12">option12</a-menu-item>
          </a-sub-menu> -->
        </a-menu>
      </a-layout-sider>
      <a-layout style="padding: 0 24px 24px">
        <a-breadcrumb style="margin: 16px 0">
          <a-breadcrumb-item>Home</a-breadcrumb-item>
          <a-breadcrumb-item>List</a-breadcrumb-item>
          <a-breadcrumb-item>App</a-breadcrumb-item>
        </a-breadcrumb>
        <a-layout-content
          :style="{ background: '#fff', padding: '24px', margin: 0, minHeight: '280px' }"
        >
          <router-view></router-view>
        </a-layout-content>
      </a-layout>
    </a-layout>
  </a-layout>
</template>
<script>
import { UserOutlined, LaptopOutlined, NotificationOutlined } from '@ant-design/icons-vue';
import { useRouter } from 'vue-router';

export default {
  components: {
    UserOutlined,
    LaptopOutlined,
    NotificationOutlined,
  },
  data() {
    return {
      selectedKeys1: ['2'],
      selectedKeys2: ['1'],
      collapsed: false,
      openKeys: ['sub1'],
    };
  },
  setup() {
    const router = useRouter();

    function goto(route) {
      router.push(route);
    }

    return {
       goto  //一定要要放在return里才能在模板上面使用
    }
  }
};
</script>

<style>
#components-layout-demo-top-side-2 .logo {
  height: 40px;
  background: rgba(255, 255, 255, 0.2);
  margin: 12px 28px 12px 0;
  float: left;
}
</style>
