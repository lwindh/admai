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
import CustomerManage from '@/components/Manage/CustomerManage'
import OrderList from '@/components/Manage/OrderList'
import AddShow from '@/components/Admin/AddShow'
import ChangeShow from '@/components/Admin/ChangeShow'

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
      path: '/Add',
      name: 'Add',
      component: Add
    },
    {
      path: '/AddShow',
      name: 'AddShow',
      component: AddShow
    },
    {
      path: '/ChangeShow',
      name: 'ChangeShow',
      component: ChangeShow
    },
    {
      path: '/Manage',
      name: 'Manage',
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
          },
          {
            path: '/CustomerManage',
            name: 'CustomerManage',
            component: CustomerManage,
          },
      ]
    }
  ]
})
