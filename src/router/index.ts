import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';
import Contact from '../views/Contact.vue';
import Home from '../views/Home.vue';

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    redirect: '/esu-app/',
  },
  {
    path: '/esu-app/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/esu-app/contact',
    name: 'Contact',
    component: Contact,
  },
  {
    path: '/esu-app/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue'),
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
