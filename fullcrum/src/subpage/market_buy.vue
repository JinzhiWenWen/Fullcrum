<template lang="html">
  <div class="market_buy">
    <HeaderPerson>
      <p class="slot-mine">票据购买</p>
    </HeaderPerson>
    <div class="marketBuy_cen">
      <p class="marketBuy_title">您正在向海绵海绵我是大星购买票据</p>
      <p class="marketBuy_much">购买份额：<span>{{much}}.00</span>CNY</p>
      <p class="marketBuy_amount">总价：<span style="color:#53936C;">{{much}}.00FC</span></p>
      <p class="marketBuy_status">待支付，请于<span style="color:#e60012;">{{time}}</span>内确认预支付<span style="color:#53936c;">{{much}}.00FC</span></p>
      <p class="marketBuy_oper">
        <button
        type="button" name="button"
        style="color:white;background:#5277cc;" @click="Markplace()"
        v-loading="loadingPlace"
        element-loading-text="支付中"
        element-loading-spinner="el-icon-loading"
        element-loading-background="#5277cc"
        >{{payInner}}</button>
        <button type="button" name="button" style="color:#5277cc;background:white;border:2px solid #5277cc;margin-left:5%;" @click="Buyback()">取消订单</button>
      </p>
      <p class="marketBuy_alt">1、您的数字货币将暂时被冻结由平台保管，交易达成后系统将自动将其划转到卖方的数字钱包内，如交易失效将为您解冻。</p>
      <p class="marketBuy_alt">2、如果买方当日取消订单达3次，将会被限制当日的买入功能。</p>
    </div>
    <div class="mask_mark_buy" v-show="mask_mark_buy" @click="closeHash()">

    </div>
    <div class="showHash" ref="showHash">
      <p>交易Hash</p>
      <span>（可以通过此Hash在区块链浏览器内实时查询订单信息）</span>
      <p style="margin-top:3%;">{{hash}}</p>
      <p style="text-align:right;padding-right:5%;margin-top:2%;"><button type="button" @click="closeHash()">确定</button></p>
    </div>
  </div>
</template>

