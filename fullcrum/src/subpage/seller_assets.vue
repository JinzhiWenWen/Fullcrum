<template lang="html">
  <div class="personal_assets">
    <HeaderSeller>
      <p class="slot-mine">资产</p>
    </HeaderSeller>
    <div class="person_content" v-loading="loaDingSellerAss">
      <p class="title">累计销售：2500000FC   在线票据：700000（元） 可提现金额：300000（元）
        累计提现：520000（元）
      </p>
      <div class="fc" ref="fc"  v-for="(item,index) in orderList">
        <p class="spec_fc">订单号：{{item.orderNumber}}
          <span
          style="color:#5570c7;font-size:1.2rem;
          text-decoration: underline;cursor:pointer;
          margin-left:26px;" @click="showPaper">
          查看票据
          </span>
        </p>
        <p class="blance">
          <span class="num">
            发布日期：20180501
            <span style="margin-left:18px;">票面金额：{{item.fcCounts}}.00FC</span>
            <span style="margin-left:18px;">利率(年化)：{{item.interest/1000000000000000000}}%</span>
          </span>
          <router-link to="/with" tag="button" class="buy">提现</router-link>
        </p>
      </div>
    </div>
    <div class="mask" ref="mask" @click="closePic">

    </div>
    <div class="paper_pic" ref="paperPic">
      <p>根据卖家上传的电子信息生成相对应的信息内容</p>
      <span class="close" @click="closePic">
        <i class="el-icon-close"></i>
      </span>
    </div>
  </div>
</template>

<script>
import HeaderSeller from '@/components/header-seller'
import {getCookie} from '@/assets/util'
export default {
  data(){
    return{
      orderList:[],
      loaDingSellerAss:false
    }
  },
  methods:{
    showPaper(){
      this.$refs.mask.style.display='block';
      this.$refs.paperPic.style.top="500px";
    },
    closePic(){
      this.$refs.mask.style.display='none';
      this.$refs.paperPic.style.top="-500px";
    },
    getSellerOrder(){
      var Id=getCookie('mes')
      this.loaDingSellerAss=true;
      this.axios.get(this.oUrl+'/fcexchange/bill/sellerorders/sellerorder/'+Id).then((res)=>{
        console.log(res)
        this.orderList=res.data.value;
        this.loaDingSellerAss=false;
      })
    }
  },
  created(){
    this.getSellerOrder()
  },
  components:{
    HeaderSeller
  }
}
</script>

<style lang="scss">
.el-loading-spinner .circular{
  margin-top: 0!important;
}
.person_content{
  width: 756px;
  height:700px;
  position: absolute;
  left:50%;
  margin-left: -378px;
  .title{
    font-size:1.4rem;
    color:#999;
    position:absolute;
    left:-36%;
    top:6px;
  }
  .fc{
    width:100%;
    height:152px;
    border-radius: 12px;
    box-shadow: 0 5px 10px #ddd;
    padding-left:34px;
    padding-right:34px;
    box-sizing: border-box;
    overflow: hidden;
    margin-top:64px;
    .spec_fc{
      padding-top:26px;
      padding-bottom:24px;
      border-bottom: 2px solid #eee;
      font-size: 1.8rem;
    }
    .blance{
      padding-top:20px;
      min-width: 450px;
      position: absolute;
      width: 100%;
      button{
        width: 15vh;
        height:40px;
        border-radius: 5px;
        background: white;
        font-size: 1.8rem;
        min-width:55px;
      }
      .num{
        font-size: 1.2rem;
        color:#999;
        margin-top: 1%;
      }
      .buy{
        position: absolute;
        background: #5277cc;
        color:white;
        right:15%;
        top:38%;
      }
    }
  }
}
.mask{
  width: 100%;
  height:3400px;
  position: fixed;
  top:0;
  left:0;
  background: black;
  opacity: .5;
  display: none;
}
.paper_pic{
  position: fixed;
  width: 750px;
  height:500px;
  background: white;
  top:-500px;
  left:50%;
  margin-left:-375px;
  transition: .3s;
  margin-top:-250px;
  p{
    font-size: 20px;
    text-align: center;
    line-height: 500px;
  }
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
    top: -5%;
    left:97%;
    cursor: pointer;
    .el-icon-close{
      font-size: 2.4rem;
    }
  }
}
</style>
