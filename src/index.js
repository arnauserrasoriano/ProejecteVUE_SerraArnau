import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import ApiPage from '../views/ApiPage.vue'
import CrudPage from '../views/CrudPage.vue'

const routes = [
  { path: '/', name: 'Home', component: Home },
  { path: '/api', name: 'ApiPage', component: ApiPage },
  { path: '/crud', name: 'CrudPage', component: CrudPage },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
