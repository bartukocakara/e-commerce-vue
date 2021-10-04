<template>
      <div class="container">
          <div class="row s_product_inner">
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
