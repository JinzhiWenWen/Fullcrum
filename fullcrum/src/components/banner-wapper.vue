<template lang="html">
  <div class="banner-wapper">
    <img src='../img/Banner.png' alt='你好啊' class='img-responsive'>
    <div class="title">
      <p class='alt_1'>
        <span>区块链时代全球首个</span>
        <br>
        <span>金融票据数字资产交易平台</span>
      </p>
      <p class="alt_2">
        运用区块链技术打造一个自发的、自治的、不断自我迭代的、去中心化的金融票据数字资产交易平台
      </p>
      <el-button type="primary" plain class="login_btn"  @click="login" v-show="ifShow">登陆</el-button>
    </div>
    <p class="icon_share">
      <i class="iconfont icon-wechat" @click="abc()"></i>
      <i class="iconfont icon-weibo1" @click="bbc()"></i>
      <i class="iconfont icon-facebook"></i>
      <i class="iconfont icon-twitter1"></i>
      </p>
    <p class="icon_deco">
        <i class="iconfont icon-shubiao"></i>
      </p>
    <div class="login_fill" ref="login_fill">
      <div class="table">
        <ul class="chose_table">
          <router-link
          to='/page/pass' tag='li'
          @click.native="pass"
          class="password_login" ref="pass_style"
          :class="{active:color==1}"
          >账号密码登录</router-link>
          <router-link
          to='/page/auth' @click.native="auth"
          name='auth'
          ref="auth" tag='li' class="auth_login"
          :class="{active:color==2}"
          >手机验证码登录</router-link>
        </ul>
      </div>
      <div class="view_input">
        <router-view></router-view>
      </div>
    </div>
    <div class="layer" ref="layer_box" @click="close()">

    </div>
  </div>
</template>

<script>
import {getCookie} from '@/assets/util'
export default {
  data(){
    return{
      color:1,
      aaa:'nima',
      ifShow:true
    }
  },
  methods:{
    bbc(){

        let ress=getCookie('ress')
            let httpProvider = "http://testnet.nebula-ai.com:8545";
            let web3 = new Web3(httpProvider);

        let addr='0x04443827409B356555feF22F76Efb91996f47d3E'
            // let addr = getCookie('ress')//已知用户的地址 this.address
            // let pk = this.key 0x1553082796B8e62473E6E8EfE916690ed5736e20
            let pk = '0x637df8c55817926e7d38ad34dba0b0476a8a914bb61bad0b6760108582d225d6';//用户输入的私钥  this.key
            let message = "Some data"; //自定义签名信息，随便是什么
            let signedMessage = web3.eth.accounts.sign('Some data', pk);//签名过后的信息

            let verifiedSender = web3.eth.accounts.recover(signedMessage);// verifiedSender 应该是addr

            console.log("签名验证：",verifiedSender.toLowerCase()===addr.toLowerCase());


        const groupon_ctr_addr = "0x0725faccf0d4d1403d36e83a0a069e74546ef82f";//合约地址
            this.$http.get('../../static/json/groupon_erc20_abi.json').then((response)=>{
              return response.body;
            }).then((groupon_ctr_abi)=>{
              return new web3.eth.Contract(groupon_ctr_abi, groupon_ctr_addr);
            }).then((groupon_ctr_instance)=>{
              return new Promise((resolve,reject)=>{
                groupon_ctr_instance.methods.fcRaised().call().then(result=>{
                    console.log("FcRaised : "+result);
                    resolve();
                }).catch(reject);
            })
            })
    },
    abc(){
    //alert('111')

        let ress=getCookie('ress')
            let httpProvider = "http://testnet.nebula-ai.com:8545";
            let web3 = new Web3(httpProvider);

        let addr='0x04443827409B356555feF22F76Efb91996f47d3E'
            // let addr = getCookie('ress')//已知用户的地址 this.address
            // let pk = this.key 0x1553082796B8e62473E6E8EfE916690ed5736e20
            let pk = '0x637df8c55817926e7d38ad34dba0b0476a8a914bb61bad0b6760108582d225d6';//用户输入的私钥  this.key
            let message = "Some data"; //自定义签名信息，随便是什么
            let signedMessage = web3.eth.accounts.sign('Some data', pk);//签名过后的信息

            let verifiedSender = web3.eth.accounts.recover(signedMessage);// verifiedSender 应该是addr

            console.log("签名验证：",verifiedSender.toLowerCase()===addr.toLowerCase());


        const fccoin_ctr_addr = "0x2884f15db1de2e00af1442030bf828ecde470d0c";//合约地址
            let fccoin_ctr_instance = null;
            this.$http.get('../../static/json/fc_coin_abi.json').then((response)=>{
              return response.body;
            }).then((fccoin_ctr_abi)=>{
              return new web3.eth.Contract(fccoin_ctr_abi, fccoin_ctr_addr);
            }).then((fccoin_ctr_instance)=>{
              return new Promise((resolve,reject)=>{
                console.log("fccoin_ctr_instance log")
                console.log(fccoin_ctr_instance);
                console.log(fccoin_ctr_instance.methods.balanceOf('0x2f098fdc0f7817893757413fc91bc13f1e30e252').call())
                fccoin_ctr_instance.methods.balanceOf('0x2f098fdc0f7817893757413fc91bc13f1e30e252').call().then((number)=>{
                  console.log("balance of wallet xxxxxxx");
                  console.log(number)
                })

              })
            })
    },
    login(){
      this.$refs.layer_box.style.display="block";
      setTimeout(()=>{
        this.$refs.login_fill.style.top="30%";
      },200)
    },
    close(){
      this.$refs.layer_box.style.display="none";
      this.$refs.login_fill.style.top="-400px";
    },
    pass(){
      this.color=1;
    },
    auth(){
      this.color=2;
    },
    queryPage(){
      var Id=getCookie('mes');
      if(Id){
        this.ifShow=false;
      }else{
        this.ifShow=true;
      }
    }
  },
  created(){
    this.queryPage()
  }
}
</script>

