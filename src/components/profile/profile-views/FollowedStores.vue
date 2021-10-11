<template>
    <Search />
    <div class="row">
        <StoreCard />
        <StoreCard />
        <StoreCard />
        <StoreCard />
        <StoreCard />
    </div>
</template>

<script>

import StoreCard from "./layouts/followed-stores/StoreCard.vue"
import Search from "./layouts/followed-stores/Search.vue"

export default {
    name : "FollowedStores",
    components : {
        StoreCard, Search
    }
}
</script>