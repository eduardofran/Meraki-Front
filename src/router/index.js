import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Signup from '../views/Signup.vue'
import Login from '../views/Login.vue'
import Events from '../views/Events.vue'
import Event from '../views/Event.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: 'about' */ '../views/About.vue')
  },
  {
    path: '/signup',
    name: 'Signup',
    meta: { layout: 'no-navbar' },
    component: Signup
  },
  {
    path: '/login',
    name: 'Login',
    meta: { layout: 'no-navbar' },
    component: Login
  },
  {
    path: '/events',
    name: 'events',
    component: Events
  },
  {
    path: '/events/:query',
    name: 'events',
    component: Events
  },
  {
    path: '/event/:id',
    name: 'event',
    component: Event
  }
]

const router = new VueRouter({
  routes
})

export default router
