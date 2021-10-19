<template>
    <section class="login_box_area section_gap mt-5">
		<div class="container">
			<div class="row">
				<div class="col-lg-6 m-auto">
					<div class="login_form_inner">
                        <h6>Wlecome to <span class="brand">  Trendyol </span></h6>
						<h3>Register in to enter</h3>
                        <p v-if="errors.length">
                            <b>Please correct the following error(s):</b>
                            <ul>
                                <li class="text-danger fw-bold my-2" v-for="error in errors" :key="error.id">{{ error }}</li>
                            </ul>
                        </p>
						<form class="row login_form" @submit.prevent="handleSubmit">
							<div class="col-md-12 form-group">
								<input type="email" class="form-control" id="email" name="email" placeholder="Email" v-model="email" onfocus="this.placeholder = ''" onblur="this.placeholder = 'Email'">
							</div>
							<div class="col-md-12 form-group">
								<input type="password" class="form-control" id="password" name="password" placeholder="Password" v-model="password" onfocus="this.placeholder = ''" onblur="this.placeholder = 'Password'">
							</div>
							<div class="col-md-12 form-group">
								<div class="creat_account">
									<input type="checkbox" id="f-option2" v-model="rememberMe" name="rememberMe">
									<label for="f-option2">Keep me logged in</label>
								</div>
							</div>
							<div class="col-md-12 form-group">
								<button type="submit" value="submit" class="primary-btn">Log In</button>
								<router-link to="/login">Do you have an account?</router-link>
								<router-link to="/forgot-password">Forgot Password?</router-link>
							</div>
						</form>
					</div>
				</div>
			</div>
		</div>
	</section>
</template>

<script>
export default {
    name : "Register",
    data: function(){
            return {
                errors: [],
                email: null,
                password: null,
                rememberMe : null
        }
    },
    methods:{
        
    }
}
</script>

<style>
.brand {
    color: #f27a1a
}
</style>