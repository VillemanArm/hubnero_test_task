import Vue from 'vue'
import VueRouter from 'vue-router'
import TeamPage from '../views/TeamPage.vue'
import ToolsPage from '../views/ToolsPage.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/', // сделал базовую ссылку на разрабатываемую страницу, чтобы не переключаться при загрузке проекта
    name: 'home',
    component: TeamPage
  },
  {
    path: '/team',
    name: 'team',
    component: TeamPage
  },
  {
    path: '/tools',
    name: 'tools',
    component: ToolsPage
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
