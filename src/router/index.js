import { createRouter, createWebHistory } from 'vue-router'
import PHome from '../components/pages/PHome.vue';

import PAuth from '../components/pages/PAuth.vue';

import PProfil from '../components/pages/PProfil.vue';
import PListing from '../components/pages/PListing.vue';
import PAddListing from '../components/pages/PAddListing.vue';
import PAddProduct from '../components/pages/PAddProduct.vue';

const routes = [
  { path: '/', name: 'home', component: PHome },
  { path: '/auth', name: 'authentification', component: PAuth },
  {
    path: '/profil',
    component: PProfil,
    children: [
      {
        path: 'listing/view', 
        name: 'view-listing',
        component: PListing
      },
      {
        path: 'listing/add', 
        name: 'add-listing',
        component: PAddListing
      },      
      {
        path: 'product/add', 
        name: 'add-product',
        component: PAddProduct
      }
    ]
    
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
