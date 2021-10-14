<template>
    <Search />
    <div class="row border rounded mt-3">
		<div class="container p-3">
            <Navs />
            <div class="p-4">
                <router-view/>
            </div>
        </div>
  </div>
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