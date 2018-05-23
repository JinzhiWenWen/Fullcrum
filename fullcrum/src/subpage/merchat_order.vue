<template lang="html">
  <div class="merchat_order">
    <HeaderMerchat>
      <p class="slot-mine">我的订单</p>
    </HeaderMerchat>
    <div class="merchat_order_con">
      <p class="merchat_order_title">
        <span>订单号</span>
        <span style="margin-left:118px;">日期</span>
        <span style="margin-left:116px;">金额</span>
        <span style="margin-left:116px;">类型</span>
        <span style="margin-left:108px;">情况</span>
        <span style="margin-left:220px;">订单状态</span>
        <span style="margin-left:60px;">操作</span>
      </p>
      <ul class="merchat_lists">
        <li v-for="(item,index) in note_lists" :key="index">
          <span class="num">{{item.orderNum}}</span>
          <span class="time">{{item.time}}</span>
          <span class="amount">{{item.amount}}</span>
          <span v-show="item.typeSta=='sell'" class="type">出售</span>
          <span v-show="item.typeSta=='buy'" class="type">购买</span>
          <span class="situ">{{item.situation}}</span>
          <span
          class="status_br" style="color:#72a485;text-align:center;"
          v-show="item.status=='notPaying'"
          >等待付款<br>（18：12）</span>
          <span
          class="status_br" style="color:#72a485;text-align:center;"
          v-show="item.status=='notColle'"
          >等待收款<br>（18：12）</span>
          <span
          class="status" style="color:#999;"
          v-show="item.status=='hasDeal'"
          >交易成功</span>
          <span
          class="status" style="color:#999;"
          v-show="item.status=='didDeal'"
          >交易失败</span>
          <span
          class="status" style="color:red;"
          v-show="item.status=='cancel'"
          >交易取消</span>
          <button
          type="button" name="button"
          v-show="item.status=='notPaying'"
          >支付</button>
          <button
          type="button" name="button"
          v-show="item.status=='notColle'"
          >收款</button>
          <button
          type="button" name="button"
          v-show="item.status=='cancel'"
          >查看</button>
          <button
          type="button" name="button"
          v-show="item.status=='cancel'"
          >查看</button>
          <button
          type="button" name="button"
          v-show="item.status=='hasDeal'"
          >查看</button>
          <button
          type="button" name="button"
          v-show="item.status=='didDeal'"
          >查看</button>
        </li>
      </ul>
      <Pager/>
    </div>
  </div>
</template>

<script>
import HeaderMerchat from '@/components/header-merchat'
import Pager from '@/components/pager'
export default {
  data(){
    return{
      note_lists:[
        {
          orderNum:'2018050300001',
          time:'2018/05/03',
          amount:'50,000FC',
          typeSta:'sell',
          situation:'已售30000FC',
          status:'notPaying'
        },
        {
          orderNum:'2018050300001',
          time:'2018/05/03',
          amount:'50,000FC',
          typeSta:'sell',
          situation:'已取消',
          status:'cancel'
        },
        {
          orderNum:'2018050300001',
          time:'2018/05/03',
          amount:'50,000FC',
          typeSta:'buy',
          situation:'已购买10000FC',
          status:'notColle'
        },
        {
          orderNum:'2018050300001',
          time:'2018/05/03',
          amount:'50,000FC',
          typeSta:'sell',
          situation:'已成交',
          status:'hasDeal'
        },
        {
          orderNum:'2018050300001',
          time:'2018/05/03',
          amount:'50,000FC',
          typeSta:'buy',
          situation:'已取消',
          status:'cancel'
        },
        {
          orderNum:'2018050300001',
          time:'2018/05/03',
          amount:'50,000FC',
          typeSta:'buy',
          situation:'已售30000FC',
          status:'didDeal'
        }
      ]
    }
  },
  components:{
    HeaderMerchat,
    Pager
  }
}
</script>

<style lang="scss" scoped>
.merchat_order_con{
  width:1100px;
  height:1000px;
  position: absolute;
  left:50%;
  margin-left: -550px;
  padding-top:62px;
  .merchat_order_title{
    width:100%;
    font-size: 1.6rem;
    color:#999;
    padding:0 30px 14px 30px;
    border-bottom:2px solid #eee;
    box-sizing: border-box;
  }
  .merchat_lists{
    width: 100%;
    height:auto;
    li{
      padding-top:30px;
      padding-bottom: 30px;
      border-bottom:1px solid #eee;
      position: relative;
      .time{
        position:absolute;
        top:30px;
        left:16.5%;
      }
      .amount{
        position: absolute;
        top:30px;
        left:31.5%;
      }
      .type{
        position: absolute;
        top:30px;
        left:46.3%;
      }
      .situ{
        position: absolute;
        top:30px;
        left:59%;
      }
      .status{
        position: absolute;
        top:30px;
        left:83.2%;
      }
      .status_br{
        position:absolute;
        top:24px;
        left:82.5%;
      }
      button{
        width:82px;
        height:32px;
        position: absolute;
        right:0;
        top:22px;
        background: #5277cc;
        color:white;
        border-radius: 5px;
      }
    }
  }
}
</style>
