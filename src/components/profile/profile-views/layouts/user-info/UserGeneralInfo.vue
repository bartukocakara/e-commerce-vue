<template>
    <div class="col-md-6 p-4 border rounded">
        <h6 class="text-warning">User Info</h6>
        <form class="row contact_form" action="#" method="post" novalidate="novalidate">
            <div class="col-md-6 form-group p_star">
                <label for="" >Name</label>
                <input type="text" class="form-control" id="first" name="name">
            </div>
            <div class="col-md-6 form-group p_star">
                <label for="" >Surname</label>
                <input type="text" class="form-control" id="last" name="name">
            </div>
            <div class="col-md-12 form-group p_star">
                <label for="" >Email</label>
                <input type="text" class="form-control" id="email" name="compemailany">
            </div>
            <div class="col-md-4 form-group p_star">
                <label for="" >Phone Code</label>
                <select class="form-control">
                    <option value="1">+90</option>
                    <option value="2">+90</option>
                    <option value="4">+90</option>
                </select>
            </div>
            <div class="col-md-8 form-group p_star">
                <label for="" >Phone Number</label>
                <input type="text" class="form-control" id="number" name="number">
            </div>
            
            <div class="col-md-12">
                <label for="" class="d-block" >Birth Date</label>
                <div class="row p-0">
                    <div class="col-md-4">
                        <select class="form-control">
                            <option value="1">Gün</option>
                            <option value="2"></option>
                            <option value="4"></option>
                        </select>
                    </div>
                    <div class="col-md-4">
                        <select class="form-control">
                            <option value="1">Ay</option>
                            <option value="2"></option>
                            <option value="4"></option>
                        </select>
                    </div>
                    <div class="col-md-4">
                        <select class="form-control">
                            <option value="1">Yıl</option>
                            <option value="2"></option>
                            <option value="4"></option>
                        </select>
                    </div>
                </div>
            </div>
            <div class="col-md-12 form-group p_star d-flex justify-space-between">
                <div class="form-check m-3">
                    <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1">
                    <label class="form-check-label" for="flexRadioDefault1">
                        Man
                    </label>
                </div>
                <div class="form-check m-3">
                    <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2" checked>
                    <label class="form-check-label" for="flexRadioDefault2">
                        Woman
                    </label>
                </div>
            </div>
            <div class="col-md-12 form-group text-center">
                <input type="submit" class="btn btn-success radius" id="add2" name="add2">
            </div>
        </form>
    </div>
</template>

<script>
export default {
    name : "UserGeneralInfo"
}
</script>
