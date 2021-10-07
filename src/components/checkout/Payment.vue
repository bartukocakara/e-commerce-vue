<template>
    <div class="row">
        <div class="col-md-12 my-2">
            <select name="" id="" class="form-control w-50 m-auto">
                <option value="">Credit Card</option>
                <option value="">Debit Card</option>
                <option value="">İyzico</option>    
            </select> 
        </div>
    <div class="col-md-12 my-3">
        <div class="float-right">
            <input type="checkbox" id="f-option4" name="selector">
            <label for="f-option4">I’ve read and accept the </label>
            <a href="#"> terms & conditions*</a>
        </div>
    </div>
    <div class="col-md-12 text-center my-2">
        <a class="btn btn-lg btn-success float-right" href="#">Proceed to Pay</a>
    </div>
        </div>

</template>

<script>

export default {
    name : "Payment"
}
</script>