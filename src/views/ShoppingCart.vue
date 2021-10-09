<template>
     <!--================Cart Area =================-->
    <section class="">
        <div class="container">
            <ProductList />
        </div>
    </section>
    <!--================End Cart Area =================-->

</template>

<script>

import ProductList from "@/components/cart/ProductList.vue";

export default {
  name: 'ShoppingCart',
  components: {
      ProductList
  }
}
</script>
