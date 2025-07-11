import { createRouter, createWebHistory } from 'vue-router'
import App from './pages/App.vue'

// Lazy load the game page for better performance
const AmericanHistoryGamePage = () => import('./components/Games/americanHistory/americanHistoryGamePage.vue')

const routes = [
  {
    path: '/',
    component: App
  },
  {
    path: '/games/americanhistory',
    component: AmericanHistoryGamePage
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
