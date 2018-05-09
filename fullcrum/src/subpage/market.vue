<template lang="html">
  <div class="market_wapper">
    <HeaderMark/>
    <div class="mark_content">
      <p class="select_btn">
        <el-select class="chose_btn" v-model="value" placeholder="支付方式">
          <el-option
            v-for="item in options"
            :key="item.value"
            :label="item.label"
            :value="item.value">
          </el-option>
        </el-select>
        </p>
      <p class="mark_title">
        <span>商家（成单数 | 完成率）</span>
        <span style="margin-left:90px;">年化收益率</span>
        <span style="margin-left:66px;">期限</span>
        <span style="margin-left:118px;">总价</span>
        <span style="margin-left:126px;">支付方式 </span>
        <span style="margin-left:260px;">操作</span>
      </p>
      <ul class="note_lists">
        <li v-for="item in roteList">
          <span class="por">
            <span class="status"></span>
          </span>
          <span class="vendor_name">{{item.VendorName}}</span>
          <span class="rete">{{item.Rete}}</span>
          <span class="time">{{item.Time}}</span>
          <span class="total">{{item.Total}}FC</span>
          <span class="pay_way">
            icon
          </span>
          <span class="oper">
            <button type="button" name="button" class="prev">预览</button>
            <button type="button" name="button" class="buy">购买</button>
          </span>
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
    <div class="mask">

    </div>
    <div class="paper_pic">

    </div>
  </div>
</template>

<script>
import HeaderMark from '@/components/header-market'
export default {
  data() {
      return {
        options: [{
          value: '选项1',
          label: '海绵宝宝'
        }, {
          value: '选项2',
          label: '派大星'
        }, {
          value: '选项3',
          label: '章鱼哥'
        }, {
          value: '选项4',
          label: '蟹老板'
        }],
        value: '',
        roteList:[
          {
            VendorName:'海绵海绵我是大星（123 | 97%）',
            Rete:'9.45%',
            Time:'6个月',
            Total:'100000.00'
          },
          {
            VendorName:'派大星（793 | 95%）',
            Rete:'9.85%',
            Time:'8个月',
            Total:'300000.00'
          },
          {
            VendorName:'章鱼哥（685 | 99%）',
            Rete:'9.65%',
            Time:'030天',
            Total:'1000000.00'
          },
          {
            VendorName:'蟹老板（3354 | 99%）',
            Rete:'9.95%',
            Time:'070天',
            Total:'2300000.00'
          }
        ]
      }
    },
  components:{
      HeaderMark
    }
}
</script>

<style lang="scss">
.mark_content{
  width: 1100px;
  height:1116px;
  position: absolute;
  left:50%;
  margin-left: -550px;
  padding-top:50px;
  .select_btn{
    margin-left:88%;
    .chose_btn{
      width: 130px;
      height:32px;
      .el-input{
        border-top:2px solid #ddd;
        border-left:2px solid #ddd;
        border-right:2px solid #ddd;
        border-radius:5px;
      }
      .el-input--suffix{
        height:32px;
        .el-input__inner{
          height:32px;
          font-size: 1.2rem;
          border-bottom:2px solid #ddd;
        }
        .el-input__suffix{
          line-height: 32px;
        }
      }
    }
  }
  .mark_title{
    width: 100%;
    height:30px;
    margin-top: 70px;
    border-bottom: 2px solid #eee;
    span{
      font-size: 1.6rem;
      color:#999;
    }
  }
  .note_lists{
    width: 100%;
    height:64px;
    li{
      width: 100%;
      height:64px;
      padding-top:16px;
      padding-bottom:10px;
      border-bottom:1px solid #eee;
      box-sizing: border-box;
      position: relative;
      span{
        font-size: 1.4rem;
      }
      .por{
        width: 36px;
        height:36px;
        border-radius: 50%;
        background: #999;
        position: relative;
        .status{
          width:8px;
          height:8px;
          border-radius: 50%;
          background: #0fd12a;
          position: absolute;
          top:80%;
          left:70%;
        }
      }
      .vendor_name{
        color:#4a78bf;
        position: absolute;
        left:50px;
        top:24px;
      }
      .rete{
        position: absolute;
        left:286px;
        top:24px;
      }
      .time{
        position: absolute;
        left:414px;
        top:24px;
      }
      .total{
        position:absolute;
        left:550px;
        top:24px;
      }
      .pay_way{
        width: 60px;
        height:20px;
        background: #999;
        text-align: center;
        position: absolute;
        left:734px;
        top:24px;
      }
      .oper{
        position: absolute;
        right:0;
        top:16px;
        button{
          width: 92px;
          height:32px;
          border-radius: 5px;
          cursor:pointer;
        }
        .prev{
          border:1px solid  #5277cc;
          color:#5277cc;
          background: white;
        }
        .buy{
          background: #5277cc;
          color:white;
        }
      }
    }
  }
  .pager{
    position: absolute;
    bottom:584px;
    right:0;
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
  height:550px;
  background: white;
  top:50%;
  left:50%;
  margin-left:-375px;
  margin-top:-275px;
  display: none;
}
</style>
