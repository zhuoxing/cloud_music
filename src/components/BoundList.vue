<template>
  <div class="bound-list">
    <el-card class="box-card">
      <div slot="header" class="clearfix">
        <a href="javascript:;" class="img-link">
          <img src="http://p3.music.126.net/DrRIg6CrgDfVLEph9SNh7w==/18696095720518497.jpg?param=100y100">
        </a>
        <div class="option-box">
          <a class="list_link">云音乐飙升榜</a>
          <p>
            <span class="play iconfont">&#xe7e9;</span>
            <span class="collect iconfont">&#xe607;</span>
          </p>
        </div>
        <div class="clear"></div>
      </div>
      <ul class="list">
        <li v-for="o in 10" :key="o" class="list-item">
          <span class="number">{{o}}</span>
          <p class="music-title">
            Old Friend （prod. by Eddie Beatz)
          </p>
          <div class="option-btn">
            <span class="iconfont">&#xe7e9;</span>
            <span class="el-icon-plus"></span>
            <span class="iconfont">&#xe607;</span>
          </div>
          <div class="clear"></div>
        </li>
        <li class="list-item">
          <a style="float:right; margin-right:30px; font-size:12px">查看全部></a>
        </li>
      </ul>
    </el-card>
  </div>
</template>
<script>
export default {
  data () {
    return {}
  }
}
</script>
<style lang="stylus">
  .bound-list
    width 100%
    .option-box
      float left
      margin-left 10px
      .list_link
        font-size 14px
        line-height 30px
    .el-card
      width 100% !important
      background #f4f4f4
      text-align left
      box-shadow none
      border-radius 0
      border 0
      .el-card__header
        padding 19px
      .el-card__body
        padding 0
      .list-item
        &:nth-child(2n-1)
          background #E8E8E8
        font-size 14px
        height 32px
        line-height 32px
        padding-left 30px
        .number
          float left
          display block
          width 24px
          height 32px
          font-size 14px
      .img-link
        float left
        width 80px
        height 80px
        img
          width 80px
          width 80px
    .play
    .collect
      &:hover
        color #999999
      cursor pointer
      font-size 20px
      color #BEBEBE
      font-weight bold
    .play
      font-size 24px
      margin-right 5px
    .music-title
      float left
      width 45%
      overflow hidden
      text-overflow ellipsis
      white-space nowrap
      font-size 12px
    .option-btn
      float left
      width 80px
      height 32px
      span
        font-size 18px
        margin-right 5px
        font-weight 800
        color #BEBEBE
</style>
