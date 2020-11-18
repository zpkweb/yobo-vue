<template>
  <q-layout>
    <div class="banner relative-position">
      <q-img src="img/mine/mine.png" height="240px"></q-img>
      <div class="absolute-full">
        <div class="container">
          <div class="tags">
            <div class="active">我的账户</div>
            <div>我的最爱</div>
            <div>我最喜爱的艺术家</div>
            <div>购买记录</div>
          </div>
          <div class="line"></div>
          <div class="title">下午好 葫芦娃</div>
          <div class="time">您自2020/8/5起成为了永宝 艺术收藏家</div>
        </div>
      </div>
    </div>
    <div>
      <div>您的送货地址在哪里</div>
      <input type="text" placeholder="名">
      <input type="text" placeholder="姓氏">
      <input type="text" placeholder="详细地址">
    </div>
  </q-layout>
</template>

<style lang="scss" scoped>
.banner {
  color: #d6d7c5;
  .container {
    width: 1100px;
    margin: 0 auto;
    .tags > div {
      display: inline-block;
      padding: 10px 20px;
    }
    .tags {
      padding-left: 80px;
      .active {
        background-color: #d6d7c5;
        color: #333;
      }
    }
    .line {
      width: 800px;
      height: 1px;
      background-color: rgba(214, 215, 197, 0.1);
      margin-bottom: 60px;
    }
    .title,
    .time {
      padding: 0 65px;
    }
    .title {
      font-size: 32px;
      margin-bottom: 5px;
    }
    .time {
      font-size: 18px;
    }
  }
}
</style>
