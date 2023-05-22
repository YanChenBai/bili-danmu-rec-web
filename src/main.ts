import { createApp } from 'vue';
import App from './App.vue';
//@ts-ignore
import { createRouter, createWebHistory } from 'vue-router/auto';
//@ts-ignore
import { routes } from 'vue-router/auto/routes';

const route = createRouter({
  history: createWebHistory(),
  routes,
});

createApp(App).use(route).mount('#app');
