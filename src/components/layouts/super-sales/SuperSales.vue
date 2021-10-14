<template>
    <section class="related-product-area section_gap_bottom">
		<div class="container">
			<div class="row justify-content-center">
				<div class="col-lg-6 text-center">
					<div class="section-title">
						<h1>Super Sales</h1>
					</div>
				</div>
			</div>
			<div class="row">
				<div class="col-lg-12">
					<div class="row">
						<SuperSalesCards />
					</div>
				</div>
			</div>
		</div>
	</section>
</template>

<script>
import SuperSalesCards from "./SuperSalesCards.vue";


export default {
    name : "SuperSales",
    components : {
        SuperSalesCards
    }
}
</script>
