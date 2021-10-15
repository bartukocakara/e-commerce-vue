<template>
    <div class="container">
        <!-- Header -->
        <Header />
        <div class="row border mt-3 rounded-top">
            <LoadWithCard />
            <SelectCard />
        </div>
                    <LoadWithGiftSertificate />

        <div class="row w-25 py-5 m-auto">
        <a href="/checkout/billing-details" class="primary-btn proceed m-auto">Load Balance</a>
        </div>
        <!-- Content -->
    </div>
</template>
<script>

import Header from "@/components/wallet/Header.vue"
import LoadWithCard from "@/components/wallet/LoadWithCard.vue"
import LoadWithGiftSertificate from "@/components/wallet/LoadWithGiftSertificate.vue"
import SelectCard from "@/components/wallet/SelectCard.vue"

export default {
  name: 'Wallet',
  components: {
    Header, LoadWithCard, 
    LoadWithGiftSertificate, SelectCard
  }
}
</script>

<style scoped>
.proceed{
    height: 40px;
    padding: 0px 30px;
    line-height: 38px;
    text-transform: uppercase;
    border-radius: 10px;
}
</style>
