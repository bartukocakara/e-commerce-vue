<template>
    <div class="col-md-12 row px-5 py-2">
        <h6 class="col-md-12 mb-4">Please select the credit card you will load into your wallet.</h6>
        <div class="col-md-6 d-flex pt-4 pl-2 border rounded cc-option">
            <div class="px-3">
                <img src="https://cdn.dsmcdn.com/assets/BankLogos/bank-logo-new/mastercard05102019.png" width="60" alt="">
            </div>
            <div>
                <h6>Garanti BBVA kartım</h6>
                <p>5170 41** **** 0651</p>
            </div>
        </div>
        <div class="col-md-6 pt-3 pl-3 border rounded cc-option">
            <div>
                <h6>Başka kart yükle</h6>
            </div>
        </div>
    </div>
</template>

<script>
export default {

}
</script>

<style scoped>
.cc-option:hover{
    cursor:pointer;
    border:1px solid #f27a1a !important
}
</style>