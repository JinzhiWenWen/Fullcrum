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
        <span class="num">{{item.orderNum}}</span>
        <span class="time">{{item.data}}</span>
        <span class="much">{{item.amount}}</span>
        <span class="statu">{{item.status}}</span>
        <button type="button" name="button">{{item.chose}}</button>
      </li>
    </ul>
    <p class="pager">
      <el-pagination
        background
        layout="prev, pager, next"
        :total="50">
      </el-pagination>
    </p>
  </div>
</template>
<script>
export default {
  data(){
    return{
      noteLists:[
        {
          orderNum:'2018050300001',
          data:'2018/5/3',
          amount:'5,000CNY',
          status:'已成交',
          chose:'查看'
        },
        {
          orderNum:'2018050300001',
          data:'2018/5/3',
          amount:'5,000CNY',
          status:'已成交',
          chose:'查看'
        },
        {
          orderNum:'2018050300001',
          data:'2018/5/3',
          amount:'5,000CNY',
          status:'已成交',
          chose:'查看'
        },
      ]
    }
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
.pager{
  position: absolute;
  top:50%;
  right:20px;
}
</style>
