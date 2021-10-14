<template>
    <div class="col-lg-5 offset-lg-1">
					<div class="">
						<h3 class="s_product_">Faded SkyBlu Denim Jeans</h3>
						<h2>$149.99</h2>
						<ul class="list">
                <li class="mt-3">
                    <a class="" href="#">
                      <span>Category</span>
                       : Household
                      </a>
                </li>
                <li class="mt-3">
                    <a href="#">
                      <span>Availibility</span> : In Stock</a>
                </li>
						</ul>
						<p class="mt-3">Mill Oil is an innovative oil filled radiator with the most modern technology. If you are looking for
							something that can make your interior look awesome, and at the same time give you the pleasant warm feeling
							during the winter.
            </p>
						<div class="product_count">
                <label for="qty">Quantity:</label>
                <input type="text" name="qty" id="sst" maxlength="12" value="1" title="Quantity:" class="input-text qty" />
                <button onclick="var result = document.getElementById('sst'); var sst = result.value; if( !isNaN( sst )) result.value++;return false;"
                  class="increase items-count" type="button"><i class="lnr lnr-chevron-up"></i></button>
                <button onclick="var result = document.getElementById('sst'); var sst = result.value; if( !isNaN( sst ) &amp;&amp; sst > 0 ) result.value--;return false;"
                  class="reduced items-count" type="button"><i class="lnr lnr-chevron-down"></i></button>
						</div>
						<div class="card_area d-flex align-items-center">
                <a class="primary-btn" href="#">Add to Cart</a>
                <a class="icon_btn" href="#"><i class="lnr lnr lnr-heart"></i></a>
						</div>
				</div>
		</div>
</template>

<script>
export default {
  name: 'Actions'
}
</script>