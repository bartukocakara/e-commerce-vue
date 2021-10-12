<template>
    <div class="border rounded p-4 my-2 d-flex justify-content-between">
        <div class="d-flex">
            <span class="ti-check-box m-1 mr-3 fw-bold text-success avatar"></span>
            <h4 class="">E-Posta Adresinizi Doğrulamanız Gerekmektedir</h4>
        </div>
        <div>
            <button class="btn btn-success mx-2">Approve</button>
            <button class="btn btn-light mx-2">Close Account</button>
        </div>
    </div>
    <div class="row m-0">
        <UserGeneralInfo />
        <PasswordRefresh />
    </div>
</template>

<script>

import UserGeneralInfo from "./layouts/user-info/UserGeneralInfo.vue"
import PasswordRefresh from "./layouts/user-info/PasswordRefresh.vue"

export default {
    name : "UserInfo",
    components : {
        UserGeneralInfo, PasswordRefresh
    }
}
</script>

template