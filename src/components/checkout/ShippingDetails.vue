<template>
    <div class="col-md-12 form-group">
        <div class="creat_account">
            <h3 class="my-3">Shipping Details</h3>
            <input class="my-3" type="checkbox" id="f-option3" name="selector">
            <label class="my-3" for="f-option3">Ship to a different address?</label>
        </div>
        <textarea class="form-control" name="message" id="message" rows="2" placeholder="Order Notes"></textarea>
    </div>
</template>

<script>

export default {
    name : "ShippingDetails"
}
</script>
