<template>
    <div id="commpage">
        <Header/>
        <router-view></router-view>
        <Footer/>
    </div>
</template>
<script>
import Header from '@/components/Header'
import Footer from '@/components/Footer'
export default {
  components: {
    Header,
    Footer
  },
  data () {
    return {}
  }
}
</script>
<style lang="stylus" scoped>
</style>
