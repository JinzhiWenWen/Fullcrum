<template lang="html">
  <div class="market_wapper">
    <HeaderMark>
      <p class="slot-mine">票据市场</p>
    </HeaderMark>
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
        <span style="margin-left:112px;">年化收益率</span>
        <span style="margin-left:74px;">期限</span>
        <span style="margin-left:126px;">总价</span>
        <span style="margin-left:130px;">限额 </span>
        <span style="margin-left:230px;">操作</span>
        </p>
      <ul class="note_lists" v-loading="loaDingMark">
        <li v-for="(item,index) in roteList"
        @mouseleave="CancelMove(index)"
        ref='noteList'
        >
          <span class="por">
            <span class="status"></span>
          </span>
          <span class="vendor_name"></span>
          <span class="rete">{{item.interest/1000000000000000000}}%</span>
          <span class="time"></span>
          <span class="total">{{item.billBalance}}.00&nbsp;&nbsp;FC</span>
          <span class="limit"></span>
          <span class="oper">
            <button type="button" name="button" class="prev" @click="showPaper()">预览</button>
            <button type="button" name="button" class="buy" @click="buyChase(index)">购买</button>
          </span>
          <span class="order" ref="order" style="display:none">
            <input type="text" name="" value="" v-model="much" style="padding-left:10px;">
            <span class="unit">FC</span>
            <button type="button" name="button" class="firm" @click="place(index)">下单</button>
            <button type="button" name="button" class="cancel" @click="Cancel(index)">取消</button>
          </span>
        </li>
      </ul>
      <Pager/>
    </div>
    <div class="mask" ref="mask" @click="closePic()">
        <img src="" alt="用户图片"/>
    </div>
    <div class="paper_pic" ref="paperPic">
      <p>根据卖家上传的电子信息生成相对应的信息内容</p>
      <span class="close" @click="closePic">
        <i class="el-icon-close"></i>
      </span>
    </div>
    <div class="pass" ref="pass">
      <span>秘钥：</span>
      <input type="text" ref="tradePass" name=""  value="">
      <button type="button" name="button" @click="turnPlace()">确认</button>
      <button type="button" name="button" style="margin-left:94px;"  @click="closePic()">取消</button>
    </div>
  </div>
</template>

