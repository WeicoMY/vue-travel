<template>
  <div class="city">
    <city-header></city-header>
    <city-search></city-search>
    <city-list></city-list>
    <city-scroll></city-scroll>
  </div>
</template>

<script>
import CityHeader from './components/Header'
import CitySearch from './components/Search'
import CityList from './components/List'
import CityScroll from './components/Scroll'
export default {
  components: {
    CityHeader,
    CitySearch,
    CityList,
    CityScroll
  }
}
</script>

<style lang="stylus" scoped>
</style>
