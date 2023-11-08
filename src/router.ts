// import libs
import { createRouter, createWebHistory } from 'vue-router'

// import local files
import {
  Home,
  Login,
  Register,
  NotFound,
  Dashboard,
  Books,
  User,
  OrderHistory,
  PaymentHistory,
  DashboardParent,
} from '@/views/'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/login',
    name: 'Login',
    component: Login,
  },
  {
    path: '/register',
    name: 'Register',
    component: Register,
  },
  {
    path: '/dashboard',
    component: DashboardParent,
    children: [
      {
        path: '',
        component: Dashboard,
      },
      {
        path: 'books',
        component: Books,
      },
      {
        path: 'user',
        component: User,
      },
      {
        path: 'order-history',
        component: OrderHistory,
      },
      {
        path: 'payment-history',
        component: PaymentHistory,
      },
    ],
  },
  {
    path: '/:pathMatch(.*)*',
    name: 'NotFound',
    component: NotFound,
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
