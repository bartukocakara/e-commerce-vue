<template>
    <Search />
    <section class="product_description_area">
		<div class="container">
            <Navs />
            <div class="tab-content" id="myTabContent">
                <Description />
                <Specification />
            </div>
        </div>
  </section>
</template>

<script>

import Search from "./layouts/discount-coupons/Search.vue"
import Navs from "./layouts/discount-coupons/nav-tabs/Navs.vue"
import Description from "./layouts/discount-coupons/nav-tabs/tabs/Description.vue"
import Specification from "./layouts/discount-coupons/nav-tabs/tabs/Specification.vue"

export default {
    name : "DiscountCoupons",
    components: {
        Search, Navs, Specification, Description
    }
}
</script>