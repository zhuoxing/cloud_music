<template>
    <el-footer>
        <el-row>
            <el-col :span='12'>
                <p class="about_link">
                    <a>关于网易</a><span class="split">|</span>
                    <a>客户服务</a><span class="split">|</span>
                    <a>服务条款</a><span class="split">|</span>
                    <a>网站导航</a><span class="split">|</span>
                    <a>意见反馈</a>
                </p>
                <p>
                    网易公司版权所有©1997-2018杭州乐读科技有限公司运营：浙网文[2018]3506-263号
                </p>
                 <p>
                    法和不良信息举报电话：0571-89853516&nbsp;&nbsp;举报邮箱：cloudmusicservice@163.com
                </p>
            </el-col>
            <el-col :span='12'>
                <ul class="logo-list">
                    <li>
                        <a href="" class="logo logo-musician"></a>
                    </li>
                    <li>
                        <a href="" class="logo logo-topic"></a>
                    </li>
                     <li>
                        <a href="" class="logo logo-media"></a>
                    </li>
                     <li>
                        <a href="" class="logo logo-reward"></a>
                    </li>
                     <li>
                        <a href="" class="logo logo-cash"></a>
                    </li>
                </ul>
            </el-col>
        </el-row>
    </el-footer>
</template>
<script>
export default {
  data () {
    return {}
  }
}
</script>
<style lang="stylus">
  .el-footer
    height 148px !important
    background rgb(242, 242, 242)
    border-top solid 1px rgb(211, 211, 211)
    font-size 12px
    .about_link
      font-size 12px
    .split
      padding 0 10px
    .el-row
      width 980px
      margin 0 auto
      .el-col
        text-align left
    .logo-list
      li
        float left
        list-style none
      .logo
        background url('../../static/img/foot_enter.png')
        width 60px
        height 70px
        display block
        margin-left 30px
      .logo-musician
        background-position 60px -80px
      .logo-topic
        background-position 0 -80px
      .logo-media
      .logo-reward
        background-position 60px 0
      .logo-cash
        background url('../../static/img/cash.png') no-repeat
</style>
