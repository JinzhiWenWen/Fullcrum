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
        <span style="margin-left:244px;">订单状态</span>
        <span style="margin-left:80px;">操作</span>
      </p>
      <ul class="merchat_lists">
        <li>
          <span></span>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import HeaderMerchat from '@/components/header-merchat'
export default {
  data(){
    return{
      note_lists:[
        {
          orderNum:'2018050300001',
          time:'2018/05/03',
          amount:'50,000FC',
          situation:'已售30000FC',
          status:'notPaying'
        },
        {
          orderNum:'2018050300001',
          time:'2018/05/03',
          amount:'50,000FC',
          situation:'已取消',
          status:'cance'
        },
        {
          orderNum:'2018050300001',
          time:'2018/05/03',
          amount:'50,000FC',
          situation:'已售30000FC',
          status:'notPaying'
        },
        {
          orderNum:'2018050300001',
          time:'2018/05/03',
          amount:'50,000FC',
          situation:'已售30000FC',
          status:'notPaying'
        },
        {
          orderNum:'2018050300001',
          time:'2018/05/03',
          amount:'50,000FC',
          situation:'已售30000FC',
          status:'notPaying'
        },
        {
          orderNum:'2018050300001',
          time:'2018/05/03',
          amount:'50,000FC',
          situation:'已售30000FC',
          status:'notPaying'
        }
      ]
    }
  },
  components:{
    HeaderMerchat
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
  }
}
</style>
