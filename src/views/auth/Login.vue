<template>
    <section class="login_box_area section_gap mt-5">
		<div class="container">
			<div class="row">
				<div class="col-lg-6 m-auto">
					<div class="login_form_inner">
                        <h6>Wlecome to <span class="brand">  Trendyol </span></h6>
						<h3>Log in to enter</h3>
						
						<p v-if="errors.length">
                            <b>Please correct the following error(s):</b>
                            <ul>
                                <li class="text-danger fw-bold my-2" v-for="error in errors" :key="error.id">{{ error }}</li>
                            </ul>
                        </p>
						<form class="row login_form" @submit="checkForm" >
							<div class="col-md-12 form-group">
								<input type="email" class="form-control" v-model="email" id="name" name="email" placeholder="Email" onfocus="this.placeholder = ''" onblur="this.placeholder = 'Email'">
							</div>
							<div class="col-md-12 form-group">
								<input type="text" class="form-control" id="name" v-model="password" name="password" placeholder="Password" onfocus="this.placeholder = ''" onblur="this.placeholder = 'Password'">
							</div>
							<div class="col-md-12 form-group">
								<div class="creat_account">
									<input type="checkbox" id="f-option2" name="selector">
									<label for="f-option2">Keep me logged in</label>
								</div>
							</div>
							<div class="col-md-12 form-group">
								<button type="submit" value="submit" class="primary-btn">Log In</button>
								<router-link to="/register">Don't you have an account?</router-link>
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
    name : "Login",
    data: function(){
            return {
                errors: [],
                email: null,
                password: null,
                rememberMe : null
        }
    },
    computed: {
        
    },
    created () {
		
    },
    watch:{
        
    },
    methods: {
        
    }
}
</script>

<style>
.brand {
    color: #f27a1a
}
</style>