import { createApp } from 'vue';
import App from './App.vue';
//@ts-ignore
import { createRouter, createWebHistory } from 'vue-router/auto';
//@ts-ignore
import { routes } from 'vue-router/auto/routes';
// 通用字体
// import 'vfonts/Lato.css';
// 等宽字体
// import 'vfonts/FiraCode.css';
const route = createRouter({
  history: createWebHistory(),
  routes,
});

createApp(App).use(route).mount('#app');
