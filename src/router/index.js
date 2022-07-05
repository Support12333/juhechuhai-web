import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
        component:  ()=> { return import('@/views/website/home/index.vue') }
    },
    {
      path: '/application',
      name: 'application',
        component:  ()=> { return import('@/views/website/home/application.vue') }
    },
    {
      path: '/policy',
      name: 'policy',
        component:  ()=> { return import('@/views/website/home/policy.vue') }
    },
  ]
})
