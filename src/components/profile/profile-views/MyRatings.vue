<template>
    <Breadcrumb />
    <div class="row">
        <MyRatingCard />
        <MyRatingCard />
        <MyRatingCard />
        <MyRatingCard />
        <MyRatingCard />
    </div>
</template>

<script>

import Breadcrumb from "./layouts/my-ratings/Breadcrumb.vue";
import MyRatingCard from "./layouts/my-ratings/MyRatingCard.vue";

export default {
    name : "MyRatings",
    components : {
        Breadcrumb, MyRatingCard
    }
}
</script>