import Vue from 'vue';

import VueRouter from 'vue-router';

import Login from './login';
import Layout from './layout';
import Home from './home'

Vue.use(VueRouter);

const router = new VueRouter({
  mode: 'history',
  base: '/',
  routes: [
    {
      path: '/login',
      component: Login
    },
    {
      path: '/',
      component: Layout,
      children: [
        {
          path: '/home',
          component: Home
        }
      ]
    },
  ]
});

export default router;
