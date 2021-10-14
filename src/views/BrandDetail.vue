<template>
    <div class="container">

        <Header />
        <Slider />
        <CategoryNavs />
    </div>
</template>

<script>

import Header from "@/components/brand-detail/Header.vue"
import Slider from "@/components/brand-detail/Slider.vue"
import CategoryNavs from "@/components/brand-detail/CategoryNavs.vue"

export default {
    name : "BrandDetail",
    components : {
        Header, Slider, CategoryNavs
    }
}
</script>

<style>

</style>