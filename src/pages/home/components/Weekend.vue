<template>
  <div class="home-weekend">
    <div class="home-weekend-title">
      <img src="http://img1.qunarzz.com/piao/fusion/1711/89/ebc329f16c55bb02.png">周末去哪儿
    </div>
    <div class="home-weekend-list">
      <div class="item" v-for="(item, index) of weekendList" :key="index + item.imgUrl">
        <div class="item-img">
          <img :src="item.imgUrl" alt="">
        </div>
        <div class="item-msg">
          <h3 class="item-title">{{item.title}}</h3>
          <p class="item-desc">{{item.desc}}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HomeWeekend',
  data () {
    return {
      weekend: [
        {
          imgUrl: 'http://img1.qunarzz.com/sight/source/1505/92/580e9ea4f37a1b.jpg_r_640x214_72112761.jpg',
          title:  '广州必游TOP10',
          desc: '感受现代与传统相融合的广州'
        },
        {
          imgUrl: 'http://img1.qunarzz.com/sight/source/1505/ec/902725c4d56517.jpg_r_640x214_7a74d251.jpg',
          title:  '羊城民俗风情游',
          desc: '品味羊城文化，感受羊城别样风情'
        },
        {
          imgUrl: 'http://img1.qunarzz.com/sight/source/1505/50/07fa9343791682.jpg_r_640x214_c8c3d798.jpg',
          title:  '自然户外好去处',
          desc: '快快来到户外，感受花城的魅力'
        },
      ]
    }
  },
  props: [ 'weekendList' ]
}
</script>

<style lang="stylus" scoped>
  .home-weekend
    .home-weekend-title
      line-height rem2(44)
      height rem2(44)
      padding rem2(25)
      font-size rem2(32)
      img
        height 70%
        margin-right rem2(10)
        vertical-align rem(-2)
    .home-weekend-list
      .item
        background #fff
        margin-bottom rem2(10)
        &:first-child
          padding-top 0
        .item-img
          width 100%
          img
            width 100%
        .item-msg
          padding rem2(22)
          .item-title
            font-size rem2(28)
            line-height rem2(48)
          .item-desc
            font-size rem2(24)
            line-height rem2(42)
            color #616161
</style>