<template>
  <div id="dish_banner">
    <div class="banner-box">
      <div id="swiper-container">
        <div class="swiper-wrapper">
          <div class="swiper-slide">
            <div class="one-dish">
              <img src="http://p4.music.126.net/vmCcDvD1H04e9gm97xsCqg==/109951163350929740.jpg?param=100y100">
              <a href="javascript:;" class="dish-link"></a>
              <p>流星花园 电视原声带</p>
              <p>群星</p>
            </div>
          </div>
          <div class="swiper-slide">
            <div class="one-dish">
              <img src="http://p4.music.126.net/vmCcDvD1H04e9gm97xsCqg==/109951163350929740.jpg?param=100y100">
              <a href="javascript:;" class="dish-link"></a>
              <p>流星花园 电视原声带</p>
              <p>群星</p>
            </div>
          </div>
          <div class="swiper-slide">
            <div class="one-dish">
              <img src="http://p4.music.126.net/vmCcDvD1H04e9gm97xsCqg==/109951163350929740.jpg?param=100y100">
              <a href="javascript:;" class="dish-link"></a>
              <p>偶遇</p>
              <p>王菲</p>
            </div>
          </div>
          <div class="swiper-slide">
            <div class="one-dish">
              <img src="http://p4.music.126.net/vmCcDvD1H04e9gm97xsCqg==/109951163350929740.jpg?param=100y100">
              <a href="javascript:;" class="dish-link"></a>
              <p>平凡的一天</p>
              <p>毛不易</p>
            </div>
          </div>
          <div class="swiper-slide">
            <div class="one-dish">
              <img src="http://p4.music.126.net/vmCcDvD1H04e9gm97xsCqg==/109951163350929740.jpg?param=100y100">
              <a href="javascript:;" class="dish-link"></a>
              <p>平凡的一天</p>
              <p>毛不易</p>
            </div>
          </div>
          <div class="swiper-slide">
            <div class="one-dish">
              <img src="http://p4.music.126.net/vmCcDvD1H04e9gm97xsCqg==/109951163350929740.jpg?param=100y100">
              <a href="javascript:;" class="dish-link"></a>
              <p>平凡的一天</p>
              <p>毛不易</p>
            </div>
          </div>
          <div class="swiper-slide">
            <div class="one-dish">
              <img src="http://p4.music.126.net/vmCcDvD1H04e9gm97xsCqg==/109951163350929740.jpg?param=100y100">
              <a href="javascript:;" class="dish-link"></a>
            </div>
          </div>
          <div class="swiper-slide">
            <div class="one-dish">
              <img src="http://p4.music.126.net/vmCcDvD1H04e9gm97xsCqg==/109951163350929740.jpg?param=100y100">
              <a href="javascript:;" class="dish-link"></a>
            </div>
          </div>
          <div class="swiper-slide">
            <div class="one-dish">
              <img src="http://p4.music.126.net/vmCcDvD1H04e9gm97xsCqg==/109951163350929740.jpg?param=100y100">
              <a href="javascript:;" class="dish-link"></a>
            </div>
          </div>
          <div class="swiper-slide">
            <div class="one-dish">
              <img src="http://p4.music.126.net/vmCcDvD1H04e9gm97xsCqg==/109951163350929740.jpg?param=100y100">
              <a href="javascript:;" class="dish-link"></a>
            </div>
          </div>
        </div>
        <!-- Add Arrows -->
      </div>
    </div>
    <div class="sub-button-next"><i class="iconfont">&#xe658;</i></div>
    <div class="sub-button-prev"><i class="iconfont">&#xe659;</i></div>
  </div>
</template>
<script>
import Swiper from 'swiper'
export default {
  data () {
    return {
      swiperInit: ''
    }
  },
  mounted () {
    this.swiperInit = new Swiper('#swiper-container', {
      slidesPerView: 5,
      spaceBetween: 30,
      slidesPerGroup: 5,
      loop: true,
      loopFillGroupWithBlank: true,
      pagination: {
        el: '.sub-pagination',
        clickable: true
      },
      navigation: {
        nextEl: '.sub-button-next',
        prevEl: '.sub-button-prev'
      }
    })
  }
}
</script>
<style lang="stylus">
  #dish_banner
    position relative
    padding 0 12px
    .sub-button-next
    .sub-button-prev
      cursor pointer
      position absolute
      top 40px
      font-size 15px
    .sub-button-next
      right -1px
    .sub-button-prev
      left -1px
    .banner-box
      width 100%
      overflow hidden
    .swiper-slide
      color #000
      width 118px !important
      height 150px !important
      margin: 0px 10px !important
      .one-dish
        width 100px
        height 100px
        p
          font-size 12px
          overflow: hidden;
          text-overflow:ellipsis;
          white-space: nowrap;
          text-align left
      .dish-link
        position absolute
        top 0
        left 0
        height 100px
        width 118px
        background url('https://s2.music.126.net/style/web2/img/coverall.png?dc2cdeed5f777e26a6f014a0e6458699') no-repeat
        background-position: 2px -570px
</style>
