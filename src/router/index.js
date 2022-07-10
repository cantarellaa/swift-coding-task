import { createRouter, createWebHistory } from 'vue-router'
import UserList from '../views/UserList.vue'
import UserCreate from '../views/UserCreate.vue'


const routes = [
  {
    path: '/',
    name: 'UserList',
    component: UserList
  },
  {
    path: '/create',
    name: 'UserCreate',
    component: UserCreate
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
