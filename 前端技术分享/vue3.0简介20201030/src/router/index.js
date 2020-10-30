import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    component: () => import('../views/About.vue')
  },
  {
    path: '/vue2-highlights',
    name: 'vue2-highlights',
    component: () => import('../views/Vue3Highlights.vue')
  },
  {
    path: '/list-optionApi',
    name: 'list-optionApi',
    component: () => import('../views/ListOptionApi.vue')
  },
  {
    path: '/list-compositionApi',
    name: 'list-compositionApi',
    component: () => import('../views/ListCompositionApi.vue')
  },
  {
    path: '/get-start',
    name: 'get-start',
    component: () => import('../views/GetStart.vue')
  },
  {
    path: '/composition-base',
    name: 'composition-base',
    component: () => import('../views/CompositionBase.vue')
  },
  {
    path: '/composition-extract',
    name: 'composition-extract',
    component: () => import('../views/CompositionExtract.vue')
  },
  {
    path: '/composition-combine',
    name: 'composition-combine',
    component: () => import('../views/CompositionCombine.vue')
  },
  {
    path: '/composition-nature',
    name: 'composition-nature',
    component: () => import('../views/CompositionNature.vue')
  },
  {
    path: '/composition-timing',
    name: 'composition-timing',
    component: () => import('../views/CompositionTiming.vue')
  },
  {
    path: '/reactive',
    name: 'reactive',
    component: () => import('../views/Reactive.vue')
  },
  {
    path: '/ref',
    name: 'ref',
    component: () => import('../views/Ref.vue')
  },
  {
    path: '/difference',
    name: 'difference',
    component: () => import('../views/Difference.vue')
  },
  {
    path: '/recursive-monitor',
    name: 'recursive-monitor',
    component: () => import('../views/RecursiveMonitor.vue')
  },
  {
    path: '/non-recursive-monitor',
    name: 'non-recursive-monitor',
    component: () => import('../views/NonRecursiveMonitor.vue')
  },
  {
    path: '/shallow-ref',
    name: 'shallow-ref',
    component: () => import('../views/ShallowRef.vue')
  },
  {
    path: '/to-raw',
    name: 'to-raw',
    component: () => import('../views/ToRaw.vue')
  },
  {
    path: '/to-raw2',
    name: 'to-raw2',
    component: () => import('../views/ToRaw2.vue')
  },
  {
    path: '/mark-raw',
    name: 'mark-raw',
    component: () => import('../views/MarkRaw.vue')
  },
  {
    path: '/to-ref',
    name: 'to-ref',
    component: () => import('../views/ToRef.vue')
  },
  {
    path: '/to-refs',
    name: 'to-refs',
    component: () => import('../views/ToRefs.vue')
  },
  {
    path: '/custom-ref',
    name: 'custom-ref',
    component: () => import('../views/CustomRef.vue')
  },
  {
    path: '/custom-ref2',
    name: 'custom-ref2',
    component: () => import('../views/CustomRef2.vue')
  },
  {
    path: '/ref-dom',
    name: 'ref-dom',
    component: () => import('../views/RefDom.vue')
  },
  {
    path: '/readonly',
    name: 'readonly',
    component: () => import('../views/Readonly.vue')
  },
  {
    path: '/computed',
    name: 'computed',
    component: () => import('../views/Computed.vue')
  },
  {
    path: '/watch-effect',
    name: 'watch-effect',
    component: () => import('../views/WatchEffect.vue')
  },
  {
    path: '/watch',
    name: 'watch',
    component: () => import('../views/Watch.vue')
  },
  {
    path: '/principle',
    name: 'principle',
    component: () => import('../views/Principle.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
