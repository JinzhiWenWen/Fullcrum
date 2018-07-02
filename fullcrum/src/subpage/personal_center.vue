<template lang="html">
  <div class="personal_center">
    <HeaderUser/>
    <div class="content">
      <div class="account_security">
        <p class="account_title">
          <span class="title_left">账户与安全</span>
          <span class="title_right">安全等级：<span style="color:red;">低</span></span>
        </p>
        <div class="account_message">
          <p class="user_name">
            <span class="nick_name">昵称</span>
            <span class="nick_name_last">{{userMessage.username}}</span>
            <span class="nick_mod" @click="change_name">修改</span>
            <input type="text" name=""
            ref="change_name" value=""
            placeholder="请输入用户名"
            v-show="isShowName" class="change_btn">
          </p>
          <p class="user_email">
            <span class="nick_email">邮箱</span>
            <span class="nick_email_last" ref="nick_email">{{userMessage.email}}</span>
            <span class="nick_mod" @click="change_email">绑定</span>
            <input type="text" name=""
            ref="change_email" value=""
            placeholder="请输入邮箱"
            v-show="isShowEmail" class="change_btn">
          </p>
          <p class="user_phone">
            <span class="nick_phone">手机</span>
            <span class="nick_phone_last" ref="nick_phone"></span>
            <span class="nick_mod" @click="change_phone">修改</span>
            <input type="text" name=""
            ref="change_phone" value=""
            placeholder="请输入手机号"
            v-show="isShowPhone" class="change_btn">
          </p>
          <p class="user_pass">
            <span class="nick_pass">登录密码</span>
            <span class="nick_pass_last" ref="nick_pass">******</span>
            <span class="nick_mod" @click="change_pass">修改</span>
            <input type="text" name=""
            ref="change_pass" value=""
            placeholder="请输入登录密码"
            v-show="isShowPass" class="change_btn">
          </p>
          <p class="user_trade">
            <span class="nick_trade">交易密码</span>
            <span class="nick_trade_last" ref="nick_trade">******</span>
            <span class="nick_mod" @click="change_trade">设置</span>
            <input type="text" name=""
            ref="change_trade" value=""
            placeholder="请输入交易密码"
            v-show="isShowTrade" class="change_trade">
          </p>
        </div>
      </div>
      <div class="account_cation">
        <p class="account_title">
          <span class="title_left">身份认证<br/>
            <span style="color:#a1a1a1;font-size:1.2rem;">请您如实填写身份信息，已经认证部分信息不可修改。</span>
          </span>
        </p>
        <div class="account_message">
          <p class="user_num">
            <span class="nick_num">实名认证</span>
            <span class="nick_num_last" ref="nick_num">{{userMessage.userName}}</span>
            <span class="nick_number">{{userMessage.userNum}}</span>
            <span class="nick_mod">修改</span>
          </p>
          <p class="user_senior">
            <span class="nick_senior">高级认证</span>
            <span class="nick_senior_last" ref="nick_senior">{{userMessage.userCation}}</span>
            <span class="nick_mod">认证</span>
          </p>
        </div>
      </div>
      <div class="account_colle">
        <p class="account_title">
          <span class="title_left">收款方式<br/>
            <span style="color:#a1a1a1;font-size:1.2rem;">请务必使用您本人的实名账户，被激活的账户会在交易时向买方展示。</span>
          </span>
        </p>
        <div class="account_message">
          <p class="user_colle">
            <span class="nick_colle">银行卡</span>
            <span class="nick_colle_last" ref="nick_colle">{{userMessage.userBank}}</span>
            <span class="nick_collenum">{{userMessage.userBankNum}}</span>
            <span class="nick_mod">修改</span>
          </p>
          <p class="user_trepay">
            <span class="nick_trepay">支付宝</span>
            <span class="nick_trepay_last" ref="nick_trepay">{{userMessage.userTrePay}}</span>
            <span class="nick_mod">修改</span>
          </p>
          <p class="user_wecpay">
            <span class="nick_wecpay">微信</span>
            <span class="nick_wecpay_last" ref="nick_wecpay">{{userMessage.userWecPay}}</span>
            <span class="nick_mod">添加</span>
          </p>
        </div>
      </div>
      <div class="account_wallt">
        <p class="wallt_title">数字钱包</p>
        <span class="wallt_qr"><img src="../img/qr.png" alt="" title=""></span><br>
        <span class="wallt_address">GYgvuyt5763GVJHVUGY26VJH43<span style="cursor:pointer;color:#98b8f7;text-decoration: underline;">复制</span></span>
      </div>
    </div>
  </div>
