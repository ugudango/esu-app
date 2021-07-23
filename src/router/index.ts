import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router';
import Contact from '../views/Contact.vue';
import Home from '../views/Home.vue';
import GroupPage from '../views/GroupPage.vue';
import Schedule from '../views/Schedule.vue';

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
    path: '/esu-app/schedule',
    name: 'Schedule',
    component: Schedule,
  },
  {
    path: '/esu-app/contact',
    name: 'Contact',
    component: Contact,
  },
  {
    path: '/esu-app/group/:groupId',
    name: 'Group Page',
    component: GroupPage,
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
  history: createWebHashHistory(),
  routes,
});

export default router;
