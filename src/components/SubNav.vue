<template>
    <div id="sub-nav">
        <el-row>
            <el-col :span="6" style="text-indent:-9999px">
                aa
            </el-col>
            <el-col :span="12">
                <ul class="nav-list">
                    <li>
                        <router-link to="/MusicIndex" class="nav-link" :class='{active: currentRouter == "/MusicIndex"}'>推荐</router-link>
                    </li>
                    <li>
                        <router-link to="/MusicIndex/TopList" class="nav-link" :class='{active: currentRouter == "/MusicIndex/TopList"}'>排行榜</router-link>
                    </li>
                    <li>
                        <router-link to="/MusicIndex/PlayList" class="nav-link" :class='{active: currentRouter == "/MusicIndex/PlayList"}'>歌单</router-link>
                    </li>
                    <li>
                        <router-link to="/MusicIndex/AnchorRadio" class="nav-link" :class='{active: currentRouter == "/MusicIndex/AnchorRadio"}'>主播电台</router-link>
                    </li>
                    <li>
                        <router-link to="/MusicIndex/Singer" class="nav-link" :class='{active: currentRouter == "/MusicIndex/Singer"}'>歌手</router-link>
                    </li>
                    <li>
                        <router-link to="/MusicIndex/NewDish" class="nav-link" :class='{active: currentRouter == "/MusicIndex/NewDish"}'>新碟上架</router-link>
                    </li>
                </ul>
            </el-col>
        </el-row>
    </div>
</template>
<script>
export default {
  data () {
    return {
      currentRouter: this.$route.path
    }
  },
  watch: {
    $route (to, from) {
      this.currentRouter = to.path
    }
  },
  mounted () {
  }
}
</script>
<style lang="stylus">
  #sub-nav
    height 34px
    line-height 30px
    background rgb(194, 12, 12)
    .nav-list
      margin 0
      padding 0
      li
        float left
        list-style none
        padding 0 20px
      .nav-link
        color #fff
        padding 5px 10px
        font-size 12px
        border-radius 20px
        line-height 34px
        text-decoration none
      .nav-link:hover
        background rgb(155, 9, 9)
      .active
        background rgb(155, 9, 9)
</style>
