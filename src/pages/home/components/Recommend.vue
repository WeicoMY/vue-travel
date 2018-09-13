<template>
  <div class="home-recommend">
    <div class="home-recommend-title border-bottom">
      <img src="http://img1.qunarzz.com/piao/fusion/1711/89/ebc329f16c55bb02.png">猜你喜欢
    </div>
    <div class="home-recommend-list">
      <router-link tag="div" 
        class="item border-bottom"
        v-for="(item, index) of recommendList"
        :key="index + item.imgUrl"
        :to="'/detail/' + item.id"
      >
        <div class="item-img">
          <img :src="item.imgUrl" alt="">
        </div>
        <div class="item-msg">
          <h3 class="item-title">{{item.title}}</h3>
          <p class="item-comment">
            <span class="iconfont item-comment-star">&#xe60b;&#xe60b;&#xe60b;&#xe60b;&#xe60b;</span>
            <span class="item-comment-num">{{item.commentNum}}条评论</span>
          </p>
          <p class="item-desc">
            <span class="item-price">
              <span class="rmb">￥</span>
              <span class="price">{{item.price}}</span>
              起
            </span>
            <span class="item-location">{{item.location}}</span>
          </p>
        </div>
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HomeRecommend',
  props: [ 'recommendList' ]
}
</script>

<style lang="stylus" scoped>
  .home-recommend
    margin-top rem2(20)
    background #fff
    .home-recommend-title
      line-height rem2(44)
      height rem2(44)
      padding rem2(25)
      font-size rem2(32)
      img
        height 70%
        margin-right rem2(10)
        vertical-align rem(-2)
    .home-recommend-list
      padding-left rem2(25)
      margin 0
      .item
        display flex
        justify-content space-between
        height rem2(200)
        padding rem2(20) 0
        .item-img
          height 100%
          img
            height 100%
        .item-msg
          flex 1
          padding-left rem2(22)
        .item-title
          height rem2(44)
          margin-top rem2(26)
          font-size rem2(32)
        .item-comment
          margin-top rem2(10)
          font-size rem2(24)
          .item-comment-star
            color #FFB436
            margin-right rem2(20)
        .item-desc
          height rem2(45)
          line-height rem2(60)
          margin-top rem2(22)
          display flex
          justify-content space-between
          font-size rem2(24)
          .rmb
            color #FF8C12
            font-size rem2(24)
          .price
            color #FF8C12
            font-size rem2(40)
          .item-location
            width rem2(120)
            ellipsis()
</style>