<template>
  <q-layout>
    <div class="banner relative-position">
      <q-img src="img/mine/mine.png" height="240px"></q-img>
      <div class="absolute-full">
        <div class="container">
          <div class="tags">
            <div>我的账户</div>
            <div class="active">我的最爱</div>
            <div>我最喜爱的艺术家</div>
            <div>购买记录</div>
          </div>
          <div class="line"></div>
          <div class="title">下午好 葫芦娃</div>
          <div class="time">您自2020/8/5起成为了永宝 艺术收藏家</div>
        </div>
      </div>
    </div>
    <div class="title2 text-right">
      <div class="edit">编辑</div>
      <div><span>删除</span>｜<span>取消</span></div>
    </div>
    <div class="wishlist">
      <div class="row item" v-for="i in 6" :key="i">
        <div class="col-3 image"></div>
        <div class="col-4 desc">
          <div class="title">LOVE IS ON THE RISE</div>
          <div class="name">Katy Tackes</div>
          <div class="size">15x11 in - 2019</div>
        </div>
        <div class="col-3 prise">
          <div>价格</div>
          <div class="num">304，000</div>
        </div>
        <div class="col-2 row items-center">
          <div class="btn buy text-white text-center">购买</div>
        </div>
      </div>
      <div class="row item" v-for="i in 6" :key="i">
        <div class="col-3 image2"></div>
        <div class="col-4 desc">
          <div class="title">LOVE IS ON THE RISE</div>
          <div>Katy Tackes</div>
          <div>15x11 in - 2019</div>
        </div>
        <div class="col-3 prise">
          <div>价格</div>
          <div class="num">304，000</div>
        </div>
        <div class="col-2 row items-center">
          <div class="btn buy text-white text-center">购买</div>
        </div>
      </div>
    </div>
    <div class="history">
      <div>您最近浏览的艺术品</div>
      <div>更多</div>
      <div class="row item">
        <div class="col-3 text-center" v-for="i in 4" :key="i">
          <div class="img">
            <div class="image"></div>
          </div>
          <div>丙烯酸 • 亚麻</div>
          <div>100x100cm</div>
        </div>
      </div>
    </div>
  </q-layout>
</template>

<style lang="scss" scoped>
.btn {
  cursor: pointer;
}
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
      padding: 0 100px;
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
.title2 {
  padding: 20px 0;
  width: 1200px;
  margin: 0 auto;
  div {
    display: inline-block;
  }
  .edit {
    padding: 0 60px;
  }
}
.wishlist {
  width: 1200px;
  margin: 0 auto;
  padding: 0 100px;
  .item {
    border-top: 1px solid pink;
    padding: 20px 0;
    .image {
      background: url("/img/mine/artwork.png") left center no-repeat;
      background-size: contain;
    }
    .image2 {
      background: url("/img/mine/artwork2.png") left center no-repeat;
      background-size: contain;
    }
    .buy {
      background-color: #152c2b;
      padding: 5px 0;
      font-size: 18px;
      font-weight: bolder;
      width: 160px;
    }
    .desc,
    .prise {
      padding: 30px 0;
    }
    .desc {
      .title {
        font-size: 18px;
      }
    }
    .prise {
      .num {
        font-size: 24px;
      }
    }
  }
}
.history {
  width: 1100px;
  margin: 0 auto;
  .item {
    .img {
      width: 200px;
      height: 200px;
      background-color: #152c2b;
      border: 2px solid rgb(173, 175, 139);
      margin: 0 auto;
      padding: 8px;
    }
    .image {
      background: url("/img/mine/history1.png") center center no-repeat;
      width: 180px;
      height: 180px;
      background-size: contain;
      margin: 0 auto;
    }
  }
}
</style>

