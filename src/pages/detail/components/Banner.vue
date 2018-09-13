<template>
  <div class="detail-banner">
    <div class="detail-back"><span class="iconfont icon-back"></span></div>
    <img class="banner-img"
      src="http://img1.qunarzz.com/sight/p0/1709/41/411f234d79457081a3.img.jpg_600x330_b5e86902.jpg"
      alt=""
    >
    <div class="banner-info">
      <div class="info-img"><span class="iconfont icon-picture"></span><span>102</span></div>
      <h2 class="info-title">长隆野生动物世界(AAAAA景区)</h2>
    </div>
  </div>
</template>

<script>
export default {
  name: 'DetailBanner'
}
</script>

<style lang="stylus" scoped>
.detail-banner
  height 0
  overflow hidden
  padding-bottom 55%
  position relative
  .banner-img
    width 100%
  .detail-back
    width rem2(72)
    height rem2(72)
    position absolute
    left rem2(10)
    top rem2(10)
    border-radius 50%
    text-align center
    background rgba(0, 0, 0, 0.5)
    .icon-back
      line-height @height
      font-size rem2(32)
      font-weight 700
      color #fff
  .banner-info
    position absolute
    bottom 0
    left 0
    right 0
    color #fff
    padding rem2(30) rem2(20)
    background linear-gradient(top, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0) 60%, rgba(0, 0, 0, 0.7))
    .info-img
      display inline-block
      height rem2(40)
      line-height rem2(40)
      padding 0 rem2(20)
      border-radius @height*0.5
      background rgba(0, 0, 0, 0.5)
      font-size rem2(24)
      margin rem2(10) 0
      .icon-picture
        font-size rem2(24)
        padding-right rem2(10)
    .info-title
      font-size rem2(36)
  
  
</style>
