<template>
    <div class="product_description_area section_gap">
        <div class="container">
            <h6>Checkout</h6>
            <RedirectLogin />
            <Navs />
            <div class="tab-content" id="myTabContent">
                <div class="tab-pane fade show active" id="billing-details" role="tabpanel" aria-labelledby="billing-details-tab">
                    <BillingDetails /> 
                </div>
                <div class="tab-pane fade" id="shipping-details" role="tabpanel" aria-labelledby="shipping-details-tab">
                    <ShippingDetails />  
                </div>
                <div class="tab-pane fade" id="customer-order" role="tabpanel" aria-labelledby="customer-order-tab">
                    <CustomerOrder /> 
                </div>
                <div class="tab-pane fade" id="apply-coupon" role="tabpanel" aria-labelledby="apply-coupon-tab">
                    <ApplyCoupon /> 
                </div>
                <div class="tab-pane fade" id="payment" role="tabpanel" aria-labelledby="payment-tab">
                    <Payment /> 
                </div>

            </div>
      </div>
    </div>
</template>

<script>

import RedirectLogin from '@/components/checkout/RedirectLogin.vue';
import ApplyCoupon from '@/components/checkout/ApplyCoupon.vue';
import BillingDetails from '@/components/checkout/BillingDetails.vue';
import ShippingDetails from '@/components/checkout/ShippingDetails.vue';
import Navs from '@/components/checkout/Navs.vue';
import Payment from '@/components/checkout/Payment.vue';
import CustomerOrder from '@/components/checkout/CustomerOrder.vue';

export default {
  name: 'Checkout',
  components: {
    RedirectLogin, ApplyCoupon, BillingDetails,
    ShippingDetails, Navs, Payment, CustomerOrder
  }
}
</script>
