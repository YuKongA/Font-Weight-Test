import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  scrollBehavior() {
    return { top: 0 }
  },
  routes: [
    {
      path: '/',
      name: '概览',
      component: HomeView
    },
    {
      path: '/sans-serif',
      name: '无衬线',
      component: () => import('../views/FontSpecimenView.vue'),
      props: { family: 'sans-serif' }
    },
    {
      path: '/serif',
      name: '衬线',
      component: () => import('../views/FontSpecimenView.vue'),
      props: { family: 'serif' }
    },
    {
      path: '/monospace',
      name: '等宽',
      component: () => import('../views/FontSpecimenView.vue'),
      props: { family: 'monospace' }
    },
    {
      path: '/ja-ko',
      name: '日韩',
      component: () => import('../views/JaKoView.vue')
    },
    {
      path: '/character-set',
      name: '编码',
      component: () => import('../views/CharacterSetView.vue')
    },
  ]
})

export default router