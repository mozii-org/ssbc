import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from 'ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _6a98f8d9 = () => interopDefault(import('../pages/log.vue' /* webpackChunkName: "pages/log" */))
const _3f82a223 = () => interopDefault(import('../pages/search.vue' /* webpackChunkName: "pages/search" */))
const _0647a640 = () => interopDefault(import('../pages/spider.vue' /* webpackChunkName: "pages/spider" */))
const _c980b330 = () => interopDefault(import('../pages/h/_id.vue' /* webpackChunkName: "pages/h/_id" */))
const _7a9887b2 = () => interopDefault(import('../pages/index.vue' /* webpackChunkName: "pages/index" */))

const emptyFn = () => {}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: '/',
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/log",
    component: _6a98f8d9,
    name: "log"
  }, {
    path: "/search",
    component: _3f82a223,
    name: "search"
  }, {
    path: "/spider",
    component: _0647a640,
    name: "spider"
  }, {
    path: "/h/:id?",
    component: _c980b330,
    name: "h-id"
  }, {
    path: "/",
    component: _7a9887b2,
    name: "index"
  }],

  fallback: false
}

export function createRouter (ssrContext, config) {
  const base = (config._app && config._app.basePath) || routerOptions.base
  const router = new Router({ ...routerOptions, base  })

  // TODO: remove in Nuxt 3
  const originalPush = router.push
  router.push = function push (location, onComplete = emptyFn, onAbort) {
    return originalPush.call(this, location, onComplete, onAbort)
  }

  const resolve = router.resolve.bind(router)
  router.resolve = (to, current, append) => {
    if (typeof to === 'string') {
      to = normalizeURL(to)
    }
    return resolve(to, current, append)
  }

  return router
}
