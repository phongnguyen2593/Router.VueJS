import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Login',
    component: () => import('../views/Login.vue')
  },
  {
    path: '/admin',
    component: () => import('../views/Admin.vue'),
    children: [
      {
        path: 'dashboard',
        name: 'Dashboard',
        component: () => import('../components/Dashboard.vue'),
      },
      {
        path: 'products',
        name: 'Products',
        component: () => import('../components/Products.vue'),
      },
      {
        path: 'orders',
        name: 'Orders',
        component: () => import('../components/Orders.vue'),
      }
    ]
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
