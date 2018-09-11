<template>
  <div class="home-nav">
    <swiper :options="swiperOption">
      <swiper-slide v-for="(page, index) of pages" :key="'page' + index">
        <div class="home-nav-icon" v-for="icon of page" :key="icon.imgUrl + icon.id">
          <div class="icon-box">
            <img :src="icon.imgUrl" :alt="icon.desc">
          </div>
          <p class="icon-label">{{icon.desc}}</p>
        </div>
      </swiper-slide>
    </swiper>
  </div>
</template>

<script>
export default {
  name: 'HomeIcon',
  data () {
    return {
      swiperOption: {}
    }
  },
  props: [ 'iconList' ],
  computed: {
    pages () {
      const pages = []
      this.iconList.forEach((icon, index) => {
        let page = Math.floor(index / 8)
        if (!pages[page]) {
          pages[page] = []
        }
        pages[page].push(icon)
      })
      return pages
    }
  }
}
</script>

<style lang="stylus" scoped>
.home-nav
  width 100%
  overflow hidden
  height 0
  padding-bottom 50%
  background #fff
  .home-nav-icon
    width 25%
    height 0
    padding-bottom 25%
    float left
    position relative
    text-align center
    .icon-box
      position absolute 
      top rem2(20)
      left 0
      right 0
      bottom rem2(48)
      img
        height 100%
    .icon-label
      position absolute
      left 0
      right 0
      bottom rem2(20)
      ellipsis()
</style>