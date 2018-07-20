<template lang="html">
  <div class="fcbuy">
    <HeaderBuyer>
      <p class="slot-mine">FC出售</p>
    </HeaderBuyer>
    <div class="buyer_message">
      <p class="base">
        <span style="font-size:3rem;">您正向海绵海绵购买{{this.turnMuch}}.00FC</span>
        <br>
        <span style="color:#999;font-size:1.6rem;;margin-top:20px;margin-bottom:14px;">单价：1CNY</span>
        <br>
        <span style="color:#999;font-size:1.6rem;">总价：<span style="color:#639c79;">{{this.turnMuch}}.00FC</span></span>
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
      <p class="tions">等待对方支付，海绵海绵将于
        <span style="color:#e60012;">{{timePur}}</span>
        内向您支付
        <span style="color:#53936c;">{{this.turnMuch}}.00CNY。</span>
        </p>
      <p class="submit">
        <button type="button" name="button" @click="placeFc()"
        v-loading="loaDingFcSell"
        element-loading-text="支付中"
        element-loading-spinner="el-icon-loading"
        element-loading-background="#5277cc"
        >确认已收到款项</button>
        </p>
      <p class="ment">
        <span>1、对方的汇款将直接进入您的账户，交易过程中您出售的数字资产将由平台托管保护。</span>
        <br>
        <span style="margin-top:10px;margin-bottom:10px;">2、请<span style="color:#e60012;">务必点击”确认出售“</span>，系统将提醒买方进行付款款，买方付款后系统会将数字资产划转到对方的账户。</span>
        <br>
        <span>3、如果卖方当日取消订单达3次，将会被限制当日的出售功能。</span>
        </p>
      <p class="cancel">
        <button type="button" name="button">取消订单</button>
      </p>
    </div>
  </div>
</template>

