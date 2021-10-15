<template>
    <div class="row border rounded p-3">
        <div class="col-md-4">
            <h4 class="">Trendyol Wallet</h4>
        </div>
        <div class="col-md-5 d-flex">
            <span class="ti-wallet wallet"></span>
            <div>
                <label for="">Balance</label>
                <h4 class="text-color-orange">8, 24 TL</h4>
            </div>
        </div>
        <div class="col-md-3 d-flex">
            <div class="mx-3 mt-2">
                <span class="ti-help mx-1 bg-primary  circle"></span>
                <router-link class="text-dark help" to="support">help</router-link>
            </div>
            <a class="d-flex mt-2 statement">
                <span class="ti-menu my-1"></span>
                <p class=" mx-1">Bank statement</p>
            </a>
        </div>
    </div>
</template>

<script>
export default {

}
</script>

<style scoped>
.circle{
    border-radius: 50%;
    padding: 3px;
}
.help{
    font-weight: bold;
}
.wallet{
    font-size:30px;
    margin: 10px
}
.statement:hover{
    cursor: pointer;
    color:#f27a1a !important
}
</style>