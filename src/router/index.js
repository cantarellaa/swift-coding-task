import { createRouter, createWebHistory } from 'vue-router'
import UserList from '../views/UserList'


const routes = [
  {
    path: '/',
    name: 'UserList',
    component: UserList
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
