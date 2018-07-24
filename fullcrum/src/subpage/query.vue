<template lang="html">
  <div class="query">
    <HeaderUser>
      <p class="slot-mine">交易查询</p>
    </HeaderUser>
    <div class="query_con">
      <p class="query_title"><input type="text" value="" placeholder="请输入交易Hash" /> <button type="butotn">查询</button> </p>
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
              <li>0xc7511460d8c5fdcfc622a8e8e04ba728f10dbf2338ba92f7a1bac70e74171a5d</li>
              <li style="color:green;">Success</li>
              <li><span style="color:#5277cc;">6020894</span> (6 block confirmations)</li>
              <li>1 min ago (Jul-24-2018 09:30:56 AM +UTC)</li>
              <li style="color:#5277cc;">0x9c9159ad0c849098c73cb95ae921e78daa7776d7</li>
              <li><span style="color:#5277cc;">0x3f5ce5fbfe3e9af3971dd833d26ba9b5c936f0be</span> (BinanceWallet)</li>
              <li>1.984 Ether ($926.57)</li>
              <li>42000</li>
              <li>21000</li>
              <li>0.00000002 Ether (20 Gwei)</li>
              <li>0.00042 Ether ($0.20)</li>
              <li>0 | {13}</li>
              <li>
                <textarea name="name" rows="8" cols="80" style="resize:none;outline:none;">0x</textarea>
              </li>
            </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import HeaderUser from '@/components/header-user'
export default {
  components:{
    HeaderUser
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
            padding-left:8%;
            height:6%;
          }
        }
      }
    }
  }
}
</style>
