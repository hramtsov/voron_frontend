import Vue from 'vue'
import Router from 'vue-router'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _d258e55e = () => interopDefault(import('../pages/categories.vue' /* webpackChunkName: "pages/categories" */))
const _428e3a3a = () => interopDefault(import('../pages/check.vue' /* webpackChunkName: "pages/check" */))
const _1be13f23 = () => interopDefault(import('../pages/clients.vue' /* webpackChunkName: "pages/clients" */))
const _63374872 = () => interopDefault(import('../pages/deliveries.vue' /* webpackChunkName: "pages/deliveries" */))
const _70f0cce6 = () => interopDefault(import('../pages/drivers.vue' /* webpackChunkName: "pages/drivers" */))
const _394c4158 = () => interopDefault(import('../pages/fines.vue' /* webpackChunkName: "pages/fines" */))
const _4b331ed7 = () => interopDefault(import('../pages/guide.vue' /* webpackChunkName: "pages/guide" */))
const _607cd4c4 = () => interopDefault(import('../pages/login.vue' /* webpackChunkName: "pages/login" */))
const _65dc084a = () => interopDefault(import('../pages/managers.vue' /* webpackChunkName: "pages/managers" */))
const _5575ae32 = () => interopDefault(import('../pages/managers2.vue' /* webpackChunkName: "pages/managers2" */))
const _63074df7 = () => interopDefault(import('../pages/map.vue' /* webpackChunkName: "pages/map" */))
const _5f4935e3 = () => interopDefault(import('../pages/partner.vue' /* webpackChunkName: "pages/partner" */))
const _e4edb0c0 = () => interopDefault(import('../pages/partners.vue' /* webpackChunkName: "pages/partners" */))
const _ef8b12ea = () => interopDefault(import('../pages/registers.vue' /* webpackChunkName: "pages/registers" */))
const _43f782ca = () => interopDefault(import('../pages/roles/index.vue' /* webpackChunkName: "pages/roles/index" */))
const _6fc7b0e8 = () => interopDefault(import('../pages/schedule.vue' /* webpackChunkName: "pages/schedule" */))
const _706559be = () => interopDefault(import('../pages/spam.vue' /* webpackChunkName: "pages/spam" */))
const _7ab68caa = () => interopDefault(import('../pages/statistic.vue' /* webpackChunkName: "pages/statistic" */))
const _9f6ea86e = () => interopDefault(import('../pages/trips.vue' /* webpackChunkName: "pages/trips" */))
const _14dd5a14 = () => interopDefault(import('../pages/wash.vue' /* webpackChunkName: "pages/wash" */))
const _0a37df83 = () => interopDefault(import('../pages/roles/create.vue' /* webpackChunkName: "pages/roles/create" */))
const _3f53627c = () => interopDefault(import('../pages/roles/edit/_id.vue' /* webpackChunkName: "pages/roles/edit/[_]id" */))
const _3d721fda = () => interopDefault(import('../pages/cars/_table.vue' /* webpackChunkName: "pages/cars/[_]table" */))
const _d2559ca6 = () => interopDefault(import('../pages/index.vue' /* webpackChunkName: "pages/index" */))

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
    path: "/categories",
    component: _d258e55e,
    name: "categories"
  }, {
    path: "/check",
    component: _428e3a3a,
    name: "check"
  }, {
    path: "/clients",
    component: _1be13f23,
    name: "clients"
  }, {
    path: "/deliveries",
    component: _63374872,
    name: "deliveries"
  }, {
    path: "/drivers",
    component: _70f0cce6,
    name: "drivers"
  }, {
    path: "/fines",
    component: _394c4158,
    name: "fines"
  }, {
    path: "/guide",
    component: _4b331ed7,
    name: "guide"
  }, {
    path: "/login",
    component: _607cd4c4,
    name: "login"
  }, {
    path: "/managers",
    component: _65dc084a,
    name: "managers"
  }, {
    path: "/managers2",
    component: _5575ae32,
    name: "managers2"
  }, {
    path: "/map",
    component: _63074df7,
    name: "map"
  }, {
    path: "/partner",
    component: _5f4935e3,
    name: "partner"
  }, {
    path: "/partners",
    component: _e4edb0c0,
    name: "partners"
  }, {
    path: "/registers",
    component: _ef8b12ea,
    name: "registers"
  }, {
    path: "/roles",
    component: _43f782ca,
    name: "roles"
  }, {
    path: "/schedule",
    component: _6fc7b0e8,
    name: "schedule"
  }, {
    path: "/spam",
    component: _706559be,
    name: "spam"
  }, {
    path: "/statistic",
    component: _7ab68caa,
    name: "statistic"
  }, {
    path: "/trips",
    component: _9f6ea86e,
    name: "trips"
  }, {
    path: "/wash",
    component: _14dd5a14,
    name: "wash"
  }, {
    path: "/roles/create",
    component: _0a37df83,
    name: "roles-create"
  }, {
    path: "/roles/edit/:id?",
    component: _3f53627c,
    name: "roles-edit-id"
  }, {
    path: "/cars/:table?",
    component: _3d721fda,
    name: "cars-table"
  }, {
    path: "/",
    component: _d2559ca6,
    name: "index"
  }],

  fallback: false
}

export function createRouter () {
  return new Router(routerOptions)
}
