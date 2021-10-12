<template>
    <Search />
    <section class="product_description_area">
		<div class="container">
            <Navs />
            <div class="tab-content">
                <router-view/>
            </div>
        </div>
  </section>
</template>

<script>

import Search from "./layouts/discount-coupons/Search.vue"
import Navs from "./layouts/discount-coupons/nav-tabs/Navs.vue"

export default {
    name : "DiscountCoupons",
    components: {
        Search, Navs
    }
}
</script>