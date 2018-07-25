<template lang="html">
  <div class="query">
    <HeaderUser>
      <p class="slot-mine">区块链浏览器</p>
    </HeaderUser>
    <div class="query_con">
      <p class="query_title"><input type="text" value="" ref="quHash" placeholder="请输入交易Hash" /> <button type="butotn" @click="hashscan()">查询</button> </p>
      <p class="query_alt">交易信息</p>
      <div class="query_mes">
        <div class="query_mes_left">
          <ul>
            <li>Txhash:</li>
            <li>TxReceipt Status:</li>
            <li>Block Height:</li>
            <li>TimeStamp:</li>
            <li>From:</li>
            <li>To:</li>
            <li>Value:</li>
            <li>Gas Limit:</li>
            <li>Gas Used By Txn:</li>
            <li>Gas Price:</li>
            <li>Actual Tx Cost/Fee:</li>
            <li>Nonce & {Position}:</li>
            <li>Input Data:</li>
          </ul>
        </div>
        <div class="query_mes_right">
            <ul>
              <li>{{Txhash}}</li>
              <li style="color:green;">{{TxReceiptStatus}}</li>
              <li><span style="color:#5277cc;"></span> (block confirmations)</li>
              <li>{{TimeStamp}}</li>
              <li style="color:#5277cc;">{{From}}</li>
              <li><span style="color:#5277cc;">{{To}}</span> (BinanceWallet)</li>
              <li>{{Value}}</li>
              <li>{{GasLimit}}</li>
              <li>{{GasUsedByTxn}}</li>
              <li>{{GasPrice}}</li>
              <li>{{ActualTxCostFee}}</li>
              <li>{{Nonce}}</li>
              <li>
                <textarea name="name" rows="8" cols="80" style="resize:none;outline:none;">{{InputData}}</textarea>
              </li>
            </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import HeaderUser from '@/components/header-user'
import {getCookie} from '@/assets/util'
export default {
  data(){
    return{
      Txhash:null,
      TxReceiptStatus:null,
      BlockHeight:null,
      TimeStamp:null,
      From:null,
      To:null,
      Value:null,
      GasLimit:null,
      GasUsedByTxn:null,
      GasPrice:null,
      ActualTxCostFee:null,
      Nonce:null,
      InputData:null
    }
  },
  components:{
    HeaderUser
  },
  methods:{
    hashscan(){
      let _this=this;
      let ress = getCookie('ress')
      let httpProvider = "http://testnet.nebula-ai.com:8545";
      let web3 = new Web3(httpProvider);
      let QueryHash=_this.$refs.quHash.value;
      /**
         * sign 签名验证例子
         */
        //let addr='0x04443827409B356555feF22F76Efb91996f47d3E'
        let addr = ress;
        // let addr = getCookie('ress')//已知用户的地址 this.address
        //let pk = '0x'+this.key
        //let pk = '0x637df8c55817926e7d38ad34dba0b0476a8a914bb61bad0b6760108582d225d6';//用户输入的私钥  this.key
        let pk = '0xbd76ced88fe686f58831922b8cad0d7fcf067a9d039ec4654734e69f45937394';//tb002
        let message = "Some data"; //自定义签名信息，随便是什么
        let signedMessage = web3.eth.accounts.sign('Some data', pk);//签名过后的信息

        let verifiedSender = web3.eth.accounts.recover(signedMessage);// verifiedSender 应该是addr

        console.log("签名验证：",verifiedSender.toLowerCase()===addr.toLowerCase());


        let bill_ctr_addr = '0x7e40298219754ac7102e6d79edb3608c862a796f';
        let bill_ctr_instance = null;
        this.$http.get('../../static/json/groupon_erc20_abi.json').then(response=>{
          console.log("get bill abi >>>>>>>>>>")
          return response.body;
        }).then(groupon_abi=>{
          bill_ctr_instance = new web3.eth.Contract(groupon_abi, bill_ctr_addr);
          console.log("groupon   contract instance ")
          console.log(bill_ctr_instance)
        }).then(()=>{
          console.log("transaction query from block chain")
          web3.eth.getTransaction(QueryHash)
          .then((res)=>{
            console.log(res)
            _this.From=res.from;
            _this.To=res.to;
            _this.Value=res.value;
            _this.GasUsedByTxn=res.gas;
            _this.GasPrice=res.gasPrice;
            _this.Txhash=res.hash;
            _this.InputData=res.input;
            _this.TxReceiptStatus='Success';
            _this.BlockHeight='6020894';
            _this.TimeStamp='1 min ago (Jul-25-2018 13:30:56 AM +UTC)';
            _this.GasLimit='42000';
            _this.ActualTxCostFee='0.00042 Ether ($0.20)';
            _this.Nonce='0 | {13}'
          })
        })
    }
  }
}
</script>

<style lang="scss">
.query{
  width: 100%;
  height:100%;

  .query_con{
    width: 60%;
    height:90%;
    position: absolute;
    left:50%;
    margin-left: -30%;
    padding-bottom:5%;
    margin-bottom: 5%;
    .query_title{
      width: 100%;
      text-align: center;
      height:8%;
      // background: red;
      margin-top: 2%;
      input{
        width: 40%;
        height:60%;
        border-radius: 5px;
        border:1px solid #ccc;
        padding-left:1%;
        font-size: 1.6rem;
      }
      button{
        height:65%;
        width: 5%;
        border-radius: 5px;
        background: #5277cc;
        color:white;
        font-size: 1.5rem;
      }
    }
    .query_alt{
      width: 100%;
      text-align: left;
      font-size: 1.7rem;
      color:#5277cc;
      padding-top:2%;
      padding-bottom:2%;
    }
    .query_mes{
      width: 100%;
      height:100%;
      display: flex;
      .query_mes_left{
        width: 25%;
        height:100%;
        ul{
          width: 100%;
          height:100%;
          padding-top:5%;
          li{
            padding-left:6%;
            height:6%;
          }
        }
      }
      .query_mes_right{
        width: 75%;
        height:100%;
        ul{
          width: 100%;
          height:100%;
          padding-top:1.5%;
          li{
            padding-left:6%;
            height:6%;
          }
        }
      }
    }
  }
}
</style>
