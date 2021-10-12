<template>
    
    <div class="sidebar-categories w-50 m-auto rounded nav flex-column nav-pills" role="tablist" aria-orientation="vertical">
        <router-link class="text-dark border-bottom p-3 active"  to="/profile/my-orders">My Orders</router-link>
        <router-link class="text-dark border-bottom p-3" to="/profile/my-ratings">My Ratings</router-link>
        <router-link class="text-dark border-bottom p-3" to="/profile/my-refunds">My Refunds</router-link>
        <router-link class="text-dark border-bottom p-3" to="/profile/followed-stores">Followed Stores</router-link>
        <router-link class="text-dark border-bottom p-3" to="/profile/discount-coupons/view">Discount Coupons</router-link>
        <router-link class="text-dark border-bottom p-3" to="/profile/user-info">User Info</router-link>
        <router-link class="text-dark border-bottom p-3" to="/profile/address-infos">Adress Infos</router-link>
        <router-link class="text-dark border-bottom p-3" to="/profile/saved-cards">Saved Cards</router-link>
        <router-link class="text-dark border-bottom p-3" to="/profile/notification-settings">Notification Settings</router-link>
        <router-link class="text-dark border-bottom p-3" to="/support/questions">Support</router-link>
    </div>
               
</template>

<script>

export default {
    name : "ProfileSidebar"
}
</script>