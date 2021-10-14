<template>
    <div class="col-sm-6 mt-3">
        <div class="card shadow">
            <div class="card-body row">
                <div class="col-md-3">
                    <img src="/img/i3.jpg" class="m-2" style="width:70px" alt="">
                </div>
                <div class="col-md-9">
                    <p class=" ">With supporting text below</p>
                    <p class=" ">With supporting text below</p>
                    <p class=" ">With supporting text below</p>
                    <p class=" ">With supporting text below</p>
                    <router-link to="/profile/rating-details" class="genric-btn primary circle"> Go somewhere</router-link>

                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name : "MyRatingCard"
}
</script>