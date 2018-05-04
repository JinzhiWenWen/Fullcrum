import Vue from 'vue'
import Router from 'vue-router'
import Page from '@/subpage/page'
import Vendor from '@/subpage/vendor'
import Buyer from '@/subpage/buyer'
import LogiUp from '@/subpage/logiup'
import Pass from '@/components/password-login'
import Auth from '@/components/auth-login'
import Boor from '@/components/boor-man'
import Inve from '@/components/inve-man'
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
      },
      {
        path:'/logiup',
        name:'LogiUp',
        component:LogiUp,
        children:[
          {
            path:'/logiup',
            name:'Boor',
            component:Boor
          },
          {
            path:'/inve',
            name:'Inve',
            component:Inve
          }
        ]
      }
    ]
})
