<template>
    <div id="sub-nav">
        <el-row>
            <el-col :span="6">
                aa
            </el-col>
            <el-col :span="12">
                 <ul class="nav-list">
                        <li>
                            <a class="nav-link">推荐</a>
                        </li>
                        <li>
                            <a class="nav-link">排行榜</a>
                        </li>
                        <li>
                            <a class="nav-link">歌单</a>
                        </li>
                        <li>
                            <a class="nav-link">主播电台</a>
                        </li>
                        <li>
                            <a class="nav-link">歌手</a>
                        </li>
                        <li>
                            <a class="nav-link">新碟上架</a>
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
        
    }
  }
}
</script>
<style lang="stylus">
  #sub-nav
    height 34px
    line-height 34px
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
        background rgb(155, 9, 9)
        border-radius 20px 
        line-height 34px
</style>

