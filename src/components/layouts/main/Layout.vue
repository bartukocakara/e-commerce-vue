<template>
  <div id="nav">
        <Header />
    </div>
    <div class="main-content">
        <router-view />
    </div>
    <Footer />
</template>

<script>


import Header from '@/components/layouts/main/Header.vue'
import Footer from '@/components/layouts/main/Footer.vue'

export default {
    name : "Layout",
    components: {
        Header, Footer
  }
}
</script>

<style>
.main-content{
  margin-top:130px
}
</style>