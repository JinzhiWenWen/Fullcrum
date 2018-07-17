<template lang="html">
  <div class="personal_details">
    <HeaderUser>
      <p class="slot-mine">订单详情</p>
    </HeaderUser>
    <div class="personal_details_con">
      <p>票据编号：{{billNumber}}</p>
      <p>票据总额：{{counts}}.00 FC</p>
    </div>
  </div>
</template>

<script>
import HeaderUser from '@/components/header-user'
export default {
  data(){
    return{
        orderNUmber:null,
        billNumber:null,
        counts:null
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
        this.billNumber=res.data.bankId;
        this.counts=res.data.fcCounts
      })
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
  .personal_details_con{
    width: 70%;
    height:80%;
    background: red;
    position: absolute;
    left:50%;
    margin-left: -35%;
  }
}
</style>
