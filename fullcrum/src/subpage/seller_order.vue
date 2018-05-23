<template lang="html">
  <div class="seller_order">
    <HeaderSeller>
      <p class="slot-mine">票据列表</p>
    </HeaderSeller>
    <div class="seller_order_con">
      <p class="seller_order_chose">
        <span class="seller_btn">
          <el-cascader
              size="small"
              :options="options"
              change-on-select
              :show-all-levels="true"
              placeholder="日期/金额/状态"
            ></el-cascader>
        </span>

        </p>
      <p class="seller_order_title">
        <span>订单号</span>
        <span style="margin-left:202px;">发布日期</span>
        <span style="margin-left:206px;">总价</span>
        <span style="margin-left:236px;">订单状态</span>
        <span style="margin-left:186px;">操作 </span>
        </p>
      <ul class="seller_order_lists">
        <li v-for="(item,index) in note_lists" :key="index">
          <span>{{item.num}}</span>
          <span class="time">{{item.time}}</span>
          <span class="much">{{item.much}}</span>
          <span
          v-show="item.status=='deal'" class="statu"
          style="color:#009944;">已成交
        </span>
          <span
          v-show="item.status=='trading'" class="statu"
          style="color:#5277cc;">
          交易中
        </span>
          <span
          v-show="item.status=='published'" class="statu"
          style="color:#f8b551;"
          >已发布</span>
          <span v-show="item.status=='cancel'" class="statu">已取消</span>
          <span v-show="item.status=='have'" class="statu">已提现</span>
          <span>
            <button
             type="button"
             name="button"
             >查看</button>
            <button
             class="dis"
             type="button"
             name="button"
             disabled="disabled"
             v-show="item.status=='cancel'||item.status=='have'"
             >查看</button>
          </span>
        </li>
      </ul>
      <Pager/>
    </div>
  </div>
</template>

<script>
import HeaderSeller from '@/components/header-seller'
import Pager from '@/components/pager'
export default {
  data(){
    return{
      value:'',
      options: [
        {
          value: 'riqi',
          label: '时间',
          children: [
            {
            value: 'shejiyuanze',
            label: '2018',
            children:[
              {
                value:'One',
                label:'01'
              },
              {
                value:'Two',
                label:'02'
              },
              {
                value:'Three',
                label:'03'
              }
            ]
            },
            {
            value: 'daohang',
            label: '2017',
            children:[
              {
                value:'One',
                label:'1月'
              },
              {
                value:'Two',
                label:'2月'
              },
              {
                value:'Three',
                label:'3月'
              }
            ]
            }
          ]
        },
        {
          value: 'zujian',
          label: '金额',
          children: [{
            value: 'Ten',
            label: '10w以下'
          }, {
            value: 'One_hundred',
            label: '10-100w'
          }, {
            value: 'One_thousand',
            label: '100-1000w',
          }, {
            value: 'Five_thousand',
            label: '1000-5000w'
          }, {
            value: 'Five_thousand+',
            label: '5000w以上'
          }]
        },
        {
          value: 'ziyuan',
          label: '状态',
          children: [{
            value: 'Published',
            label: '已发布'
          }, {
            value: 'Trading',
            label: '交易中'
          }, {
            value: 'Deal',
            label: '已成交'
          }, {
            value: 'Have',
            label: '已提现'
          }, {
            value: 'Cancel',
            label: '已取消'
          }
        ]
        }
      ],
      note_lists:[
        {
          num:'2018050300001',
          time:'2018/5/3',
          much:'200000.00FC',
          status:'published',
          word:''
        },
        {
          num:'2018050300001',
          time:'2018/5/3',
          much:'200000.00FC',
          status:'cancel',
          word:''
        },
        {
          num:'2018050300001',
          time:'2018/5/3',
          much:'200000.00FC',
          status:'published',
          word:''
        },
        {
          num:'2018050300001',
          time:'2018/5/3',
          much:'200000.00FC',
          status:'trading',
          word:''
        },
        {
          num:'2018050300001',
          time:'2018/5/3',
          much:'200000.00FC',
          status:'deal',
          word:''
        },
        {
          num:'2018050300001',
          time:'2018/5/3',
          much:'200000.00FC',
          status:'published',
          word:''
        },
        {
          num:'2018050300001',
          time:'2018/5/3',
          much:'200000.00FC',
          status:'cancel',
          word:''
        },
        {
          num:'2018050300001',
          time:'2018/5/3',
          much:'200000.00FC',
          status:'have',
          word:''
        }
      ]
    }
  },
  components:{
    HeaderSeller,
    Pager
  }
}
</script>

<style lang="scss">
.seller_order_con{
  width: 1128px;
  height:1000px;
  position: absolute;
  left:50%;
  margin-left:-564px;
  padding-top:50px;
  .seller_order_chose{
    margin-bottom: 72px;
    .seller_btn{
      width: 154px;
      margin-left: 86%;
        .el-input{
          border-top:2px solid #ddd;
          border-left:2px solid #ddd;
          border-right:2px solid #ddd;
          border-radius:5px;
          input::-webkit-input-placeholder{
            padding-left: 6px;
            font-size: 1.2rem;
          }
        }
        .el-cascader{
          height:32px;
          .el-input__inner{
            height:32px!important;
            font-size: 1.2rem!important;
            border-bottom:2px solid #ddd;
            border-bottom-left-radius: 6px;
            border-bottom-right-radius: 6px;
            padding-top: 2px;
          }
          .el-cascader__label{
            line-height: 36px;
          }
          .el-input__suffix{
            line-height: 32px;
          }
        }
    }
  }
  .seller_order_title{
    width: 1120px;
    height:30px;
    border-bottom: 2px solid #eee;
    padding-left:26px;
    span{
      font-size: 1.6rem;
      color:#999;
    }
  }
  .seller_order_lists{
    width: 100%;
    li{
      width: 1148px;
      height:68px;
      padding-top:28px;
      padding-bottom:26px;
      border-bottom:1px solid #eee;
      box-sizing: border-box;
      position: relative;
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
      .dis{
        background: #999;
      }
      .time{
        position: absolute;
        left:24.5%;
      }
      .much{
        position: absolute;
        left:46.5%;
      }
      .statu{
        position: absolute;
        left:73%;;
        color:#999;
      }
    }
  }
  .pager{
    position: absolute;
    top:80%;
    right:20px;
  }
}

</style>
