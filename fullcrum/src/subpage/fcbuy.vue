<template lang="html">
  <div class="fcbuy">
    <HeaderBuyer>
      <p class="slot-mine">FC购买</p>
    </HeaderBuyer>
    <div class="buyer_message">
      <p class="base">
        <span style="font-size:3rem;">您正向天王盖地虎购买50000.00FC</span>
        <br>
        <span style="color:#999;font-size:1.6rem;;margin-top:20px;margin-bottom:14px;">单价：0.99CNY</span>
        <br>
        <span style="color:#999;font-size:1.6rem;">总价：<span style="color:#639c79;">45,900.00FC</span></span>
        </p>
      <p class="pay">
        <span style="color:black;font-size:1.6rem;margin-bottom:24px;">收款账户</span>
        <br>
        <span>
          <i class="iconfont icon-iconfontjikediancanicon20 iconBank iconWay"></i>
          <span class="way">银行卡</span>
          <span style="margin-left:58px;">海绵宝宝&nbsp;&nbsp;&nbsp;&nbsp;602359428453196785&nbsp;&nbsp;&nbsp;&nbsp;中国工商银行</span>
        </span>
        <br>
        <span style="margin-top:48px;margin-bottom:48px;">
          <i class="iconfont icon-zhifubaozhifu iconWay"></i>
          <span class="way">支付宝</span>
          <span style="margin-left:58px;">派大星&nbsp;&nbsp;&nbsp;&nbsp;13240891337&nbsp;&nbsp;&nbsp;&nbsp;二维码
             <i class="alipay_qr"></i>
           </span>
        </span>
        <br>
        <span>
          <i class="iconfont icon-logo-wechat iconWay"></i>
          <span class="way">微信支付</span>
          <span style="margin-left:46px;">章鱼哥&nbsp;&nbsp;&nbsp;&nbsp;C3023559023&nbsp;&nbsp;&nbsp;&nbsp;二维码
            <i class="wechat_qr"></i>
          </span>
        </span>
        </p>
      <p class="tions">待支付，请于
        <span style="color:#e60012;">19分58秒</span>
        内向天王盖地虎支付
        <span style="color:#53936c;">45,900.00CNY。</span>
        </p>
      <p class="submit">
        <button type="button" name="button">标为已付款</button>
        <span class="title">
          <img src="../img/icon_fcbuy.png" alt="">
          付款成功后，请点击按钮告知对方
        </span>
        </p>
      <p class="ment">
        <span>1、您的汇款将直接进入卖方账户，交易过程中卖方出售的数字资产将由平台托管保护。</span>
        <br>
        <span style="margin-top:10px;margin-bottom:10px;">2、请在规定时间内完成付款，并<span style="color:#e60012;">务必点击”标记为已付款“</span>，系统将提醒卖方确认收款，卖方确认收款后系统会将数字资产划转到您的账户。</span>
        <br>
        <span>3、如果买方当日取消订单达3次，将会被限制当日的买入功能。</span>
        </p>
      <p class="cancel">
        <button type="button" name="button">取消订单</button>
      </p>
    </div>
  </div>
</template>

<script>
import HeaderBuyer from '@/components/header-user'
export default {
  components:{
    HeaderBuyer
  }
}
</script>

<style lang="scss" scoped>
.buyer_message{
  width:1110px;
  height:1000px;
  position: absolute;
  left:50%;
  margin-left: -550px;
  padding-top:60px;
  .base{
    width: 100%;
    padding-bottom:26px;
    border-bottom:2px solid #eee;
  }
  .pay{
    width: 100%;
    margin-top:20px;
    padding-bottom:24px;
    border-bottom: 1px solid  #eee;
     .iconWay{
      display: inline-block;
      position: absolute;
      width: 20px;
      height:20px;
      border-radius: 50%;
      font-size: 2rem;
    }
    span{
      position: relative;
      color:#999;
      line-height: 20px;
      .iconBank{
        color:#ea986c;
      }
      .icon-zhifubaozhifu{
        color:#1296db;
      }
      .icon-logo-wechat{
        color:#50b674;
      }
    }
    .way{
      padding-left: 28px;
    }
    .alipay_qr{
      display: inline-block;
      position: absolute;
      right:-18%;
      top:-6%;
      width: 20px;
      height:20px;
      background: #999;
      cursor: pointer;
    }
    .wechat_qr{
      display: inline-block;
      position: absolute;
      right:-18%;
      top:-6%;
      width: 20px;
      height:20px;
      background: #999;
      cursor: pointer;
    }
  }
  .tions{
    font-size: 2.4rem;
    padding-top:36px;
    padding-bottom:40px;
  }
  .submit{
    width: 100%;
    height:80px;
    button{
      width:200px;
      height:80px;
      border-radius: 5px;
      font-size: 2.2rem;
      background: #4262c3;
      color:white;
    }
    .title{
      width:362px;
      height:80px;
      color:#e60012;
      background:#fff9b7;
      border-radius: 5px;
      line-height: 80px;
      text-align: center;
      margin-left: 16px;
      position: relative;
      font-size: 2rem;
      img{
        position: absolute;
        left:-2.5%;
        top:45%;
      }
    }
  }
  .ment{
    padding-top:36px;
    padding-bottom:30px;
    span{
      font-size: 1.6rem;
      color:#999;
    }
  }
  .cancel{
    width: 100%;
    button{
      width: 200px;
      height:80px;
      background: white;
      border:2px solid #999;
      color:#999;
      border-radius: 5px;
      font-size: 2.2rem;
    }
  }
}
</style>
