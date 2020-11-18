<template>
  <q-layout class="app" view="lHh Lpr lFf">
    <q-header class="bg-white">
      <div class="header row text-black">
        <div class="col">
          <q-img src="img/index/logo.png" class="logo" width="160px"></q-img>
          <q-btn size="xs" rounded flat class="choose-language btn">CN</q-btn>
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
    <q-dialog v-model="icon1">
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
          <input type="checkbox" class="check" />
          <div class="checkbox1">
            登陆即代表同意 <span class="xy btn">《永宝协议》</span>及
            <span class="ys btn">《永宝隐私政策》</span>
          </div>
        </q-card-section>
      </q-card>
    </q-dialog>
    <q-dialog v-model="icon2">
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
        </q-card-section>
      </q-card>
    </q-dialog>
    <q-dialog v-model="icon3">
      <q-card class="card">
        <q-card-section class="row items-center q-pb-none">
          <div class="title">成为艺术家</div>
          <q-space />
          <q-btn icon="close" flat round dense v-close-popup />
        </q-card-section>

        <q-card-section>
          <div>已有4555，6783位艺术家入驻</div>
          <input type="text" placeholder="姓氏" class="input" />
          <input type="text" placeholder="名字" class="input" />
          <input type="text" placeholder="邮箱" class="input" />
          <input type="text" placeholder="电话" class="input" />
          <input type="text" placeholder="您是如何发现我们的" class="input" />
          <select name="c" class="country">
            <option value="country">国家</option>
            <option value="American">美国</option>
            <option value="England">英国</option>
            <option value="France">法国</option>
            <option value="Japan">日本</option>
          </select>
          <select name="l" class="language">
            <option value="language">语言</option>
            <option value="American">英语</option>
            <option value="France">法语</option>
            <option value="Japanese">日语</option>
          </select>
          <div class="text-white text-center register" @click="icon4 = true">
            下一步
          </div>
        </q-card-section>
      </q-card>
    </q-dialog>
    <q-dialog v-model="icon4">
      <q-card class="card">
        <q-card-section class="row items-center q-pb-none">
          <div class="title">成为艺术家</div>
          <q-space />
          <q-btn icon="close" flat round dense v-close-popup />
        </q-card-section>

        <q-card-section>
          <div class="row">
            <div class="col">已有4555，6783位艺术家入驻</div>
            <div class="col-grow back" @click="icon3=true">
              <q-img src="img/index/back.png" width="14px"></q-img>
              上一步
            </div>
          </div>
          <input type="text" placeholder="姓氏" class="input" />
          <select name="" id=""></select>
          <input type="text" placeholder="名字" class="input" />
          <input type="text" placeholder="邮箱" class="input" />
          <input type="text" placeholder="电话" class="input" />
          <input type="text" placeholder="您是如何发现我们的" class="input" />
          <select name="c" class="country">
            <option value="country">国家</option>
            <option value="American">美国</option>
            <option value="England">英国</option>
            <option value="France">法国</option>
            <option value="Japan">日本</option>
          </select>
          <select name="l" class="language">
            <option value="language">语言</option>
            <option value="American">英语</option>
            <option value="France">法语</option>
            <option value="Japanese">日语</option>
          </select>
          <div class="text-white text-center register">
            申请
          </div>
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
      icon4: false,
      msg: "",
    };
  },
  methods: {
    showMsg() {
      this.msg = "请输入正确用户名";
      this.$refs.msg.classList.add("block");
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
  max-width: 1100px;
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
    max-width: 1100px;
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
  .input {
    font-size: 14px;
    display: block;
    padding: 10px;
    width: 340px;
    margin: 20px auto;
    outline: 0;
    // border: 1px solid rgb(21, 44, 43);
    border: 1px solid rgb(226, 226, 226);
  }
  .login,
  .register {
    background-color: #152c2b;
    padding: 10px 20px;
    margin: 20px 0;
  }
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
.country,
.language {
  display: block;
  margin: 20px auto;
  padding: 10px;
  width: 340px;
  font-size: 14px;
}
.back{
  background-color: #d6d7c5;
}
</style>






