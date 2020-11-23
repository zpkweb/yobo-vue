<template>
  <q-layout class="app" view="lHh Lpr lFf">
    <q-header class="bg-white">
      <div class="header row text-black">
        <div class="col">
          <q-img
            src="img/index/logo.png"
            class="logo btn"
            width="160px"
            @click="goIndex"
          ></q-img>
          <div class="dropdown1 relative-position">
            <q-btn size="xs" rounded flat class="choose-language btn">CN</q-btn>
            <div class="dropdowncontent1 absolute">
              <div class="items">
                <div class="after"></div>
                <div class="item">英语</div>
                <div class="item">法语</div>
                <div class="item">日语</div>
              </div>
            </div>
          </div>
        </div>
        <div class="col-grow">
          <div class="artist-register btn" @click="icon3 = true">
            成为艺术家
          </div>
          <q-breadcrumbs separator="|" class="separator">
            <q-breadcrumbs-el
              label="登陆"
              class="login text-black btn"
              @click="icon1 = true"
            />
            <q-breadcrumbs-el
              label="注册"
              class="register btn"
              @click="icon2 = true"
            />
          </q-breadcrumbs>
          <div class="search btn"></div>
          <div class="cart btn"></div>
        </div>
      </div>
    </q-header>
    <q-page-container>
      <router-view></router-view>
    </q-page-container>
    <div class="footer text-white">
      <div class="container row">
        <div class="col-9 row">
          <div class="col-3 item">
            <div class="title">客户服务</div>
            <div>联系我们</div>
            <div>法律声明</div>
            <div>一般条例</div>
            <div>客户评价</div>
            <div>Offer a Gift Card</div>
            <div>获取我的USD$200抵用券</div>
            <div>我的账户</div>
            <div>办公室艺术品</div>
            <div>设计师艺术品</div>
            <div>+44 203 445 6333</div>
          </div>
          <div class="col-3 item">
            <div class="title">关于我们</div>
            <div>关于永宝</div>
            <div>我们的艺术家</div>
            <div>杂志</div>
            <div>团队</div>
            <div>我们的甄选标准</div>
            <div>常见问题</div>
            <div>联系方式</div>
          </div>
          <div class="col-3 item">
            <div class="title">精选艺术家</div>
            <div>Kirstin Mccoy</div>
            <div>Josep Moncada</div>
            <div>Ivan Pili</div>
            <div>Kristin Kossi</div>
            <div>Peter Nottrott</div>
          </div>
          <div class="col-3 item">
            <div class="title">关注永宝</div>
            <div>微信</div>
            <div>微博</div>
            <div>Facebook</div>
            <div>Instagram</div>
            <div>Pinterest</div>
          </div>
        </div>

        <div class="col-3">
          <div class="title book">订阅永宝电子资讯</div>
          <div class="privacy-policy">
            通过订阅，即代表您接受永宝的<span class="btn">隐私政策条款</span>
          </div>
          <div class="row mail">
            <div class="col">电子邮件地址</div>
            <div class="col-grow">
              <q-img
                src="img/index/nextpage.png"
                width="5px"
                class="getmail"
              ></q-img>
            </div>
          </div>

          <div class="title pay">支持的支付方式</div>
          <div class="row pay1">
            <div class="col-3">
              <q-img src="img/index/zfb.png" width="60px"></q-img>
            </div>
            <div class="col-3">
              <q-img src="img/index/visa.png" width="60px"></q-img>
            </div>
            <div class="col-3">
              <q-img src="img/index/paypal.png" width="60px"></q-img>
            </div>
          </div>
          <q-img src="img/index/mastercard.png" width="140px" contain></q-img>
        </div>
        <div class="col-12 row bottom">
          <div class="col-4">©2020 永宝（中国）有限公司 保留所有权利</div>
          <div class="col-3">沪ICP备15013228号-17</div>
          <div class="col-3 row">
            <div class="col-grow image">
              <q-img
                src="img/index/police.png"
                width="12px"
                class="img"
              ></q-img>
            </div>
            <div class="col">沪公网安备 31010402004774号</div>
          </div>
        </div>
      </div>
    </div>
    <q-dialog v-model="icon1" transition-hide="fade" transition-show="fade">
      <q-card class="card">
        <q-card-section class="row items-center q-pb-none">
          <div class="title">登陆</div>
          <q-space />
          <q-btn icon="close" flat round dense v-close-popup />
        </q-card-section>

        <q-card-section>
          <div>
            没有账号？可以去<span
              class="to-login btn"
              @click="
                icon2 = true;
                icon1 = false;
              "
              >注册</span
            >
          </div>
          <div class="msg" ref="msg">
            <q-img src="img/index/exclamation.png" width="14px"></q-img>
            {{ msg }}
          </div>
          <input
            type="text"
            placeholder="您的全名"
            class="input"
            @input="showMsg"
          />
          <input
            type="text"
            placeholder="请输入邮箱或注册手机号"
            class="input"
          />
          <input type="text" placeholder="请输入密码" class="input" />
          <div class="row">
            <div class="text-left col-6">
              <input type="checkbox" class="check" />
              <div class="checkbox2">保持登陆</div>
            </div>
            <div class="text-right col-6">忘记密码</div>
          </div>
          <div class="text-white text-center login">登陆</div>
          <div class="checkbox1">
            登陆即代表同意 <span class="xy btn">《永宝协议》</span>及
            <span class="ys btn">《永宝隐私政策》</span>
          </div>
          <div class="text-center">
            <div class="title2">第三方账号登陆</div>
            <div>
              <q-img src="img/index/qq-1.png" width="26px" class="img"></q-img>
              <q-img
                src="img/index/wechat-1.png"
                width="26px"
                class="img"
              ></q-img>
              <q-img src="img/index/zfb-1.png" width="26px" class="img"></q-img>
            </div>
          </div>
        </q-card-section>
      </q-card>
    </q-dialog>
    <q-dialog v-model="icon2" transition-hide="fade" transition-show="fade">
      <q-card class="card">
        <q-card-section class="row items-center q-pb-none">
          <div class="title">注册</div>
          <q-space />
          <q-btn icon="close" flat round dense v-close-popup />
        </q-card-section>

        <q-card-section>
          <div>
            已有账号？可以去<span
              class="to-register btn"
              @click="
                icon1 = true;
                icon2 = false;
              "
              >登陆</span
            >
          </div>
          <input type="text" placeholder="您的全名" class="input" />
          <input
            type="text"
            placeholder="请输入邮箱或注册手机号"
            class="input"
          />
          <input type="text" placeholder="请输入密码" class="input" />
          <input type="checkbox" class="check" />
          <div class="checkbox1">
            我已阅读并同意 <span class="xy btn">《永宝协议》</span>及
            <span class="ys btn">《永宝隐私政策》</span>
          </div>
          <div class="text-white text-center register">注册</div>
          <input type="checkbox" class="check" />
          <div class="checkbox2">保持登陆</div>
          <div class="text-center">
            <div class="title2">第三方账号注册</div>
            <div>
              <q-img src="img/index/qq-1.png" width="26px" class="img"></q-img>
              <q-img
                src="img/index/wechat-1.png"
                width="26px"
                class="img"
              ></q-img>
              <q-img src="img/index/zfb-1.png" width="26px" class="img"></q-img>
            </div>
          </div>
        </q-card-section>
      </q-card>
    </q-dialog>
    <q-dialog v-model="icon3" transition-hide="fade" transition-show="fade">
      <q-card class="card" v-show="this.mode === 'page1'">
        <q-card-section class="row items-center q-pb-none">
          <div class="title">成为艺术家</div>
          <q-space />
          <q-btn icon="close" flat round dense v-close-popup />
        </q-card-section>

        <q-card-section>
          <div>已有4555，6783位艺术家入驻</div>
          <input
            type="text"
            placeholder="姓氏"
            class="input"
            v-model="firstName"
          />
          <input type="text" placeholder="名字" class="input" v-model="name" />
          <input type="text" placeholder="邮箱" class="input" v-model="mail" />
          <input type="text" placeholder="电话" class="input" v-model="phone" />
          <select
            class="select"
            id="application_country"
            name="application[country]"
          >
            <option value selected>国家</option>
            <option value="American">美国</option>
            <option value="England">英国</option>
            <option value="France">法国</option>
            <option value="Japan">日本</option>
          </select>
          <select
            class="select"
            id="application_language"
            name="application[language]"
          >
            <option value selected>语言</option>
            <option value="ch">中文</option>
            <option value="ja">日语</option>
            <option value="es">西班牙语</option>
            <option value="fr">法语</option>
            <option value="en">英语</option>
          </select>
          <select
            class="select"
            id="application_foundOn"
            name="application[foundOn]"
          >
            <option value selected>您是如何发现我们的</option>
            <option value="facebook">脸书</option>
            <option value="google">谷歌</option>
            <option value="friends">朋友</option>
            <option value="other">其他</option>
          </select>
          <div class="text-white text-center register" @click="goPage2">
            下一步
          </div>
        </q-card-section>
      </q-card>

      <q-card class="card" v-show="this.mode === 'page2'">
        <q-card-section class="row items-center q-pb-none">
          <div class="title">成为艺术家</div>
          <q-space />
          <q-btn icon="close" flat round dense v-close-popup />
        </q-card-section>

        <q-card-section>
          <div class="row">
            <div class="col">已有4555，6783位艺术家入驻</div>
            <div class="col-grow back" @click="goPage1">
              <q-img src="img/index/back.png" width="14px"></q-img>
              上一步
            </div>
          </div>
          <select
            class="select"
            id="application_soleIncome"
            name="application[soleIncome]"
          >
            <option value selected>您是一个专业的全职艺术家么？</option>
            <option value="1">是</option>
            <option value="0">否</option>
          </select>
          <select
            class="select"
            id="application_soldOnline"
            name="application[soldOnline]"
          >
            <option value selected>售出的作品中，网上售出的比例占多少？</option>
            <option value="none">还未售出，所以我才愿意参加永宝</option>
            <option value="<10%">小于10%</option>
            <option value="10%-50%">大于10%小于50%</option>
            <option value=">50%">大于50%</option>
          </select>
          <select
            class="select"
            id="application_soldArtworks"
            name="application[soldArtworks]"
          >
            <option value selected>您在过去一年里售出多少件自己的作品？</option>
            <option value="<10">少于十件</option>
            <option value="10-30">10-30件</option>
            <option value="30-50">30-50件</option>
            <option value="50-100">50-100件</option>
            <option value=">100">多于100件</option>
          </select>
          <select
            class="select"
            id="application_soldVia"
            name="application[soldVia]"
          >
            <option value selected>
              如果您在网上售出过作品，是通过什么渠道呢？
            </option>
            <option value="Personal Website">个人网站</option>
            <option value="Online Gallery">其他线上画廊</option>
            <option value="Social Media">个人网站</option>
          </select>
          <input
            type="text"
            class="input"
            placeholder="如有其他画廊已合作，是哪一家（方便我们更全面了解您）"
          />
          <select
            class="select"
            id="application_primaryMedium"
            name="application[primaryMedium]"
          >
            <option value selected>主要媒介</option>
            <option value="painting">油画</option>
            <option value="photography">摄影作品</option>
            <option value="drawing">绘画</option>
            <option value="mixed_media">多种媒体</option>
            <option value="textile">织品</option>
            <option value="sculpture">雕刻</option>
            <option value="installation">安置</option>
            <option value="video">视频</option>
            <option value="other">其他</option>
          </select>
          <textarea
            placeholder="您是画廊代表人么？请告知您的画廊名称、城市、国家"
            class="textarea"
          ></textarea>
          <textarea
            placeholder="最值得一看的展览/画廊/机构名称、城市、国家"
            class="textarea"
          ></textarea>
          <textarea
            type="text"
            placeholder="最引人注目的奖项/奖项名称、获得年份"
            class="textarea"
          ></textarea>
          <input type="text" placeholder="连接至网站" class="input" />
          <div class="text-white text-center register">申请</div>
        </q-card-section>
      </q-card>
    </q-dialog>
  </q-layout>
