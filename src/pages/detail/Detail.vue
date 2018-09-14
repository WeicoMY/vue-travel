<template>
  <div class="detail">
    <detail-banner
      :titleBanner="titleBanner"
      :imgGallary="imgGallary"
      :imgBanner="imgBanner"
    ></detail-banner>
    <detail-header
      v-show="showHeader"
      :style="headerStyle"
    ></detail-header>
    <detail-list :list="list"></detail-list>
    <div class="content"></div>
  </div>  
</template>

<script>
import axios from 'axios'

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
      titleBanner: '',
      imgGallary: [],
      imgBanner: '',
      list: []
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
    },
    getInfo () {
      axios.get('/api/detail.json?id='+this.$route.params.id)
        .then(this.handleResponse)
    },
    handleResponse (res) {
      res = res.data
      if (res.ret && res.data) {
        this.titleBanner = res.data.sightName
        this.imgBanner = res.data.bannerImg
        this.imgGallary = res.data.gallaryImgs
        this.list = res.data.categoryList
      }
    }
  },
  activated () {
    window.addEventListener('scroll', this.handleScroll)
  },
  deactivated () {
    window.removeEventListener('scroll', this.handleScroll)
  },
  mounted () {
    this.getInfo()
  }
}
</script>

<style lang="stylus" scoped>
.content
  height 40rem
</style>
