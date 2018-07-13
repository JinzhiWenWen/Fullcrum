<template lang="html">
    <div class="sell">
      <!-- <p class="select_btn">
        <el-select class="chose_btn" v-model="value" placeholder="支付方式">
          <el-option
            v-for="item in options"
            :key="item.value"
            :label="item.label"
            :value="item.value">
          </el-option>
        </el-select>
        </p> -->
      <p class="mark_title">
        <span>商家（成单数 | 完成率）</span>
        <span style="margin-left:120px;">收购数量</span>
        <span style="margin-left:74px;">限额</span>
        <span style="margin-left:118px;">收购单价</span>
        <span style="margin-left:126px;">支付方式 </span>
        <span style="margin-left:200px;">操作</span>
      </p>
      <ul class="note_lists" v-loading="loaDingFcSell">
        <li
        v-for="(item,index) in roteList"
        @mouseleave="CancelMove(index)"
        >
          <span class="por">
            <span class="status"></span>
          </span>
          <span class="vendor_name">{{item.VendorName}}</span>
          <span class="rete">{{item.Num}}</span>
          <span class="time">{{item.Limit}}</span>
          <span class="total">{{item.Per}}</span>
          <span class="pay_way" v-show="item.isShowPay">
            <i class="iconfont icon-bank icon-iconfontjikediancanicon20"></i>
            <i class="iconfont icon-zhifubaozhifu"></i>
            <i class="iconfont icon-logo-wechat"></i>
          </span>
          <span class="oper" v-show="item.isShowOper">
            <button type="button" name="button" class="buy" @click="buyChase(index)">出售</button>
          </span>
          <span class="order" v-show="item.isShowOrder">
            <span class="icon"></span>
            <input type="text" name="" ref="aaa" value="item.val" v-model="much" style="padding-left:10px;margin-bottom:6px;">
            <span class="unit">FC</span>
            <input type="text" name="" value="1" style="padding-left:10px;color:#ccc;">
            <span class="cnyt">CNY</span>
            <button type="button" name="button" class="firm" @click="place()">下单</button>
            <button type="button" name="button" class="cancel" @click="Cancel(index)">取消</button>
          </span>
        </li>
      </ul>
      <Pager/>
      <div class="mask_pur" ref="mask_pur">

      </div>
      <div class="pass_pur" ref="pass_pur">
        <span>交易密码：</span>
        <input type="password" ref="tradePass" name=""  value="">
        <button type="button" name="button" @click="turnPlace()">确认</button>
        <button type="button" name="button" style="margin-left:94px;"  @click="closePic()">取消</button>
      </div>
    </div>
</template>

