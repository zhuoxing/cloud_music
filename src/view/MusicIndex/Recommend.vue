<template>
  <div id="recommend">
    <Banner/>
    <div class="content-wrapper"> 
      <div class="content">
        <div class="main-section">
          <div class="section">
            <SectionTitle/>
            <el-row>
              <el-col :span="5" v-for="(o, index) in 8" :key="o" :offset="index > 0 ? 1 : 0">
                <el-card :body-style="{ padding: '0px' }">
                  <img src="http://p1.music.126.net/iVH-BsL5b_aFMtM1wysUjA==/109951163421273646.jpg?param=140y140" class="image">
                  <div style="padding: 14px;">
                    <span>好吃的汉堡</span>
                    <div class="bottom clearfix">
                      <time class="time">{{ currentDate }}</time>
                      <!-- <el-button type="text" class="button">操作按钮</el-button> -->
                    </div>
                  </div>
                </el-card>
              </el-col>
            </el-row>
          </div>
        </div>
        <div class="right-section"></div>
        <div style="clear:both"></div>
      </div>
    </div>
  </div>
</template>
<script>
import Banner from '@/components/Banner'
import SectionTitle from '@/components/SectionTitle'
export default {
  components:{
    Banner,
    SectionTitle
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
        width 729px
        float left
        border-right 1px solid #d3d3d3
        padding 10px 20px
      .right-section
        float left
</style>
