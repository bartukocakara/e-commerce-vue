<template>
    <div class="home">
        <h6>Checkout</h6>
        <RedirectLogin />
        <ApplyCoupon />
        <BillingDetails />
        <ShippingDetails />
    </div>
</template>

<script>

import RedirectLogin from '@/components/checkout/RedirectLogin.vue';
import ApplyCoupon from '@/components/checkout/ApplyCoupon.vue';
import BillingDetails from '@/components/checkout/BillingDetails.vue';
import ShippingDetails from '@/components/checkout/ShippingDetails.vue';

export default {
  name: 'Checkout',
  components: {
    RedirectLogin, ApplyCoupon, BillingDetails, ShippingDetails
  }
}
</script>