<script>
import HeaderPerson from '@/components/header-user'
import {getCookie} from '@/assets/util'
export default {
  data(){
    return{
      a:null,
      loadingPlace:false,
      key:null,//用户秘钥
      much:null,//用户购买份额
      contract:null,//合约地址
      orderNumber:null,//票据订单编号
      orderNumberBuyer:null,//买家订单号码
      payInner:'预支付',
      m:19,//倒计时分
      s:60,//倒计时秒
      time:null,//倒计时
      mask_mark_buy:false,
      hash:null// 交易
    }
  },
  components:{
    HeaderPerson
  },

  methods:{
    Buyback(){
      window.history.back()
    },
    showHash(){
      this.$refs.showHash.style.top="30%";
      this.$refs.showHash.style.opacity="1";
      this.mask_mark_buy=true;
    },
    closeHash(){
      this.$refs.showHash.style.top="15%";
      this.$refs.showHash.style.opacity="0";
      setTimeout(()=>{
        this.mask_mark_buy=false;
      },400)
    },
    getWal(){
      this.key=this.$route.params.turnkey;
      this.much=this.$route.params.much
      this.contract=this.$route.params.contract;
      this.orderNumber=this.$route.params.orderNumber;
      this.orderNumberBuyer=this.$route.params.orderNumberBuyer;
    },
    Markplace(){
        var _this=this;
      _this.loadingPlace=true;
      let ress=getCookie('ress')
      let httpProvider = "http://testnet.nebula-ai.com:8545";

        let web3 = new Web3(httpProvider);

        /**
         * sign 签名验证例子
         */
        //let addr='0x04443827409B356555feF22F76Efb91996f47d3E'
        let addr = ress;
        // let addr = getCookie('ress')//已知用户的地址 this.address
        let pk = '0x'+this.key
        //let pk = '0x637df8c55817926e7d38ad34dba0b0476a8a914bb61bad0b6760108582d225d6';//用户输入的私钥  this.key
        let message = "Some data"; //自定义签名信息，随便是什么
        let signedMessage = web3.eth.accounts.sign('Some data', pk);//签名过后的信息

        let verifiedSender = web3.eth.accounts.recover(signedMessage);// verifiedSender 应该是addr

        console.log("签名验证：",verifiedSender.toLowerCase()===addr.toLowerCase());



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
          return this.$http.get('../../static/json/groupon_erc20_abi.json')
        }).then(response=>{
          return response.body;
        }).then(groupon_abi=>{
          groupon_instance = new web3.eth.Contract(groupon_abi, sample_ctr_addr);
        }).then(()=>{
          /**
         * 完整例子
         */
        checkAllowance(sample_user_wallet, sample_groupon_ctr_addr) //确定allowance额度
            .then(()=>{
              console.log("this.much1.....");
              console.log(this.much);
                return increaseAllowance(sample_user_wallet, sample_groupon_ctr_addr, this.much+'000000000000000000');//this.much //增加allowance
            })
             .then(()=>{
                 return buyShare(sample_user_wallet, sample_groupon_ctr_addr, this.much+'000000000000000000');//购买份额
             })
            .then(checkCap)//查看上限
            .then(checkFcRaised)//查看易购额度
            .then(()=>{return checkAllowance(sample_user_wallet, sample_groupon_ctr_addr)})
            .catch(console.log);//error handler
        })

        //合约ABI （application binary interface） 合约的所有可执行或者调用的函数 json格式

        //  const fccoin_ctr_instance = new web3.eth.Contract(fccoin_ctr_abi, fccoin_ctr_addr);//载入的合约对象

        const sample_user_wallet = addr;
        const sample_groupon_ctr_addr = this.contract;

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
                    from: addr,
                    to: fccoin_ctr_addr
                };
                return fccoin_ctr_instance
                    .methods
                    .approve(allowedTo, amount)
                    .estimateGas(tx)//计算gas
                    .then(gas => {
                        tx.gas = web3.utils.toHex(gas);
                        return web3.eth.getTransactionCount(addr, "pending");
                    })
                    .then(nonce=>{
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
            票据合约前端调用方法
         */

        /*
         * 生成票据合约对象
         */
        const sample_ctr_addr = sample_groupon_ctr_addr;
        //const groupon_instance = new web3.eth.Contract(groupon_abi, sample_ctr_addr);

        /**
         * 合约函数调用例子
         * 查看票据认购上限
         */
        //checkCap().then(checkFcRaised).catch(console.log);
        function checkCap(){
            return new Promise((resolve,reject)=>{
                groupon_instance.methods.cap().call().then(cap=>{
                    console.log("Cap: " + cap*0.000000000000000001);
                    resolve();
                }).catch(reject);
            })
        }

        /**
         * 合约函数调用例子
         * 查询已认购额度
         * @returns {Promise<any>}
         */
        function checkFcRaised(){
            return new Promise((resolve,reject)=>{
                groupon_instance.methods.fcRaised().call().then(result=>{
                    console.log("FcRaised : "+result);
                    resolve();
                }).catch(reject);
            })
        }

        /**
         * 购买票据额度
         * @param user 买家钱包地址
         * @param groupon 票据智能合约地址
         * @param amount 购买金额
         * @returns {Promise<any>}
         */
        function buyShare(user, groupon, amount) {
            return new Promise((resolve,reject)=>{
                let tx={
                    from: user,
                    to:groupon
                };
                groupon_instance
                    .methods
                    .buyShare(user, amount)
                    .estimateGas(tx)
                    .then(gas=> {
                        tx.gas = web3.utils.toHex(gas);
                        return web3.eth.getTransactionCount(user, "pending");
                    })
                    .then(nonce=>{
                        tx.nonce = web3.utils.toHex(nonce);
                        return groupon_instance.methods.buyShare(user,amount).encodeABI();
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
                                _this.axios.post(_this.oUrl+'/fcexchange/bill/buyerorders',
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
                                  _this.hash=hash;
                                  _this.showHash();
                                }).catch((error)=>{
                                  console.log(error)
                                })
                                console.log("Purchase transaction hash: "+hash);
                            })
                            .on('receipt', receipt=>{
                                console.log(receipt);
                                console.log(receipt.logs)
                                if(receipt.logs.length>0) {
                                    console.log("purchase successful");
                                    console.log(fccoin_ctr_instance.methods.balanceOf(getCookie('ress')).call())
                                    _this.loadingPlace=false;
                                    _this.payInner='已支付'
                                    _this.$notify({
                                    title: '成功',
                                    message: '支付成功！',
                                    type: 'success',
                                    offset:100
                                  });
                                    _this.$router.push({
                                      name:'Paperorder',
                                      query:{
                                        radio:'2'
                                      }
                                    })
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
    Pour(){
      if(this.s>0){
        this.s--;
        this.time=this.m+'分'+this.s+'秒';
        setTimeout(this.Pour,1000)
        if(this.s<10){
          this.time=this.m+'分'+'0'+this.s+'秒';
          if(this.s<1){
            this.m--;
            this.s=60
            if(this.m<0||this.s<1){
              this.$router.push('/mark')
            }
          }
        }
      }
    }
  },
  mounted(){
    this.getWal();
    this.Pour()
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
        min-height: 46px;
        min-width: 98px;
      }
    }
    .marketBuy_alt{
      color:#999;
      font-size: 1.4rem;
    }
  }
  .mask_mark_buy{
    width: 100%;
    height:100%;
    background: rgba(0,0,0,.5);
    position: fixed;
    top:0;
    left:0;
    z-index: 600;
  }
  .showHash{
    width: 35%;
    height:18%;
    border-radius: 5px;
    position: absolute;
    top:15%;
    left:50%;
    background: white;
    margin-left: -17.5%;
    z-index: 601;
    padding-left:1%;
    padding-top:1%;
    min-width: 666px;
    min-height: 156px;
    opacity: 0;
    transition: all 1s;
    p{
      font-size: 1.8rem;
      button{
        width: 12%;
        height:34px;
        background:#5277cc;
        color:white;
        border-radius: 5px;
      }
    }
    span{
      color:#999;
      margin-top: 1%;
      margin-left: -1%;
    }
  }
}
</style>
