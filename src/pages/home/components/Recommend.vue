<template>
  <div class="home-recommend">
    <div class="home-recommend-title border-bottom">
      <img src="http://img1.qunarzz.com/piao/fusion/1711/89/ebc329f16c55bb02.png">猜你喜欢
    </div>
    <div class="home-recommend-list">
      <div class="item border-bottom" v-for="(item, index) of recommendation" :key="index + item.imgUrl">
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
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      recommendation: [
        {
          imgUrl: 'http://img1.qunarzz.com/sight/p0/1709/41/411f234d79457081a3.img.jpg_200x200_ea02ef99.jpg',
          title:  '长隆野生动物世界',
          commentNum: 777642,
          price: 218,
          location: '长隆野生动物世界'
        },
        {
          imgUrl: 'http://img1.qunarzz.com/sight/p0/1707/47/477416df92210439a3.img.jpg_200x200_b9e4ac2c.jpg',
          title:  '广州长隆欢乐世界',
          commentNum: 23431,
          price: 200,
          location: '广州长隆欢乐世界'
        },
        {
          imgUrl: 'http://img1.qunarzz.com/sight/p0/1507/9e/7b5e0a44cb0310280b1aeb2a8dd94de8.water.jpg_200x200_3c429960.jpg',
          title:  '长隆国际大马戏剧院',
          commentNum: 321543,
          price: 199,
          location: '广州长隆大马戏剧院'
        },
      ]
    }
  }
}
</script>

<style lang="stylus" scoped>
  .home-recommend
    margin-top 10px
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