</template>

<script>
import HeaderUser from '@/components/header-user'
import {setCookie} from '@/assets/util'
export default {
  data(){
    return{
      isShowName:false,
      isShowEmail:false,
      isShowPhone:false,
      isShowPass:false,
      isShowTrade:false,
      userMessage:{}
    }
  },
  methods:{
    change_name(){
        this.isShowName=!this.isShowName;
    },
    change_email(){
        this.isShowEmail=!this.isShowEmail;
    },
    change_phone(){
        this.isShowPhone=!this.isShowPhone;
    },
    change_pass(){
        this.isShowPass=!this.isShowPass;
    },
    change_trade(){
        this.isShowTrade=!this.isShowTrade;
    },
    getMe(){
      var Id=sessionStorage.getItem('mes');
      this.axios.get(this.oUrl+'/fcexchange/feuser/'+Id).then((res)=>{
        this.userMessage=res.data
      });
      this.axios.get(this.oUrl+'/fcexchange/wallets/'+Id).then((res)=>{
        var waId=res.data[0].id;
        var ress=res.data[0].address;
        setCookie('waId',waId);
        setCookie('ress',ress);
        console.log(this.userMessage.tradePassword)
      })
      if(this.userMessage.tradePassword===null){
        this.$router.push('/personSet')
      }
    }
  },
  created(){
    this.getMe();
  },
  components:{
    HeaderUser
  }
}
</script>

