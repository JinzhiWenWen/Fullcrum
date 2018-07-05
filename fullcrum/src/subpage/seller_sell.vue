<template lang="html">
  <div class="seller_sell">
    <HeaderSeller>
      <p class="slot-mine">票据出售</p>
    </HeaderSeller>
    <div class="seller_sell_con">
      <div class="seller_sell_loader">
        <div class="" style="">
          <div class="inMask"  @mouseleave="hideIn()" v-show="isShowIn">
            <input type="file" accept="image/*" class="uploadIdT" name="" @change="uploadIs">
            <i class="el-icon-plus"></i>
            <br>
            <span  class="in_title">点击添加票据正面图片</span>
          </div>
          <div class="showImT"  @mouseenter="showIn()">
            <img src="../img/Banner.png" alt="">
          </div>
        </div>
        <div class="" style="">
          <div class="inMaskR"  @mouseleave="hideInR()" v-show="isShowInR">
            <input type="file" accept="image/*" class="uploadIdR" name="" @change="uploadThe">
            <i class="el-icon-plus"></i>
            <br>
            <span  class="in_title">点击添加票据反面图片</span>
          </div>
          <div class="showImR"  @mouseenter="showInR()">
            <img src="../img/Banner.png" alt="">
          </div>
        </div>
      </div>
      <div class="seller_sell_mess" :model="paper_lists">
        <p class="seller_sell_title">票面必填信息</p>
        <span>
          票号
          <input
          v-model="paper_lists.orderOn"
          style="margin-left:152px;"
          type="text" placeholder="点击输入"
          name="" value="">
          </span>
        <span>
          金额
          <input
          v-model="paper_lists.amount"
          style="margin-left:152px;"
          type="text" placeholder="单位（FC）"
          name="" value="">
          </span>
        <span>
          付款行
          <input
          v-model="paper_lists.payingBank"
          style="margin-left:140px;"
          type="text" placeholder="点击输入"
          name="" value="">
          </span>
        <span>
          兑现日期
          <input
          v-model="paper_lists.date"
          style="margin-left:128px;"
          type="text" placeholder="例：20180804"
          name="" value="">
          </span>
        <span>
          上一家备书企业
          <input
          v-model="paper_lists.enterprise"
          style="margin-left:92px;"
          type="text" placeholder="点击输入"
          name="" value="">
          </span>
        <span>
          票据可迁转
          <input
          v-model="paper_lists.moving"
          style="margin-left:118px;"
          type="radio" name="true" value="">
          </span>
        <span>
          利率（年化）
          <input
          v-model="paper_lists.rate"
          style="margin-left:108px;"
          type="text" placeholder="例：4.5%" name="" value="">
          </span>
      </div>
      <p class="seller_sell_chose">
        <button type="button" name="button" class="release" @click="release()">发布</button>
        <button type="button" name="button" class="cancel" @click="sellBack()">取消</button>
        </p>
      <p class="warning_title">
        <span>1、请确保您的票据是可签转的，一经校验恶意操作将会被系统拉黑。</span>
        <span>2、您的FC收益会按照票据全额进入账户，提现时系统会自动扣除您所设置利率对应的人民币。</span>
      </p>
    </div>
  </div>
</template>

<script>
import HeaderSeller from '@/components/header-seller'
import {getCookie} from '@/assets/util'
export default {
  data() {
    return {
      dialogImageUrl: '',
      dialogVisible: false,
      isShowIn:false,
      isShowInR:false,
      picIs:null,
      picThe:null,
      paper_lists:{
        orderNo:'',
        amount:'',
        payingBank:'',
        data:'',
        enterprise:'',
        moving:'',
        rate:''
      }
    };
  },
  methods: {
    showIn(){
      this.isShowIn=true;
    },
    hideIn(){
      this.isShowIn=false
    },
    showInR(){
      this.isShowInR=true
    },
    hideInR(){
      this.isShowInR=false
    },
    sellBack(){
      window.history.back()
    },
    uploadIs(e){
      var that=this;
      let file = e.target.files[0];
      //通过canvas压缩图片
      var reader=new FileReader();
      reader.readAsDataURL(file);
      // var result=reader.result
      var img=new Image;
      reader.onload=function(e){
        var width=1080,
        quality=0.3,
        canvas=document.createElement("canvas"),
        drawer=canvas.getContext("2d");
        img.src=this.result;
        img.onload=()=>{
          canvas.width=width;
          canvas.height=width*(img.height/img.width);
          drawer.drawImage(img,0,0,canvas.width,canvas.height);
          img.src=canvas.toDataURL('image/png',quality);
        }
      };
      setTimeout(()=>{
        this.picIs=img.src
      },500)
    },
    uploadThe(e){
      var that=this;
      let file = e.target.files[0];
      //通过canvas压缩图片
      var reader=new FileReader();
      reader.readAsDataURL(file);
      // var result=reader.result
      var img=new Image;
      reader.onload=function(e){
        var width=1080,
        quality=0.3,
        canvas=document.createElement("canvas"),
        drawer=canvas.getContext("2d");
        img.src=this.result;
        img.onload=()=>{
          canvas.width=width;
          canvas.height=width*(img.height/img.width);
          drawer.drawImage(img,0,0,canvas.width,canvas.height);
          img.src=canvas.toDataURL('image/png',quality);
        }
      };
      setTimeout(()=>{
        this.picThe=img.src
      },500)
    },
    release(){
      var Id=getCookie('mes')
      this.axios.post(this.oUrl+'/fcexchange/bill/sellerorders',{
        "billSellerOrder":{
         "fcCounts": "9",
         "expiredAt": "1530226624556",
         "bankId":"cbc",
         "interest":"1000000000000000000",
         "maturityDate":1538819416043,
         "feWalletAddress":"0xcbf6ff48ecad2820383e6e2adef8ce3020a54b3a"
       },
        "documentRequest":[
          {"uid":Id,"file":this.picIs,"documentType":"1","mimeType":"jpg"},
          {"uid":Id,"file":this.picThe,"documentType":"2","mimeType":"jpg"}
       ]
     },
     {header:{
       'Content-Type':'application/json',
       'Accept':'application'
     }}
   ).then((res)=>{
     console.log(res)
   }).catch((error)=>{
     console.log(error.response)
   })
    }
  },
  components:{
    HeaderSeller
  }
}
</script>

