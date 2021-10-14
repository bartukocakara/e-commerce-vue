<template>
    <div class="container-fluid mx-5 my-5">
        <div class="row mx-5">
            <div class="col-md-3">
                <ProfileSidebar />
            </div>
            <div class="tab-content col-md-7">
              <router-view  />
            </div>
        </div>
    </div>
</template>

<script>

import ProfileSidebar from "@/components/profile/ProfileSidebar.vue"

export default {
  name: 'Profile',
  components: {
    ProfileSidebar
  }
}
</script>