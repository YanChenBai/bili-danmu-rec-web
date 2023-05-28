import { createApp } from 'vue';
import App from './App.vue';
import { createRouter, createWebHistory } from 'vue-router/auto';
// 通用字体
// import 'vfonts/Lato.css';
// 等宽字体
// import 'vfonts/FiraCode.css';
const route = createRouter({
  history: createWebHistory(),
});

createApp(App).use(route).mount('#app');