<style lang="scss" scoped>
.seller_sell_con{
  width: 750px;
  height:auto;
  position: absolute;
  left:50%;
  margin-left: -375px;
  padding-top:80px;
  padding-bottom:80px;
  .seller_sell_loader{
    width: 100%;
    height:250px;
    background: #eee;
    position: relative;
    z-index: 1;
    display: flex;
    .inMask{
      width: 370px;
      height:250px;
      background: rgba(0,0,0,.3);
      text-align: center;
      box-sizing: border-box;
      border-radius:5px;
      z-index: 100;
      .uploadIdT{
        width: 370px;
        height:250px;
        cursor:pointer;
        opacity:0;
        z-index: 120!important;
      }
      .el-icon-plus{
        font-size:11rem;
        color:white;
        opacity:.9;
        position: absolute;
        left:16%;
        top:20%;
        z-index: -1;
      }
      .in_title{
        // width: 100%;
        margin-top:10px;
        color:white;
        opacity:.9;
        font-size: 1.6rem;
        position: absolute;
        left:13%;
        top:65%;
        z-index: -1;
      }
    }
    .showImT{
      width: 370px;
      height:250px;
      position: absolute;
      left:0;
      background: rgba(0,0,0,.5);
      top:0;
      z-index: 1;
      border-radius:5px;
      z-index: -2;
      img{
        width: 100%;
        height:100%;
        border-radius: 5px;
      }
    }
    .inMaskR{
      width: 370px;
      height:250px;
      background: rgba(0,0,0,.3);
      text-align: center;
      box-sizing: border-box;
      border-radius:5px;
      z-index: 100;
      margin-left:103.5%;
      .uploadIdR{
        width: 370px;
        height:250px;
        cursor:pointer;
        opacity:0;
        z-index: 120!important;
      }
      .el-icon-plus{
        font-size:11rem;
        color:white;
        position: absolute;
        left:68%;
        top:20%;
        z-index: -1;
      }
      .in_title{
        margin-top:10px;
        color:white;
        font-size: 1.6rem;
        position: absolute;
        left:65%;
        top:65%;
        z-index: -1;
      }
    }
    .showImR{
      width: 370px;
      height:250px;
      position: absolute;
      left:0;
      background: rgba(0,0,0,.8);
      top:0;
      left:51%;
      z-index: 1;
      border-radius:5px;
      z-index: -2;
      img{
        width: 100%;
        height:100%;
        border-radius: 5px;
      }
    }
  }
  .seller_sell_mess{
    width: 100%;
    height:474px;
    border-radius: 12px;
    margin-top:60px;
    box-shadow: 0 5px 10px #ddd;
    padding-left:26px;
    padding-right:26px;
    .seller_sell_title{
      width: 100%;
      padding-top:26px;
      padding-bottom:26px;
      border-bottom: 2px solid #eee;
      font-size: 1.8rem;
      margin-bottom: 14px;
    }
    span{
      width: 100%;
      border-bottom:1px solid #eee;
      color:#999;
      padding-top:16px;
      padding-bottom:16px;
    }
  }
  .seller_sell_chose{
    width: 100%;
    box-sizing: border-box;
    padding:54px 74px 54px 74px;
    button{
      width:230px;
      height:72px;
      border-radius: 5px;
      font-size: 2.2rem;
    }
    .release{
      margin-right: 128px;
      background: #4262c3;
      color:white;
    }
    .cancel{
      background: white;
      border:1px solid #4262c3;
      color:#4262c3;
    }
  }
  .warning_title{
    font-size:1.6rem;
    color:#999;
  }
}
</style>
