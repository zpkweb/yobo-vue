<template>
  <q-layout>
    <div class="title row">
      <div class="col">结账</div>
      <div class="col-grow prise">显示订单摘要：RMB 8,598</div>
    </div>
    <div class="container">
      <div>
        <div class="title2">您的送货地址在哪里？</div>
        <div class="default-address row">
          <div class="col">
            <div class="name">葫芦娃</div>
            <div class="address">北京西城区北礼士路甲98号</div>
            <div class="phone">12366669999</div>
          </div>
          <div class="col-grow default">默认地址</div>
        </div>
      </div>
    </div>
  </q-layout>
</template>


<style lang="scss" scoped>
.title {
  width: 1201px;
  margin: 0 auto;
  padding: 12px 100px;
  border-bottom: 1px solid rgba(21, 44, 43, 0.1);
  font-size: 18px;
  font-family: "STFangsong";
  color: rgb(21, 44, 43);
  font-weight: 600;
  .prise {
    font-size: 16px;
    font-weight: normal;
  }
}
.container {
  color: rgb(21, 44, 43);
  width: 1000px;
  margin: 0 auto;
  padding: 40px 0;
  font-family: "STFangsong";
  .title2 {
    font-size: 24px;
    margin-bottom: 20px;
  }
  .default-address {
    width: 518px;
    height: 106px;
    border: 1px solid rgb(21, 44, 43);
    padding: 18px;
    .name {
      font-size: 20px;
    }
    .address,
    .phone {
      font-size: 16px;
      line-height: 18px;
    }

    .default {
      line-height: 68px;
      font-size: 16px;
      color: rgb(153, 153, 153);
    }
  }
}
</style>






