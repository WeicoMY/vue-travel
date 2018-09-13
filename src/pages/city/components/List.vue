<template>
<div class="city-list" ref="scroll">
    <div>
      <div class="city-popular">
        <h2 class="list-title">
          热门城市
        </h2>
        <ul class="list">
          <li 
            class="border-rightbottom"
            v-for="city of hotCities"
            :key="city.id"
            @click="handdleCityClick(city.name)"
          >
            <a href="#">{{city.name}}</a>
          </li>
        </ul>
      </div>
      <div class="city-sort">
        <h2 class="list-title">
          字母排序
        </h2>
        <ul class="list">
          <li
            v-for="(citiesAlph, alph) in cities"
            :key="alph"
            @click="scrollTo(alph)"
          >
            <a href="#" @click.prevent>{{alph}}</a>
          </li>
        </ul>
      </div>
      <div class="city-alph"
        v-for="(citiesAlph, alph) of cities"
        :key="alph"
        :ref="alph"
      >
        <h2 class="list-title">
          {{alph}}
        </h2>
        <ul class="list">
          <li
            class="border-rightbottom"
            v-for="city of citiesAlph"
            :key="city.id"
            @click="handdleCityClick(city.name)"
          >
            <a href="#">{{city.name}}</a>
          </li>
        </ul>
      </div>
  </div>
</div>
</template>

<script>
import BScroll from 'better-scroll'
export default {
  name: 'CityList',
  data () {
    return {
      showLetter: this.letter
    }
  },
  props: {
    hotCities: Array,
    cities: Object,
    letter: String
  },
  watch: {
    letter () {
      this.showLetter = this.letter
    },
    showLetter (now) {
      this.scroll.scrollToElement(this.$refs[now][0])
    }
  },
  methods: {
    scrollTo (index) {
      this.showLetter = index
    },
    handdleCityClick (city) {
      this.$store.commit('changeCity', city)
      this.$router.push('/')
    }
  },
  mounted () {
    this.scroll = new BScroll(this.$refs.scroll, {
      click: true
    })
  }
}
</script>

<style lang="stylus" scoped>
.city-list
  position absolute
  left 0
  right 0
  top rem2(158)
  bottom 0
  overflow hidden
  background #f5f5f5
  .list-title
    height rem2(72)
    line-height @height
    padding 0 rem2(30)
    font-size rem2(24)
  .list
    background #fff
    box-sizing border-box
    overflow hidden
    li
      float left
      width 33.33%
      line-height rem2(90)
      text-align center
      &.border-rightbottom::before,
      &.border-rightbottom::after
        color: #F5F5F5
      a
        display block
        color #333
        ellipsis()
  .city-popular
    width 100%
    height 0
    padding-bottom rem2(90)*4+rem2(72)
  .city-sort .list li
    width (100%/6)
</style>
