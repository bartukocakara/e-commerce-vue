<template>
   <!--================Blog Categorie Area =================-->
        <Offers />
        <Discount />
        <OpenBusiness />
</template>

<script>
// @ is an alias to /src
import Offers from '@/components/home/Offers.vue'
import Discount from '@/components/home/Discount.vue'
import OpenBusiness from '@/components/home/OpenBusiness.vue'

export default {
  name: 'Home',
  components: {
    Offers, Discount, OpenBusiness
  }
}
</script>
