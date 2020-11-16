<template>
  <q-layout class="app" view="lHh Lpr lFf">
    <q-header class="bg-white">
      <div class="header row text-black">
        <div class="col">
          <q-img src="img/index/logo.png" class="logo" width="160px"></q-img>
          <q-btn size="xs" rounded flat class="language">CN</q-btn>
        </div>
        <div class="col-grow">
          <div class="artist-register">成为艺术家</div>
          <q-breadcrumbs separator="|" class="separator">
            <q-breadcrumbs-el
              label="登陆"
              class="login text-black"
              @click="icon = true"
            />
            <q-breadcrumbs-el label="注册" class="register" />
          </q-breadcrumbs>
          <div class="search"></div>
          <div class="cart"></div>
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
            通过订阅，即代表您接受永宝的<span>隐私政策条款</span>
          </div>
          <div class="row mail">
            <div class="col">电子邮件地址</div>
            <div class="col-grow">
              <q-img src="img/index/nextpage.png" width="4px"></q-img>
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
    <q-dialog v-model="icon">
      <q-card class="login-card">
        <q-card-section class="row items-center q-pb-none">
          <div class="title">登陆</div>
          <q-space />
          <q-btn icon="close" flat round dense v-close-popup />
        </q-card-section>

        <q-card-section>
          <div>没有账号？可以去注册</div>
          <input type="text" placeholder="您的全名" class="input" />
          <input
            type="text"
            placeholder="请输入邮箱或注册手机号"
            class="input"
          />
          <input type="text" placeholder="请输入密码" class="input" />
          <div>保持登陆</div>
          <div>忘记密码</div>
          <div>登陆</div>
          <div>登陆即代表同意《永宝协议》及《永宝隐私政策》</div>
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
      icon: false,
    };
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
.header {
  line-height: 70px;
  height: 70px;
  margin: 0 auto;
  max-width: 1100px;
  .logo {
    margin-right: 30px;
  }
  .language {
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
  font-size: 16px;
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
        text-decoration: underline;
      }
    }
    .mail {
      padding: 10px;
      background-color: #000;
      margin-bottom: 16px;
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
.login-card {
  border-radius: 0;
  padding: 20px 10px;
  .title {
    font-size: 28px;
  }
  .input {
    font-size: 14px;
    display: block;
    padding: 10px;
    width: 300px;
    margin: 20px 0;
    outline: 0;
    border: 1px solid rgb(21, 44, 43);
  }
}
</style>



