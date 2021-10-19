<template>
    <section class="login_box_area section_gap mt-5">
		<div class="container">
			<div class="row">
				<div class="col-lg-6 m-auto">
					<div class="login_form_inner">
                        <h6>Welcome to <span class="brand">  Trendyol </span></h6>
						<h5 >Please enter your email.So we can send confirmation mail</h5>
						<form class="row login_form" @submit="checkForm" action="" method="post">
							<div class="col-md-12 form-group">
								<input type="email" class="form-control" id="name" name="email" placeholder="Email" onfocus="this.placeholder = ''" onblur="this.placeholder = 'Email'">
							</div>
							<div class="col-md-12 form-group">
								<button type="submit" value="submit" class="primary-btn">Send</button>
								<router-link to="/register">Don't you have an account?</router-link>
								<router-link to="/login">Login system?</router-link>
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
    data: function() {
        return {
            msg: '',
            show: false
        }
    },
    computed: {
    },
    methods: {
        
        submit () {
            alert('Submit Form')
        }
    }
}
</script>

<style>
.brand {
    color: #f27a1a
}
</style>