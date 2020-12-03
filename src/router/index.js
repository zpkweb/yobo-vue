import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Index',
    component: () => import(/* webpackChunkName: "Index" */ '../views/index.vue')
  },
  {
    path: '/artworks',
    name: 'Artworks',
    component: () => import(/* webpackChunkName: "Artworks" */ '../views/artworks.vue')
  },
  {
    path: '/artist',
    name: 'Artist',
    component: () => import(/* webpackChunkName: "Artist" */ '../views/artist.vue')
  },
  {
    path: '/artists',
    name: 'Artists',
    component: () => import(/* webpackChunkName: "Artist" */ '../views/artists.vue')
  },
  {
    path: '/mine',
    name: 'Mine',
    component: () => import(/* webpackChunkName: "Mine" */ '../views/mine.vue')
  },
  {
    path: '/wishlist',
    name: 'Wishlist',
    component: () => import(/* webpackChunkName: "wishlist" */ '../views/wishlist.vue')
  },
  {
    path: '/test',
    name: 'Test',
    component: () => import(/* webpackChunkName: "test" */ '../views/test.vue')
  },
  {
    path: '/like',
    name: 'Like',
    component: () => import(/* webpackChunkName: "like" */ '../views/like.vue')
  },
  {
    path: '/order',
    name: 'Order',
    component: () => import(/* webpackChunkName: "order" */ '../views/order.vue')
  },
]

const router = new VueRouter({
  routes
})

export default router
