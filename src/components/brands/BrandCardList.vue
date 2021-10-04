<template>
    <!-- <BrandCard /> -->
        <div class="container">
            <h4 class="mb-20 text-center">Brands</h4>
           <ul class="nav nav-pills mb-3">
                <li v-for="nav in navs" :key="nav.id" class="nav-item m-1">
                    <a class="nav-link" @click.prevent="setActive(nav.name)" :class="{ active: isActive(nav.name) }" href="#wear">{{ nav.label }}</a>
                </li>
            </ul>
            <div class="tab-content py-3" id="myTabContent">
                <div v-for="nav in navs" :key="nav.id" class="tab-pane  fade" :class="{ 'active show': isActive(nav.name) }" id="wear">
                    <div class="row">
                        <router-link class="col-md-3" v-for="(brand, index) in nav.brands" :key="index" to="brand-detail">
                            <div class="m-1 border rounded shadow brand-card text-center">
                                <img v-bind:src="'/img/brand/' + brand.imgSrc" class="brand-image" alt="">
                            </div>
                        </router-link>
                    </div>
                </div>
            </div>
        </div>
</template>

<script>
import "./_brandCardList.css"

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
                            imgSrc : "zara.jpeg"
                        },
                        {
                            name : "Nike",
                            imgSrc : "nike.jpg"
                        },
                        {
                            name : "Polo",
                            imgSrc : "lcwaikiki.jpg"
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
                            imgSrc : "nike.jpg"
                        },
                        {
                            name : "Adidas",
                            imgSrc : "adidas.jpg"
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
                            imgSrc : "apple.jpg"
                        },
                        {
                            name : "LG",
                            imgSrc : "LG-logo.jpg"
                        },
                        {
                            name : "Arçelik",
                            imgSrc : "arcelik_logo.png"
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
                            imgSrc : "ferrari.jpg"
                        },
                        {
                            name : "Nike",
                            imgSrc : "porsche-logo.jpg"
                        },
                        {
                            name : "Polo",
                            imgSrc : "mercedes.jpg"
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