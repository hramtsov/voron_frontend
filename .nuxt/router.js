import Vue from 'vue'
import Router from 'vue-router'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _9ed59fc0 = () => interopDefault(import('../pages/access.vue' /* webpackChunkName: "pages/access" */))
const _76ebf2d8 = () => interopDefault(import('../pages/categories.vue' /* webpackChunkName: "pages/categories" */))
const _978a3608 = () => interopDefault(import('../pages/check.vue' /* webpackChunkName: "pages/check" */))
const _ce29c208 = () => interopDefault(import('../pages/clients.vue' /* webpackChunkName: "pages/clients" */))
const _60a254a0 = () => interopDefault(import('../pages/delivery.vue' /* webpackChunkName: "pages/delivery" */))
const _4afb887e = () => interopDefault(import('../pages/drive.vue' /* webpackChunkName: "pages/drive" */))
const _240aa682 = () => interopDefault(import('../pages/drivers.vue' /* webpackChunkName: "pages/drivers" */))
const _8e483d26 = () => interopDefault(import('../pages/fines.vue' /* webpackChunkName: "pages/fines" */))
const _20b520f0 = () => interopDefault(import('../pages/guide.vue' /* webpackChunkName: "pages/guide" */))
const _35fed6dd = () => interopDefault(import('../pages/login.vue' /* webpackChunkName: "pages/login" */))
const _1d77d1bc = () => interopDefault(import('../pages/managers.vue' /* webpackChunkName: "pages/managers" */))
const _49250250 = () => interopDefault(import('../pages/map.vue' /* webpackChunkName: "pages/map" */))
const _4759d488 = () => interopDefault(import('../pages/partner.vue' /* webpackChunkName: "pages/partner" */))
const _9c897a32 = () => interopDefault(import('../pages/partners.vue' /* webpackChunkName: "pages/partners" */))
const _2b6877b8 = () => interopDefault(import('../pages/registers.vue' /* webpackChunkName: "pages/registers" */))
const _27637a5a = () => interopDefault(import('../pages/schedule.vue' /* webpackChunkName: "pages/schedule" */))
const _4dfe3085 = () => interopDefault(import('../pages/spam.vue' /* webpackChunkName: "pages/spam" */))
const _24b60744 = () => interopDefault(import('../pages/statistic.vue' /* webpackChunkName: "pages/statistic" */))
const _1b139e4a = () => interopDefault(import('../pages/wash.vue' /* webpackChunkName: "pages/wash" */))
const _60666b33 = () => interopDefault(import('../pages/cars/_table.vue' /* webpackChunkName: "pages/cars/_table" */))
const _6c5733c6 = () => interopDefault(import('../pages/index.vue' /* webpackChunkName: "pages/index" */))

// TODO: remove in Nuxt 3
const emptyFn = () => {}
const originalPush = Router.prototype.push
Router.prototype.push = function push (location, onComplete = emptyFn, onAbort) {
  return originalPush.call(this, location, onComplete, onAbort)
}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: decodeURI('/'),
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/access",
    component: _9ed59fc0,
    name: "access"
  }, {
    path: "/categories",
    component: _76ebf2d8,
    name: "categories"
  }, {
    path: "/check",
    component: _978a3608,
    name: "check"
  }, {
    path: "/clients",
    component: _ce29c208,
    name: "clients"
  }, {
    path: "/delivery",
    component: _60a254a0,
    name: "delivery"
  }, {
    path: "/drive",
    component: _4afb887e,
    name: "drive"
  }, {
    path: "/drivers",
    component: _240aa682,
    name: "drivers"
  }, {
    path: "/fines",
    component: _8e483d26,
    name: "fines"
  }, {
    path: "/guide",
    component: _20b520f0,
    name: "guide"
  }, {
    path: "/login",
    component: _35fed6dd,
    name: "login"
  }, {
    path: "/managers",
    component: _1d77d1bc,
    name: "managers"
  }, {
    path: "/map",
    component: _49250250,
    name: "map"
  }, {
    path: "/partner",
    component: _4759d488,
    name: "partner"
  }, {
    path: "/partners",
    component: _9c897a32,
    name: "partners"
  }, {
    path: "/registers",
    component: _2b6877b8,
    name: "registers"
  }, {
    path: "/schedule",
    component: _27637a5a,
    name: "schedule"
  }, {
    path: "/spam",
    component: _4dfe3085,
    name: "spam"
  }, {
    path: "/statistic",
    component: _24b60744,
    name: "statistic"
  }, {
    path: "/wash",
    component: _1b139e4a,
    name: "wash"
  }, {
    path: "/cars/:table?",
    component: _60666b33,
    name: "cars-table"
  }, {
    path: "/",
    component: _6c5733c6,
    name: "index"
  }],

  fallback: false
}

export function createRouter () {
  return new Router(routerOptions)
}
