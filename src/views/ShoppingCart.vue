<template>
     <!--================Cart Area =================-->
    <section class="">
        <div class="container">
            <NoProduct/>
            <ProductList />
        </div>
    </section>
    <!--================End Cart Area =================-->

</template>

<script>

import ProductList from "@/components/cart/ProductList.vue";
import NoProduct from "@/components/cart/NoProduct.vue";

export default {
  name: 'ShoppingCart',
  components: {
      ProductList, NoProduct
  }
}
</script>
