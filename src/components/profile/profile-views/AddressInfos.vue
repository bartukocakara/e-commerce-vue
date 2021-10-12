<template>
    <Breadcrumb />
    <div class="row">
        <AddressCard />
        <AddressCard />
        <AddressCard />
        <AddressCard />
        <AddressCard />
    </div>
</template>

<script>

import Breadcrumb from "./layouts/address-infos/Breadcrumb.vue";
import AddressCard from "./layouts/address-infos/AddressCard.vue";

export default {
    name : "AddressInfos",
    components : {
        Breadcrumb, AddressCard
    }
}
</script>