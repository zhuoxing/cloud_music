<template>
    <div id="musicIndex">
        <Header/>
        <SubNav/>
        <Banner/>
        <Footer/>
    </div>
</template>
<script>
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import SubNav from '@/components/SubNav'
import Banner from '@/components/Banner'
export default {
  components: {
    Header,
    Footer,
    SubNav,
    Banner
  },
  data () {
    return {

    }
  }
}
</script>
<style lang="stylus">

</style>
