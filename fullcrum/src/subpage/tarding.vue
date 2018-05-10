<template lang="html">
  <div class="tarding">
    <HeaderTard>
      <p class="slot-mine">票据购买</p>
    </HeaderTard>
    <div class="content">
      <p class="title">您正在向{{userName}}购买票据</p>
      <p class="amount">购买数额：{{amountNum}}  CNY</p>
      <p class="price">总价：<span style="color:#53936c;">{{totalNum}}FC</span></p>
      <p class="stay">待支付，请于<span style="color:red;">19分58秒</span>确认预支付<span style="color:#53936c;">{{totalNum}}FC</span>。</p>
      <p class="shose">
        <button type="button" name="button" class="prepaid">预支付</button>
        <button type="button" name="button" class="cancel">取消订单</button>
      </p>
      <p class="sign">1、您的数字货币将暂时被冻结由平台保管，交易达成后系统将自动将其转到卖方的数字钱包内，如交易失败将自动为您解冻。</p>
      <p class="sign_two">2、如果买方当日取消订单达3次，将会限制当日的买入功能。</p>
    </div>
  </div>
</template>

<script>
import HeaderTard from '@/components/header-user'
export default {
  data(){
    return{
      userName:'海绵宝宝',
      amountNum:'30000',
      totalNum:'30,000.00'
    }
  },
  components:{
    HeaderTard
  }
}
</script>

<style lang="scss" scoped>
.slot-mine{
  margin-top: 70px;
  font-size: 4.6rem;
}
.tarding{
  width: 100%;
  height:100%;
  position: relative;
  .content{
    width: 1100px;
    height:1000px;
    position: absolute;
    left:50%;
    margin-left: -550px;
    padding:58px;
    .title{
      font-size: 3rem;
    }
    .amount{
      font-size: 1.6rem;
      color:#666;
      margin-top:20px;
      margin-bottom: 16px;
    }
    .price{
      font-size: 1.6rem;
      color:#666;
      padding-bottom:26px;
      border-bottom: 2px solid #eee;
    }
    .stay{
      margin-top:38px;
      font-size: 2.4rem;
    }
    .shose{
      margin-top: 40px;
      button{
        width:200px;
        height:80px;
        border-radius: 3px;
      }
      .prepaid{
        background: #4262c3;
        color:white;
        font-size: 2.2rem;
        margin-right:40px;
      }
      .cancel{
        background: white;
        color:#4262c3;
        font-size: 2.2rem;
        border: 2px solid #4262c3;
      }
    }
    .sign{
      margin-top:40px;
      font-size: 1.6rem;
      color:#bbb;
    }
    .sign_two{
      margin-top:10px;
      font-size: 1.6rem;
      color:#bbb;
    }
  }
}
</style>