<style lang="scss" scoped>
.personal_center{
  width: 100%;
  height:100%;
  .content{
    width: 820px;
    height:1500px;
    position: absolute;
    left:50%;
    margin-left:-410px;
    padding-top:60px;
    @mixin public-name{
      margin-left:152px;
    }
    @mixin public-btn{
      margin-left: 55%;
      color:#7ea8f5;
      font-size: 1.4rem;
      cursor:pointer;
      position: absolute;
      right:5px;
    }
    .account_security{
      width: 100%;
      height:350px;
      border-radius:12px;
      border:1px solid #f5f5f5;
      box-shadow: 3px 3px 3px #eee;
      padding:24px;
      .account_title{
        padding-bottom:24px;
        border-bottom:2px solid #eee;
        margin-bottom: 14px;
        .title_left{
          font-size: 1.8rem;
          color:#333;
        }
        .title_right{
          margin-left:76%;
          font-size: 1.4rem;
        }
      }
      .account_message{
        padding-left:32px;
        .user_name{
          width:100%;
          height:50px;
          border-bottom:1px solid #eee;
          line-height: 50px;
          position: relative;
          .nick_name{
            font-size: 1.4rem;
            color:#a1a1a1;
          }
          .nick_name_last{
            @include public-name;
            font-size: 1.2rem;
            color:#333;
          }
          .nick_mod{
            @include public-btn;
          }
          .change_btn{
            color:#7ea8f5;
            position:absolute;
            top: 10px;
            left:25%;
            height:26px;
            width: 200px;
          }
        }
        .user_email{
          width:100%;
          height:50px;
          border-bottom:1px solid #eee;
          line-height: 50px;
          position: relative;
          .nick_email{
            font-size: 1.4rem;
            color:#a1a1a1;
          }
          .nick_email_last{
            @include public-name;
            font-size: 1.2rem;
            color:#b0b0b0;
          }
          .nick_mod{
            @include public-btn;
          }
          .change_btn{
            color:#7ea8f5;
            position:absolute;
            top: 10px;
            left:25%;
            height:26px;
            width: 200px;
          }
        }
        .user_phone{
          width:100%;
          height:50px;
          border-bottom:1px solid #eee;
          line-height: 50px;
          position: relative;
          .nick_phone{
            font-size: 1.4rem;
            color:#a1a1a1;
          }
          .nick_phone_last{
            @include public-name;
            font-size: 1.2rem;
            color:#b0b0b0;
          }
          .nick_mod{
            @include public-btn;
          }
          .change_btn{
            color:#7ea8f5;
            position:absolute;
            top: 10px;
            left:25%;
            height:26px;
            width: 200px;
          }
        }
        .user_pass{
          width:100%;
          height:50px;
          border-bottom:1px solid #eee;
          line-height: 50px;
          position: relative;
          .nick_pass{
            font-size: 1.4rem;
            color:#a1a1a1;
          }
          .nick_pass_last{
            margin-left:124px;
            font-size: 1.2rem;
            color:#333;
          }
          .nick_mod{
            @include public-btn;
          }
          .change_btn{
            color:#7ea8f5;
            position:absolute;
            top: 10px;
            left:25%;
            height:26px;
            width: 200px;
          }
        }
        .user_trade{
          width:100%;
          height:50px;
          line-height: 50px;
          position: relative;
          .nick_trade{
            font-size: 1.4rem;
            color:#a1a1a1;
          }
          .nick_trade_last{
            margin-left:124px;
            font-size: 1.2rem;
            color:#b0b0b0;
          }
          .nick_mod{
            @include public-btn;
          }
          .change_trade{
            color:#7ea8f5;
            position:absolute;
            top: 10px;
            left:25%;
            height:26px;
            width: 200px;
          }
        }
      }
    }
    .account_cation{
      width: 100%;
      height:210px;
      border-radius:12px;
      border:1px solid #f5f5f5;
      box-shadow: 3px 3px 3px #eee;
      margin-top:60px;
      padding:24px;
      .account_title{
        padding-bottom:12px;
        border-bottom:2px solid #eee;
        margin-bottom: 14px;
        .title_left{
          font-size: 1.8rem;
          color:#333;
        }
      }
      .account_message{
        padding-left:32px;
        .user_num{
          width:100%;
          height:50px;
          border-bottom:1px solid #eee;
          line-height: 50px;
          position: relative;
          .nick_num{
            font-size: 1.4rem;
            color:#a1a1a1;
          }
          .nick_num_last{
            margin-left:124px;
            font-size: 1.2rem;
            color:#333;
          }
          .nick_number{
            width: 286px;
            position: absolute;
            right:4%;
          }
          .nick_mod{
            @include public-btn;
          }
        }
        .user_senior{
          width:100%;
          height:50px;
          line-height: 50px;
          position: relative;
          .nick_senior{
            font-size: 1.4rem;
            color:#a1a1a1;
          }
          .nick_senior_last{
            margin-left:124px;
            font-size: 1.2rem;
            color:#b0b0b0;
          }
          .nick_mod{
            @include public-btn;
          }
        }
      }
    }
    .account_colle{
      width: 100%;
      height:252px;
      border-radius:12px;
      border:1px solid #f5f5f5;
      box-shadow: 3px 3px 3px #eee;
      margin-top:60px;
      padding:24px;
      .account_title{
        padding-bottom:12px;
        border-bottom:2px solid #eee;
        margin-bottom: 14px;
        .title_left{
          font-size: 1.8rem;
          color:#333;
        }
      }
      .account_message{
        padding-left:32px;
        .user_colle{
          width:100%;
          height:50px;
          border-bottom:1px solid #eee;
          line-height: 50px;
          position: relative;
          .nick_colle{
            font-size: 1.4rem;
            color:#a1a1a1;
          }
          .nick_colle_last{
            margin-left:138px;
            font-size: 1.2rem;
            color:#333;
          }
          .nick_collenum{
            width: 286px;
            position: absolute;
            right:4%;
          }
          .nick_mod{
            @include public-btn;
          }
        }
        .user_trepay{
          width:100%;
          height:50px;
          line-height: 50px;
          border-bottom:1px solid #eee;
          position: relative;
          .nick_trepay{
            font-size: 1.4rem;
            color:#a1a1a1;
          }
          .nick_trepay_last{
            margin-left:138px;
            font-size: 1.2rem;
            color:#333;
          }
          .nick_mod{
            @include public-btn;
          }
        }
        .user_wecpay{
          width:100%;
          height:50px;
          line-height: 50px;
          border-bottom:1px solid #eee;
          position: relative;
          .nick_wecpay{
            font-size: 1.4rem;
            color:#a1a1a1;
          }
          .nick_wecpay_last{
            margin-left:152px;
            font-size: 1.2rem;
            color:#a1a1a1;
          }
          .nick_mod{
            @include public-btn;
          }
        }
      }
    }
    .account_wallt{
      width: 100%;
      height:344px;
      margin-top:60px;
      border-radius:12px;
      box-shadow: 3px 3px 3px #eee;
      border:1px solid #f5f5f5;
      padding:24px;
      text-align: center;
      .wallt_title{
        width: 100%;
        font-size: 1.8rem;
        padding-bottom:24px;
        border-bottom:2px solid #eee;
        text-align: left;
      }
      .wallt_qr{
        margin-top: 52px;
        margin-bottom:24px;
      }
    }
  }
}
</style>
