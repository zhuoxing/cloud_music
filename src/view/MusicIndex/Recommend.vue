<template>
  <div id="recommend">
    <Banner/>
    <div class="content-wrapper">
      <div class="content">
        <div class="main-section">
          <SectionTitle/>
          <div class="section hot_recommend">
            <el-row>
              <el-col :span="6" v-for="i in 8" :key="i" >
                <el-card :body-style="{ padding: '0px' }">
                  <div class="play_box">
                    <img src="http://p1.music.126.net/iVH-BsL5b_aFMtM1wysUjA==/109951163421273646.jpg?param=140y140" class="image">
                    <div class="play_bar">
                      <span class="iconfont listen">&#xe602;</span>
                      <span>22684万</span>
                      <a class="play_btn"><i class="iconfont">&#xe7e9;</i></a>
                    </div>
                  </div>
                  <div class="desc">
                    <a>万有引力向古风——细数古风原创音乐团队</a>
                  </div>
                </el-card>
              </el-col>
            </el-row>
          </div>
          <SectionTitle/>
          <div class="section newdish">
            <DishBanner/>
          </div>
          <SectionTitle/>
          <div class="section">
            <div class="bound-list-box">
              <el-row>
                <el-col :span="8">
                  <BoundList/>
                </el-col>
                <el-col :span="8">
                  <BoundList/>
                </el-col>
                <el-col :span="8">
                  <BoundList/>
                </el-col>
                <div class="clear"></div>
              </el-row>
            </div>
          </div>
        </div>
        <div class="right-section">
          <div class="login">
            <p class="login-tip">登录网易云音乐，可以享受无限收藏的乐趣，并且无限同步到手机</p>
            <el-button>登录</el-button>
          </div>
          <div class="user"></div>
          <div class="singer">
            <p class="right-setion-title">
              <span style="float:left; font-weight:bold">热门主播</span>
            </p>
            <ul class='singer-list'>
              <li class="singer-list-item" v-for='o in 5' :key='o'>
                <a href="">
                  <div class="singer-img">
                    <img src="http://p1.music.126.net/p9U80ex1B1ciPFa125xV5A==/5931865232210340.jpg?param=62y62"/>
                  </div>
                  <div class="singer-desc">
                    <h4 style="font-size:14px; line-height:32px;">张惠妹aMEI</h4>
                    <p style="font-size:12px; line-height:22px;">台湾歌手张惠妹</p>
                  </div>
                </a>
              </li>
            </ul>
            <el-button>申请成为网易音乐人</el-button>
          </div>
          <div class="anchor">
            <p class="right-setion-title">
              <span style="float:left; font-weight:bold">入驻歌手</span>
            </p>
            <ul class="anchor-list">
              <li class="anchor-list-item" v-for='i in 5' :key='i'>
                <a href="javasrcipt:;" style="float: left;">
                  <img src="http://p1.music.126.net/xa1Uxrrn4J0pm_PJwkGYvw==/3130309604335651.jpg?param=40y40"/>
                </a>
                <div class="anchor-txt">
                  <h4 style="font-size:12px; line-height:24px;font-weight:normal">谢谢收听</h4>
                  <p style="font-size:12px">南京电台主持人王馨</p>
                </div>
              </li>
            </ul>
          </div>
        </div>
        <div style="clear:both"></div>
      </div>
    </div>
  </div>
</template>
<script>
import Banner from '@/components/Banner'
import SectionTitle from '@/components/SectionTitle'
import DishBanner from '@/components/DishBanner'
import BoundList from '@/components/BoundList'
export default {
  components: {
    Banner,
    SectionTitle,
    DishBanner,
    BoundList
  },
  data () {
    return {

    }
  }
}
</script>
<style lang="stylus">
  #recommend
    .content-wrapper
      width 100%
      .content
        width 980px
        margin 0 auto
        border-right 1px solid #d3d3d3
        border-left 1px solid #d3d3d3
      .main-section
        width 690px
        float left
        border-right 1px solid #d3d3d3
        padding 40px 20px 0 20px
        .hot_recommend
          .el-col-6
            margin-bottom 30px
            &:nth-child(4)
            &:nth-child(8)
              padding-left 32px
            &:nth-child(3)
            &:nth-child(7)
              padding-left 20px
            &:nth-child(2)
            &:nth-child(6)
              padding-left 10px
          .desc
            font-size 14px
            text-align left
            a
              width 100%
          .el-card
            width 140px
            height 204px
            box-shadow none
            border-radius 0
            border 0
        .newdish
          border solid 1px rgb(211, 211, 211)
          background rgb(245, 245, 245)
          margin-top 20px
        .section
          padding-top 20px
          margin-bottom 20px
          .bound-list-box
            border solid 1px rgb(211, 211, 211)
            overflow hidden
            .el-col
              &:nth-child(1)
              &:nth-child(2)
                border-right solid 1px rgb(211, 211, 211)
        .play_box
          position relative
        .play_bar
          position absolute
          background: rgba(0,0,0,0.5);
          width 100%
          height 27px
          line-height 27px
          color #fff
          bottom 0
          .iconfont
            color #ffffff
          .play_btn
            margin-left 10px
          .listen
            margin-right 10px
          .pad_left_15
            padding-left 15px
          .pad_left_30
            padding-left 30px
          .pad_left_40
            padding-left 40px
      .right-section
        float left
        .login
          padding 20px 20px
          width 208px
          height 66px
          background url('https://s2.music.126.net/style/web2/img/index/index.png?934ce1bc2f5f32172efaf341ece0a2ac') no-repeat
          background-position 0 0
          .el-button
            height 30px
            width 100px
            line-height 30px
            padding 0
            background #D00F16
            color #fff
            margin-top 5px
        .login-tip
          font-size 12px
          text-align left
          line-height 20px
        .right-setion-title
          height 24px
          line-height 24px
          border-bottom solid 1px #ccc
          font-size 12px
          margin-bottom 20px
        .singer
        .anchor
          padding 0 20px
          padding-top 20px
        .singer
          .singer-list-item
            height 62px
            background #fafafa
            margin-bottom 14px
            .singer-img
            .singer-desc
              float left
            .singer-img
              width 62px
              height 62px
            .singer-desc
              border 1px solid #e9e9e9
              padding-left 20px
              border-left 0
              height 60px
              width 126px
              color #333
              text-align left
          .el-button
            width 209px
            background #F4F4F4
            padding 6px 20px
        .anchor
          .anchor-list-item
            margin-bottom 10px
            height 40px
            text-align left
            .anchor-txt
              float left
              height 40px
              padding-left 10px
              text-align left

</style>
