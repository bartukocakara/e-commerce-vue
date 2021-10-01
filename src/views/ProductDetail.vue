<template>
    <div class="home">
        <BigImage/>
        <Actions/>
        <Info/>
    </div>
</template>

<script>
// @ is an alias to /src
import BigImage from '@/components/product-detail/BigImage.vue'
import Actions from '@/components/product-detail/Actions.vue'
import Info from '@/components/product-detail/Info.vue'

export default {
  name: 'ProductDetail',
  components: {
    BigImage, Actions, Info
  }
}
</script>
