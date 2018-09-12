<template>
  <div class="city-scroll">
    <ul>
      <li><a href="#">A</a></li>
      <li><a href="#">A</a></li>
      <li><a href="#">A</a></li>
      <li><a href="#">A</a></li>
      <li><a href="#">A</a></li>
      <li><a href="#">A</a></li>
    </ul>
  </div>    
</template>

<script>
export default {
  name: 'CityScroll'  
}
</script>

<style lang="stylus" scoped>
.city-scroll
  position absolute
  right 0
  top rem2(158)
  bottom 0
  background #eee
  display flex
  align-items center
  ul li
    line-height rem2(40)
    text-align center
    a
      color #666
</style>
