<template>
  <div class="home">
    <home-header></home-header>
    <home-swiper></home-swiper>
    <home-nav></home-nav>
    <home-recommend></home-recommend>
    <home-weekend></home-weekend>
  </div>
</template>

<script>
import HomeHeader from './components/Header'
import HomeSwiper from './components/Swiper'
import HomeNav from './components/Nav'
import HomeRecommend from './components/Recommend'
import HomeWeekend from './components/Weekend'
export default {
  name: 'Home',
  components: {
    HomeHeader,
    HomeSwiper,
    HomeNav,
    HomeRecommend,
    HomeWeekend
  }
  
}
</script>

<style lang="stylus" scoped>
.home
  background #F5F5F5
</style>


