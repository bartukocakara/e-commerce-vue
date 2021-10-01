<template>
    <div class="hello">
        <h2>Home Page</h2>
        <LatestProductsCard />
    </div>
</template>

<script>
import LatestProductsCard from '../components/latest-products/LatestProductCard.vue'

export default {
  name: 'HelloWorld',
  components : {
    LatestProductsCard
  }
}
</script>