<template lang="html">
  <div class="withdrawal">
    <HeaderSeller>
      <p class="slot-mine">提现成功</p>
    </HeaderSeller>
    <p class="title">
      累计销售：2500000FC   在线票据：700000（元） 可提现金额：300000（元）
        累计提现：520000（元）
    </p>
    <div class="tions">
      <p class="alt">您的票据已成功提现，金额将转到您的公司账户中，请注意查收，如有问题请联系客服，期待再次为您服务。</p>
      <p class="num">订单号：1234320080501</p>
      <p class="time">发布日期：20180501    票面金额：100000.00  FC    利率（年化）：4.5%    提现金额；95500元</p>
      <p class="goback"><button type="button" name="button" @click="back()">返回</button></p>
    </div>
  </div>
</template>

<script>
import HeaderSeller from '@/components/header-seller'
export default {
  methods:{
    back(){
      window.history.back()
    }
  },
  components:{
    HeaderSeller
  }
}
</script>

<style lang="scss" scoped>
.slot-mine{
  margin-top: 70px;
  font-size: 4.6rem;
}
.title{
  font-size:1.4rem;
  color:#999;
  margin-left: 14.5%;
  margin-top:28px;
}
.tions{
  width: 54%;
  height:800px;
  // background: red;
  margin-left:24.2%;
  margin-top: 8%;
  .alt{
    font-size: 2rem;
    margin-bottom: 40px;
  }
  .num{
    font-size: 1.8rem;
    margin-bottom: 28px;
  }
  .time{
    font-size: 1.4rem;
    color:#a9a9a9;
  }
  .goback{
    width: 96%;
    text-align: center;
    margin-top: 174px;
    button{
      width: 112px;
      height:40px;
      border-radius: 3px;
      background: #5277cc;
      color:white;
      font-size: 1.8rem;
    }
  }
}
</style>
