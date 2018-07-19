<template>
    <div id="musicIndex">
      <SubNav/>
      <router-view></router-view>
    </div>
</template>
<script>
import SubNav from '@/components/SubNav'
export default {
  components: {
    SubNav
  },
  data () {
    return {

    }
  }
}
</script>
<style lang="stylus">

</style>
