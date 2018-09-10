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
        'http://dimg04.c-ctrip.com/images/700a0v000000jy2fyA1FD_1080_216_25.jpg',
        'http://dimg04.c-ctrip.com/images/70050w000000ka9ib1476_1080_216_25.jpg'
      ]
    }
  }
}
</script>

<style lang="stylus" scoped>
.swiper >>> .swiper-pagination-bullet-active
  background #fff
.swiper
    width 100%
    overflow hidden
    height 0
    padding-bottom 20%
    .swiper-image
      width 100%
</style>
