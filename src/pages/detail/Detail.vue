<template>
  <div class="detail">
    <detail-banner></detail-banner>
    <detail-header
      v-show="showHeader"
      :style="headerStyle"
    ></detail-header>
    <div class="content"></div>
  </div>  
</template>

<script>
import DetailBanner from './components/Banner'
import DetailHeader from './components/Header'
export default {
  name: 'Detail',
  components: {
    DetailBanner,
    DetailHeader
  },
  data () {
    return {
      showHeader: false,
      headerStyle: { opacity: 0 }
    }
  },
  methods: {
    handleScroll () {
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop
      if (scrollTop > 60) {
        this.showHeader = true
        const opacity = (scrollTop - 60) / (170 - 60)
        this.headerStyle.opacity = opacity > 1 ? 1 : opacity
      } else {
        this.showHeader = false
      }
    }
  },
  activated () {
    window.addEventListener('scroll', this.handleScroll)
  },
  deactivated () {
    window.removeEventListener('scroll', this.handleScroll)
  }
}
</script>

<style lang="stylus" scoped>
.content
  height 50rem
</style>
