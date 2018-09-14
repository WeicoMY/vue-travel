<template>
  <div class="detail-header">
    <router-link to="/" class="header-back"><span class="iconfont icon-back"></span></router-link>
    <h1 class="header-title">景点详情</h1>
  </div>
</template>

<script>
export default {
  name: 'DetailHeader'
}
</script>

<style lang="stylus" scoped>
.detail-header
  position fixed
  left 0
  right 0
  top 0
  height $headerHeight
  line-height @height
  font-size: $headerSize
  color #fff
  background $bgColor
  z-index 2
  .header-back
    position absolute
    left 0
    width rem2(64)
    text-align center
    .icon-back
      font-size rem2(32)
      font-weight 700
      color #fff
  .header-title
    text-align center
</style>
