<template>
    <div class="container-fluid">
        <div class="row">
            <div class="col-md-3">
                <div class="sidebar-categories w-50 m-auto  rounded nav flex-column nav-pills" id="v-pills-tab" role="tablist" aria-orientation="vertical">
                    <a class="text-dark border-bottom p-3 active" id="v-pills-my-orders-tab" data-toggle="pill" href="#v-pills-my-orders" role="tab" aria-controls="v-pills-my-orders" aria-selected="true">My Orders</a>
                    <a class="text-dark border-bottom p-3" id="v-pills-my-ratings-tab" data-toggle="pill" href="#v-pills-my-ratings" role="tab" aria-controls="v-pills-my-ratings" aria-selected="false">My Ratings</a>
                    <a class="text-dark border-bottom p-3" id="v-pills-my-refunds-tab" data-toggle="pill" href="#v-pills-my-refunds" role="tab" aria-controls="v-pills-my-refunds" aria-selected="false">My Refunds</a>
                    <a class="text-dark border-bottom p-3" id="v-pills-followed-stores-tab" data-toggle="pill" href="#v-pills-followed-stores" role="tab" aria-controls="v-pills-followed-stores" aria-selected="false">Followed Stores</a>
                    <a class="text-dark border-bottom p-3" id="v-pills-discount-coupons-tab" data-toggle="pill" href="#v-pills-discount-coupons" role="tab" aria-controls="v-pills-discount-coupons" aria-selected="false">Discount Coupons</a>
                    <a class="text-dark border-bottom p-3" id="v-pills-user-info-tab" data-toggle="pill" href="#v-pills-user-info" role="tab" aria-controls="v-pills-user-info" aria-selected="false">User Info</a>
                    <a class="text-dark border-bottom p-3" id="v-pills-address-info-tab" data-toggle="pill" href="#v-pills-address-info" role="tab" aria-controls="v-pills-address-info" aria-selected="false">Adress Infos</a>
                    <a class="text-dark border-bottom p-3" id="v-pills-saved-cards-tab" data-toggle="pill" href="#v-pills-saved-cards" role="tab" aria-controls="v-pills-saved-cards" aria-selected="false">Saved Cards</a>
                    <a class="text-dark border-bottom p-3" id="v-pills-notification-settings-tab" data-toggle="pill" href="#v-pills-notification-settings" role="tab" aria-controls="v-pills-notification-settings" aria-selected="false">Notification Settings</a>
                    <a class="text-dark border-bottom p-3" id="v-pills-support-tab" data-toggle="pill" href="#v-pills-support" role="tab" aria-controls="v-pills-support<" aria-selected="false">Support</a>
                </div>
            </div>
            <div class="tab-content col-md-7" id="v-pills-tabContent">
                <div class="tab-pane fade show active" id="v-pills-my-orders" role="tabpanel" aria-labelledby="v-pills-my-orders-tab"><MyOrders /></div>
                <div class="tab-pane fade" id="v-pills-my-ratings" role="tabpanel" aria-labelledby="v-pills-my-ratings-tab"><MyRatings /></div>
                <div class="tab-pane fade" id="v-pills-my-wallet" role="tabpanel" aria-labelledby="v-pills-my-wallet-tab">...</div>
                <div class="tab-pane fade" id="v-pills-my-refunds" role="tabpanel" aria-labelledby="v-pills-my-refunds-tab"><MyRefunds /></div>
                <div class="tab-pane fade" id="v-pills-followed-stores" role="tabpanel" aria-labelledby="v-pills-followed-stores-tab">...</div>
                <div class="tab-pane fade" id="v-pills-followed-stores" role="tabpanel" aria-labelledby="v-pills-followed-stores-tab">...</div>
                <div class="tab-pane fade" id="v-pills-followed-stores" role="tabpanel" aria-labelledby="v-pills-followed-stores-tab">...</div>
                <div class="tab-pane fade" id="v-pills-followed-stores" role="tabpanel" aria-labelledby="v-pills-followed-stores-tab">...</div>
                <div class="tab-pane fade" id="v-pills-followed-stores" role="tabpanel" aria-labelledby="v-pills-followed-stores-tab">...</div>
                <div class="tab-pane fade" id="v-pills-followed-stores" role="tabpanel" aria-labelledby="v-pills-followed-stores-tab">...</div>
                <div class="tab-pane fade" id="v-pills-followed-stores" role="tabpanel" aria-labelledby="v-pills-followed-stores-tab">...</div>
            </div>
            
        <div class="col-xl-9 col-lg-8 col-md-7">
            
        </div>
      </div>
    </div>
</template>

<script>

import MyOrders from "./profile-views/MyOrders.vue";
import MyRatings from "./profile-views/MyRatings.vue";
import MyRefunds from "./profile-views/MyRefunds.vue";

export default {
    name : "ProfileSidebar",
    components : {
        MyOrders,  MyRatings, MyRefunds
    }
}
</script>