<template>
<div class="swiper">
  <swiper :options="swiperOption" v-if="showSwiper">
    <!-- slides -->
    <swiper-slide v-for="(item, index) of swiperList" :key="item.imgUrl + index">
      <img :src="item.imgUrl" alt="swiper images" class="swiper-image">
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
      }
    }
  },
  props: ['swiperList'],
  computed: {
    showSwiper () {
      return this.swiperList.length
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
