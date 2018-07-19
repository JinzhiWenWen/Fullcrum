<template lang="html">
  <div class="personal_details">
    <HeaderUser>
      <p class="slot-mine">订单详情</p>
    </HeaderUser>
    <div class="personal_details_con">
      <div class="personal_details_con_peperImg">
        <img src="../img/Banner.png" alt="" ref="peperImg">
      </div>
      <p class="personal_details_con_title">
        <span>票号</span>
        <span>金额</span>
        <span>付款行</span>
        <span>承兑日期</span>
        <span>上一家企业备书</span>
        <span>利率（年化）</span>
      </p>
      <p class="personal_details_con_alt">
        <span style="margin-top:-.8%;">
          <span>{{billNumber}}</span>
          <br>
          <span>{{billNumberLast}}</span>
        </span>
        <span>{{counts}}.00FC</span>
        <span style="margin-right:2.5%;">中国银行浙江省分行</span>
        <span style="margin-right:3.8%;">{{date}}</span>
        <span style="margin-right:6%;">青岛庆泰农业科技有限公司</span>
        <span>{{interest/1000000000000000000}}%</span>
      </p>
      <p class="personal_details_con_alt_back"><button type="button"  @click="aaa()">返回</button></p>
    </div>
  </div>
</template>

<script>
import HeaderUser from '@/components/header-user'
export default {
  data(){
    return{
        orderNumber:null,
        billNumber:null,
        counts:null,
        billNumberLast:null,
        interest:null,
        date:null
    }
  },
  methods:{
    getNumberBuyer(){
      //获取query值（订单号）
        this.orderNumber=this.$route.query.number;
    },
    getOrderBuyer(){
      console.log(this.orderNumber);
      //获取订单详情数据
      this.axios.get(this.oUrl+'/fcexchange/bill/sellerorders/'+this.orderNumber).then((res)=>{
        console.log(res)
        let numberFirst=res.data.billNumber;
        let a=numberFirst.split('');
        let numberLast=a.splice(0,15);
        this.billNumberLast=a.join('');
        this.billNumber=numberLast.join('');
        this.counts=res.data.fcCounts;
        this.interest=res.data.interest;
        var time=res.data.maturityDate;
        var data=new Date(time);
        var Y=data.getFullYear()+'/';
        var M = (data.getMonth()+1 < 10 ? '0'+(data.getMonth()+1) : data.getMonth()+1) + '/';
        var D ='0'+data.getDate() + ' ';
        if(D>=10){ //天数超过两位减掉拼接  '0'
            var D=data.getDate() + ' ';
        }
        this.date=Y+M+D;
      })
    },
    aaa(){
      this.$refs.peperImg.src='data:image/png;base64,'+localStorage.getItem('the')
      window.history.back();
    }
  },
  created(){
    this.getNumberBuyer();
    this.getOrderBuyer()
  },
  components:{
    HeaderUser
  }
}
</script>

<style lang="scss" scoped>
.personal_details{
  width: 100%;
  height:100%;
  // overflow-x: hidden;
  min-width: 1080px;
  .personal_details_con{
    width: 62%;
    height:80%;
    min-width: 704px;
    position: absolute;
    left:50%;
    margin-left: -31%;
    .personal_details_con_peperImg{
      width: 100%;
      height:55%;
      padding-top:3%;
      text-align: center;
      img{
        width: 67%;
        height:100%;
      }
    }
    .personal_details_con_title{
      width: 100%;
      height:5%;
      border-top: 2px solid #eee;
      margin-top:4%;
      padding-top:1%;
      display: flex;
      justify-content:space-around;
      font-size: 1.5rem;
      color:#999;
    }
    .personal_details_con_alt{
      width: 92%;
      display: flex;
      justify-content: space-between;
      box-sizing: border-box;
      padding-left:3%;
      padding-top:1%;
      padding-right:.5%;
      color:#9a9a9a;
    }
    .personal_details_con_alt_back{
      width: 100%;
      height:6%;
      margin-top: 4%;
      text-align: center;
      button{
        width: 12%;
        height:100%;
        background: #5277cc;
        color:white;
        border-radius: 5px;
        font-size: 18px;
      }
    }
  }
}
</style>
