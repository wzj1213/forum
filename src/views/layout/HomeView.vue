<script setup>
import { ref, reactive, onMounted, watch } from 'vue';
import { useRouter } from 'vue-router';

const router = useRouter();

const selectedKeys = reactive([1]);
// 回调触发selectedKeys

// const selectedKeys = ref([1]);
const menuItem = ref([
  {
    id: 1,
    name: '首页',
    path: '/'
  },
  {
    id: 2,
    name: '论坛交流',
    path: '/forum'
  },
  {
    id: 3,
    name: '系统资讯',
    path: '/news'
  },
  {
    id: 4,
    name: '个人中心',
    path: '/user'
  },
  {
    id: 5,
    name: '问题反馈',
    path: '/feedback'
  },
  {
    id: 6,
    name: '后台管理',
    path: '/admin'
  }
]);
const go = (item) => {
  router.push(item);
};
onMounted(() => {
  const path = router.currentRoute.value.path;
  const index = menuItem.value.findIndex((item) => item.path === path);
  selectedKeys.value = [menuItem.value[index].id];
});

watch(
  () => router.currentRoute.value.path,
  (val) => {
    const index = menuItem.value.findIndex((item) => item.path === val);
    selectedKeys.value = [menuItem.value[index].id];
  }
);
</script>
<template>
  <a-layout class="layout">
    <a-layout-header>
      <div class="logo" />
      <a-menu
        v-model:selectedKeys="selectedKeys.value"
        theme="dark"
        mode="horizontal"
        :style="{ lineHeight: '64px' }"
      >
        <a-menu-item
          @click="go(item.path)"
          v-for="item in menuItem"
          :key="item.id"
        >
          <div>{{ item.name }}</div>
        </a-menu-item>
      </a-menu>
    </a-layout-header>
    <a-layout-content style="padding: 0 50px">
      <!-- 交流推荐 -->

      <router-view></router-view>
    </a-layout-content>
    <a-layout-footer style="text-align: center">
      Created by WZJ
    </a-layout-footer>
  </a-layout>
</template>

<style scoped>
.site-layout-content {
  min-height: 280px;
  padding: 24px;
  background: #fff;
}
#components-layout-demo-top .logo {
  float: left;
  width: 120px;
  height: 31px;
  margin: 16px 24px 16px 0;
  background: rgba(255, 255, 255, 0.3);
}
.ant-row-rtl #components-layout-demo-top .logo {
  float: right;
  margin: 16px 0 16px 24px;
}

[data-theme='dark'] .site-layout-content {
  background: #141414;
}
</style>
