import { createRouter, createWebHistory } from 'vue-router';

// Vistas públicas
import Landing from '@/views/Landing.vue';
import LoginView from '@/views/LoginView.vue';
import RegisterView from '@/views/RegisterView.vue';

// Layout principal
import DefaultLayout from '@/layouts/DefaultLayout.vue';

// Dashboards
import DashboardCliente from '@/views/DashboardCliente.vue';
import DashboardConcesionario from '@/views/DashboardConcesionario.vue';
import DashboardPublicista from '@/views/DashboardPublicista.vue';
import DashboardAdmin from '@/views/DashboardAdmin.vue';

// Vistas concesionario
import AgregarVehiculo from '@/views/AgregarVehiculo.vue';
import VehiculoListado from '@/views/VehiculoListado.vue';

const routes = [
  { path: '/', name: 'Landing', component: Landing },
  { path: '/login', name: 'Login', component: LoginView },
  { path: '/register', name: 'Register', component: RegisterView },

  {
    path: '/cliente',
    component: DefaultLayout,
    meta: { requiresAuth: true, roles: ['CLIENTE'] },
    children: [
      {
        path: 'dashboard',
        name: 'DashboardCliente',
        component: DashboardCliente
      },
      {
        path: 'vehiculos',
        name: 'ClienteVehiculoListado',
        component: VehiculoListado
      },
      {
        path: 'vehiculos/agregar',
        name: 'ClienteAgregarVehiculo',
        component: AgregarVehiculo
      }
    ]
  },
  
  {
    path: '/concesionario',
    component: DefaultLayout,
    meta: { requiresAuth: true, roles: ['CONCESIONARIO'] },
    children: [
      {
        path: 'dashboard',
        name: 'DashboardConcesionario',
        component: DashboardConcesionario
      },
      {
        path: 'vehiculos',
        name: 'VehiculoListado',
        component: VehiculoListado
      },
      {
        path: 'vehiculos/agregar',
        name: 'AgregarVehiculo',
        component: AgregarVehiculo
      }
    ]
  },
  {
    path: '/publicista',
    component: DefaultLayout,
    meta: { requiresAuth: true, roles: ['PUBLICISTA'] },
    children: [
      {
        path: 'dashboard',
        name: 'DashboardPublicista',
        component: DashboardPublicista
      }
    ]
  },
  {
    path: '/admin',
    component: DefaultLayout,
    meta: { requiresAuth: true, roles: ['ADMIN'] },
    children: [
      {
        path: '',
        name: 'DashboardAdmin',
        component: DashboardAdmin
      }
    ]
  },
  {
    path: '/:region/:comuna?/:marca?/:modelo?/:anio?/:id?',
    name: 'VehiculoSeo',
    component: () => import('@/views/VehiculoSeoView.vue')
  },  
  {
    path: '/unauthorized',
    name: 'Unauthorized',
    component: () => import('@/views/Unauthorized.vue')
  },
  {
    path: '/:pathMatch(.*)*',
    name: 'NotFound',
    component: () => import('@/views/NotFound.vue')
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

// 🛡️ Protección global con token y rol
router.beforeEach((to, from, next) => {
  const token = localStorage.getItem('token');
  const rol = localStorage.getItem('rol');

  if (to.meta.requiresAuth) {
    if (!token) return next('/login');
    if (to.meta.roles && !to.meta.roles.includes(rol)) return next('/unauthorized');
  }

  next();
});

export default router;
