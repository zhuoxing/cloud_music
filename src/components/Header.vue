<template>
  <el-header>
    <el-row>
      <el-col :span="3" style="text-indent:-99999px">aaa</el-col>
      <el-col :span="3"><h4></h4></el-col>
      <el-col :span="9">
        <el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal" @select="handleSelect">
          <el-menu-item index="1">发现音乐</el-menu-item>
          <el-menu-item index="3">我的音乐</el-menu-item>
          <el-menu-item index="4">朋友</el-menu-item>
          <el-menu-item index="4">商城</el-menu-item>
          <el-menu-item index="4">音乐人</el-menu-item>
          <el-menu-item index="4">下载客户端</el-menu-item>
        </el-menu>
      </el-col>
      <el-col :span='6'>
          <el-input
          placeholder="音乐/视频/电台/用户"
          v-model="input23">
            <i slot="prefix" class="el-input__icon el-icon-search"></i>
          </el-input>
          <el-button icon="el-icon-search" round>视频投稿</el-button>
          <el-dropdown size="small">
            <span class="el-dropdown-link">
              登录<i class="el-icon-caret-bottom"></i>
            </span>
            <el-dropdown-menu slot="dropdown">
              <el-dropdown-item>手机号登录</el-dropdown-item>
              <el-dropdown-item>微信登录</el-dropdown-item>
              <el-dropdown-item>QQ登录</el-dropdown-item>
              <el-dropdown-item>新浪微博登录</el-dropdown-item>
              <el-dropdown-item>网易邮箱账号登录</el-dropdown-item>
            </el-dropdown-menu>
          </el-dropdown>
      </el-col>
      <el-col :span="3" style="text-indent:-99999px">aaa</el-col>
    </el-row>
    <div class="line">

    </div>
  </el-header>
</template>
<script>
export default {
  data () {
    return {}
  }
}
</script>
<style lang="stylus">
  .el-header
    background #242424
    color #fff
    height 70px !important
    padding 0
    h4
      background url("../../static/img/topbar.png")
      height 70px
      margin 0
    .el-menu
      background #242424
      border-bottom 0
    .el-menu--horizontal
      .el-menu-item
        height 70px
        line-height 70px
        color #fff
    .el-row
      height 70px
    .el-col
      line-height 70px
      .el-button
        height 32px
        line-height 32px
        padding 0 6px
        background none
        color rgb(204, 204, 204)
        font-size 12px
        border-color rgb(204, 204, 204)
    .el-input
      width 158px
      .el-input__inner
        height 32px
        line-height 32px
        border-radius 20px
        font-size 12px
    .el-dropdown
      margin-left 15px
    .line
      height 5px
      background rgb(194, 12, 12)
      width 100%
</style>
