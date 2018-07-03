<template lang="html">
  <div class="market_buy">
    <HeaderPerson>
      <p class="slot-mine">票价购买</p>
    </HeaderPerson>
    <div class="marketBuy_cen">
      <p class="marketBuy_title">您正在向海绵海绵我是大星购买票据</p>
      <p class="marketBuy_much">购买份额：<span>30,000</span>CNY</p>
      <p class="marketBuy_amount">总价：<span style="color:#53936C;">30,000.00FC</span></p>
      <p class="marketBuy_status">待支付，请于<span style="color:#e60012;">19分58秒</span>内确认预支付<span style="color:#53936c;">30,000.00FC</span></p>
      <p class="marketBuy_oper">
        <button type="button" name="button" style="color:white;background:#5277cc;" @click="Markplace()">预支付</button>
        <button type="button" name="button" style="color:#5277cc;background:white;border:2px solid #5277cc;margin-left:5%;" @click="Buyback()">取消订单</button>
      </p>
      <p class="marketBuy_alt">1、您的数字货币将暂时被冻结由平台保管，交易达成后系统将自动将其划转到卖方的数字钱包内，如交易失效将为您解冻。</p>
      <p class="marketBuy_alt">2、如果买方当日取消订单达3次，将会被限制当日的买入功能。</p>
    </div>

  </div>
</template>

<script>
import HeaderPerson from '@/components/header-user'
export default {
  components:{
    HeaderPerson
  },
  methods:{
    Buyback(){
      window.history.back()
    },
    Markplace(){

    }
  }
}
</script>

<style lang="scss" scoped>
.market_buy{
  width: 100%;
  height:100%;
  .marketBuy_cen{
    width: 60%;
    height:80%;
    margin-left:20%;
    padding-top: 3%;
    font-size: 1.6rem;
    .marketBuy_title{
      font-size: 3rem;
      margin-bottom:20px;
    }
    .marketBuy_much{
      margin-bottom:8px;
    }
    .marketBuy_amount{
      width: 100%;
      border-bottom:1px solid #eee;
      padding-bottom: 26px;
    }
    .marketBuy_status{
      font-size: 2.4rem;
      margin-top: 3%;
      margin-bottom: 3%;
    }
    .marketBuy_oper{
      width: 100%;
      height:11%;
      margin-bottom: 3%;
      button{
        width:15%;
        height:100%;
        font-size:2rem;
        border-radius:5px;
      }
    }
    .marketBuy_alt{
      color:#999;
      font-size: 1.4rem;
    }
  }
}
</style>