<script>
import Pager from '@/components/pager'
export default {
  data() {
      return {
        disabled:true,
        options: [
          {
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
        much:'',
        loaDingFcSell:true,
        roteList:[]
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
    buyChase(index){
      this.roteList[index].isShowOper=false;
      this.roteList[index].isShowOrder=true;
      this.roteList[index].isShowPay=false;
      this.much=''
    },
    Cancel(index){
      this.roteList[index].isShowOper=true;
      this.roteList[index].isShowOrder=false;
      this.roteList[index].isShowPay=true;
      this.much=''
    },
    CancelMove(index){
      this.roteList[index].isShowOper=true;
      this.roteList[index].isShowOrder=false;
      this.roteList[index].isShowPay=true;
    },
    closePic(){
      setTimeout(()=>{
        this.$refs.mask_pur.style.display='none';
      },300)
      this.$refs.pass_pur.style.top="-100%";
    },
    place(){
      if(this.much===''){
        this.$notify.error({
          title: '错误',
          message: '请输入金额',
          offset:100
        });
      }else{
        this.$refs.mask_pur.style.display='block';
        this.$refs.pass_pur.style.top="30%";
      }
    },
    turnPlace(){
      var tradePass=this.$refs.tradePass.value;
        if(tradePass===''){
          this.$notify.error({
            title: '错误',
            message: '请输入交易密码',
            offset:100
          });
        }else{
          this.axios.post(this.oUrl+'/fcexchange/fcorder',
          {header:{'Content-Type':'application/json'}},
          {
            'fcCounts':this.much,
            'orderType':'buy',
            'feWallet':{
              'id':'',
              'address':''
            }
          }
        ).then((res)=>{
          console.log(res)
        })
        }
    }
  },
  components:{
    Pager
  }
}
</script>

<style lang="scss">
.sell{
  width: 1040px;
  height:1116px;
  .mask_pur{
    width: 100%;
    height:3400px;
    position: fixed;
    top:0;
    left:0;
    background: black;
    opacity: .5;
    display: none;
  }
  .pass_pur{
    width: 300px;
    height:150px;
    position: fixed;
    top:-100%;
    left:50%;
    margin-left: -150px;
    background: white;
    transition:all .5s;
    padding-top:50px;
    padding-left:20px;
    span{
      font-size: 1.6rem;
    }
    input{
      border-bottom: 1px solid #eee;
    }
    button{
      width: 82px;
      height:32px;
      border-radius: 5px;
      margin-top: 30px;
      background: #5277cc;
      color:white;
    }
  }
  .select_btn{
    position: absolute;
    top:3.5%;
    margin-left:88%;
    display: none;//暂无需
    .chose_btn{
      width: 130px;
      height:32px;
      .el-input{
        border-top:2px solid #ddd;
        border-left:2px solid #ddd;
        border-right:2px solid #ddd;
        border-radius:5px;
        input::-webkit-input-placeholder{
          padding-left: 6px;
        }
      }
      .el-input--suffix{
        height:32px;
        .el-input__inner{
          height:32px;
          font-size: 1.2rem;
          border-bottom:2px solid #ddd;
          border-bottom-left-radius: 6px;
          border-bottom-right-radius: 6px;
        }
        .el-input__suffix{
          line-height: 32px;
        }
      }
    }
  }
  .mark_title{
    width: 1120px;
    height:30px;
    border-bottom: 2px solid #eee;
    padding-left:18px;
    span{
      font-size: 1.6rem;
      color:#999;
    }
  }
  .note_lists{
    width: 100%;
    height:auto;
    li{
      width: 1110px;
      height:64px;
      padding-top:16px;
      padding-bottom:10px;
      border-bottom:1px solid #eee;
      box-sizing: border-box;
      position: relative;
      margin-left: 16px;
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
        left:600px;
        top:24px;
        color:#72a485;
      }
      .pay_way{
        width: 80px;
        height:20px;
        text-align: center;
        position: absolute;
        left:780px;
        top:24px;
        i{
          font-size: 2rem;
        }
        .icon-bank{
          color:#ea986c;
        }
        .icon-zhifubaozhifu{
          color:#1296db;
        }
        .icon-logo-wechat{
          color:#50b674;
        }
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
      .order{
        width: 306px;
        height:56px;
        position: absolute;
        right:12px;
        top:1px;
        .icon{
          width: 22px;
          height:38px;
          background: red;
          position: absolute;
          left:-26px;
          top:20%;
          background: url('../img/reverse.png');
        }
        input{
          width: 182px;
          height:24px;
          border:1px solid #ccc;
          border-radius: 5px;
        }
        button{
          width: 50px;
          height:28px;
        }
        .unit{
          position: absolute;
          top:6px;
          right:40%;
          color:#ddd;
        }
        .cnyt{
          position: absolute;
          top:40px;
          right:40%;
          color:#ddd;
        }
        .firm{
          background: #f08629;
          border-radius:3px;
          font-size: 1.2rem;
          color:white;
          position: absolute;
          top:14px;
          left:64.5%;
        }
        .cancel{
          background: white;
          color:#999;
          position: absolute;
          top:14px;
          right:6px;
        }
      }
    }
    li:hover{
      box-shadow: 0 0 15px #ccc;
      border-radius: 5px;
      width: 1140px;
      height:84px;
      padding-top:26px;
      padding-left:10px;
      padding-right:10px;
      margin-left: 0;
      .oper{
        top:26px;
        right:12px;
      }
      .vendor_name{
        left:62px;
        top:34px;
      }
      .rete{
        left:302px;
        top:34px;
      }
      .time{
        left:430px;
        top:34px;
      }
      .total{
        left:616px;
        top:34px;
      }
      .pay_way{
        left:796px;
        top:34px;
      }
      .order{
        position: absolute;
        right:12px;
        top:12px;
      }
    }
  }
}
</style>
