import { fileURLToPath, URL } from 'node:url';
import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import AutoImport from 'unplugin-auto-import/vite';
import Components from 'unplugin-vue-components/vite';
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers';
// https://vitejs.dev/config/

export default defineConfig({
  server: {
    port: 81,
    proxy: {
      '/xxx': {
        target: 'http://localhost:88', // 后端服务器的地址
        changeOrigin: true, // 允许跨域
        rewrite: (path) => path.replace(/^\/xxx/, '') // 重写路径，去除前缀’/xxx‘
      }
    }
  }, //端口号，不添加默认s从5173开始
  plugins: [
    vue(),
    // 自动导入组件
    AutoImport({
      resolvers: [ElementPlusResolver()]
    }),
    // 按需导入组件
    Components({
      resolvers: [ElementPlusResolver()]
    })
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  }
});
