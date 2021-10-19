import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/login',
    name: 'Login',
    component: () => import( '../views/auth/Login.vue')
  },
  {
    path: '/register',
    name: 'Register',
    component: () => import( '../views/auth/Register.vue')
  },
  {
    path: '/forgot-password',
    name: 'ForgotPassword',
    component: () => import( '../views/auth/ForgotPassword.vue')
  },
  {
    path: '/',
    name: 'Layout',
    component: () => import("@/components/layouts/main/Layout.vue"),
    children: [
      {
        path: '/',
        name: 'Home',
        component: () => import( '../views/Home.vue')
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
        component: () => import('../views/Checkout.vue'),
        children: [
          {
            path: '/checkout/billing-details',
            component: () => import('../components/checkout/BillingDetails.vue'),
          },
          {
            path: '/checkout/shipping-details',
            component: () => import('../components/checkout/ShippingDetails.vue'),
          },
          {
            path: '/checkout/your-orders',
            component: () => import('../components/checkout/CustomerOrder.vue'),
          },
          {
            path: '/checkout/apply-coupon',
            component: () => import('../components/checkout/ApplyCoupon.vue'),
          },
          {
            path: '/checkout/payment',
            component: () => import('../components/checkout/Payment.vue'),
          },
        ]
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
            path: '/profile/order-details',
            component: () => import('../components/profile/profile-views/layouts/my-orders/order-detail/Index.vue'),
          },
          {
            path: '/profile/my-ratings',
            component: () => import('../components/profile/profile-views/MyRatings.vue'),
          },
          {
            path: '/profile/rating-details',
            component: () => import('../components/profile/profile-views/layouts/my-ratings/rating-detail/Index.vue'),
          },
          {
            path: '/profile/my-refunds',
            component: () => import('../components/profile/profile-views/MyRefunds.vue'),
          },
          {
            path: '/profile/refund-details',
            component: () => import('../components/profile/profile-views/layouts/my-refunds/refund-detail/Index.vue'),
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
        path: '/brand-detail',
        name: 'BrandDetail',
        component: () => import('../views/BrandDetail.vue')
      },
      {
        path: '/contact',
        name: 'Contact',
        component: () => import('../views/Contact.vue')
      },
    ]
    },
  
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})
router.beforeEach((to, from, next) => {
  // redirect to login page if not logged in and trying to access a restricted page
  const publicPages = ['/login', '/register', '/forgot-password'];
  const authRequired = !publicPages.includes(to.path);
  const loggedIn = localStorage.getItem('user');

  // if (authRequired && !loggedIn) {
  //   return next('/login');
  // }

  next();
})
export default router
