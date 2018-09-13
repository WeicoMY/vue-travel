<template>
  <div class="header">
    <div class="header-left"><span class="iconfont icon-back"></span></div>
    <div class="header-input"><span class="iconfont icon-search"></span>输入城市/景点/游玩主题</div>
    <router-link class="router-link" to="/city">
      <div class="header-right">
        <span class="iconfont icon-morecity">{{this.$store.state.city}}</span>
      </div>
    </router-link>
  </div>
</template>

<script>
export default {
  name: 'Homeheader',
}
</script>

<style lang="stylus" scoped>
.header
  height $headerHeight
  display flex
  justify-content space-between
  background $bgColor
  font-size rem2(28)
  line-height $headerHeight
  color $headerColor
  .header-left
    width rem2(64)
    text-align center
    .icon-back
      line-height $headerHeight
      font-size rem2(32)
      font-weight 700
      color #fff
  .router-link
    color $headerColor
    .header-right
      width rem2(124)
      text-align center
  .header-input
    flex 1
    height rem2(64)
    margin rem2(12) rem2(4)
    background #fff
    line-height @height
    border-radius rem2(5)
    color #ccc
    .icon-search
      margin 0 5px
</style>

