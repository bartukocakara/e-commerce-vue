<template>
        <Breadcrumb />
        <div class="row">
            <SavedCard />
            <SavedCard />
            <SavedCard />
        </div>
</template>

<script>

import Breadcrumb from "./layouts/saved-cards/Breadcrumb.vue"
import SavedCard from "./layouts/saved-cards/SavedCard.vue"
export default {
    name : "SavedCards",
    components : {
        Breadcrumb, SavedCard
    }
}
</script>