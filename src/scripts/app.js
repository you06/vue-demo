/* @flow */
const Vue = require('vue')
import VueRouter from 'vue-router'
const Element = require('element-ui')
const avatar = require('../assets/avatar.png')
import 'element-ui/lib/theme-default/index.css'
import '../stylus/index.styl'

// load plugins into vue
Vue.use(VueRouter)
Vue.use(Element)

// import template
const Start = resolve => require(['../components/Hello.vue'], resolve)
const Sky = resolve => require(['../components/Sky.vue'], resolve)
const Maple = resolve => require(['../components/Maple.vue'], resolve)

// route table
const routes = [
  { path: '/', component: Start },
  { path: '/Sky', component: Sky },
  { path: '/Maple', component: Maple }
]

// create the route
const router = new VueRouter({
  routes
})

let app = new Vue({
  el: '#app',
  data: {
    avatar
  },
  router
})
