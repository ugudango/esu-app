/* eslint-disable import/no-unresolved */
/* eslint-disable import/extensions */
import { createApp } from 'vue';
import App from './App.vue';
import './registerServiceWorker.ts';
import router from './router';
import store from './store';

createApp(App).use(store).use(router).mount('#app');
