<template lang="html">
  <div class="personal_assets">
    <HeaderPerson>
      <p class="slot-mine">资产</p>
    </HeaderPerson>
    <div class="person_content">
      <div class="fc" ref="fc">
        <p class="spec_fc">FC</p>
        <div class="blance">
          <span class="num">账户余额：{{balance/1000000000000000000}}.00FC</span>
          <p class="oper_personAss">
            <router-link to="/fcshop" tag='button' class="buy">购买</router-link>
            <button type="button" name="button" class="sell">出售</button>
            <button type="button" name="button" class="sell" @click="ex">兑换</button>
          </p>
          <div style="margin-top: 40px;height: 152px;" class="al_ex">
            <el-collapse-transition>
              <div v-show="isShow">
                <div class="transition-box">
                  <img src="../img/part.png" alt="" class="ex_icon">
                  <p class="title">FC兑换USDT<span>实时汇率  1USDT=6.3452FC；1FC=0.1576USDT</span></p>
                  <p class="ex_inp">
                    <span>Icon</span>
                    <input type="text" class="usdt_inp" name="" value="" placeholder="USDT">
                    <br>
                    <input type="text" name="" class="fc_inp" value="" placeholder="FC">
                    <span class="ex_oper">
                      <button type="button" name="button" style="background:#5277cc;color:white;">确认</button>
                      <button type="button" name="button"
                      style="margin-left:6px;border:2px solid #5277cc;color:#5277cc;background:white;"
                      @click="close"
                      >取消</button>
                    </span>
                  </p>
                </div>
              </div>
            </el-collapse-transition>
          </div>
        </div>
      </div>
      <div class="usdt" :class="{active:num==1}">
        <p class="spec_fc">USDT</p>
        <div class="blance">
          <span class="num">账户余额：233333.00USDT</span>
          <p class="oper_personAss">
            <button type="button" name="button" class="buy" @click="topUp">充值</button>
            <button type="button" name="button" class="sell">兑换</button>
            <button type="button" name="button" class="sell">提币</button>
          </p>
        </div>
      </div>
    </div>
    <div class="mask" @click="closeQr" v-show="isShowMask">

    </div>
    <div class="topUp_qr" ref="TopUp">
      <span class="close" @click="closeQr">
        <i class="el-icon-close"></i>
      </span>
    </div>
  </div>
</template>

<script>
import HeaderPerson from '@/components/header-user'
import {getCookie} from '@/assets/util'
import {decimalAppend} from '@/assets/util'
export default {
  data(){
    return{
      isShow:false,
      num:0,
      isShowMask:false,
      balance:null
    }
  },
  methods:{
    ex(){
      if(this.isShow=!this.isShow){
        this.num=1;
      }else{
          this.num=0;
      }
    },
    close(){
      this.isShow=false;
      this.num=0;
    },
    topUp(){
      this.isShowMask=true;
      this.$refs.TopUp.style.top="22%";
    },
    closeQr(){
      this.isShowMask=false;
      this.$refs.TopUp.style.top="-560px"
    },
    getBalance(){
      var _this=this;
      let httpProvider = "http://testnet.nebula-ai.com:8545";
      let web3 = new Web3(httpProvider);
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
                console.log(fccoin_ctr_instance.methods.balanceOf(getCookie('ress')).call())
                //balance of 查询的结果是？？？
                fccoin_ctr_instance.methods.balanceOf(getCookie('ress')).call().then((number)=>{
                  console.log("balance of wallet xxxxxxx");
                  console.log(number)
                  console.log("decimalAppend$$$$$$$$$$$$$$$$$$$$$")
                  console.log(decimalAppend(35.12345))
                  _this.balance=number
                })

              })
            })
    }
  },
  created(){
    this.getBalance()
  },
  components:{
    HeaderPerson
  }
}
</script>

