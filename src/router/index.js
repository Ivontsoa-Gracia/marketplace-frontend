import { createRouter, createWebHistory } from 'vue-router'
import PHome from '../components/pages/marketplace/home/PHome.vue'

import PAuth from '../components/pages/authentification/PAuth.vue';

import PProfil from '../components/pages/marketplace/profil/PProfil.vue';
import PListing from '../components/pages/marketplace/profil/PListing.vue';

import PAddListing from '../components/pages/marketplace/profil/PAddListing.vue';
import PAddProduct from '../components/pages/marketplace/profil/PAddProduct.vue';

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
