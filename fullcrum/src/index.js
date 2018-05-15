import Vue from 'vue'
import Router from 'vue-router'
import Page from '@/subpage/page'
import Vendor from '@/subpage/vendor'
import Buyer from '@/subpage/buyer'
import LogiUp from '@/subpage/logiup'
import LogiUoSuccess from '@/subpage/logiup_successful'
import Personal from '@/subpage/personal_center'
import Seller from '@/subpage/seller_center'
import About from '@/subpage/about_ful'
import Market from '@/subpage/market'
import Tarding from '@/subpage/tarding'
import Fcmarket from '@/subpage/fcmarket'
import PersonalAss from '@/subpage/personal_assets'
import SellerAss from '@/subpage/seller_assets'
import WithDrawal from '@/subpage/withdrawal'
import Release from '@/subpage/release'
import Pass from '@/components/password-login'
import Auth from '@/components/auth-login'
import Boor from '@/components/boor-man'
import Inve from '@/components/inve-man'
import Purchase from '@/components/purchase'
import Sell from '@/components/sell'
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
      },
      {
        path:'/logiupsuss',
        name:'LogiUoSuccess',
        component:LogiUoSuccess
      },
      {
        path:'/person',
        name:'Personal',
        component:Personal
      },
      {
        path:'/about',
        name:'About',
        component:About
      },
      {
        path:'/seller',
        name:'Seller',
        component:Seller
      },
      {
        path:'/mark',
        name:'Mark',
        component:Market
      },
      {
        path:'/tard',
        name:'Tard',
        component:Tarding
      },
      {
        path:'/personass',
        name:'Personass',
        component:PersonalAss
      },
      {
        path:'/fcshop',
        name:'Fcshop',
        component:Fcmarket,
        children:[
          {
            path:'/',
            name:'Purchase',
            component:Purchase
          },
          {
            path:'/sell',
            name:'Sell',
            component:Sell
          }
        ]
      },
      {
        path:'/sellerass',
        name:'SellerAss',
        component:SellerAss
      },
      {
        path:'/with',
        name:'WithDrawal',
        component:WithDrawal
      },
      {
        path:'/rele',
        name:'Release',
        component:Release
      }
    ]
})