<script>
import HeaderMark from '@/components/header-user'
import Pager from '@/components/pager'
import {getCookie} from '@/assets/util'
import {setCookie} from '@/assets/util'
export default {
  data() {
      return {
        isShowOper:true,
        isShowOrder:false,
        disabled:true,
        much:null,
        toBuy:null,
        loaDingMark:false,
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
        roteList:[],
        contract:null,
        orderNumberMarket:null,
        orderNumberBuyer:null,
        turnKey:null
      }
    },
  methods:{
    showPaper(){
      this.$refs.mask.style.display='block';
      this.$refs.paperPic.style.top="50%";
      console.log(this.$refs.mask);
    },
    closePic(){
      setTimeout(()=>{
        this.$refs.mask.style.display='none';
      },300)
      this.$refs.paperPic.style.top="-500px";
      this.$refs.pass.style.top="-300px";
    },
    buyChase(index){
      this.$refs.noteList[index].childNodes[12].style.display='none'
      this.$refs.noteList[index].childNodes[14].style.display='block'
      this.much='';
      this.contract=this.roteList[index].contractAddress;
      this.orderNumberMarket=this.roteList[index].orderNumber;
    },
    Cancel(index){
      this.$refs.noteList[index].childNodes[12].style.display='block'
      this.$refs.noteList[index].childNodes[14].style.display='none'
      this.much='';
    },
    CancelMove(index){
      this.$refs.noteList[index].childNodes[12].style.display='block'
      this.$refs.noteList[index].childNodes[14].style.display='none'
    },
    place(index){
      if(this.much===''){
        this.$notify.error({
          title: '错误',
          message: '请输入金额',
          offset:100
        });
      }else{
        this.$refs.mask.style.display='block';
        this.$refs.pass.style.top="30%";
      }
    },
    turnPlace(){
      var tradePass=this.$refs.tradePass.value;
      if(tradePass===''){
        this.$notify.error({
          title: '错误',
          message: '请输入交易密码！',
          offset:100
        });
      }else{
        var key=this.$refs.tradePass.value;
        var Atanisi = Math.floor(Math.random() * 999999);
        console.log(Atanisi);
        var myDate = new Date();
       	var tY = myDate.getFullYear();//年
       	var tM = myDate.getMonth()+1;//月
       	 if (tM >= 1 && tM <= 9) {
              tM = "0" + tM;
          }
       	var tD = myDate.getDate();//日
       	 if (tD >= 1 && tD <= 9) {
              tD = "0" + tD;
          }
          this.orderNumberBuyer=tY+tM+tD+Atanisi
          this.turnKey=key
          this.$router.push({
            name:'MarketBuy',
            params:{
              turnkey:this.turnKey,
              contract:this.contract,
              much:this.much,
              orderNumber:this.orderNumberMarket,
              orderNumberBuyer:this.orderNumberBuyer
            }
          })
      }
    },
    getlist(){
      var _this=this;
      _this.loaDingMark=true;
      this.axios.get(this.oUrl+'/fcexchange/bill/sellerorders/availableorders/').then((res)=>{
        _this.loaDingMark=false;
        this.roteList=res.data.value;
        let httpProvider = "http://testnet.nebula-ai.com:8545";
        let web3 = new Web3(httpProvider);
       console.log(this.roteList)
       for (let i in this.roteList){
        const groupon_ctr_addr=this.roteList[i].contractAddress;//合约地址
        this.$http.get('../../static/json/groupon_erc20_abi.json').then((response)=>{
              return response.body;
            }).then((groupon_ctr_abi)=>{
              return new web3.eth.Contract(groupon_ctr_abi, groupon_ctr_addr);
            }).then((groupon_ctr_instance)=>{
              return new Promise((resolve,reject)=>{
                groupon_ctr_instance.methods.fcRaised().call().then(result=>{
                    console.log("FcRaised : "+result);
                    _this.roteList[i].billBalance-result
                    resolve();
                }).catch(reject);
            })
          })
       }


      });


    }
  },
  created(){
    this.getlist()
  },
  components:{
      HeaderMark,
      Pager
    }
}
</script>

<style lang="scss" scoped>
.mark_content{
  width: 1142px;
  height:1116px;
  position: absolute;
  left:50%;
  margin-left: -571px;
  padding-top:50px;
  .select_btn{
    margin-left:88%;
    display:none;//暂不需
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
    margin-top: 70px;
    padding-left:18px;
    border-bottom: 2px solid #eee;
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
        left:310px;
        top:24px;
      }
      .time{
        position: absolute;
        left:444px;
        top:24px;
      }
      .total{
        position:absolute;
        left:584px;
        top:24px;
      }
      .limit{
        position: absolute;
        left:744px;
        top:24px;
      }
      .oper{
        position: absolute;
        right:0;
        top:16px;
        // display: none;
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
        width: 240px;
        height:28px;
        position: absolute;
        right:10px;
        top:18px;
        input{
          width: 110px;
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
          right:53%;
          color:#ddd;
        }
        .firm{
          background: #f08629;
          border-radius:3px;
          font-size: 1.2rem;
          color:white;
        }
        .cancel{
          background: white;
          color:#999;
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
        left:324px;
        top:34px;
      }
      .time{
        left:460px;
        top:34px;
      }
      .total{
        left:600px;
        top:34px;
      }
      .limit{
        left:760px;
        top:34px;
      }
      .order{
        position: absolute;
        right:10px;
        top:26px;
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
.pass{
  width: 300px;
  height:150px;
  position: fixed;
  top:300px;
  left:50%;
  margin-left: -150px;
  background: white;
  transition:all .5s;
  top:-300px;
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
