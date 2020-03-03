import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/pages/Login'
import Index from '@/App'
import Registered from "@/pages/Registered";
import Type from "@/pages/Type";
import Perform from '@/pages/Perform'
import FindPassword from "@/pages/FindPassword";
import Manage from '@/pages/Manage'
import Add from '@/pages/AddPerform'
import MyAddress from '@/components/Manage/MyAddress'
import AccountSetting from '@/components/Manage/AccountSetting'
import MyInfo from '@/components/Manage/MyInfo'
import OrderList from '@/components/Manage/OrderList'
import AddShow from '@/components/Admin/AddShow'
import ChangeShow from '@/components/Admin/ChangeShow'
import Order from '@/pages/Order'
import PayOrder from '@/pages/PayOrder'

Vue.use(Router)

const originalPush = Router.prototype.push
Router.prototype.push = function push(location) {
  return originalPush.call(this, location).catch(err => err)
}
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
    },
    {
      path: '/FindPassword',
      name: 'FindPassword',
      component: FindPassword
    },
    {
      path: '/Order',
      name: 'Order',
      meta: {
        requireAuth: true // 配置此条，进入页面前判断是否需要登陆
      },
      component: Order
    },
    {
      path: '/PayOrder',
      name: 'PayOrder',
      meta: {
        requireAuth: true
      },
      component: PayOrder
    },
    {
      path: '/Add',
      name: 'Add',
      meta: {
        requireAuth: true
      },
      component: Add
    },
    {
      path: '/AddShow',
      name: 'AddShow',
      meta: {
        requireAuth: true
      },
      component: AddShow
    },
    {
      path: '/ChangeShow',
      name: 'ChangeShow',
      meta: {
        requireAuth: true
      },
      component: ChangeShow
    },
    {
      path: '/Manage',
      name: 'Manage',
      meta: {
        requireAuth: true
      },
      component: Manage,
      children:[
          {
            path: '/OrderList',
            name: 'OrderList',
            component: OrderList,
          },
          {
            path: '/MyAddress',
            name: 'MyAddress',
            component: MyAddress,
          },
          {
            path: '/AccountSetting',
            name: 'AccountSetting',
            component: AccountSetting,
          },
          {
            path: '/MyInfo',
            name: 'MyInfo',
            component: MyInfo,
          }
      ]
    }
  ]
})
