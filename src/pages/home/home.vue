<template>
  <div class="home">
    <home-header></home-header>
    <home-swiper :swiperList="swiperList"></home-swiper>
    <home-nav :iconList="iconList"></home-nav>
    <home-recommend :recommendList="recommendList"></home-recommend>
    <home-weekend :weekendList="weekendList"></home-weekend>
  </div>
</template>

<script>
import HomeHeader from './components/Header'
import HomeSwiper from './components/Swiper'
import HomeNav from './components/Nav'
import HomeRecommend from './components/Recommend'
import HomeWeekend from './components/Weekend'
import axios from 'axios'
import { mapState } from 'vuex'
export default {
  name: 'Home',
  components: {
    HomeHeader,
    HomeSwiper,
    HomeNav,
    HomeRecommend,
    HomeWeekend
  },
  data () {
    return {
      swiperList: [],
      iconList: [],
      recommendList: [],
      weekendList: [],
    }
  },
  computed: {
    ...mapState(['city'])
  },
  methods: {
    getHomeInfo () {
      axios.get('/api/index.json?city=' + this.city)
      .then((info) => {
        if (!info.data.ret) return
        this.city = info.data.city || ''
        this.swiperList = info.data.data.swiperList || []
        this.iconList = info.data.data.iconList || []
        this.recommendList = info.data.data.recommendList || []
        this.weekendList = info.data.data.weekendList || []
      })
    }
  },
  created () {
    this.lastCity = this.city
    this.getHomeInfo()
  },
  activated () {
    if (this.lastCity !== this.city) {
      this.lastCity = this.city
      this.getHomeInfo()
    }
    window.scrollTo(0, 0)
  }
  
}
</script>

<style lang="stylus" scoped>
.home
  background #F5F5F5
</style>


