<template>
  <div class="city-header">
    <router-link to="/" class="city-header-back">
      <span class="iconfont icon-back"></span>
    </router-link>
    <h1 class="city-header-title">城市选择</h1>
  </div>
</template>

<script>
export default {
  name: 'CityHeader'
}
</script>

<style lang="stylus" scoped>
.city-header
  height $headerHeight
  background $bgColor
  position relative
  .city-header-back
    position absolute
    left 0
    top 0
    bottom 0
    height 100%
    line-height 100%
    width rem2(64)
    text-align center
    .icon-back
      line-height $headerHeight
      font-size rem2(32)
      font-weight 700
      color #fff
  .city-header-title
    text-align center
    line-height $headerHeight
    font-size $headerSize
    color $headerColor
    

</style>
