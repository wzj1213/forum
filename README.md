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
全局配置
在引入 ArcoVue 时，可以传入一个全局配置对象。

import { createApp } from 'vue'
import ArcoVue from '@arco-design/web-vue';
import App from './App.vue';
import '@arco-design/web-vue/dist/arco.css';

const app = createApp(App);
app.use(ArcoVue, {
  // 用于改变使用组件时的前缀名称
  componentPrefix: 'arco'
});
app.mount('#app');
导入组件
组件库在 2.44.3 版本为了兼容 nuxt3 环境，增加 exports 配置。这个配置会对组件库的导入产生一定影响，使用中建议从 @arco-design/web-vue 和 @arco-design/web-vue/es/icon 导入组件库和图标。
# element plus组件库
可以和arco搭配
自动导入配置
node 版本16
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