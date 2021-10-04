<template>

    <div id="nav">
        <Header />
        <Banner />
    </div>
    <router-view/>
</template>

<script>
// @ is an alias to /src
import Header from '@/components/layouts/main/Header.vue'
import Banner from '@/components/layouts/main/Banner.vue'

export default {
  name: 'ProductDetail',
  components: {
    Header, Banner
  }
}
</script>
