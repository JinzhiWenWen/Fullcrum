<template lang="html">
  <div class="logiup_successful">
    <SginUpHeader/>
    <div class="succ">
      <p class="statu_title">恭喜，您的FULCRUM账号已成功开通！</p>
      <span class="statu_alt">欢迎来到世界票据交易市场！</span>
      <div class="qr_code">
        <img src="../img/qr.png" alt="">
        <p class="wallet_address">{{wallet_address}}</p>
        <p>这是系统为您生成的数字钱包地址，可在个人中心查看。</p>
      </div>
      <button class="personal" type="button" name="button" @click="personal()">进入个人中心</button>
      <button class="succ_market" type="button" name="button" @click="market()">进入票据市场</button>
    </div>
  </div>
</template>

<script>
import SginUpHeader from '@/components/header-sginUp'
import {setCookie} from '@/assets/util'
import {getCookie} from '@/assets/util'
export default {
  data(){
    return{
      wallet_address:'GYgvuyt5763GVJHVUGY26VJH43',
      mes:'',
    }
  },
  components:{
    SginUpHeader
  },
  methods:{
    //判断用户身份进入页面
    personal(){
      var iden=this.mes;
      console.log(iden)
      if(iden==='buyer'){
        window.open(window.location.origin + '/#/person')
      }else{
        window.open(window.location.origin + '/#/seller')
      }
    },
    market(){
      var iden=this.mes;
      console.log(iden)
      if(iden==='buyer'){
        window.open(window.location.origin + '/mark')
      }else{
        window.open(window.location.origin + '/sellerma')
      }
    },
    //接收传参
    getParams(){
      var routerParams=this.$route.params.iden;
      this.mes=routerParams;//赋值参数
    },
    CreateWal(){
      var Id=getCookie('mes');
      var token=getCookie('token');
      this.axios.post(this.oUrl+'/fcexchange/wallets/'+Id).then((res)=>{
      console.log(res)
      var waId=res.data.id;
    })
    }
  },
  created(){
    this.getParams();
    this.CreateWal();
  },
  //检测路由变化
  watch:{
    '$route':'getParams'
  }
}
</script>

<style lang="scss" scoped>
.logiup_successful{
  width: 100%;
  height:100%;
  // position: relative;
  text-align: center;
  .succ{
    width:684px;
    height:920px;
    position: absolute;
    left:50%;
    margin-left:-342px;
    padding-top:140px;
    .statu_title{
      width: 100%;
      font-size: 2.4rem;
      text-align: center;
      font-weight: bold;
    }
    span{
      display:inline-block;
      width: 100%;
      text-align: center;
      font-size: 1.6rem;
      color:#6d6d6d;
      margin-top:28px;
      margin-bottom: 28px;
    }
    .qr_code{
      width: 500px;
      height:362px;
      background:#fcfcfc;
      border-radius:5px;
      box-shadow: 3px 3px 3px #eee;
      margin-left:92px;
      text-align: center;
      padding-top:66px;
      p{
        font-size: 1.4rem;
        color:#9b9b9b;
      }
      .wallet_address{
        color:#4f8ef3;
        font-size: 1.6rem;
        margin-top:32px;
        margin-bottom:32px;
      }
    }
    .personal{
      cursor:pointer;
      width: 246px;
      height:60px;
      border-radius:5px;
      background:#4f8ef3;
      color:white;
      font-size: 2.4rem;
      margin-top:100px;
    }
    .succ_market{
      cursor:pointer;
      width: 246px;
      height:60px;
      border-radius:5px;
      background:#4f8ef3;
      color:white;
      font-size: 2.4rem;
      margin-top:100px;
    }
  }
}
</style>
