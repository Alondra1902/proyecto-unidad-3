import { createRouter, createWebHistory } from 'vue-router'

import HomeView from '../views/HomeView.vue'
import VIfView from '../views/VIfView.vue'
import VShowView from '../views/VShowView.vue'
import VForView from '../views/VForView.vue'
import VKeyView from '../views/VKeyView.vue'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/', component: HomeView },
    { path: '/v-if', component: VIfView },
    { path: '/v-show', component: VShowView },
    { path: '/v-for', component: VForView },
    { path: '/v-bind:key', component: VKeyView },
  ],
})

export default router
