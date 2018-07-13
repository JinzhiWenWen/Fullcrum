<template lang="html">
  <div class="seller-market">
    <HeaderSeller>
      <p class="slot-mine">票据市场</p>
    </HeaderSeller>
    <div class="mark">
      <p class="seller_chose">
        <router-link to="/sellerse" tag="button" class="selBtn">出售票据</router-link>
        <!-- <span class="seller_btn">
          <el-select class="chose_btn" v-model="value" placeholder="发布时间/金额">
            <el-option
              v-for="item in options"
              :key="item.value"
              :label="item.label"
              :value="item.value">
            </el-option>
          </el-select>
        </span> -->
        </p>
      <p class="seller_title">
        <span>商家（成单数 | 完成率）</span>
        <span style="margin-left:116px;">年化收益率</span>
        <span style="margin-left:70px;">期限</span>
        <span style="margin-left:120px;">总价</span>
        <span style="margin-left:142px;">限额 </span>
        <span style="margin-left:300px;">操作</span>
        </p>
      <ul class="seller_lists"
      v-loading="loaDingSellerMark"
      >
        <li
        v-for="(item,index) in roteList"
        >
          <span class="por">
            <span class="status"></span>
          </span>
          <span class="vendor_name"></span>
          <span class="rete">{{item.interest/1000000000000000000}}%</span>
          <span class="time">{{item.time}}</span>
          <span class="total">{{item.fcCounts}}.00 FC</span>
          <span class="limit">{{item.limit}}</span>
          <span class="oper">
            <button type="button" name="button" class="buy" @click="view(index)">预览</button>
          </span>
        </li>
      </ul>
      <Pager/>
      <div class="mask" ref="mask" @click="closePic">

      </div>
      <div class="paper_pic" ref="paperPic">
        <p>根据卖家上传的电子信息生成相对应的信息内容</p>
        <span class="close" @click="closePic">
          <i class="el-icon-close"></i>
        </span>
      </div>
    </div>
  </div>
</template>

<script>
import HeaderSeller from '@/components/header-seller'
import Pager from '@/components/pager'
export default {
  data(){
    return{
      value:null,
      much:null,
      loaDingSellerMark:false,
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
        }
      ],
      roteList:[]
    }
  },
  methods:{
    view(index){
      this.$refs.mask.style.display='block';
      this.$refs.paperPic.style.top="500px";
    },
    closePic(){
      this.$refs.mask.style.display='none';
      this.$refs.paperPic.style.top="-500px";
    },
    getListSellerMark(){
      var _this=this;
      _this.loaDingSellerMark=true;
      _this.axios.get(_this.oUrl+'/fcexchange/bill/sellerorders/availableorders/').then((res)=>{
        _this.loaDingSellerMark=false;
        _this.roteList=res.data.value;
      }).catch((error)=>{
        console.log(error.response)
      })
    }
  },
  created(){
    this.getListSellerMark()
  },
  components:{
    HeaderSeller,
    Pager
  }
}
</script>

<style lang="scss" scoped>
  .mark{
    width: 1128px;
    height:1000px;
    position: absolute;
    left:50%;
    margin-left: -550px;
    padding-top:50px;
    .seller_chose{
      height:34px;
      position: relative;
      .selBtn{
        width: 92px;
        height:32px;
        color:white;
        font-size: 1.6rem;
        background: #4262c3;
        border-radius: 3px;
      }
      .seller_btn{
        width: 130px;
        margin-left: 80%;
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
    }
    .seller_title{
      width: 1120px;
      height:30px;
      margin-top: 72px;
      border-bottom: 2px solid #eee;
      padding-left:18px;
      span{
        font-size: 1.4rem;
        color:#999;
      }
    }
    .seller_lists{
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
          left:290px;
          top:24px;
        }
        .time{
          position: absolute;
          left:414px;
          top:24px;
        }
        .total{
          position:absolute;
          left:540px;
          top:24px;
        }
        .limit{
          position: absolute;
          left:710px;
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
            border:1px solid  #5277cc;
            color:#5277cc;
            background: white;
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
          left:306px;
          top:34px;
        }
        .time{
          left:430px;
          top:34px;
        }
        .total{
          left:555px;
          top:34px;
        }
        .limit{
          left:726px;
          top:34px;
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
  }
</style>
