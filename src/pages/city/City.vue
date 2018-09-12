<template>
  <div class="city">
    <city-header></city-header>
    <city-search></city-search>
    <city-list :hotCities="hotCities" :cities="cities" :letter="letter"></city-list>
    <city-scroll :cities="cities" @scrollToHere="getLetter"></city-scroll>
  </div>
</template>

<script>
import axios from 'axios'
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
  },
  data () {
    return {
      hotCities: [],
      cities: {},
      letter: ''
    }
  },
  methods: {
    getInfo () {
      axios.get('/api/city.json')
        .then(res => {
          if (!res.data.ret || !res.data.data) return
          this.hotCities = res.data.data.hotCities || []
          this.cities = res.data.data.cities || {}
        })
    },
    getLetter (e) {
      this.letter = e || ''
    }
  },
  created () {
    this.getInfo()
  }
}
</script>

<style lang="stylus" scoped>
</style>
