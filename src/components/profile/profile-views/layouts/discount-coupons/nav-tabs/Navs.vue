<template>
    <ul class="nav nav-tabs" id="myTab" role="tablist">
		<li class="nav-item">
        <router-link class="border-bottom p-3 active" to="/profile/discount-coupons/view" >All</router-link>
		</li>
		<li class="nav-item">
		<router-link class="border-bottom p-3" to="/profile/discount-coupons/view" >Follower Coupons</router-link>
		</li>
	</ul>
</template>

<script>

export default {
    name : "Navs"   
}
</script>
