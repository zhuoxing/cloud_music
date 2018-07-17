<template>
    <div id="banner" :style="{backgroundImage: 'url(' + backgroundUrl[activeIndex] + ')'}">
        <div class="swiper-container">
            <div class="swiper-wrapper">
                <div class="swiper-slide">
                    <img class="banner-img" src="http://p1.music.126.net/EQhQvuG-OysWp74yVCWXdQ==/109951163411042851.jpg" alt="">
                    <span class="blank_box"></span>
                </div>
                <div class="swiper-slide">
                    <img class="banner-img" src="http://p1.music.126.net/d9j7TSyqSMIRjAh3sVdkaQ==/109951163410840018.jpg" alt="">
                    <span class="blank_box"></span>
                </div>
                <div class="swiper-slide">
                    <img class="banner-img" src="http://p1.music.126.net/aoWfwrX70oAaxjvOKe7fTA==/109951163411046774.jpg" alt="">
                    <span class="blank_box"></span>
                </div>
            </div>
             <!-- Add Pagination -->
            <div class="swiper-pagination swiper-pagination-white"></div>

            <div class="download-box">
                <a href="" class="download-link"></a>
                <p class="tip-text">PC 安卓 iPhone WP iPad Mac 六大客户端</p>
            </div>
        </div>
        <!-- Add Arrows -->
        <div class="swiper-button-next swiper-button-white"></div>
        <div class="swiper-button-prev swiper-button-white"></div>
    </div>
</template>
<script>
import Swiper from 'swiper'
import 'swiper/dist/css/swiper.min.css'
export default {
  data () {
    return{
        backgroundUrl:['http://p1.music.126.net/jRidkDrKuEHJ-1eJ5EpPUg==/109951163411048187.jpg','http://p1.music.126.net/8Ms-rIuJjtoeyJ0nHfPp7A==/109951163410829980.jpg','http://p1.music.126.net/KcRoXZ5QOI5TigASxiGnLw==/109951163411042866.jpg'],
        activeIndex: 0
    }
  },
  mounted () {
    var _self = this
    var mySwiper = new Swiper('.swiper-container', {
      pagination: '.swiper-pagination',
      paginationClickable: true,
      nextButton: '.swiper-button-next',
      prevButton: '.swiper-button-prev',
      spaceBetween: 30,
      effect: 'fade',
      loop:true,
      onSlideChangeStart: function(swiper){
        _self.activeIndex = swiper.realIndex
      }
    })
  }
}
</script>
<style lang="stylus">
  #banner
    position relative
    background url('http://p1.music.126.net/jRidkDrKuEHJ-1eJ5EpPUg==/109951163411048187.jpg')
    .swiper-container
      width 980px
      height 336px
      position relative
      .download-box
        position absolute
        top 0
        right 0
        width 254px
        height 336px
        background url('https://s2.music.126.net/style/web2/img/index/download.png?0fee837168c193d45bf21b9cfd4ee55e')
      .tip-text
        color #fff
        font-size 12px
      .download-link
        display block
        height 268px
    .blank_box
      display block
      float left
      width 252px
      height 336px
    .banner-img
      width 730px
      height 336px
      float left
    .swiper-button-prev
      left 218px
    .swiper-button-next
      right 218px
</style>
