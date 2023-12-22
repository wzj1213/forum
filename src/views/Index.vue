<script setup>
import { ref, reactive, onMounted } from 'vue';
import { useRouter } from 'vue-router';
const router = useRouter();

const go = (path) => {
  router.push(path);
};
</script>
<template>
  <div>
    <div class="body">
      <!-- 轮播图 -->
      <div class="swiper">
        <a-carousel arrows>
          <template #prevArrow>
            <div class="custom-slick-arrow" style="left: 10px; z-index: 1">
              <left-circle-outlined />
            </div>
          </template>
          <template #nextArrow>
            <div class="custom-slick-arrow" style="right: 10px">
              <right-circle-outlined />
            </div>
          </template>
          <div><h3>1</h3></div>
          <div><h3>2</h3></div>
          <div><h3>3</h3></div>
          <div><h3>4</h3></div>
        </a-carousel>
      </div>
      <!-- 推荐交流论坛 -->
      <div class="forum">
        <div class="title">交流论坛</div>
        <div class="items">
          <div>1</div>
          <div>1</div>
          <div>1</div>
          <div>1</div>
          <div>1</div>
          <div>1</div>
        </div>
        <div @click="go('/forum')" class="more">查看更多</div>
      </div>
      <!-- 部分系统资讯 -->
      <div class="forum">
        <div class="title">系统资讯</div>
        <div class="items">
          <div>1</div>
          <div>1</div>
          <div>1</div>
          <div>1</div>
          <div>1</div>
          <div>1</div>
        </div>
        <div @click="go('/news')" class="more">查看更多</div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.body {
  width: 100%;
  height: 100%;
  background-color: #f5f5f5;
}
.forum {
  width: 100%;
  height: 100%;
  background-color: #fff;
  .title {
    // 垂直居中
    display: flex;
    align-items: center;
    width: 100%;
    height: 40px;
    line-height: 40px;
    padding-left: 20px;
    font-size: 16px;
    color: #333;
    border-bottom: 1px solid #e5e5e5;
  }
  .items {
    width: 100%;
    height: 100%;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    padding: 20px;
    box-sizing: border-box;
    div {
      width: 32%;
      height: 100px;
      margin-bottom: 20px;
      background-color: #f5f5f5;
    }
  }
  .more {
    width: 100%;
    height: 40px;
    line-height: 40px;
    text-align: center;
    font-size: 14px;
    color: #666;
  }
  .more:hover {
    cursor: pointer;
    color: #333;
  }
}

/* For demo */
:deep(.slick-slide) {
  text-align: center;
  height: 160px;
  line-height: 160px;
  background: #364d79;
  overflow: hidden;
}

:deep(.slick-arrow.custom-slick-arrow) {
  width: 25px;
  height: 25px;
  font-size: 25px;
  color: #fff;
  background-color: rgba(31, 45, 61, 0.11);
  transition: ease all 0.3s;
  opacity: 0.3;
  z-index: 1;
}
:deep(.slick-arrow.custom-slick-arrow:before) {
  display: none;
}
:deep(.slick-arrow.custom-slick-arrow:hover) {
  color: #fff;
  opacity: 0.5;
}

:deep(.slick-slide h3) {
  color: #fff;
}
</style>
