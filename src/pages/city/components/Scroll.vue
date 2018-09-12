<template>
  <div class="city-scroll">
    <ul
      @touchstart.stop="handleTouchStart"
      @touchmove.stop="handleTouchMove"
      @touchend.stop="handleTouchEnd"
    >
      <li
        v-for="(citiesAlph, alph) of cities"
        :key="alph"
        :ref='alph'
      >
        <a href="#" @click.prevent="propLetter">{{alph}}</a>
      </li>
    </ul>
  </div>    
</template>

<script>
export default {
  name: 'CityScroll',
  props: {
    cities: Object
  },
  data () {
    return {
      touchStatus: false,
      firstLiTop: 0,
      index: ''
    }
  },
  computed: {
    alphabets () {
      return Object.keys(this.cities)
    }
  },
  watch: {
    index () {
      this.$emit('scrollToHere', this.alphabets[this.index])
    }
  },
  methods: {
    propLetter (e) {
      this.$emit('scrollToHere', e.target.innerText)
    },
    handleTouchStart (e) {
      this.touchStatus = true
    },
    handleTouchMove (e) {
      if (!this.touchStatus) return
      if (this.timer) return
      this.timer = setTimeout(() => {
        const index = Math.floor((e.touches[0].clientY - this.firstLiTop) / 20)
        if (index >= 0 && index < this.alphabets.length) {
          this.index = index
        }
        this.timer = null
      }, 16);
    },
    handleTouchEnd (e) {
      this.touchStatus = false
    },
  },
  updated () {
    let firstLi = this.$refs['A'][0]
    this.firstLiTop = firstLi.offsetParent.offsetTop + firstLi.offsetTop
  }
}
</script>

<style lang="stylus" scoped>
.city-scroll
  position absolute
  right 0
  top rem2(158)
  bottom 0
  display flex
  align-items center
  ul li
    line-height rem2(40)
    text-align center
    a
      display inline-block
      height 100%
      width 100%
      color $bgColor
</style>
