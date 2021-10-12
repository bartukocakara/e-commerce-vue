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
    path: '/cart',
    name: 'ShoppingCart',
    component: () => import('../views/ShoppingCart.vue')
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
    name: 'profile',
    component: () => import('../views/Profile.vue'),
    children: [
      {
        path: '/profile/my-orders',
        component: () => import('../components/profile/profile-views/MyOrders.vue'),
      },
      {
        path: '/profile/my-ratings',
        component: () => import('../components/profile/profile-views/MyRatings.vue'),
      },
      {
        path: '/profile/my-refunds',
        component: () => import('../components/profile/profile-views/MyRefunds.vue'),
      },
      {
        path: '/profile/followed-stores',
        component: () => import('../components/profile/profile-views/FollowedStores.vue'),
      },
      {
        path: '/profile/discount-coupons/view',
        component: () => import('../components/profile/profile-views/DiscountCoupons.vue'),
        children: [
          {
            path: '/profile/discount-coupons/view',
            component: () => import('../components/profile/profile-views/layouts/discount-coupons/nav-tabs/tabs/View.vue'),
          },
        ]
      },
      {
        path: '/profile/user-info',
        component: () => import('../components/profile/profile-views/UserInfo.vue'),
      },
      {
        path: '/profile/address-infos',
        component: () => import('../components/profile/profile-views/AddressInfos.vue'),
      },
      {
        path: '/profile/saved-cards',
        component: () => import('../components/profile/profile-views/SavedCards.vue'),
      },
      {
        path: '/profile/notification-settings',
        component: () => import('../components/profile/profile-views/NotificationSettings.vue'),
      },
      
    ]
  },
  {
    path: '/support/questions',
    component: () => import('../views/Support.vue')
  },
  {
    path: '/support',
    component: () => import('../views/Support.vue'),
    children : [
      {
        path: '/support/view',
        component: () => import('../components/support/SupportView.vue'),
      },
    ]
  },
  
  {
    path: '/wallet',
    name: 'Wallet',
    component: () => import('../views/Wallet.vue')
  },
  {
    path: '/track-order',
    name: 'TrackOrder',
    component: () => import('../views/TrackOrder.vue')
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

  {
    path: '/contact',
    name: 'Contact',
    component: () => import('../views/Contact.vue')
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
