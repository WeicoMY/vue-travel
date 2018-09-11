<template>
  <div class="home">
    <home-header></home-header>
    <home-swiper></home-swiper>
    <home-nav></home-nav>
    <home-recommend></home-recommend>
  </div>
</template>

<script>
import HomeHeader from './components/Header'
import HomeSwiper from './components/Swiper'
import HomeNav from './components/Nav'
import HomeRecommend from './components/Recommend'
export default {
  name: 'Home',
  components: {
    HomeHeader,
    HomeSwiper,
    HomeNav,
    HomeRecommend
  }
  
}
</script>

<style lang="stylus" scoped>
.home
  background #F5F5F5
</style>


