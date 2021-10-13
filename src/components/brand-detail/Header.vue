<template>
    <div class="d-flex border bg-image rounded p-3 justify-content-between">
        <div class="col-md-6 d-flex">
            <img src="https://cdn.dsmcdn.com/seller-store/uploads/112044/befc8ccc-e262-43b3-863e-f0f2cee9c814.png" class="small-brand" alt="">
            <h2 class="text-light mx-3 mt-3">Pull & Bear</h2>
            <span class="bg-danger text-light my-3 px-2 rounded">6.9</span>
        </div>
        <div class="col-md-6">
            <div class="float-right d-flex pt-1">
            <h6 class="text-light my-auto">259.2B Takipçi</h6>
            <button class="btn btn-sm primary-btn mx-3">Follow +</button>
            <!-- Follow Button -->
            </div>
        </div>
    </div>
</template>

<script>
export default {

}
</script>

<style>
.bg-image{
    filter: blur(0.2px);
    background: url("https://cdn.dsmcdn.com/mnresize/-/-/seller-store/uploads/112044/a3cc09b3-760d-45c8-a069-8f13abc0d039.png") no-repeat center;
}
.small-brand {
    width: 56px;
    height: 56px;
    border-radius: 50%;
    border: solid 1px #e6e6e6;
}
</style>