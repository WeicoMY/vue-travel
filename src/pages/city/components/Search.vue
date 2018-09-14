<template>
  <div class="city-search">
    <input
      type="search"
      class="search-input"
      placeholder="请输入城市名或拼音"
      v-model="keyword"
    >
    <div class="search-content" v-show="showContent" ref="wrapper">
      <ul class="search-content-list">
        <li
          class="search-content-item border-bottom"
          v-for="city of result"
          :key="city.id"
          @click="handdleCityClick(city.name)"
        >
          {{city.name}}
        </li>
        <li class="search-content-item" v-show="notFound">抱歉，找不到该城市</li>
      </ul>
    </div>
  </div>
</template>

<script>
import Bscroll from 'better-scroll'
import { mapMutations } from 'vuex'
export default {
  name: "CitySearch",
  props: {
    cities: Object
  },
  data () {
    return {
      keyword: '',
      result: [],
      notFound: false,
      showContent: false,
      timer: null
    }
  },
  watch: {
    keyword (newValue) {
     if (this.timer) {
       clearTimeout(this.timer)
     }
     this.timer = setTimeout(() => {
        const keyword = newValue.trim()
        this.result = []
        this.notFound = false
        if (keyword === '') {
          this.showContent = false
          return
        }
        this.showContent = true
        for (let item in this.cities) {
          this.cities[item].forEach((city) => {
            if (city.spell.includes(keyword) || city.name.includes(keyword)) {
              this.result.push(city)
            }
          })
        }
        if (this.result.length === 0) {
          this.notFound = true
        }
     }, 100)
    }
  },
  methods: {
    handdleCityClick (city) {
      this.changeCity(city)
      this.$router.push('/')
    },
    ...mapMutations(['changeCity'])
  },
  mounted () {
      this.scroll = new Bscroll(this.$refs.wrapper, {
        click: true
      })
  },
  activated () {
    this.keyword = ''
  }
}
</script>

<style lang="stylus" scoped>
.city-search
  height rem2(72)
  padding 0 rem2(10)
  background $bgColor
  .search-input
    width 100%
    height rem2(60)
    line-height @height
    padding 0 rem2(10)
    border-radius rem2(5)
    text-align center
    color #666
  .search-content
    position absolute
    top rem2(158)
    left 0
    right 0
    bottom 0
    overflow hidden
    background #fff
    z-index 1
    .search-content-item
      line-height rem2(90)
      padding-left rem2(10)
</style>

