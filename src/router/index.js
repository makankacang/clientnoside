import { createRouter, createWebHistory } from 'vue-router';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home.index',
      component: () => import("@/views/home.vue")
    },
    {
      path: '/repositori',
      name: 'repositori',
      component: () => import("@/views/repositori.vue")
    },
    {
      path: '/jurnal',
      name: 'jurnal',
      component: () => import("@/views/jurnal.vue")
    },
    {
      path: '/konferensi',
      name: 'konferensi',
      component: () => import("@/views/konferensi.vue")
    },
    {
      path: '/repositori/detail/:id',
      name: 'RepositoriDetail',
      component: () => import("@/views/repositoridetail.vue")
    },
    {
      path: '/jurnal/detail/:id',
      name: 'JournalDetail',
      component: () => import("@/views/jurnaldetail.vue")
    },
    {
      path: '/konferensi/detail/:id',
      name: 'KonferensiDetail',
      component: () => import("@/views/konferensidetail.vue")
    },
  ]
})


export default router;