<style lang="scss" scoped>
.active{
  background: white!important;
  color:#4f8ef3!important;
}
  .banner-wapper{
    width:100%;
    height:auto;
    text-align: center;
    position: fixed;
    top:0;
    left:0;
    box-sizing: border-box;
    margin-bottom:-3px;
    overflow: hidden;
    .img-responsive{
      display: inline-block;
      width:100%;
      height:100%;
    }
    .title{
      text-align: center;
      position: absolute;
      top:25%;
      left:50%;
      margin-left: -348px;
      .alt_1{
        font-size: 4.8rem;
        font-weight: bold;
        color:white;
      }
      .alt_2{
        margin-top:70px;
        font-size: 1.6rem;
        color:white;
      }
      .login_btn{
        width: 140px;
        height:54px;
        font-size: 2.8rem;
        margin-top:70px;
      }

    }
    .icon_share{
      width: 200px;
      height:20px;
      position: absolute;
      left:16.4%;
      bottom: 18.8%;
      i{
        font-size: 2.8rem;
        color:white;
        cursor: pointer;
        margin-left:12px;
      }
    }
    .icon_deco{
      position:absolute;
      bottom:17.4%;
      margin:0;
      left:50%;
      margin-left:-25px;
      i{
        color:white;
        font-size: 5rem;
      }
    }
    .layer{
      width: 100%;
      height:1200px;
      background: black;
      opacity: .5;
      z-index: 5;
      position: fixed;
      top: 0;
      left:0;
      display:none;
    }
    .login_fill{
        width: 500px;
        height:400px;
        position: fixed;
        top: -100%;
        left:50%;
        margin-left:-250px;
        background: white;
        border-radius: 5px;
        z-index: 10;
        transition: .3s;
        box-sizing: border-box;
        .view_input{
          width: 100%;
          box-sizing: border-box;
          padding-left: 17%;
        }
        .table{
          width: 100%;
          height:60px;
          background: white;
          box-sizing: border-box;
          border-top-left-radius: 5px;
          border-top-right-radius: 5px;
          .chose_table{
            width: 100%;
            height:60px;
            margin:0;
            padding:0;
            display: flex;
            display: -webkit-flex;
            list-style:none;
            li{
              height:60px;
              width: 50%;
              font-size: 2rem;
              text-align: center;
              line-height: 60px;
              cursor:pointer;
            }
            .password_login{
              background:#4f8ef3;
              color:white;
              border-top-left-radius: 5px;
            }
            .auth_login{
              background:#4f8ef3;
              color:white;
              border-top-right-radius: 5px;
            }
          }
        }
    }
  }
  @media screen and (max-width:1366px){
    .login_fill{
      width: 350px!important;
      height:280px!important;
      margin-left:-175px!important;
      .table{
        .chose_table{
          li{
            font-size: 1.6rem!important;
          }
        }
      }
    }
    .view_input{
      padding-left:18%!important;
    }
    .title{
      margin-left:-260px!important;
    }
    .alt_1{
      font-size: 4rem!important;
    }
    .alt_2{
      font-size: 1rem!important;
    }
    .login_btn{
      max-width: 100px;
      max-height:40px;
      font-size: 1.8rem!important;
    }
  }
</style>
