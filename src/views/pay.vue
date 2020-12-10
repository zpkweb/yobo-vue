<template>
  <q-layout>
    <div class="container text-center">
      <div class="total">您的购物袋总计 CNY 15,567</div>
      <div class="service">所有订单均可享受免费送货和退货服务</div>
      <div class="pay text-white">结账</div>
    </div>
    <div class="items">
      <div class="item row">
        <div class="img-container col-3">
          <div class="img"></div>
        </div>
        <div class="col-9">
          <div class="row desc">
            <div class="col-7">
              <div class="title">SITTING IN TRAFFIC</div>
              <div class="painter">Chris Kappmeier</div>
            </div>
            <div class="col-1 text-right">1</div>
            <div class="col-4 text-right">
              <div>CNY 11,899</div>
              <div>移除</div>
            </div>
            <div class="col-12">
              <div class="size">50.8x61cm</div>
              <div class="year">2018</div>
            </div>
          </div>
          <div class="row frame">
            <div class="col">是否添加边框</div>
            <div class="col-grow add">添加</div>
          </div>
          <div class="row cupon">
            <div class="col">
              <div class="add-cupon">添加客户优惠券</div>
            </div>
            <div class="col-grow add">确定</div>
          </div>
          <div class="send">3-4周发货</div>
        </div>
      </div>


       <div class="item row">
        <div class="img-container col-3">
          <div class="img"></div>
        </div>
        <div class="col-9">
          <div class="row desc">
            <div class="col-7">
              <div class="title">SITTING IN TRAFFIC</div>
              <div class="painter">Chris Kappmeier</div>
            </div>
            <div class="col-1 text-right">1</div>
            <div class="col-4 text-right">
              <div>CNY 11,899</div>
              <div>移除</div>
            </div>
            <div class="col-12">
              <div class="size">50.8x61cm</div>
              <div class="year">2018</div>
            </div>
          </div>
          <div class="row frame">
            <div class="col">是否添加边框</div>
            <div class="col-grow add">添加</div>
          </div>
          <div class="row cupon">
            <div class="col">
              <div class="add-cupon">添加客户优惠券</div>
            </div>
            <div class="col-grow add">确定</div>
          </div>
          <div class="send">3-4周发货</div>
        </div>
      </div>
    </div>
  </q-layout>
</template>

<style lang="scss" scoped>
.container {
  padding: 60px 0;
  width: 1000px;
  margin: 0 auto;
  border-bottom: 1px solid rgba(21, 44, 43, 0.1);
  .total {
    font-size: 38px;
    font-family: "STFangsong";
    color: rgb(21, 44, 43);
    letter-spacing: 3.5px;
    margin-bottom: 2px;
  }
  .service {
    font-size: 18px;
    font-family: "Heiti SC";
    color: rgb(21, 44, 43);
    margin-bottom: 35px;
  }
  .pay {
    background-color: #152c2b;
    width: 291px;
    height: 38px;
    margin: 0 auto;
    line-height: 38px;
    font-size: 18px;
    font-weight: bolder;
  }
}
.items {
  width: 1000px;
  margin: 0 auto;
  color: rgb(21, 44, 43);
  .item {
    border-bottom: 1px solid rgba(21, 44, 43, 0.1);
  }
  .img-container {
    padding: 70px 20px;
    .img {
      background: url("/img/pay/2.png") center center no-repeat;
      width: 200px;
      height: 200px;
    }
  }
  .desc {
    padding: 105px 0 55px 0;
    border-bottom: 1px solid rgba(21, 44, 43, 0.1);
    .title {
      font-size: 24px;
      font-family: "STFangsong";
      letter-spacing: 1px;
    }
    .painter,
    .size,
    .year {
      font-size: 18px;
      font-family: "Heiti SC";
    }
    .painter {
      margin-bottom: 20px;
    }
  }
  .frame {
    padding: 30px 0;
    border-bottom: 1px solid rgba(21, 44, 43, 0.1);
    font-size: 18px;
    font-family: "STFangsong";
    font-weight: 600;
    .add {
      font-size: 16px;
    }
  }
  .cupon {
    border-bottom: 1px solid rgba(21, 44, 43, 0.1);
    padding: 20px 0;
    .add-cupon {
      background-color: rgb(214, 215, 197, 0.3);
      width: 298px;
      height: 46px;
      line-height: 46px;
      color: rgb(153, 153, 153);
      font-size: 18px;
      padding-left: 15px;
      font-family: "STFangsong";
    }
    .add {
      font-size: 16px;
      margin-top: 10px;
      font-weight: 600;
    }
  }
  .send {
    padding: 30px 0 75px 0;
    font-size: 16px;
    font-weight: 600;
  }
}
</style>









