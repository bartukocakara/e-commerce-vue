<template>
    <div class="mt-4">
        <div class="card shadow">
            <div class="card-header">
                <div class="row">
                    <div class="col-md-3">
                        <h6> Order date </h6>
                        <p for="">30 Eylül 2021 - 10:10</p>
                    </div>
                    <div class="col-md-3">
                        <h6> Order detail </h6>
                        <p for="">1 Delivery, 4 Products</p>
                    </div>
                    <div class="col-md-2">
                        <h6> Receiver </h6>
                        <p for="">Bartu Kocakara</p>
                    </div>
                    <div class="col-md-2">
                        <h6> Amount </h6>
                        <p for="">50,90 TL</p>
                    </div>
                    <div class="col-md-2">
                        <router-link to="order-details" class="genric-btn primary circle">Detail</router-link>
                    </div>
                </div>
            </div>
            <div class="p-2">
                <div class="row">
                    <div class="col-md-6">
                        <p class="text-success text-center">Was delivered</p>
                    </div>
                    <div class="col-md-6">
                        <img src="/img/i1.jpg" class="mx-2 rounded" style="width:50px" alt="">
                        <img src="/img/i1.jpg" class="mx-2 rounded" style="width:50px" alt="">
                        <img src="/img/i1.jpg" class="mx-2 rounded" style="width:50px" alt="">
                        <img src="/img/i1.jpg" class="mx-2 rounded" style="width:50px" alt="">
                    </div>
                </div>  
            </div>
        </div>
    </div>

</template>

<script>
export default {
    name : "MyOrderCard"
}
</script>