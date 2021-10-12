<template>
    <Breadcrumb />
    <div class="row m-1">
        <NotificationCard />
        <NotificationCard />
        <NotificationCard />
    </div>
</template>

<script>

import Breadcrumb from "./layouts/notification-settings/Breadcrumb.vue";
import NotificationCard from "./layouts/notification-settings/NotificationCard.vue";

export default {
    name : "NotificationSettings",
    components : {
        Breadcrumb, NotificationCard
    }
}
</script>