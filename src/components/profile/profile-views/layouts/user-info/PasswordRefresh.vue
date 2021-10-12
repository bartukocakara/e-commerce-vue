<template>
        <div class="col-md-6 p-4 border rounded">
            <h6 class="text-warning">Password Refresh</h6>
            <form class="row contact_form" action="#" method="post" novalidate="novalidate">
                <div class="col-md-12 form-group p_star">
                    <label for="" >Your Password</label>
                    <input type="text" class="form-control my-2" id="first" name="name">
                </div>
                <div class="col-md-12 form-group p_star">
                    <label for="" >New Password</label>
                    <input type="text" class="form-control my-2" name="name">
                </div>
                <div class="col-md-12 form-group p_star">
                    <label for="" >New Password Again</label>
                    <input type="text" class="form-control my-2" name="name">
                </div>
                <div class="col-md-12 text-center p-3">
                    <input type="submit" class="btn btn-success" value="Update">
                </div>
            </form>
        </div>
</template>

<script>
export default {
    name : "PasswordRefresh"
}
</script>