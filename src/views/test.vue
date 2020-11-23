<template>
  <div class="a">
    <div class="t"></div>
    <div class="item"></div>
    <div class="item"></div>
    <div class="item"></div>
    <div class="item"></div>
    <div class="item"></div>
  </div>
</template>

<style lang="scss" scoped>
.a{
  margin: 0 210px;
  background-color: transparent;
  width: 200px;
  // display: none;
}
.t{
  width: 0;
  height: 0;
  border-left: 50px solid transparent;
  border-right: 50px solid transparent;
  border-bottom: 100px solid yellow;
  margin-left: 60px;
}
.item{
  background-color: aqua;
  // width: 200px;
  height: 60px;
}
</style>