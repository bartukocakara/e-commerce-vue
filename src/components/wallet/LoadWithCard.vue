<template>
    <div class="col-md-12 row">
        <div class="col-md-8 py-3">
            <div class="d-flex justify-space-between">
				<input type="radio" class="mt-1 mx-3">
                <h5 class="d-block">Load with Card</h5>
			</div>
            <p class="ml-5">Cüzdanınıza en fazla 1245.2 TL yükleyebilirsiniz.</p>
        </div>
        <div class="col-md-4 mt-2">
            <div class="wallet-win"></div>
        </div>
        <div class="col-md-12 d-flex my-3 px-5 mb-4">
            <span class="mx-3 border rounded p-2">
                50 TL
            </span>
            <span class="mx-3 border rounded p-2">
                50 TL
            </span>
            <span class="mx-3 border rounded p-2">
                50 TL
            </span>
            <span class="mx-3 mt-2">
                or
            </span>
            <input type="number" class="form-control w-25" value="50">
        </div>
    </div>
</template>

<script>
export default {

}
</script>

<style scoped>
.wallet-win {
    height:70px;
    background-image: url('https://cdn.dsmcdn.com/web/production/wallet-promo-img.svg');
    background-repeat : no-repeat;
}
</style>