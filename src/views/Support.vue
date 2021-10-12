<template>
    <div class="container">
        <div class="row">
            <div class="col-md-2">
                <h3>Help</h3>
            </div>
            <div class="col-md-8">
                <input type="search" class="form-control" placeholder="Example : Refund days ?">
            </div>
        </div>
        <div class="row p-2">
            <SupportCategoryCard />
            <SupportCategoryCard />
            <SupportCategoryCard />
            <SupportCategoryCard />
        </div>
        <div class="row p-3">
            <SupportSidebar />
            <router-view />
            <SupportView />
        </div>
    </div>
</template>

<script>

import SupportCategoryCard from "@/components/support/SupportCategoryCard.vue"
import SupportSidebar from "@/components/support/SupportSidebar.vue"
import SupportView from "@/components/support/SupportView.vue"

export default {
    name : "Support",
    components : {
        SupportCategoryCard, SupportSidebar, SupportView
    }
}
</script>