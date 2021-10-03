import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    component: () => import( '../views/About.vue')
  },
  {
    path: '/shop-category',
    name: 'ShopCategory',
    component: () => import('../views/ShopCategory.vue')
  },
  {
    path: '/product-detail',
    name: 'ProductDetail',
    component: () => import('../views/ProductDetail.vue')
  },
  {
    path: '/checkout',
    name: 'Checkout',
    component: () => import('../views/Checkout.vue')
  },
  {
    path: '/profile',
    name: 'Profile',
    component: () => import('../views/Profile.vue')
  },
  {
    path: '/wallet',
    name: 'Wallet',
    component: () => import('../views/Wallet.vue')
  },
  {
    path: '/payment-confirm',
    name: 'PaymentConfirm',
    component: () => import('../views/PaymentConfirm.vue')
  },
  {
    path: '/payment-confirm',
    name: 'PaymentConfirm',
    component: () => import('../views/PaymentConfirm.vue')
  },
  {
    path: '/brands',
    name: 'Brands',
    component: () => import('../views/Brands.vue')
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
