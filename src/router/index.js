import { createRouter, createWebHistory } from 'vue-router'
import TableProductos from '../views/TableProductos.vue'
import TableCategorias from '../views/TableCategorias.vue'
import FormProdView from '../views/FormProdView.vue'
import FormCategoria from '../views/FormCategoria.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: TableProductos
    },
    {
      path: '/categorias',
      name: 'categorias',
      component: TableCategorias
    },
    {
      path: '/form',
      name: 'formProd',
      component: FormProdView
    },
    {
    path: '/formProd/:id',
    name: 'FormProd',
    component: FormProdView,
    props:true
    },
    {
      path: '/formCat',
      name: 'formCat',
      component: FormCategoria
    },
    {
      path: '/formCat/:id',
      name: 'FormCat',
      component: FormCategoria,
      props:true
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue')
    }
  ]
})

export default router
