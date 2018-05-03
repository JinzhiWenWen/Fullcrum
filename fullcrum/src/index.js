import Vue from 'vue'
import Router from 'vue-router'
import Page from '@/subpage/page'
import Vendor from '@/subpage/vendor'
import Buyer from '@/subpage/buyer'
import Pass from '@/components/password-login'
import Auth from '@/components/auth-login'
Vue.use(Router)
export default new Router({
    routes:[
      {
        path:'/',
        name:'Page',
        component:Page,
        children:[
          {
            path:'/',
            name:'Password',
            component:Pass
          },
          {
            path:'auth',
            name:'Auth',
            component:Auth
          }
        ]
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
      }
    ]
})
