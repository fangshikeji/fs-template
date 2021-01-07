import Vue from 'vue'
import store from '../store'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

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
    meta: {
      title: '关于我们',
      authLogin: false
    },
    component: () => import('../views/About.vue')
  }
]

const router = new VueRouter({
  routes
})

router.beforeEach((to, from, next) => {
  document.title = (to.meta && to.meta.title) || to.name

  if (to.matched.some(record => record.meta.authLogin)) {
    if (store.state.token) {
      next()
    } else {
      next('login')
    }
  } else {
    next()
  }
})

export default router
