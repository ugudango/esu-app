/* eslint-disable import/no-unresolved */
/* eslint-disable import/extensions */
import { createApp } from 'vue';
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import App from './App.vue';
import './registerServiceWorker.ts';
import router from './router';
import store from './store';
import '@/assets/tailwind.css';
import '@mdi/font/css/materialdesignicons.css';

createApp(App)
  .use(store).use(router)
  .mount('#app');
