<template>
    <div class="container">
        <Header />
        <Slider />
        <h1>Brand Category Products</h1>
    </div>
</template>

<script>

import Header from "@/components/brand-detail/Header.vue"
import Slider from "@/components/brand-detail/Slider.vue"

export default {
    name : "BrandDetail",
    components : {
        Header, Slider
    }
}
</script>

<style>

</style>