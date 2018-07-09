import Vue from 'vue'
import Router from 'vue-router'
import Page from '@/subpage/page'
import Vendor from '@/subpage/vendor'
import Buyer from '@/subpage/buyer'
import LogiUp from '@/subpage/logiup'
import LogiUoSuccess from '@/subpage/logiup_successful'
import Personal from '@/subpage/personal_center'
import Seller from '@/subpage/seller_center'
import SellerOr from '@/subpage/seller_order'
import About from '@/subpage/about_ful'
import Market from '@/subpage/market'
import Fcmarket from '@/subpage/fcmarket'
import PersonalAss from '@/subpage/personal_assets'
import SellerAss from '@/subpage/seller_assets'
import WithDrawal from '@/subpage/withdrawal'
import Release from '@/subpage/release'
import Fcbuy from '@/subpage/fcbuy'
import Fcsell from '@/subpage/fcsell'
import Personalor from '@/subpage/personal_order'
import Sellerma from '@/subpage/seller_market'
import SellerSe from '@/subpage/seller_sell'
import Merchat from '@/subpage/merchat_center'
import MerchatAss from '@/subpage/merchat_assets'
import MerchatOr from '@/subpage/merchat_order'
import MerchatMa from '@/subpage/merchat_market'
import MerchatMaBuy from '@/components/merchat_market_buy'
import MerchatMaSell from '@/components/merchat_market_sell'
import MerchatAp from '@/subpage/merchat_application'
import MerchatMess from '@/subpage/merchat_message'
import MerchatSub from '@/subpage/merchat_submit'
import Pass from '@/components/password-login'
import Auth from '@/components/auth-login'
import Boor from '@/components/boor-man'
import Inve from '@/components/inve-man'
import Purchase from '@/components/purchase'
import Sell from '@/components/sell'
import Fcorder from '@/components/buyer_fc_order'
import Paperorder from '@/components/buyer_paper_order'
import PersonalSet from '@/subpage/personal_setmes'
import SellerSet from '@/subpage/seller_setmes'
import MarketBuy from '@/subpage/market_buy'
Vue.use(Router)
export default new Router({
    mode:'history',
    routes:[
      {path:'/',redirect: "/page"},
      {
        path:'/page',
        name:'Page',
        component:Page,
        children:[
          {
            path:'/page/pass',
            name:'Password',
            component:Pass
          },
          {
            path:'/page/auth',
            name:'Auth',
            component:Auth
          }
        ],
        redirect: "/page/pass"
      },
      {path:'/vendor',name:'Vendor',component:Vendor},
      {path:'/buyer',name:'Buyer',component:Buyer},
      {
        path:'/logiup',
        name:'LogiUp',
        component:LogiUp,
        children:[
          {
            path:'/logiup/boor',
            name:'Boor',
            component:Boor
          },
          {
            path:'/logiup/inve',
            name:'Inve',
            component:Inve
          }
        ],
        redirect:'/logiup/boor'
      },
      {path:'/logiupsuss',name:'LogiUoSuccess',component:LogiUoSuccess},
      {path:'/person',name:'Personal',component:Personal},
      {path:'/merchat',name:'Merchat',component:Merchat},
      {path:'/merchatass',name:'MerchatAss',component:MerchatAss},
      {path:'/merchator',name:'MerchatOr',component:MerchatOr},
      {path:'/merchatsub',name:'MerchatSub',component:MerchatSub},
      {path:'/personSet',name:'PersonalSet',component:PersonalSet},
      {
        path:'/merchatma',
        name:'MerchatMa',
        component:MerchatMa,
        children:[
          {path:'/merchatma/merchatbuy',name:'MerchatMaBuy',component:MerchatMaBuy},
          {path:'/merchatma/merchatmase',name:'MerchatMaSell',component:MerchatMaSell}
        ],
        redirect:'/merchatma/merchatbuy'
      },
      {path:'/merchatap',name:'Merchatap',component:MerchatAp},
      {path:'/merchatmes',name:'MerchatMess',component:MerchatMess},
      {path:'/about',name:'About',component:About},
      {path:'/seller',name:'Seller',component:Seller},
      {path:'/mark',name:'Mark',component:Market},
      {path:'/marketbuy',name:'MarketBuy',component:MarketBuy},
      {path:'/personass',name:'Personass',component:PersonalAss},
      {
        path:'/fcshop',
        name:'Fcshop',
        component:Fcmarket,
        children:[
          {
            path:'/fcshop/pur',
            name:'Purchase',
            component:Purchase
          },
          {
            path:'/fcshop/sel',
            name:'Sell',
            component:Sell
          }
        ],
        redirect:'/fcshop/pur'
      },
      {path:'/sellerass',name:'SellerAss',component:SellerAss},
      {path:'/with',name:'WithDrawal',component:WithDrawal},
      {path:'/rele',name:'Release',component:Release},
      {path:'/fcbuy',name:'Fcbuy',component:Fcbuy},
      {path:'/fcsell',name:'Fcsell',component:Fcsell},
      {
        path:'/personalor',
        name:'Personalor',
        component:Personalor,
        children:[
          {path:'/personalor/fc',name:'Fcorder',component:Fcorder},
          {path:'/personalor/paperor',name:'Paperorder',component:Paperorder}
        ],
        redirect:'/personalor/fc'
      },
      {path:'/sellerma',name:'Sellerma',component:Sellerma},
      {path:'/selleror',name:'SellerOr',component:SellerOr},
      {path:'/sellerse',name:'SellerSe',component:SellerSe},
      {path:'/sellerSet',name:'sellerSet',component:SellerSet}
    ]
})
