<template>
  <div class="detail-banner" @click="handleBannerClick">
    <div>
      <div
        tag="div"
        class="detail-back"
        @click.stop="handleBackClick"
      >
        <span class="iconfont icon-back"></span>
      </div>
      <img class="banner-img"
        :src="imgBanner"
        alt=""
      >
      <div class="banner-info">
        <div class="info-img"><span class="iconfont icon-picture"></span><span>{{imgGallary.length}}</span></div>
        <h2 class="info-title">{{titleBanner}}</h2>
      </div>
    </div>
    <banner-gallary
      :images="imgGallary"
      v-if="showGallary"
      @closeGallary="handleCloseGallary"
    ></banner-gallary>
  </div>
</template>

<script>
import BannerGallary from '@/common/gallary/Gallary'
export default {
  name: 'DetailBanner',
  data () {
    return {
      showGallary: false
    }
  },
  props: {
    titleBanner: String,
    imgBanner: String,
    imgGallary: Array
  },
  components: {
    BannerGallary
  },
  methods: {
    handleBannerClick () {
      this.showGallary = true
    },
    handleCloseGallary () {
      this.showGallary = false
    },
    handleBackClick () {
      this.$router.push('/')
    }
  }
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
    background linear-gradient(to bottom, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0) 60%, rgba(0, 0, 0, 0.7))
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
