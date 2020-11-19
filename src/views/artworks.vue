<template>
  <q-layout>
    <div class="banner relative-position">
      <q-img src="img/artworks/banner.png" height="360px"></q-img>
      <div class="absolute-full text-center text">
        <div class="title">油画</div>
        <div class="number">7,442件符合您搜索条件的艺术品</div>
      </div>
    </div>
    <div class="container">
      <div class="tags">
        <div class="tag">
          <div class="text-dark">形状</div>
          <div>不限</div>
          <div>横版</div>
          <div>竖版</div>
          <div>方形</div>
          <div>自定义</div>
        </div>
        <div class="tag">
          <div class="text-dark">价格</div>
          <div>不限</div>
          <div>低于6000</div>
          <div>6000-20000</div>
          <div>20000-40000</div>
          <div>高于40000</div>
          <div>自定义</div>
          <div>
            <input type="text" class="input" />-<input
              type="text"
              class="input"
            />
          </div>
          <div class="text-dark">确定</div>
        </div>
        <div class="tag">
          <div class="text-dark">颜色</div>
          <div>
            <div
              class="color"
              :style="{ backgroundColor: color }"
              v-for="color in colors"
              :key="color"
            ></div>
          </div>
        </div>
        <div class="tag">
          <div class="text-dark">主题</div>
          <div
            v-for="theme in themes"
            :key="theme"
            @click="addTag(theme)"
            class="btn"
          >
            {{ theme }}
          </div>
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
          <div class="tag" v-for="tag in tags" :key="tag">
            {{ tag }} <span @click="deleteTag(tag)" class="btn">×</span>
          </div>
          <div class="clear absolute-right btn" @click="deleteAllTags">
            清空所有
          </div>
        </div>
      </q-expansion-item>
      <div class="sort-by text-right">
        <div>价格</div>
        <div>最热</div>
        <div>最新上传</div>
      </div>
      <div class="text-center none">
        <q-img
          src="img/artists/exclamatory.png"
          width="60px"
          class="img"
        ></q-img>
        <div>暂无数据，请您重新搜索，我们会尽快完善！</div>
      </div>
      <div class="wrap">
        <div class="item">
          <q-img src="/img/artworks/1.png"></q-img>
        </div>
        <div class="item">
          <q-img src="/img/artworks/2.png"></q-img>
        </div>
        <div class="item">
          <q-img src="/img/artworks/3.png"></q-img>
        </div>
        <div class="item">
          <q-img src="/img/artworks/5.png"></q-img>
        </div>
        <div class="item">
          <q-img src="/img/artworks/1.png"></q-img>
        </div>
        <div class="item">
          <q-img src="/img/artworks/2.png"></q-img>
        </div>
        <div class="item">
          <q-img src="/img/artworks/4.png"></q-img>
        </div>
        <div class="item">
          <q-img src="/img/artworks/3.png"></q-img>
        </div>
        <div class="item">
          <q-img src="/img/artworks/1.png"></q-img>
        </div>
        <div class="item">
          <q-img src="/img/artworks/5.png"></q-img>
        </div>
        <div class="item">
          <q-img src="/img/artworks/2.png"></q-img>
        </div>
        <div class="item">
          <q-img src="/img/artworks/3.png"></q-img>
        </div>
        <div class="item">
          <q-img src="/img/artworks/4.png"></q-img>
        </div>
        <div class="item">
          <q-img src="/img/artworks/5.png"></q-img>
        </div>
        <div class="item">
          <q-img src="/img/artworks/1.png"></q-img>
        </div>
        <div class="item">
          <q-img src="/img/artworks/2.png"></q-img>
        </div>
        <div class="item">
          <q-img src="/img/artworks/3.png"></q-img>
        </div>
        <div class="item">
          <q-img src="/img/artworks/4.png"></q-img>
        </div>
        <div class="item">
          <q-img src="/img/artworks/5.png"></q-img>
        </div>
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
        <div class="next" @click="nextPage">下一页</div>
        <div class="all">共{{ maxPage }}页</div>
        <div>
          到
          <input type="text" class="input" v-model="newPage" />
          页
        </div>
        <div class="button" @click="toNewPage">确定</div>
      </div>
    </div>
  </q-layout>
</template>

<script>
export default {
  data() {
    return {
      tags: ["新闻摄影", "概念艺术"],
      colors: [
        "pink",
        "yellow",
        "green",
        "orange",
        "blue",
        "purple",
        "#abcffc",
        "red",
        "gray",
      ],
      themes: [
        "不限",
        "风景画",
        "动物",
        "城市",
        "抽象",
        "新闻摄影",
        "旅游",
        "概念艺术",
      ],
      current: 1,
      text: "展开选项",
      maxPage: 10,
      newPage: "",
    };
  },
  methods: {
    addTag(theme) {
      if (this.tags.find((e) => e === theme) === undefined) {
        this.tags.push(theme);
      }
    },
    deleteTag(tag) {
      this.tags.splice(this.tags.indexOf(tag), 1);
    },
    deleteAllTags() {
      this.tags = [];
    },
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
  .tags {
    font-size: 16px;
    color: #a1a190;
    width: 1100px;
    margin: 0 auto;
    margin-bottom: 30px;
    padding: 60px 0 60px 0;
    border-bottom: 1px solid rgba(#a1a190, 0.2);
    .tag {
      div {
        display: inline-block;
        margin: 5px 15px;
        &:hover {
          color: #152c2b;
        }
      }
    }
    .input {
      width: 80px;
      outline: 0;
      border: 1px solid #a1a190;
    }
    .tag .color {
      display: inline-block;
      width: 24px;
      height: 24px;
      border-radius: 5px;
      vertical-align: middle;
      margin-left: 0;
      &:hover {
        border: 3px solid #152c2b;
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
  .none {
    padding: 80px 0;
    font-size: 18px;
    .img {
      margin-bottom: 30px;
    }
  }
  .wrap {
    margin: 60px auto;
    width: 1100px;
    column-count: 4;
    column-width: 240px;
    column-gap: 40px;
  }
  .item {
    margin-bottom: 40px;
    break-inside: avoid;
    padding: 10px;
    background-color: #152c2b;
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
    .tag {
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

