import { createRouter, createWebHistory } from 'vue-router'
const FlowRouter = () => import('../pages/FlowRouter.vue')
const AmericanHistoryGamePage = () => import('../components/Games/americanHistory/americanHistoryGamePage.vue')
const SelectCoursePage = () => import('../pages/selectCoursePage.vue')

const routes = [
  {
    path: '/',
    component: FlowRouter
  },
  {
    path: '/games',
    component: () => import('../pages/selectGamesPage.vue'),
    name: 'SelectGamesPage'
  },
  {
    path: '/courses',
    component: SelectCoursePage,
    name: 'SelectCoursePage'
  },
  {
    path: '/progress',
    component: FlowRouter
  },
  {
    path: '/games/:gameKey',
    name: 'GamePage',
    component: AmericanHistoryGamePage,
    props: true
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
