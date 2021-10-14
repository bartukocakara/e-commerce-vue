<template>
    <div v-for="item in items" :key="item.id" class="col-lg-3 col-md-4 col-sm-6 mb-20">
		<div class="single-related-product d-flex">
			<a href="#">
                <img v-bind:src="'img/'+item.image" alt="">
            </a>
			<div class="desc">
				<a href="#" class="title">{{ item.title }}</a>
				<div class="price">
					<h6>{{ item.lastPrice }}</h6>
					<h6 class="l-through">{{ item.firstPrice }}</h6>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
export default {
    name : "SuperSalesCards",
    data() {
        return {
        items: [
            {
                id : 1,
                title: 'Black',
                lastPrice : '100$',
                firstPrice : '120$',
                image : "r1.jpg"
            },
            {
                id : 2,
                title: 'Foo',
                lastPrice : '100$',
                firstPrice : '120$',
                image : "r2.jpg"
            },
            {
                id : 3,
                title: 'Foo',
                lastPrice : '100$',
                firstPrice : '120$',
                image : "r3.jpg"
            },
            {
                id : 4,
                title: 'Deneme',
                lastPrice : '100$',
                firstPrice : '120$',
                image : "r4.jpg"
            },
            {
                id : 5,
                title: 'Foo',
                lastPrice : '100$',
                firstPrice : '120$',
                image : "r5.jpg"
            },
            {
                id : 6,
                title: 'Foo',
                lastPrice : '100$',
                firstPrice : '120$',
                image : "r6.jpg"
            },
            {
                id : 7,
                title: 'Foo',
                lastPrice : '100$',
                firstPrice : '120$',
                image : "r7.jpg"
            },
            {
                id : 8,
                title: 'Foo',
                lastPrice : '100$',
                firstPrice : '120$',
                image : "r8.jpg"
            },
            {
                id : 9,
                title: 'Foo',
                lastPrice : '100$',
                firstPrice : '120$',
                image : "r9.jpg"
            },
        ]
    }
  }
}
</script>