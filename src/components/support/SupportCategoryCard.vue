<template>
    <div class="card col-md-3">
        <div class="card-body">
            <div class="text-center my-3">
                <span class="ti-star"></span>
            </div>
            <h4 class="text-center mb-4">Popüler Sorular</h4>
            <ul class="">
                <ol><a href="">İade İşlemi</a></ol>
                <ol><a href="">İade İşlemi</a></ol>
                <ol><a href="">İade İşlemi</a></ol>
                <ol><a href="">İade İşlemi</a></ol>
            </ul>
            <div class="text-center mt-3">
                <router-link to="support/:category" class="">Show All</router-link>
            </div>
        </div>
    </div>
</template>

<script>
export default {

}
</script>

<style scoped>
.ti-star{
    font-weight: 30px !important;
}
</style>