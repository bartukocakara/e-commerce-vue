<template>
      <div class="container py-5">
          <div class="row">
              <BigImage/>
              <Actions/>
          </div>
      </div>
    <Info/>
    <SuperSales />
</template>

<script>
import BigImage from '@/components/product-detail/BigImage.vue'
import Actions from '@/components/product-detail/Actions.vue'
import Info from '@/components/product-detail/Info.vue'
import SuperSales from '@/components/layouts/super-sales/SuperSales.vue'

export default {
  name: 'ProductDetail',
  components: {
    BigImage, Actions, Info, SuperSales
  }
}
</script>

<style>
.s_product_text{
  border-radius: 10px;
}
.s_product_text >  h2{
  color: #fff !important;
  border-radius: 10px;
  margin: auto;
}
</style>
