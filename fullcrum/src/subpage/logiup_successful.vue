<template lang="html">
  <div class="logiup_successful">
    <SginUpHeader/>
    <div class="succ">
      <p class="statu_title">恭喜，您的FULCRUM账号已成功开通！</p>
      <span class="statu_alt">欢迎来到世界票据交易市场！</span>
      <div class="qr_code">
        <!-- <img id="imgSrc" src="../img/qr.png" alt=""> -->
        <div id="qrcode" ref="qrcode"></div>
        <p class="wallet_address">{{ress}}</p>
        <p>这是系统为您生成的数字钱包地址，可在个人中心查看。</p>
      </div>
      <button class="personal" type="button" name="button" @click="signUp()">立即登录</button>
    </div>
    <div class="showKey" ref="showKey">
      <p>这是系统为您自动生成平台数字钱包的秘钥，请妥善保存！</p>
      <span>（此私钥只提供一次，请即刻储存！）</span>
      <p style="color:#5277cc;padding-left:5%;font-size:1.6rem;">{{privateKey}}</p>
      <button class="turnSucc" @click="closeMaskSucc()">确认</button>
    </div>
    <div class="mask_succ" v-show="maskSucc"></div>
  </div>
</template>

<script>
import SginUpHeader from '@/components/header-sginUp'
import {setCookie} from '@/assets/util'
import {getCookie} from '@/assets/util'

export default {
  data(){
    return{
      mes:null,
      ress:null,
      privateKey:null,
      maskSucc:false
    }
  },
  components:{
    SginUpHeader
  },
  methods:{
    signUp(){
      this.$router.push('/login')
    },
    //接收传参
    getParams(){
      this.mes=this.$route.params.iden;//用户身份
      this.privateKey=this.$route.params.privateKey;//买家私钥
      this.ress=getCookie('ress')
    },
    showKey(){
      var _this=this;
      if(this.mes==='buyer'){
        setTimeout(()=>{
          _this.maskSucc=true
          _this.$refs.showKey.style.top='30%';
          _this.$refs.showKey.style.opacity='1';
        },500)
      }
    },
    closeMaskSucc(){
      this.maskSucc=false;
      this.$refs.showKey.style.top='15%';
      this.$refs.showKey.style.opacity='0';
    },
    _getQrcode(){


          var qrcode = new QRCode(document.getElementById("qrcode"), {width : 150,height : 150});
          let ress_addr =this.ress;
          //let ress_addr = '0x76092c67fec2f8df8b0e7b0557bdbd6de38fdee5';
          qrcode.makeCode(ress_addr)
          console.log("here is in qrcode ")
          /*console.log(qrcode._oDrawing._elImage)*/
    }
  },
  created(){
    this.getParams();
  },
  mounted(){
    this._getQrcode()
    this.showKey()
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
    #qrcode{
      height: 150px;
        width: 150px;
        margin: auto;
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
  .showKey{
    width: 35%;
    height:18%;
    border-radius: 5px;
    position: fixed;
    top:15%;
    left:50%;
    background: white;
    margin-left:-17.5%;
    z-index: 501;
    opacity: 0;
    transition: all 1s;
    span{
      width: 100%;
      padding-left: 2%;
      text-align: left;
      color:#999;
    }
    p{
      text-align: left;
      font-size: 1.8rem;
      padding:2%;

    }
    .turnSucc{
      width: 12%;
      height:22%;
      color:white;
      background: #5277cc;
      border-radius:5px;
      margin-left: 70%;
    }
  }
  .mask_succ{
    width: 100%;
    height:100%;
    background: rgba(0,0,0,.5);
    position: fixed;
    top:0;
    left:0;
    z-index: 500;
  }
}
</style>
