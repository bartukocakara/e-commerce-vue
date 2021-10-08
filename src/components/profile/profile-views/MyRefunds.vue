<template>
    <Search />
    <MyRefundCard />
    <MyRefundCard />
    <MyRefundCard />
    <MyRefundCard />
    <MyRefundCard />
    <MyRefundCard />
</template>

<script>

import Search from "./layouts/my-refunds/Search.vue"
import MyRefundCard from "./layouts/my-refunds/MyRefundCard.vue"

export default {
    name : "MyOrders",
    components : {
        Search, MyRefundCard
    }
}
</script>