<script>
import HeaderBuyer from '@/components/header-user'
import {getCookie} from '@/assets/util'
export default {
  data(){
    return{
      turnMuch:null,  //出售数量
      loaDingFcSell:false,
      purm:19,
      purs:60,
      timePur:null,
      key:null // 买家私钥
    }
  },
  components:{
    HeaderBuyer
  },
  methods:{
    getParamsOrder(){
      this.turnMuch=this.$route.params.much;
      this.key=this.$route.params.key;
    },
    placeFc(){
      let _this=this;
      _this.loaDingFcSell=true;
      let ress=getCookie('ress')//用户钱包地址
      let httpProvider = "http://testnet.nebula-ai.com:8545";

        let web3 = new Web3(httpProvider);

        /**
         * sign 签名验证例子
         */
        //let addr='0x04443827409B356555feF22F76Efb91996f47d3E'
        let addr = ress;
        // let addr = getCookie('ress')//已知用户的地址 this.address
        //let pk = '0x'+this.key
        let pk = '0xbd76ced88fe686f58831922b8cad0d7fcf067a9d039ec4654734e69f45937394';
        //let pk = '0x637df8c55817926e7d38ad34dba0b0476a8a914bb61bad0b6760108582d225d6';//用户输入的私钥  this.key
        let message = "Some data"; //自定义签名信息，随便是什么
        let signedMessage = web3.eth.accounts.sign('Some data', pk);//签名过后的信息

        let verifiedSender = web3.eth.accounts.recover(signedMessage);// verifiedSender 应该是addr
        console.log(verifiedSender)
        console.log(addr)
        console.log("签名验证：",verifiedSender.toLowerCase()===addr.toLowerCase());

        let much = 10000;
        let from_addr = addr;
        let to_addr = '0xe847325Cc8d052f58D4873bF0e819B6c1a644CD6';


        /**
         * ERC20 合约前端使用方法
         */

        //载入
        const fccoin_ctr_addr = "0x2884f15db1de2e00af1442030bf828ecde470d0c";//合约地址
        let fccoin_ctr_instance = null;
        let groupon_instance = null;
        this.$http.get('../../static/json/fc_coin_abi.json').then(response=>{
          console.log("get fc abi >>>>>>>>>>")
          return response.body;
        }).then(fccoin_ctr_abi=>{
          fccoin_ctr_instance = new web3.eth.Contract(fccoin_ctr_abi, fccoin_ctr_addr);
        }).then(()=>{
          /**
         * 完整例子
         */
         console.log("block....")
         console.log(web3.eth.defaultBlock)
         web3.eth.getTransactionCount(from_addr,'pending').then((err,dd)=>{
          console.log("返回指定账户的交易数量：")
          console.log(err)
          console.log(dd)
         })
        checkAllowance(from_addr, to_addr) //确定allowance额度
            .then(()=>{
              console.log("转账前余额：")
              web3.eth.getBalance(from_addr).then(console.log);
              return fccoin_ctr_instance.methods.balanceOf(getCookie('ress')).call().then(console.log)
            })
            .then(()=>{
              console.log("this.much1.....");
              console.log(much);
                return increaseAllowance(from_addr, to_addr, much+'000000000000000000');//this.much //增加allowance
            })
             .then(()=>{
                 return buyShare(from_addr, to_addr, much+'000000000000000000');//购买份额
             })
            .then(()=>{return checkAllowance(from_addr, to_addr)})
            .catch(console.log);//error handler
        })


        //查看allowance
        //checkAllowance(sample_user_wallet, sample_groupon_ctr_addr); //

        function checkAllowance(user, allowedTo){
            return new Promise((resolve,reject) => {
              console.log("print fccoin_ctr_instancexxxxxxxxx");
              console.log(fccoin_ctr_instance);
                return fccoin_ctr_instance
                    .methods
                    .allowance(user, allowedTo)//调用的allowance函数，参照fccoin_ctr_abi
                    .call()
                    .then(result=>{
                        //sample_user_wallet允许sample_groupon_ctr_addr使用的额度
                        console.log("派大星 允许 海绵宝宝 使用的额度:"+result*0.000000000000000001);
                        resolve();
                    })
                    .catch(error => {
                        console.log(error);
                        reject();
                    });
            });
        }

        //允许这个合约使用addr的fc代币, 允许调用的金额
        //increaseAllowance(sample_user_wallet, sample_groupon_ctr_addr, 10000);
        //这个会对当前的approval 设置为amount 不是当前值+amount
        function increaseAllowance(user, allowedTo, amount){
            return new Promise((resolve,reject)=>{
                let tx = {
                    from: user,
                    to: to_addr
                };
                return fccoin_ctr_instance
                    .methods
                    .approve(allowedTo, amount)
                    .estimateGas(tx)//计算gas
                    .then(gas => {
                        tx.gas = web3.utils.toHex(gas);
                        return web3.eth.getTransactionCount(user, "pending");
                    })
                    .then((err,nonce)=>{
                      console.log("tx.noncepppp    increaseAllowance")
                        console.log(tx.nonce)
                        tx.nonce = web3.utils.toHex(nonce);
                        return fccoin_ctr_instance.methods.approve(allowedTo, amount).encodeABI();
                    })
                    .then(encoded=>{
                        tx.value = web3.utils.toHex(0);
                        tx.gasPrice = web3.utils.toHex(1000000000);
                        tx.data = encoded;
                        return web3.eth.accounts.signTransaction(tx,pk);
                    })
                    .then(signed=>{
                        console.log(signed);
                        return web3.eth.sendSignedTransaction(signed.rawTransaction)
                            .on('transactionHash', hash => {
                                console.log("Approval transaction hash: "+hash);
                            })
                            .on('receipt', receipt=>{
                                console.log(receipt);
                                if(receipt.logs.length>0) {
                                    console.log("approval successful");
                                    resolve();
                                }
                                else throw "approval failed";
                            })
                            .on('error', error =>{
                                throw error;
                            });
                    })
                    .catch(error=>{
                        console.log(error);
                        reject();
                });
            });
        }

        /**
         * 购买票据额度
         * @param user 买家钱包地址
         * @param groupon 票据智能合约地址
         * @param amount 购买金额
         * @returns {Promise<any>}
         */
        function buyShare(user, sellTo, amount) {
            return new Promise((resolve,reject)=>{
                let tx={
                    from: user,
                    to:sellTo
                };
                fccoin_ctr_instance
                    .methods
                    .transfer(user, amount)
                    .estimateGas(tx)
                    .then(gas=> {
                        tx.gas = web3.utils.toHex(gas);
                        return web3.eth.getTransactionCount(user, "pending");
                    })
                    .then(nonce=>{
                      console.log("tx.nonceppppppppp")
                        console.log(tx.nonce)
                        tx.nonce = web3.utils.toHex(nonce);

                        return fccoin_ctr_instance.methods.transfer(user,amount).encodeABI();
                    })
                    .then(encoded=>{
                        tx.value = web3.utils.toHex(0);
                        tx.gasPrice = web3.utils.toHex(1000000000);
                        tx.data = encoded;

                        return web3.eth.accounts.signTransaction(tx,pk);
                    })
                    .then(signed=>{
                        console.log(signed);
                        return web3.eth.sendSignedTransaction(signed.rawTransaction)
                            .on('transactionHash', hash => {
                               /* _this.axios.post(_this.oUrl+'/fcexchange/bill/buyerorders',
                                  {
                                    "feUserid":getCookie('mes'),
                                    "billPrice": _this.much,
                                    "hash":hash,
                                    "billSellerOrderNumber":_this.orderNumber,
                                    "contractAddress":_this.contract
                                  },
                                  {header:{
                                    "Content-Type":"application/json",
                                    "Accept":"application/json",
                                    "Authorization":_this.token
                                  }}
                                  ).then((res)=>{
                                  console.log(res)

                                }).catch((error)=>{
                                  console.log(error)

                                })*/
                                console.log("sellTo transaction hash: "+hash);
                            })
                            .on('receipt', receipt=>{
                                console.log(receipt);
                                console.log(receipt.logs)
                                if(receipt.logs.length>0) {
                                    console.log("sellTo successful");
                                    console.log("余额。。。。。。。。。。。")
                                    fccoin_ctr_instance.methods.balanceOf(getCookie('ress')).call().then(console.log)
                                    _this.loadingPlace=false;
                                    _this.payInner='已支付'
                                    _this.$notify({
                                    title: '成功',
                                    message: '支付成功！',
                                    type: 'success',
                                    offset:100
                                  });
                                    web3.eth.getBalance(from_addr).then(console.log);
                                    _this.$router.push('/personalor/paperor')
                                    resolve();
                                }
                                else throw "Approval failed";
                            })
                            .on('error', error =>{
                                throw error;
                                _this.$notify.error({
                                    title: '错误',
                                    message: '支付失败，请检查您的账户余额或稍后再试！',
                                    offset:100
                                  });
                            });
                    })
                    .catch(error=>{
                        console.log(error);
                        reject();
                    });
            });
        }


        /*save end*/
    },
    PourPur(){
      if(this.purs>0){
        this.purs--;
        this.timePur=this.purm+'分'+this.purs+'秒';
        setTimeout(this.PourPur,1000)
        if(this.purs<10){
          this.timePur=this.purm+'分'+'0'+this.purs+'秒';
          if(this.purs<1){
            this.purm--;
            this.purs=60;
            if(this.purm<0||this.purs<1){
              this.$router.push('/fcshop/pur')
            }
          }
        }
      }
    }
  },
  created(){
    this.getParamsOrder();
    this.PourPur();
  },
  beforeRouteLeave(to,from,next){
    if(from.path=='/fcbuy'){
      this.PourPur=null;
    }
    next()
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
