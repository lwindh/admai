import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/pages/Login'
import Index from '@/App'
import Registered from "@/pages/Registered";
import Type from "@/pages/Type";
import Perform from '@/pages/Perform'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Index',
      component: Index,
    },
    {
      path: '/Login',
      name: 'Login',
      component: Login
    },
    {
      path: '/Register',
      name: 'Registered',
      component: Registered
    },
    {
      path: '/Type',
      name: 'Type',
      component: Type
    },
    {
      path: '/Perform',
      name: 'Perform',
      component: Perform
    }
  ]
})
