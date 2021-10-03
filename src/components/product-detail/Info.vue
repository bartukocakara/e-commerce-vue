<template>
	<section class="product_description_area">
		<div class="container">
        <Navs />
        <div class="tab-content" id="myTabContent">
            <Description />
            <Specification />
            <Comments />
            <Reviews />
        </div>
    </div>
  </section>
</template>

<script>
import Description from "./nav-tabs/tabs/Description.vue"
import Specification from "./nav-tabs/tabs/Specification.vue"
import Comments from "./nav-tabs/tabs/Comments.vue"
import Reviews from "./nav-tabs/tabs/Reviews.vue"
import Navs from "./nav-tabs/Navs.vue"

export default {
  name: 'Info',
  components: {
    Description, Specification, Comments, Reviews, Navs
  }
}
</script>