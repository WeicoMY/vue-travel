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
        src="http://img1.qunarzz.com/sight/p0/1709/41/411f234d79457081a3.img.jpg_600x330_b5e86902.jpg"
        alt=""
      >
      <div class="banner-info">
        <div class="info-img"><span class="iconfont icon-picture"></span><span>{{images.length}}</span></div>
        <h2 class="info-title">长隆野生动物世界(AAAAA景区)</h2>
      </div>
    </div>
    <banner-gallary
      :images="images"
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
      images: [
        'http://img1.qunarzz.com/sight/p0/1507/6a/f77ff30899f84b98e0e74b2918326946.water.jpg_r_800x800_e60f44ef.jpg',
        'http://img1.qunarzz.com/sight/p0/1507/a7/a74ccfbd5b3071eff6b23854e23613f9.water.jpg_r_800x800_4150aec7.jpg',
        'http://img1.qunarzz.com/sight/p0/1508/88/f7ea2660ad98bee23c052ef05d51dd0e.water.jpg_r_800x800_c13fc929.jpg',
        'http://img1.qunarzz.com/sight/p0/1507/ce/bf45524d91b584fd16ae32ed98d83c89.water.jpg_r_800x800_3f0bcc3e.jpg'
      ],
      showGallary: false
    }
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
