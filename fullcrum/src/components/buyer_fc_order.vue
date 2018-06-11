<template lang="html">
  <div class="fcorder">
    <p class="fcorder_title">
      <span>订单号</span>
      <span style="margin-left:104px;">日期</span>
      <span style="margin-left:114px;">购入金额</span>
      <span style="margin-left:534px;">订单状态</span>
      <span style="margin-left:82px;">操作 </span>
    </p>
    <ul class="note_lists">
      <li v-for="(item,index) in noteLists">
        <span class="num">{{item.orderNumber}}</span>
        <span class="time">{{item.createAt}}</span>
        <span class="much">{{item.fcCounts}}</span>
        <span class="statu">{{item.status}}</span>
        <button type="button" name="button">查看</button>
      </li>
    </ul>
    <Pager/>
  </div>
</template>
<script>
import Pager from '@/components/pager'
export default {
  data(){
    return{
      noteLists:null
    }
  },
  methods:{
    getOrder(){
      // var waId=sessionStorage.getItem('waId');
      var waId='wid001';
      this.axios.get(this.oUrl+'/fcexchange/fcorders/'+waId).then((res)=>{
        this.noteLists=res.data;
        console.log(this.noteLists)
      })
    }
  },
  mounted(){
    this.getOrder()
  },
  components:{
    Pager
  }
}
</script>

<style lang="scss" scoped>
.fcorder_title{
  width: 1120px;
  height:30px;
  border-bottom: 2px solid #eee;
  padding-left:26px;
  span{
    font-size: 1.6rem;
    color:#999;
  }
}
.note_lists{
  width: 100%;
  height:auto;
  li{
    height:68px;
    padding-top:28px;
    padding-bottom:26px;
    border-bottom:1px solid #eee;
    box-sizing: border-box;
    position: relative;
    .time{
      position: absolute;
      left:15%;
    }
    .much{
      position: absolute;
      left:29.2%;
    }
    .statu{
      position: absolute;
      left:82.8%;
    }
    button{
      width:92px;
      height:32px;
      font-size: 1.6rem;
      background: #5277cc;
      color:white;
      border-radius: 5px;
      position: absolute;
      right:0;
      top:20px;
    }
  }
}

</style>
