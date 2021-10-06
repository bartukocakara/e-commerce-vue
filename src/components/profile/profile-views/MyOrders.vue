<template>
    <Search />
    <MyOrderCard />
    <MyOrderCard />
    <MyOrderCard />
    <MyOrderCard />
    <MyOrderCard />
    <MyOrderCard />
</template>

<script>

import Search from "./layouts/my-orders/Search.vue"
import MyOrderCard from "./layouts/my-orders/MyOrderCard.vue"

export default {
    name : "MyOrders",
    components : {
        Search, MyOrderCard
    }
}
</script>