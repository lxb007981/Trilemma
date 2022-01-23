import { createRouter, createWebHashHistory } from 'vue-router'
import Home from './pages/Home.vue'

export type AppRouteNames = 'home'
| 'trilemma'

const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    {
      name: 'home',
      path: '/',
      component: Home
    },
    {
      name: 'trilemma',
      path: '/trilemma',
      component: async () => await import('./pages/TrilemmaDisplay.vue')
    }
  ]
})
export { router }
