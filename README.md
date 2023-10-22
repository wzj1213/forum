## 环境配置
1.axios引入 √
pnpm install axios
2.pinia持久化 √
pnpm add pinia-plugin-persistedstate -D
在store根配置它 √
import persist from 'pinia-plugin-persistedstate';
const pinia = createPinia();
pinia.use(persist);
## 组件库
# arco design组件库
1.arco design组件库的引用
pnpm install --save-dev @arco-design/web-vue
导入index.js中
{
    import { createApp } from 'vue'
    import ArcoVue from '@arco-design/web-vue';
    import App from './App.vue';
    import '@arco-design/web-vue/dist/arco.css';

    const app = createApp(App);
    app.use(ArcoVue);
    app.mount('#app');
}
3.按需加载与组件库主题（Arco 插件）
pnpm i @arco-plugins/vite-vue -D

# element plus组件库
可以和arco搭配
自动导入配置
pnpm add -D unplugin-vue-components unplugin-auto-import
{
    // vite.config.ts
import { defineConfig } from 'vite'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'

export default defineConfig({
  // ...
  plugins: [
    // ...
    AutoImport({
      resolvers: [ElementPlusResolver()],
    }),
    Components({
      resolvers: [ElementPlusResolver()],
    }),
  ],
})
}