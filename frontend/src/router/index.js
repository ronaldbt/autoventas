import { createRouter, createWebHistory } from 'vue-router';
import Landing from '../views/Landing.vue';

const routes = [
  {
    path: '/',
    name: 'Landing',
    component: Landing,
  },
  // Agrega aquí más rutas si lo deseas
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
