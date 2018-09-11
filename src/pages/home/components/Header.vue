<template>
  <div class="header">
    <div class="header-left"><span class="iconfont icon-back"></span></div>
    <div class="header-input"><span class="iconfont icon-search"></span>输入城市/景点/游玩主题</div>
    <router-link class="router-link" to="/city">
      <div class="header-right">
        <span class="iconfont icon-morecity">{{city}}</span>
      </div>
    </router-link>
  </div>
</template>

<script>
export default {
  name: 'Homeheader',
  props: [ 'city' ]
}
</script>

<style lang="stylus" scoped>
.header
  height rem2(86)
  display flex
  justify-content space-between
  background $bgColor
  font-size rem2(28)
  line-height @height
  color #fff
  .header-left
    width rem2(64)
    text-align center
  .router-link
    color #fff
    .header-right
      width rem2(124)
      text-align center
      ::after
        vertical-align -1px
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

