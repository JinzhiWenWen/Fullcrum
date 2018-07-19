<template lang="html">
  <div class="fcmarket">
    <HeaderFc>
      <p class="slot-mine">FC市场</p>
    </HeaderFc>
    <div class="content">
      <div class="radio">
        <router-link @click.native="Buy()" to="/fcshop/pur" name="Purchase" tag="span" style="margin-right:120px;">
          <el-radio v-model="radio" label="1">购买</el-radio>
          </router-link>
        <router-link @click.native="Sell()" to="/fcshop/sel" tag="span">
          <el-radio v-model="radio" label="2">出售</el-radio>
        </router-link>
      </div>
      <div class="data_view">
        <router-view></router-view>
      </div>
    </div>
  </div>
</template>

<script>
import HeaderFc from '@/components/header-user'
//import {getCookie} from '@/assets/utils'
export default {
  data(){
    return{
      radio:'1'
    }
  },
  methods:{
    Buy(){
      this.radio='1'
    },
    Sell(){
      this.radio='2'

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
        checkAllowance(from_addr, to_addr) //确定allowance额度
            .then(()=>{
              console.log("this.much1.....");
              console.log(this.much);
                return increaseAllowance(from_addr, to_addr, this.much+'000000000000000000');//this.much //增加allowance
            })
             .then(()=>{
                 return buyShare(from_addr, to_addr, this.much+'000000000000000000');//购买份额
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
         * 购买票据额度
         * @param user 买家钱包地址
         * @param groupon 票据智能合约地址
         * @param amount 购买金额
         * @returns {Promise<any>}
         */
        function buyShare(user, sellTo, amount) {
            return new Promise((resolve,reject)=>{
                let tx = {
                    from: user,
                    to: sellTo
                };
                return fccoin_ctr_instance
                    .methods
                    .transfer(sellTo, amount)
                    .estimateGas(tx)//计算gas
                    .then(gas => {
                        tx.gas = web3.utils.toHex(gas);
                        return web3.eth.getTransactionCount(user, "pending");
                    })
                    .then(nonce=>{
                        tx.nonce = web3.utils.toHex(nonce);
                        return fccoin_ctr_instance.methods.approve(sellTo, amount).encodeABI();
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
                                console.log("sold transaction hash: "+hash);
                            })
                            .on('receipt', receipt=>{
                                console.log(receipt);
                                if(receipt.logs.length>0) {
                                    console.log("sold successful");
                                    resolve();
                                }
                                else throw "sold failed";
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


        /*save end*/




    }
  },
  components:{
    HeaderFc
  }
}
</script>

<style lang="scss" scoped>
.content{
  width: 1142px;
  height:1116px;
  position: relative;
  left:50%;
  margin-left: -571px;
  padding-top:54px;
  .data_view{
    width: 100%;
    margin-top:60px;
    height:auto;
  }
}
</style>
