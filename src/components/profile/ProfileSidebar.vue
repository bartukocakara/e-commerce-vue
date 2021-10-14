<template>
    
    <div class="sidebar-categories profile-side m-auto rounded nav flex-column nav-pills" role="tablist" aria-orientation="vertical">
        <router-link class="text-dark border-bottom p-3 d-flex justify-content-between" to="/profile/my-orders">My Orders <span class="ti-package icon"></span></router-link>
        <router-link class="text-dark border-bottom p-3 d-flex justify-content-between" to="/profile/my-ratings">My Ratings <span class="ti-comment icon"></span></router-link>
        <router-link class="text-dark border-bottom p-3 d-flex justify-content-between" to="/profile/my-refunds">My Refunds <span class="ti-share-alt icon"></span></router-link>
        <router-link class="text-dark border-bottom p-3 d-flex justify-content-between" to="/profile/followed-stores">Followed Stores <span class="ti-eye icon"></span></router-link>
        <router-link class="text-dark border-bottom p-3 d-flex justify-content-between" to="/profile/discount-coupons/view">Discount Coupons <span class="ti-ticket icon"></span></router-link>
        <router-link class="text-dark border-bottom p-3 d-flex justify-content-between" to="/profile/user-info">User Info <span class="ti-user icon"></span></router-link>
        <router-link class="text-dark border-bottom p-3 d-flex justify-content-between" to="/profile/address-infos">Adress Infos <span class="ti-location-pin icon"></span></router-link>
        <router-link class="text-dark border-bottom p-3 d-flex justify-content-between" to="/profile/saved-cards">Saved Cards <span class="ti-credit-card icon"></span></router-link>
        <router-link class="text-dark border-bottom p-3 d-flex justify-content-between" to="/profile/notification-settings">Notification Settings <span class="ti-bell icon"></span></router-link>
        <router-link class="text-dark border-bottom p-3 d-flex justify-content-between" to="/support/questions">Support <span class="ti-help icon"></span></router-link>
    </div>
               
</template>

<script>

export default {
    name : "ProfileSidebar"
}
</script>

<style scoped>
.icon{
    font-size:18px;
}
.profile-side{
    width:60%;
}
</style>