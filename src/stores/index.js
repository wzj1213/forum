import { createPinia } from 'pinia';
import persist from 'pinia-plugin-persistedstate';
const pinia = createPinia();
pinia.use(persist);
export default pinia;
export * from './modules/user'; // 对store进行了导入导出
