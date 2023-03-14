import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('@/views/AboutView.vue')
    },
    {
      path: '/symptoms',
      name: 'symptoms',
      component: () => import('@/views/SymptomsView.vue')
    },
    {
      path: '/prevention',
      name: 'prevention',
      component: () => import('@/views/preventionView.vue')
    },
    {
      path: '/treatment',
      name: 'treatment',
      component: () => import('@/views/TreatView.vue')
    },
    {
      path: '/question',
      name: 'question',
      component: () => import('@/views/QuestionView.vue')
    },
    {
      path: '/latest',
      name: 'latest',
      component: () => import('@/views/LatestView.vue')
    },
    {
      path: '/dont',
      name: 'dont',
      component: () => import('@/views/DontView.vue')
    },
  ]
})

export default router
