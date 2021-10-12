<template>

    <div id="nav">
        <Header />
    </div>
    <div class="main-content">
      <router-view/>
    </div>
    <Footer />
</template>

<script>
// @ is an alias to /src
import Header from '@/components/layouts/main/Header.vue'
import Footer from '@/components/layouts/main/Footer.vue'

export default {
  name: 'ProductDetail',
  components: {
    Header, Footer
  }
}
</script>

<style scoped>

.main-content{
  margin-top:120px
}
</style>
