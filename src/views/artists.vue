<template>
  <q-layout>
    <div class="banner relative-position">
      <q-img src="img/artworks/banner.png" height="360px"></q-img>
      <div class="absolute-full text-center text">
        <div class="title">画家</div>
        <div class="number">7,442件符合您搜索条件的画家</div>
      </div>
    </div>
    <div class="container">
      <div class="options">
        <div class="option">
          <div class="text-dark">标签</div>
          <div>不限</div>
          <div>画家</div>
          <div>雕刻家</div>
          <div>摄影家</div>
        </div>
        <div class="option">
          <div class="text-dark">国籍</div>
          <div>不限</div>
          <div>中国</div>
          <div>日本</div>
          <div>西班牙</div>
          <div>美国</div>
        </div>
        <div class="option">
          <div class="text-dark">姓氏</div>
          <div v-for="ite in ites" :key="ite">{{ ite }}</div>
        </div>
      </div>
      <q-expansion-item
        dense
        label="展开选项"
        class="text-center title2 relative-position"
      >
        <div class="text-left selected relative-position">
          <div>您已选择：</div>
          <div class="option">摄影家<span>x</span></div>
          <div class="option">新闻摄影 <span>x</span></div>
          <div class="clear absolute-right">清空所有</div>
        </div>
      </q-expansion-item>
      <div class="sort-by text-right">
        <div>价格</div>
        <div>最热</div>
        <div>最新上传</div>
      </div>
      <div class="row artists">
        <div
          class="col-3 text-center artist"
          v-for="i of 12"
          :key="i"
        >
          <div class="content">
            <q-img
              src="img/artists/artist.png"
              width="210px"
              class="image"
            ></q-img>
            <div class="text-left">Alicja Dobrucka</div>
            <div class="text-left">英国 摄影师</div>
          </div>
        </div>
      </div>
      <div class="pagination text-center">
        <div class="page active text-white">1</div>
        <div class="page">2</div>
        <div class="page">3</div>
        <div>...</div>
        <div class="page">10</div>
        <div class="next">下一页</div>
        <div>共10页</div>
        <div>
          到
          <input type="text" class="input" />
          页
        </div>
        <div class="btn">确定</div>
      </div>
    </div>
  </q-layout>
</template>

<script>
export default {
  data() {
    return {
      ites: [
        "A",
        "B",
        "C",
        "D",
        "E",
        "F",
        "G",
        "H",
        "I",
        "J",
        "K",
        "L",
        "N",
        "O",
        "P",
        "Q",
        "R",
        "S",
        "T",
        "U",
        "V",
        "W",
        "X",
        "Y",
        "Z",
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
.banner {
  width: 100%;
  color: #d6d7c5;
  .text {
    padding-top: 80px;
    .title {
      font-size: 38px;
      letter-spacing: 8px;
      padding-bottom: 10px;
    }
    .number {
      font-size: 18px;
      letter-spacing: 5px;
    }
  }
}
.container {
  width: 1100px;
  margin: 0 auto;
  .options {
    font-size: 16px;
    color: #a1a190;
    width: 1100px;
    margin: 0 auto;
    margin-bottom: 30px;
    padding: 60px 0 60px 0;
    border-bottom: 1px solid rgba(#a1a190, 0.2);
    .option {
      div {
        display: inline-block;
        margin: 15px;
        &:hover {
          color: green;
          cursor: default;
        }
      }
    }
  }
  .sort-by {
    padding: 10px 30px 20px 0;
    border-bottom: 1px solid rgba(#a1a190, 0.2);
    div {
      display: inline-block;
      padding-left: 20px;
    }
  }
  .artists {
    padding: 60px 0 0 0;
    .artist {
      margin-bottom: 50px;
      .content {
        width: 210px;
        letter-spacing: 2px;
      }
      .image {
        border: 8px solid #152c2b;
        margin-bottom: 15px;
      }
    }
  }
  .title2::v-deep {
    .q-focus-helper {
      width: 0;
    }
    .q-expansion-item__toggle-icon {
      position: absolute;
      right: 488px;
    }
  }
  .selected > div {
    display: inline-block;
    margin-left: 10px;
    padding: 3px 5px;
    letter-spacing: 3px;
    border-radius: 2px;
  }
  .selected {
    .option {
      background-color: #d6d7c5;
    }
    .clear {
      text-decoration: underline;
      padding-right: 20px;
    }
  }
  .pagination {
    margin-bottom: 50px;
    div {
      display: inline-block;
      margin: 5px;
    }
    .page {
      background-color: #f0f0f0;
      padding: 5px 15px;
    }
    .active {
      background-color: #152c2b;
    }
    .next {
      border: 1px solid #333;
      padding: 4px 20px;
    }
    .input {
      width: 80px;
      outline: 0;
      padding: 3px 0;
      margin: 0 8px;
    }
    .btn {
      background-color: #e0e0e0;
      padding: 5px 25px;
    }
  }
}
</style>
