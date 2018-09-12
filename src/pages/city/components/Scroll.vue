<template>
  <div class="city-scroll">
    <ul>
      <li v-for="(citiesAlph, alph) of cities" :key="alph"><a href="#">{{alph}}</a></li>
    </ul>
  </div>    
</template>

<script>
export default {
  name: 'CityScroll',
  props: {
    cities: Object
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
      color $bgColor
</style>
