<template>
    <div class="product_description_area section_gap">
        <div class="container">
            <h6>Checkout</h6>
            <RedirectLogin />
            <Navs />
            <div >
                <div>
                    <router-view/>
                </div>
            </div>
      </div>
    </div>
</template>

<script>

import RedirectLogin from '@/components/checkout/RedirectLogin.vue';
import Navs from '@/components/checkout/Navs.vue';

export default {
  name: 'Checkout',
  components: {
    RedirectLogin, Navs
  }
}
</script>
