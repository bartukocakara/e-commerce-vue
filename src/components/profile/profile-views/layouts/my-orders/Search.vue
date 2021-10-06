<template>
    <form class="border ">
        <div class="form-group row">
            <div class="col-md-2">
                <h6 class="float-left ml-3 mt-3">My Orders</h6>
            </div>
            <div class="col-md-6">
                <input type="email" class="form-control w-50 ml-3 mt-3" placeholder="Search for product or brand...">
            </div>
            <div class="col-md-4">
                <div class="form-group  mr-3 mt-3">
                    <select class="custom-select" required>
                        <option value="">All Orders</option>
                        <option value="1">Last 1 month</option>
                        <option value="2">Last 2 month</option>
                        <option value="3">Last 3 month</option>
                        <option value="4">2020</option>
                    </select>
                </div>
            </div>
        </div>
    </form>
</template>

<script>
export default {
    name : "Search"
}
</script>