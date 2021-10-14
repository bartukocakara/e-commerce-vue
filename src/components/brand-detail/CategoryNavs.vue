<template>
    <div class="container mt-5">
        <h3 class="mb-3">Categories</h3>
        <ul class="nav nav-pills mb-3">
            <li v-for="nav in navs" :key="nav.id" class="nav-item m-1">
                <a class="nav-link" @click.prevent="setActive(nav.name)" :class="{ active: isActive(nav.name) }" href="#wear">{{ nav.label }}</a>
            </li>
        </ul>
        <div class="tab-content py-3" id="myTabContent">
            <div v-for="nav in navs" :key="nav.id" class="tab-pane  fade" :class="{ 'active show': isActive(nav.name) }" id="wear">
                    <div class="row">
                        <div class="col-lg-12">
                            <div class="row">
                                <div class="col-lg-3 col-md-3 col-sm-6 mb-20" v-for="(brand, index) in nav.brands" :key="index" >
                                    <div class="single-related-product d-flex">
                                        <router-link to="product-detail">
                                            <img v-bind:src="'/img/' + brand.imgSrc" alt="">
                                            <div class="desc">
                                                <a href="#" class="title">{{ brand.name }}</a>
                                                <div class="price">
                                                    <h6>$189.00</h6>
                                                    <h6 class="l-through">$210.00</h6>
                                                </div>
                                            </div>
                                        </router-link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
            </div>
        </div>
    </div>
</template>

<script>

export default {
    name : "BrandCardList",
    components : {
        
        },
     data() {
        return {
            activeItem: 'wear',
            navs : [
                {
                    id : 1,
                    name : 'wear',
                    label : "Wear",
                    brands : [
                        {
                            name : "Zara",
                            imgSrc : "ob1.jpg"
                        },
                        {
                            name : "Nike",
                            imgSrc : "ob2.jpg"
                        },
                        {
                            name : "Polo",
                            imgSrc : "ob3.jpg"
                        }
                    ]
                },
                {
                    id : 2,
                    name : 'sports',
                    label : "Sports",
                    brands : [
                        {
                            name : "Nike",
                            imgSrc : "ob1.jpg"
                        },
                        {
                            name : "Adidas",
                            imgSrc : "ob2.jpg"
                        }
                    ]
                },
                {
                    id : 3,
                    name : 'technology',
                    label : "Technology",
                    brands : [
                        {
                            name : "Apple",
                            imgSrc : "i1.jpg"
                        },
                        {
                            name : "LG",
                            imgSrc : "i2.jpg"
                        },
                        {
                            name : "Arçelik",
                            imgSrc : "i3.jpg"
                        },
                        {
                            name : "Arçelik",
                            imgSrc : "i5.jpg"
                        },
                        {
                            name : "Arçelik",
                            imgSrc : "i6.jpg"
                        }
                    ]
                },
                {
                    id : 4,
                    name : 'car',
                    label : "Car",
                    brands : [
                        {
                            name : "Zara",
                            imgSrc : "l1.jpg"
                        },
                        {
                            name : "Nike",
                            imgSrc : "l2.jpg"
                        },
                        {
                            name : "Polo",
                            imgSrc : "l3.jpg"
                        }
                    ]
                },
            ]
        };
    },
    methods: {
        isActive (menuItem) {
            return this.activeItem === menuItem
        },
        setActive (menuItem) {
        this.activeItem = menuItem
        }
    }
}
</script>

<style scoped>
.brand-card{
    height: 150px;
}
.card-shadow:hover{
    margin-top:5px !important;
}
.brand-image {
    width: 100px;
    height : 60px;
    margin: 3rem;
}
</style>