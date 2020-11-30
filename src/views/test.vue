<template>
  <div>
    <q-rating
      v-model="star"
      max="1"
      size="2em"
      icon="favorite_border"
      icon-selected="favorite"
      icon-half="favorite"
      no-dimming
    />

    <div>
      <div class="d1 relative-position">
        <div class="d2 absolute-bottom row">
          <div class="image col-6">xxx</div>
          <div class="col-6 text-right like">
            <q-rating
              v-model="star"
              max="1"
              size="2em"
              icon="favorite_border"
              icon-selected="favorite"
              icon-half="favorite"
              no-dimming
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>


<script>
export default {
  data() {
    return {
      star: 1,
    };
  },
};
</script>

<style lang="scss" scoped>
.q-rating {
  color: #adaf8b;
}
.d1 {
  width: 300px;
  height: 300px;
  background-color: aqua;
  margin:200px;
  &:hover .d2 {
    height: 60px;
  }
  &:hover .image {
    display: block;
  }
  &:hover .like {
    display: block;
  }
}
.d2 {
  width: 300px;
  height: 0px;
  background-color: pink;
  transition-duration: 1.5s;
}
.image,
.like {
  display: none;
  transition-duration: 1.5s;
  padding: 0 20px;
}
</style>