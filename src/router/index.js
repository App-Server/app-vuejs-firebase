import { createRouter, createWebHistory } from 'vue-router';
import Login from '../views/Login.vue';
import Painel from '../views/Painel.vue';
import UserCreate from '../views/UserCreate.vue';

const routes = [
  {
    path: '/',
    name: 'Login',
    component: Login
  },
  {
    path: '/painel',
    name: 'Painel',
    component: Painel
  },
  {
    path: '/users_create',
    name: 'UserCreate',
    component: UserCreate
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;
