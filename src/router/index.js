import Vue from 'vue'
import VueRouter from 'vue-router'
import TeamPage from '@/views/TeamPage.vue'
import ToolsPage from '@/views/ToolsPage.vue'
import StatisticsPage from '@/views/StatisticsPage.vue'
import MoneyPage from '@/views/MoneyPage.vue'
import LinksPage from '@/views/LinksPage.vue'
import PagePage from '@/views/PagePage.vue'
import LeadsPage from '@/views/LeadsPage.vue'
import SettingsPage from '@/views/SettingsPage.vue'
import BusinessPage from '@/views/BusinessPage.vue'

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
  },
  {
    path: '/statistics',
    name: 'statistics',
    component: StatisticsPage
  },
  {
    path: '/money',
    name: 'money',
    component: MoneyPage
  },
  {
    path: '/links',
    name: 'links',
    component: LinksPage
  },
  {
    path: '/page',
    name: 'page',
    component: PagePage
  },
  {
    path: '/leads',
    name: 'leads',
    component: LeadsPage
  },
  {
    path: '/settings',
    name: 'settings',
    component: SettingsPage
  },
  {
    path: '/business',
    name: 'business',
    component: BusinessPage
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