</template>

<script>
export default {
  components: {},

  data() {
    return {
      right: false,
      icon1: false,
      icon2: false,
      icon3: false,
      msg: "",
      mode: "page1",
    };
  },
  methods: {
    showMsg() {
      this.msg = "请输入正确用户名";
      this.$refs.msg.classList.add("block");
    },
    goIndex() {
      this.$router.push("/");
    },
    goPage2() {
      this.mode = "page2";
    },
    goPage1() {
      this.mode = "page1";
    },
  },
};
</script>
<style>
* {
  margin: 0;
  padding: 0;
}
.app {
  min-width: 1200px;
  font-family: "STFangsong";
}
</style>

<style lang="scss" scoped>
.btn {
  cursor: pointer;
}
.header {
  line-height: 70px;
  height: 70px;
  margin: 0 auto;
  width: 1100px;
  .logo {
    margin-right: 30px;
  }
  .choose-language {
    background-color: #d6d7c5;
  }
  .login,
  .register,
  .separator,
  .artist-register {
    font-size: 14px;
  }
  .separator,
  .artist-register,
  .search,
  .cart {
    display: inline-block;
    margin-left: 14px;
  }
  .search,
  .cart {
    background: url("/img/index/search.png") no-repeat;
    width: 21px;
    height: 21px;
    vertical-align: middle;
  }
  .cart {
    background: url("/img/index/cart.png") no-repeat;
  }
}
.footer {
  font-family: "STFangsong";
  background-color: #232323;
  padding: 60px 0;
  font-size: 14px;
  .container {
    width: 1100px;
    margin: 0 auto;
    .title {
      font-size: 18px;
      color: #817f7f;
      letter-spacing: 1px;
    }
    .item div {
      padding: 3px 0;
    }
    .book {
      letter-spacing: 5px;
      padding-bottom: 5px;
    }
    .privacy-policy {
      padding-bottom: 16px;
      span {
        text-decoration: underline #6c6c6c;
      }
    }
    .mail {
      padding: 10px;
      background-color: #000;
      margin-bottom: 16px;
      .getmail {
        vertical-align: baseline;
      }
    }
    .pay {
      padding-bottom: 10px;
    }
    .pay1 {
      margin-bottom: 5px;
    }
    .bottom {
      padding: 40px 0 30px 0;
      border-bottom: 1px solid rgba(#817f7f, 0.2);
      .image {
        padding-right: 3px;
      }
      .img {
        vertical-align: baseline;
      }
    }
  }
}
.card {
  border-radius: 0;
  padding: 20px 10px;
  color: rgb(21, 44, 43);
  letter-spacing: 2px;
  font-size: 12px;
  .title {
    font-size: 26px;
  }
  .to-login,
  .to-register,
  .xy,
  .ys {
    color: #adaf8b;
  }
  .input,
  .textarea {
    font-size: 12px;
    display: block;
    padding: 10px;
    width: 340px;
    margin: 20px auto;
    outline: 0;
    // border: 1px solid rgb(21, 44, 43);
    border: 1px solid rgb(226, 226, 226);
  }
  .textarea {
    resize: none;
    height: 120px;
  }
  .login,
  .register {
    background-color: #152c2b;
    padding: 10px 20px;
    margin: 20px 0;
  }
  .select {
    display: block;
    margin: 20px auto;
    padding: 10px;
    width: 340px;
    font-size: 12px;
    border: 1px solid rgb(226, 226, 226);
    color: #888;
  }
  .back {
    background-color: #d6d7c5;
  }
  .check {
    vertical-align: middle;
    margin: 0 5px 2px 0;
  }
  .checkbox1,
  .checkbox2 {
    display: inline-block;
  }
  .msg {
    color: rgb(254, 63, 63);
    background-color: #ffd7d7;
    margin: 5px 0 -10px 0;
    padding: 5px;
    display: none;
  }
  .block {
    display: block;
  }
  .title2 {
    margin: 20px auto;
    padding: 20px 0 0 0;
    border-top: 1px solid rgba(21, 44, 43, 0.1);
  }
  .img {
    margin: 0 16px;
  }
}
.dropdown1 {
  display: inline-block;
  .choose-language:hover + .dropdowncontent1 {
    display: block;
  }
  .dropdowncontent1 {
    display: none;
    background: transparent;
    left: -136px;
    top: 60px;
    &:hover {
      display: block;
    }
    .items {
      box-shadow: 0px 3px 7px 0px rgba(21, 44, 43, 0.4);
      .after {
        cursor: pointer;
        position: absolute;
        display: inline-block;
        top: -10px;
        left: 150px;
        width: 0;
        height: 0px;
        content: "";
        border-style: solid;
        border-width: 10px;
        border-color: #fff #fff transparent transparent;
        transform: rotate(-45deg);
        box-shadow: 2px -2px 2px rgba(21, 44, 43, 0.1);
      }
    }
    .item {
      padding: 0 20px;
      width: 220px;
      text-align: left;
      white-space: nowrap;
      line-height: 40px;
      background: white;
      &:hover {
        background-color: #d6d7c5;
      }
    }
    // .tri {
    //   box-shadow: 0px 3px 7px 0px rgba(21, 44, 43, 0.4);
    //   background: transparent;
    //   width: 0;
    //   height: 0;
    //   border-left: 10px solid transparent;
    //   border-right: 10px solid transparent;
    //   border-bottom: 10px solid yellow;
    //   margin-left: 80px;
    // }
  }
}
</style>

