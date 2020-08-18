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
const _1f893f3a = () => interopDefault(import('../pages/map/index.vue' /* webpackChunkName: "pages/map/index" */))
const _5f4935e3 = () => interopDefault(import('../pages/partner.vue' /* webpackChunkName: "pages/partner" */))
const _e4edb0c0 = () => interopDefault(import('../pages/partners.vue' /* webpackChunkName: "pages/partners" */))
const _ef8b12ea = () => interopDefault(import('../pages/registers.vue' /* webpackChunkName: "pages/registers" */))
const _43f782ca = () => interopDefault(import('../pages/roles/index.vue' /* webpackChunkName: "pages/roles/index" */))
const _6fc7b0e8 = () => interopDefault(import('../pages/schedule.vue' /* webpackChunkName: "pages/schedule" */))
const _706559be = () => interopDefault(import('../pages/spam.vue' /* webpackChunkName: "pages/spam" */))
const _4ba7a15b = () => interopDefault(import('../pages/statistics/index.vue' /* webpackChunkName: "pages/statistics/index" */))
const _9f6ea86e = () => interopDefault(import('../pages/trips.vue' /* webpackChunkName: "pages/trips" */))
const _14dd5a14 = () => interopDefault(import('../pages/wash.vue' /* webpackChunkName: "pages/wash" */))
const _7b2b2333 = () => interopDefault(import('../pages/map/track.vue' /* webpackChunkName: "pages/map/track" */))
const _0a37df83 = () => interopDefault(import('../pages/roles/create.vue' /* webpackChunkName: "pages/roles/create" */))
const _4ad8d915 = () => interopDefault(import('../pages/statistics/client/index.vue' /* webpackChunkName: "pages/statistics/client/index" */))
const _1a8f3628 = () => interopDefault(import('../pages/statistics/day/index.vue' /* webpackChunkName: "pages/statistics/day/index" */))
const _1ed5afcc = () => interopDefault(import('../pages/statistics/month/index.vue' /* webpackChunkName: "pages/statistics/month/index" */))
const _035f3ea2 = () => interopDefault(import('../pages/statistics/trip/index.vue' /* webpackChunkName: "pages/statistics/trip/index" */))
const _0d8d81af = () => interopDefault(import('../pages/statistics/client/pipeline.vue' /* webpackChunkName: "pages/statistics/client/pipeline" */))
const _977f47c2 = () => interopDefault(import('../pages/statistics/client/regular.vue' /* webpackChunkName: "pages/statistics/client/regular" */))
const _3ba57d9c = () => interopDefault(import('../pages/statistics/day/costs.vue' /* webpackChunkName: "pages/statistics/day/costs" */))
const _3febf740 = () => interopDefault(import('../pages/statistics/month/costs.vue' /* webpackChunkName: "pages/statistics/month/costs" */))
const _6b5a5d73 = () => interopDefault(import('../pages/statistics/month/fines.vue' /* webpackChunkName: "pages/statistics/month/fines" */))
const _107bf6e0 = () => interopDefault(import('../pages/statistics/month/models.vue' /* webpackChunkName: "pages/statistics/month/models" */))
const _39884596 = () => interopDefault(import('../pages/statistics/month/revenue.vue' /* webpackChunkName: "pages/statistics/month/revenue" */))
const _1f66a823 = () => interopDefault(import('../pages/statistics/trip/costs.vue' /* webpackChunkName: "pages/statistics/trip/costs" */))
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
    component: _1f893f3a,
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
    path: "/statistics",
    component: _4ba7a15b,
    name: "statistics"
  }, {
    path: "/trips",
    component: _9f6ea86e,
    name: "trips"
  }, {
    path: "/wash",
    component: _14dd5a14,
    name: "wash"
  }, {
    path: "/map/track",
    component: _7b2b2333,
    name: "map-track"
  }, {
    path: "/roles/create",
    component: _0a37df83,
    name: "roles-create"
  }, {
    path: "/statistics/client",
    component: _4ad8d915,
    name: "statistics-client"
  }, {
    path: "/statistics/day",
    component: _1a8f3628,
    name: "statistics-day"
  }, {
    path: "/statistics/month",
    component: _1ed5afcc,
    name: "statistics-month"
  }, {
    path: "/statistics/trip",
    component: _035f3ea2,
    name: "statistics-trip"
  }, {
    path: "/statistics/client/pipeline",
    component: _0d8d81af,
    name: "statistics-client-pipeline"
  }, {
    path: "/statistics/client/regular",
    component: _977f47c2,
    name: "statistics-client-regular"
  }, {
    path: "/statistics/day/costs",
    component: _3ba57d9c,
    name: "statistics-day-costs"
  }, {
    path: "/statistics/month/costs",
    component: _3febf740,
    name: "statistics-month-costs"
  }, {
    path: "/statistics/month/fines",
    component: _6b5a5d73,
    name: "statistics-month-fines"
  }, {
    path: "/statistics/month/models",
    component: _107bf6e0,
    name: "statistics-month-models"
  }, {
    path: "/statistics/month/revenue",
    component: _39884596,
    name: "statistics-month-revenue"
  }, {
    path: "/statistics/trip/costs",
    component: _1f66a823,
    name: "statistics-trip-costs"
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
