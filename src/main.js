import { createApp } from 'vue';
// 统一仓库出口
import pinia from '@/stores';
import App from './App.vue';
import router from '@/router/index';
import '@/assets/main.css';
import Antd from 'ant-design-vue';
import * as ElementPlusIconsVue from '@element-plus/icons-vue';
import 'ant-design-vue/dist/reset.css';
const app = createApp(App);
// 全局注册element-plus的图标
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
  app.component(key, component);
}
// 使用pinia和以及pinia持久化
app.use(Antd);
app.use(pinia);
app.use(router);
app.mount('#app');
