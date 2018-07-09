<template lang="html">
  <div class="seller_center">
    <HeaderSeller/>
    <div class="content">
      <div class="account_security">
        <p class="account_title">
          <span class="title_left">账户与安全</span>
          <span class="title_right">安全等级：<span style="color:red;">低</span></span>
        </p>
        <div class="account_message">
          <p class="user_name">
            <span class="nick_name">昵称</span>
            <span class="nick_name_last">{{userMessage.userName}}</span>
          </p>
          <p class="user_email">
            <span class="nick_email">邮箱</span>
            <span class="nick_email_last" ref="nick_email">{{userMessage.Email}}</span>
          </p>
          <p class="user_phone">
            <span class="nick_phone">手机</span>
            <span class="nick_phone_last" ref="nick_phone"></span>
            <input type="text" name=""
            ref="change_phone" value=""
            placeholder="请输入手机号"
            class="change_btn">
          </p>
          <p class="user_pass">
            <span class="nick_pass">登录密码</span>
            <span class="nick_pass_last" ref="nick_pass"></span>
            <input type="text" name=""
            ref="change_pass" value=""
            placeholder="请输入登录密码"
            class="change_btn">
          </p>
          <p class="user_trade">
            <span class="nick_trade">交易密码</span>
            <span class="nick_trade_last" ref="nick_trade"></span>
            <input type="text" name=""
            ref="change_trade" value=""
            placeholder="请输入交易密码"
            class="change_trade">
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
            <span class="nick_num_last" ref="nick_num"></span>
            <span class="nick_number"></span>
            <span class="nick_mod">认证</span>
          </p>
          <p class="user_senior">
            <span class="nick_senior">商家认证</span>
            <span class="nick_senior_last" ref="nick_senior"></span>
            <span class="nick_mod">认证</span>
          </p>
        </div>
      </div>
      <div class="account_colle">
        <p class="account_title">
          <span class="title_left">企业认证<br/>
            <span style="color:#a1a1a1;font-size:1.2rem;">请务必使用真实的企业账户，被激活的部分账户信息会在交易时向买方展示。 </span>
          </span>
          </p>
        <div class="company_message">
          <p class="company">
            <span class="company_name">公司名称</span>
            <span class="company_name_last">
              <input type="text" placeholder="请输入企业名称（全称）" name="" value="">
            </span>
            </p>
          <p class="company">
            <span class="company_name">企业固话</span>
            <span class="company_name_last">
              <input type="text" placeholder="请输入企业固话" name="" value="">
            </span>
            </p>
          <p class="company">
            <span class="company_name">企业银行账号</span>
            <span class="cor_banknum">
              <input type="text" placeholder="请输入企业行号" name="" value="">
            </span>
            </p>
          <p class="company">
            <span class="company_name">大额行号</span>
            <span class="company_name_last">
              <input type="text" placeholder="请输入企业大额行号" name="" value="">
            </span>
            </p>
          <p class="company">
            <span class="company_name">手机号</span>
            <span class="phone_num">
              <input type="text" placeholder="请输入手机号" name="" value="">
            </span>
            </p>
          <p class="company">
            <span class="company_name">邮箱</span>
            <span class="email_num">
              <input type="text" name="" placeholder="请输入企业邮箱" value="">
            </span>
            </p>
        </div>
      </div>
      <p class="save_seller">
        <button type="button" name="button">保存</button>
      </p>
    </div>
  </div>
</template>

<script>
import HeaderSeller from '@/components/header-seller'
import {getCookie} from '@/assets/util'
import {setCookie} from '@/assets/util'
export default {
  data(){
    return{
      userMessage:{},
      token:null,
    }
  },
  methods:{
    obUser(){
      var Id=getCookie('mes');
      this.axios.get(this.oUrl+'/fcexchange/feuser/'+Id).then((res)=>{
        this.userMessage=res.data.value
        console.log(res)
      });
      if(getCookie('ide')==='buyer'){
        this.$router.push('/')
      }
    }
  },
  created(){
    this.obUser()
  },
  components:{
    HeaderSeller
  }
}
</script>

<style lang="scss">
.seller_center{
  width: 100%;
  height:100%;
  .content{
    width: 42%;
    height:100%;
    position: absolute;
    left:50%;
    margin-left:-21%;
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
      .company_message{
        width: 100%;
        padding-left:32px;
        .company{
          width: 100%;
          height:50px;
          line-height: 50px;
          border-bottom:1px solid #eee;
          position: relative;
          .company_name{
            font-size: 1.2rem;
            color:#999;
          }
          .company_name_last{
            margin-left: 124px;
            color:#999;
          }
          .push_btn{
            @include public-btn;
          }
          .cor_banknum{
            margin-left:99px;
            color:#999;
          }
          .phone_num{
            margin-left: 136px;
            color:#999;
          }
          .email_num{
            margin-left:148px;
            color:#999;
          }
        }
      }
    }
    .save_seller{
      width: 100%;
      height:25%;
      text-align: center;
      padding-top:4%;
      button{
        width:14.2%;
        height:30%;
        border-radius:5px;
        background: #5277cc;
        color:white;
        font-size: 1.6rem;
      }
    }
  }
}
</style>
