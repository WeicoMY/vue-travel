<template>
  <div class="detail">
    <detail-banner></detail-banner>
    <detail-header
      v-show="showHeader"
      :style="headerStyle"
    ></detail-header>
    <detail-list :list="list"></detail-list>
    <div class="content"></div>
  </div>  
</template>

<script>
import DetailBanner from './components/Banner'
import DetailHeader from './components/Header'
import DetailList from './components/List'
export default {
  name: 'Detail',
  components: {
    DetailBanner,
    DetailHeader,
    DetailList
  },
  data () {
    return {
      showHeader: false,
      headerStyle: { opacity: 0 },
      list: [
        { 
          title: '单票',
          children: [
            { title: '成人票' },
            { title: '儿童票' },
            { title: '学生票' },
            { title: '家庭票' }
          ]
        },
        { title: '特殊人群票' },
        { title: '动物世界+大马戏' },
        { title: '动物世界+水上乐园' },
        { title: '动物世界+水上乐园' },
        { title: '两园两日套票' },
        { title: '三园三日套票' },
      ]
    }
  },
  methods: {
    handleScroll () {
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop
      console.log(scrollTop)
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
      // window.pageYOffset = 0
      // document.body.scrollTop = 0
      // document.documentElement.scrollTop = 0
    window.scrollTo(0, 0)
  },
  deactivated () {
    window.removeEventListener('scroll', this.handleScroll)
  }
}
</script>

<style lang="stylus" scoped>
.content
  height 40rem
</style>
