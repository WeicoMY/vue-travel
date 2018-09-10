<template>
<div class="swiper">
  <swiper :options="swiperOption">
    <!-- slides -->
    <swiper-slide v-for="url of urls" :key="url">
      <img :src="url" alt="swiper-images" class="swiper-image">
    </swiper-slide>
    <div class="swiper-pagination"  slot="pagination"></div>
  </swiper>
</div>
</template>

<script>
export default {
  name: 'HomeSwiper',
  data () {
    return {
      swiperOption: {
        pagination: '.swiper-pagination',
        loop: true,
        autoplay: 3000
      },

      urls: [
        'http://img1.qunarzz.com/piao/fusion/1809/ce/bca92895556c5002.jpg_750x200_cf56d46c.jpg',
        'http://img1.qunarzz.com/piao/fusion/1808/18/2dbce82b07a23402.jpg_750x200_14356b03.jpg',
        'http://img1.qunarzz.com/piao/fusion/1809/cc/94c4565e59038102.jpg_750x200_44746f2d.jpg'
      ]
    }
  }
}
</script>

<style lang="stylus" scoped>
.swiper >>> .swiper-pagination-bullet-active
  background #fff
  margin 0 3px
.swiper
    width 100%
    overflow hidden
    height 0
    padding-bottom 26.7%
    position relative
    .swiper-image
      width 100%
    .swiper-pagination
      bottom 0
</style>
