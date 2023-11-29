import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: '首页',
      component: HomeView
    },
    {
      path: '/sans-serif',
      name: '无衬线',
      component: () => import('../views/SansSerifView.vue')
    },
    {
      path: '/serif',
      name: '衬线',
      component: () => import('../views/SerifView.vue')
    },
    {
      path: '/monospace',
      name: '等宽',
      component: () => import('../views/MonospaceView.vue')
    },
    {
      path: '/ja-kr',
      name: '日韩',
      component: () => import('../views/JaKrView.vue')
    },
    {
      path: '/character-set',
      name: '编码',
      component: () => import('../views/CharacterSetView.vue')
    },
  ]
})

export default router