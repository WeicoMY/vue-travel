<template>
  <div class="gallary" @click.stop="handleGallaryClick">
    <div class="gallary-wrapper">
      <swiper :options="swiperOption">
        <swiper-slide
          v-for="(item, index) of images"
          :key="item + index"
        >
          <img 
            :src="item"
            alt="gallary images"
            class="swiper-image"
          >
        </swiper-slide>
        <div class="swiper-pagination"  slot="pagination"></div>
      </swiper>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Gallary',
  data () {
    return {
      swiperOption: {
        pagination: '.swiper-pagination',
        paginationType: 'fraction'
      }
    }
  },
  props: {
    images: Array
  },
  methods: {
    handleGallaryClick () {
      this.$emit('closeGallary')
    }
  }
}
</script>

<style lang="stylus" scoped>
.gallary
  position fixed
  left 0
  right 0
  top 0
  bottom 0
  display flex
  align-items center
  background #333
  z-index 99
  .gallary-wrapper
    width 100%
    .swiper-container
      overflow inherit
    .swiper-image
      width 100%
    .swiper-pagination
      position fixed
      bottom rem2(100)
      color #fff
</style>
