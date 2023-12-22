<script setup>
import { ref, h, onMounted, watch, nextTick } from 'vue';
import { useRouter } from 'vue-router';
// 导入ant图标
import {
  UserOutlined,
  TagsOutlined,
  TeamOutlined,
  MenuUnfoldOutlined,
  MenuFoldOutlined,
  UsergroupAddOutlined,
  NotificationOutlined,
  InteractionOutlined,
  FileOutlined
} from '@ant-design/icons-vue';
const selectedKeys = ref(['']);
const collapsed = ref(false);
const router = useRouter();
onMounted(() => {
  // 渲染完成后，将路由的path值赋值给selectedKeys
  selectedKeys.value = ['1'];
});
watch(
  () => selectedKeys.value,
  (val) => {
    // 将tmp-1转换为数字
    let num = parseInt(val[0].split('-')[1]);
    // num等于NaN变为1
    if (isNaN(num)) {
      num = 0;
      selectedKeys.value = ['1'];
    }
    console.log(num);
    console.log(menuItem.value[num].path);
    router.push(menuItem.value[num].path);
  }
);
const menuItem = ref([
  {
    id: '1',
    label: '个人中心',
    path: '/admin/user',
    // 图标
    icon: () => h(UserOutlined)
  },
  {
    id: '2',
    label: '用户管理',
    path: '/admin/userManage',
    icon: () => h(UsergroupAddOutlined)
  },
  {
    id: '3',
    label: '管理员管理',
    path: '/admin/adminManage',
    icon: () => h(TeamOutlined)
  },
  // 论坛类别管理、交流论坛管理，系统资讯管理
  {
    id: '4',
    label: '论坛类别管理',
    path: '/admin/forumTypeManage',
    icon: () => h(TagsOutlined)
  },
  {
    id: '5',
    label: '交流论坛管理',
    path: '/admin/forumManage',
    icon: () => h(FileOutlined)
  },
  {
    id: '6',
    label: '系统资讯管理',
    path: '/admin/newsManage',
    icon: () => h(NotificationOutlined)
  },
  {
    id: '7',
    label: '问题反馈管理',
    path: '/admin/feedbackManage',
    icon: () => h(InteractionOutlined)
  }
]);

const go = (path) => {
  router.push(path);
};
</script>
<template>
  <div class="body">
    <a-layout class="layout">
      <a-layout-sider v-model:collapsed="collapsed" :trigger="null" collapsible>
        <div class="logo-body">
          <img class="logo" src="/src/assets/infobc2.png" alt="" />
          <div class="back-font">论坛后台管理</div>
        </div>
        <a-menu
          style="width: 100%"
          v-model:selectedKeys="selectedKeys"
          theme="dark"
          mode="inline"
          :items="menuItem"
        >
        </a-menu>
      </a-layout-sider>
      <a-layout>
        <a-layout-header style="background: #fff; padding: 0">
          <menu-unfold-outlined
            v-if="collapsed"
            class="trigger"
            @click="() => (collapsed = !collapsed)"
          />
          <menu-fold-outlined
            v-else
            class="trigger"
            @click="() => (collapsed = !collapsed)"
          />
          <!-- 返回前台 -->
          <div style="float: right; margin-right: 20px">
            <a-button type="primary" @click="go('/')">返回前台</a-button>
          </div>
        </a-layout-header>
        <a-layout-content
          :style="{
            margin: '24px 16px',
            padding: '24px',
            background: '#fff'
          }"
        >
          <router-view />
        </a-layout-content>
      </a-layout>
    </a-layout>
  </div>
</template>

<style scoped>
.layout {
  height: 100vh;
}
.logo {
  width: 100%;
  height: 100%;
}
.logo-body {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 64px;
  background-color: #fff;
}
.back-font {
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  font-size: 16px;
  font-weight: bold;
  color: #fff;
  /* 斜体字 */
  font-style: italic;
}
.body {
  width: 100vw;
}
#components-layout-demo-custom-trigger .trigger {
  font-size: 18px;
  line-height: 64px;
  padding: 0 24px;
  cursor: pointer;
  transition: color 0.3s;
}

#components-layout-demo-custom-trigger .trigger:hover {
  color: #1890ff;
}

#components-layout-demo-custom-trigger .logo {
  height: 32px;
  background: rgba(255, 255, 255, 0.3);
  margin: 16px;
}

.site-layout .site-layout-background {
  background: #fff;
}
</style>
