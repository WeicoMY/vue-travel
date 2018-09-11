<template>
  <div class="city-search">
    <input type="search" class="search-input" placeholder="请输入城市名或拼音">
  </div>
</template>

<script>
export default {
  name: "CitySearch",
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

</style>