<style lang="scss" scoped>
.mask{
  width:100%;
  height:3400px;
  position: fixed;
  top:0;
  left:0;
  background: black;
  opacity: .5;
}
.topUp_qr{
  // width: 400px;  1366
  // height:400px;  1366
  width: 560px;
  height:560px;
  border-radius: 5px;
  background: white;
  position: fixed;
  top:-560px;
  left:50%;
  margin-left: -280px;
  transition: .3s;
  .close{
    width: 40px;
    height:40px;
    background: #5277cc;
    color:white;
    border-radius: 50%;
    text-align: center;
    line-height: 48px;
    border:2px solid #eee;
    position: absolute;
    top: -4%;
    left:96%;
    cursor: pointer;
    .el-icon-close{
      font-size: 2.4rem;
    }
  }
}
.active{
  margin-top: 200px!important;
}
.transition-box {
    box-sizing: border-box;
    width:100%;
    height:152px;
    background: #eee;
    border-radius: 12px;
    box-shadow: 0 5px 5px #ddd;
    padding-left:34px;
  }
.ex_icon{
    position: absolute;
    top:23%;
    left:86%;
}
.title{
  font-size: 1.8rem;
  padding-top:26px;
  padding-bottom:36px;
  span{
    font-size: 1.2rem;
    color:#4262c3;
    margin-left: 14px;
  }
}
.ex_inp{
  height:52px;
  position: relative;
  input{
    height:22px;
    border:1px solid #ddd;
    border-radius:5px;
    padding-left:10px;
  }
  span{
    height:52px;
    background: #ccc;
  }
  .fc_inp{
    position: absolute;
    top:32px;
    left:28px;
  }
  .ex_oper{
    position: absolute;
    right:8%;
    height:0;
    top:10%;
    button{
      width:120px;
      height:40px;
      border-radius: 5px;
      font-size: 1.8rem;
    }
  }
}
.person_content{
  width: 50%;
  height:1000px;
  position: absolute;
  left:50%;
  margin-left: -25%;
  padding-top:64px;
  .fc{
    width:100%;
    height:152px;
    min-width:450px;
    border-radius: 12px;
    box-shadow: 0 5px 10px #ddd;
    padding-left:34px;
    padding-right:34px;
    .spec_fc{
      padding-top:26px;
      padding-bottom:26px;
      border-bottom: 2px solid #eee;
      font-size: 1.6rem;
    }
    .blance{
      padding-top:20px;
      width: 100%;
      position: relative;
      .num{
        font-size: 1.4rem;
        color:#b8b8b8;
        margin-top: 1%;
      }
      .oper_personAss{
        width: 60%;
        position: absolute;
        right:0;
        padding-left:10px;
        text-align: right;
        top:8%;
        button{
          width: 20%;
          height:40px;
          min-width:55px;
          border-radius: 5px;
          background: white;
          font-size: 1.8rem;
        }
        .buy{
          background: #5277cc;
          color:white;
        }
        .sell{
          margin-left: 6px;
          border:2px solid #5277cc;
          color:#5277cc;
        }
      }
    }
  }
  .usdt{
    margin-top:60px;
    width:100%;
    height:152px;
    min-width:450px;
    border-radius: 12px;
    box-shadow: 0 5px 10px #ddd;
    padding-left:34px;
    padding-right:34px;
    transition: .5s;
    .spec_fc{
      padding-top:26px;
      padding-bottom:26px;
      border-bottom: 2px solid #eee;
      font-size: 1.6rem;
    }
    .blance{
      padding-top:20px;
      width: 100%;
      position: relative;
      .num{
        font-size: 1.4rem;
        color:#b8b8b8;
        margin-top: 1%;
      }
      .oper_personAss{
        width: 60%;
        position: absolute;
        right:0;
        padding-left:10px;
        text-align: right;
        top:36%;
        button{
          width: 20%;
          height:40px;
          min-width:55px;
          border-radius: 5px;
          background: white;
          font-size: 1.8rem;
        }
        .buy{
          background: #5277cc;
          color:white;
        }
        .sell{
          margin-left: 6px;
          border:2px solid #5277cc;
          color:#5277cc;
        }
      }
    }
  }
}
</style>
