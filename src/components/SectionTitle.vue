<template>
  <div class="section-title">
    <a class="title"><span class="circle"></span>热门推荐</a>
    <router-link to='' class="more">更多</router-link>
    <div style="clear:both"></div>
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
  .section-title
    border-bottom solid 2px #C10D0C
    padding-bottom 5px
    width 100%
    .circle
      display inline-block
      width 5px
      height 5px
      border solid 4px #C10D0C
      border-radius 50%
      margin 0 5px
    .title
      float left
    .more
      float right
</style>
