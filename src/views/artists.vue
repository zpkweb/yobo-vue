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
          <div class="btn">不限</div>
          <div class="btn">画家</div>
          <div class="btn">雕刻家</div>
          <div class="btn">摄影家</div>
        </div>
        <div class="option">
          <div class="text-dark">国籍</div>
          <div class="btn">不限</div>
          <div class="btn">中国</div>
          <div class="btn">日本</div>
          <div class="btn">西班牙</div>
          <div class="btn">美国</div>
        </div>
        <div class="option">
          <div class="text-dark">姓氏</div>
          <div v-for="ite in ites" :key="ite" class="btn">{{ ite }}</div>
        </div>
      </div>
      <q-expansion-item
        dense
        :label="text"
        class="text-center title2 relative-position"
        @show="show"
        @hide="hide"
      >
        <div class="text-left selected relative-position">
          <div>您已选择：</div>
          <div class="option">摄影家<span class="btn">×</span></div>
          <div class="option">新闻摄影 <span class="btn">×</span></div>
          <div class="clear absolute-right btn">清空所有</div>
        </div>
      </q-expansion-item>
      <div class="sort-by text-right">
        <div class="btn">默认排序</div>
        <div class="btn">最热</div>
        <div class="btn">最新上传</div>
      </div>
      <!-- <div class="artists">
        <div class="artist" v-for="i of 12" :key="i">
          <div class="image">
            <q-img src="img/artists/artist.png"></q-img>
          </div>
          <div class="text-left">Alicja Dobrucka</div>
          <div class="text-left">英国 摄影师</div>
        </div>
      </div> -->
      <div class="text-center none">
        <q-img
          src="img/artists/exclamatory.png"
          width="60px"
          class="img"
        ></q-img>
        <div>暂无数据，请您重新搜索，我们会尽快完善！</div>
      </div>
      <div class="q-pa-lg flex flex-center">
        <q-pagination
          v-model="current"
          color="teal-10"
          :max="maxPage"
          :max-pages="4"
          :boundary-numbers="true"
        >
        </q-pagination>
        <div class="next btn" @click="nextPage">下一页</div>
        <div class="all">共{{maxPage}}页</div>
        <div>
          到
          <input type="text" class="input" v-model="newPage"/>
          页
        </div>
        <div class="btn button" @click="toNewPage">确定</div>
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
      text: "展开选项",
      current: 1,
      newPage:"",
      maxPage:10
    };
  },
  methods: {
    show() {
      this.text = "收起选项";
    },
    hide() {
      this.text = "展开选项";
    },
    nextPage() {
      this.current < this.maxPage ? (this.current += 1) : this.current;
    },
    toNewPage() {
      parseInt(this.newPage) > 0 && parseInt(this.newPage) <= this.maxPage
        ? (this.current = parseInt(this.newPage))
        : this.current;
    },
  },
};
</script>

<style lang="scss" scoped>
.btn {
  cursor: pointer;
}
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
    margin: 60px auto;
    width: 1100px;
    column-count: 4;
    column-gap: 60px;
    font-size: 16px;
    .artist {
      margin-bottom: 60px;
    }
    .image {
      margin-bottom: 10px;
      break-inside: avoid;
      padding: 8px;
      background-color: #152c2b;
    }
  }
  .none {
    padding: 80px 0;
    font-size: 18px;
    .img {
      margin-bottom: 30px;
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

  .q-pagination::v-deep {
    .q-btn-item {
      margin: 6px;
      border-radius: 0;
      box-shadow: none;
      background-color: #e0e0e0;
      font-size: 12px;
      padding: 0 10px;
    }
    .bg-teal-10 {
      background-color: #152c2b !important;
    }
    .q-btn__wrapper:before {
      box-shadow: none;
    }
  }
  .next {
    border: 1px solid #333;
    padding: 4px 20px;
    margin: 0 6px;
  }
  .input {
    width: 80px;
    outline: 0;
    padding: 3px 0;
    margin: 0 8px;
  }
  .button {
    background-color: #e0e0e0;
    padding: 5px 25px;
    margin: 10px;
  }
  .all {
    margin: 0 10px;
  }
}
</style>

