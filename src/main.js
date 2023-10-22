import { createApp } from 'vue';
// 统一仓库出口
import pinia from '@/stores';
import App from './App.vue';
import router from './router';
import '@/assets/main.scss';

const app = createApp(App);

// 使用pinia和以及pinia持久化
app.use(pinia);
app.use(router);
app.mount('#app');
