<template>
    <div class="returning_customer">
        <div class="check_title">
            <h2>Returning Customer? <a href="#">Click here to login</a></h2>
        </div>
        <p>If you have shopped with us before, please enter your details in the boxes below. If you are a new
            customer, please proceed to the Billing & Shipping section.</p>
        <form class="row contact_form" action="#" method="post" novalidate="novalidate">
            <div class="col-md-6 form-group p_star">
                <input type="text" class="form-control" id="name" name="name">
                <span class="placeholder" data-placeholder="Username or Email"></span>
            </div>
            <div class="col-md-6 form-group p_star">
                <input type="password" class="form-control" id="password" name="password">
                <span class="placeholder" data-placeholder="Password"></span>
            </div>
            <div class="col-md-12 form-group">
                <button type="submit" value="submit" class="primary-btn">login</button>
                <div class="creat_account">
                    <input type="checkbox" id="f-option" name="selector">
                    <label for="f-option">Remember me</label>
                </div>
                <a class="lost_pass" href="#">Lost your password?</a>
            </div>
        </form>
    </div>
</template>

<script>

export default {
    name : "RedirectLogin"
}
</script>