<template>
  <div class="detail-list">
    <ul class="ticket-list">
      <li
        class="ticket-type border-bottom"
        v-for="(type, index) of list"
        :key="index"
      >
        <span class="ticket-icon"></span>
        {{type.title}}
        <detail-list v-if="type.children" :list="type.children"></detail-list>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'DetailList',
  props: {
    list: Array
  }
}
</script>

<style lang="stylus" scoped>
.detail-list
  .ticket-list
    background #F5F5F5
    .ticket-type
      position relative
      background #fff
      line-height rem2(88)
      padding-left rem2(60)
      // margin-bottom rem2(10)
      .ticket-icon
        display inline-block
        position absolute
        width rem2(32)
        height rem2(32)
        top rem2(28)
        left rem2(20)
        background url(http://s.qunarzz.com/piao/image/touch/sight/detail.png) 0 rem2(-42.7) no-repeat
        background-size rem2(37.3) rem2(280)
</style>
