import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Signup from '../views/Signup.vue'
import Login from '../views/Login.vue'
import Events from '../views/Events.vue'
import Event from '../views/Event.vue'
import Favorites from '../views/Favorites.vue'
import NotFound from '../views/NotFound.vue'
import Profile from '../views/Profile.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
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
    path: '/event/:id',
    name: 'event',
    component: Event
  },
  {
    path: '/events',
    name: 'events',
    component: Events
  },
  {
    path: '/profile',
    name: 'profile',
    component: Profile,
    beforeEnter (to, from, next) {
      if (!localStorage.getItem('token')) {
        next({
          name: 'Auth'
        })
      }
      next()
    }
  },
  {
    path: '/me/favorites',
    name: 'favorites',
    component: Favorites,
    beforeEnter (to, from, next) {
      if (!localStorage.getItem('token')) {
        next({
          name: 'Auth'
        })
      }
      next()
    }
  },
  { path: '/404', component: NotFound },
  { path: '*', redirect: '/404' }

]

const router = new VueRouter({
  routes
})

export default router
