<template>
  <div class="home-nav">
    <swiper>
      <swiper-slide v-for="(page, index) of pages" :key="index">
        <div class="home-nav-icon" v-for="icon of page" :key="icon.url">
          <div class="icon-box">
            <img :src="icon.url" :alt="icon.label">
          </div>
          <p class="icon-label">{{icon.label}}</p>
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
      icons: [
        { url: 'http://img1.qunarzz.com/piao/fusion/1803/95/f3dd6c383aeb3b02.png', label: '景点门票' },
        { url: 'http://img1.qunarzz.com/piao/fusion/1803/95/8246f27355943202.png', label: '游乐园' },
        { url: 'http://img1.qunarzz.com/piao/fusion/1803/8c/47630407f70e8302.png', label: '国艺影视城' },
        { url: 'http://img1.qunarzz.com/piao/fusion/1804/ff/fdf170ee89594b02.png', label: '佛山必游' },
        { url: 'http://img1.qunarzz.com/piao/fusion/1803/3e/86314b2af03b7502.png', label: '水上乐园' },
        { url: 'http://img1.qunarzz.com/piao/fusion/1804/95/8d02011d149bdb02.png', label: '汽车票' },
        { url: 'http://img1.qunarzz.com/piao/fusion/1804/5a/13ceb38dcf262f02.png', label: '一日游' },
        { url: 'http://img1.qunarzz.com/piao/fusion/1803/b1/528a9e80403b8c02.png', label: '玩转长隆' },
        { url: 'http://img1.qunarzz.com/piao/fusion/1803/95/8246f27355943202.png', label: '游乐场' },
      ]
    }
  },
  computed: {
    pages () {
      const pages = []
      this.icons.forEach((icon, index) => {
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