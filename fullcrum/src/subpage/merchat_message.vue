<template lang="html">
  <div class="merchat_message">
    <HeaderUser>
      <p class="slot-mine">商家申请</p>
    </HeaderUser>
    <div class="merchat_mes_con">
      <div class="merchat_mes_mess">
        <p class="merchat_mes_title">申请资料填写</p>
        <p class="merchat_mes_num">手机号<input type="text" placeholder="未填写"/></p>
        <p class="merchat_mes_num">QQ号<input type="text" placeholder="未填写"/></p>
        <p class="merchat_mes_num">微信号<input type="text" placeholder="未填写"/></p>
        <p class="merchat_mes_num">邮箱<input type="text" placeholder="未填写"/></p>
        <p class="merchat_mes_num">数字资产折合人民币<input type="text" placeholder="未填写"/></p>
        <p class="merchat_mes_num">计划投入OTC资金<input type="text" placeholder="未填写"/></p>
        <p class="merchat_mes_instructions">
          个人情况介绍（包括数字资产投资及产品情况介绍）
          <br>
          <textarea name="name" rows="4" cols="40"></textarea>
        </p>
        <p class="merchat_mes_instructions">
          个人风控策略介绍
          <br>
          <textarea name="name" rows="4" cols="40"></textarea>
        </p>
        <p class="merchat_mes_prove">
          资产证明（截图：本人实名银行卡余额截图或对应银行卡近一个月银行流水截图）
          <br>
          <span @mouseenter="show" @mouseleave="hide" class="me_upload">
            <div class="uploader" v-show="isShow">
              <el-upload
                action="https://jsonplaceholder.typicode.com/posts/"
                list-type="picture-card"
                class="uploader-btn"
                :on-preview="handlePictureCardPreview"
                :on-remove="handleRemove"
                :limit="1">
                <i class="el-icon-plus"></i>
                <span class="el-title">点击添加图片</span>
              </el-upload>
              <el-dialog :visible.sync="dialogVisible">
                <img width="100%" :src="dialogImageUrl" alt="">
              </el-dialog>
            </div>
          </span>
          </p>
      </div>
      <p class="merchat_mes_chose">
        <button type="button" name="button" class="mesBack" @click="mesBack()">上一步</button>
        <!-- <button type="button" name="button" class="turn">提交</button> -->
        <router-link to="/merchatsub" tag="button" class="turn">提交</router-link>
      </p>
    </div>
  </div>
</template>

<script>
import HeaderUser from '@/components/header-user'
export default {
  data(){
    return{
      isShow:false
    }
  },
  components:{
    HeaderUser
  },
  methods:{
    show(){
      this.isShow=true;
    },
    hide(){
      this.isShow=false;
    },
    mesBack(){
      window.history.back()
    }
  }
}
</script>

<style lang="scss" scoped>
.merchat_message{
  width: 100%;
  height:auto;
  .merchat_mes_con{
    width: 1142px;
    height:auto;
    position: absolute;
    left:50%;
    margin-left: -571px;
    padding-top:60px;
    padding-bottom:142px;
    .merchat_mes_mess{
      width:100%;
      height:auto;
      box-shadow: 3px 3px 3px #eee;
      border-radius: 12px;
      border:1px solid #eee;
      padding:0 32px 40px 32px;
      .merchat_mes_title{
        width: 100%;
        border-bottom:2px solid #eee;
        box-sizing: border-box;
        padding-top:25px;
        padding-bottom:25px;
        font-size: 1.8rem;
        margin-bottom:10px;
      }
      .merchat_mes_num{
        width: 100%;
        padding-top:24px;
        padding-bottom:12px;
        border-bottom:1px solid #eee;
        color:#999;
        font-size: 14px;
        position: relative;
        input{
          position: absolute;
          top:47%;
          left:18.6%;
        }
      }
      .merchat_mes_instructions{
        width: 100%;
        margin-top: 24px;
        height:146px;
        color:#999;
        textarea{
          width: 100%;
          box-sizing: border-box;
          height:120px;
          margin-top: 12px;
          resize:none;
          background: #eee;
          border:0;
          outline: none;
        }
      }
      .merchat_mes_prove{
        width: 100%;
        margin-top: 24px;
        height:300px;
        color:#999;
        .me_upload{
          width:200px;
          height:272px;
          background: #999;
          border-radius: 3px;
          position: relative;
          color:white;
          margin-top:26px;
          margin-left: 40%;
          .uploader{
            position:absolute;
            top:0;
            left:0;
            .el-title{
              width: 100px;
              height:100px;
              position: absolute;
              top:20%;
              background: black;
              left:25%;
              font-size: 1.4rem;
              z-index: -1;
            }
          }
        }
      }
    }
    .merchat_mes_chose{
      width: 100%;
      height:160px;
      line-height:160px;
      text-align: center;
      button{
        width:120px ;
        height:40px;
        border-radius: 5px;
        font-size: 1.8rem;
      }
      .mesBack{
        background: white;
        color:#5277cc;
        border:2px solid #5277cc;
        margin-right: 10px;
      }
      .turn{
        background: #5277cc;
        color:white;
        margin-right: 10px;
      }
    }
  }
}
span{
  width: 200px;
  height:272px;
  background: #999;
  border-radius: 3px;
  position: relative;
  color:white;
  .uploader{
    position:absolute;
    top:0;
    left:0;
    .el-title{
      width: 100px;
      height:100px;
      position: absolute;
      top:20%;
      background: black;
      left:25%;
      font-size: 1.4rem;
      z-index: -1;
    }
    .uploader-btn{
      .el-upload--picture-card{
        width: 200px;
        height:272px;
        border:0;
        line-height: 272px;
        border-radius: 3px;
        background: black;
        opacity: .5;
        .el-icon-plus{
          color:white;
          font-size: 11rem;
        }
      }
    }
  }
}
</style>
