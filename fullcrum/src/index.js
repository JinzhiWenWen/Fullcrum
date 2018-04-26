import Vue from 'vue'
import Router from 'vue-router'
import Page from '@/subpage/page'
import Vendor from '@/subpage/vendor'
import Buyer from '@/subpage/buyer'
import Login from '@/subpage/login'
Vue.use(Router)
export default new Router({
    routes:[
      {
        path:'/',
        name:'Page',
        component:Page
      },
      {
        path:'/vendor',
        name:'Vendor',
        component:Vendor
      },
      {
        path:'/buyer',
        name:'Buyer',
        component:Buyer
      },
      {
        path:'/login',
        name:'Login',
        component:Login
      }
    ]
})
