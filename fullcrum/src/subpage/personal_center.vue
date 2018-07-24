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
            <span class="nick_phone_last" ref="nick_phone">{{userMessage.phone}}</span>
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
            <span class="nick_mod" @click="trepayQr()">添加</span>
          </p>
          <p class="user_wecpay">
            <span class="nick_wecpay">微信</span>
            <span class="nick_wecpay_last" ref="nick_wecpay">{{userMessage.userWecPay}}</span>
            <span class="nick_mod" @click="wecahtQr()">添加</span>
          </p>
          <div class="upLoadPay" ref="upLoadPay">
            <div class="" style="">
              <div class="inMask" v-show="isShow" @mouseleave="hideIn()">
                <input type="file" accept="image/jpg" class="upload" name="" @change="upQr">
                <i class="el-icon-plus"></i>
                <br>
                <span  class="in_title">点击添加图片</span>
              </div>
              <div class="showIm" @mouseenter="showIn()"
              v-loading="selLoading"
              element-loading-text="请稍后"
              element-loading-spinner="el-icon-loading"
              element-loading-background="rgba(0,0,0,.8)"
              >
                <img src="../img/Banner.png" alt="" ref="Qr">
              </div>
            </div>
            <p class="turnUp"><button type="button" class="" @click="turnUp()"
              v-loading="loadingUpQr"
              element-loading-text="上传中"
              element-loading-spinner="el-icon-loading"
              element-loading-background="#5277cc"
              >确定</button></p>
            <span class="closeIcon" @click="closeUp()">X</span>
          </div>
        </div>
      </div>
      <div class="account_wallt">
        <p class="wallt_title">数字钱包</p>
        <span class="wallt_qr"><div id="qrcode"></div></span><br>
        <span class="wallt_address">{{ress}}<span style="cursor:pointer;color:#98b8f7;text-decoration: underline;">复制</span></span>
      </div>
    </div>
    <div class="personCen_mask" v-show="personShow" @click="closeUp()">

    </div>
  </div>
</template>

<script>
import HeaderUser from '@/components/header-user'
import {setCookie} from '@/assets/util'
import {getCookie} from '@/assets/util'
export default {
  data(){
    return{
      ress:null,
      isShowName:false,
      isShowEmail:false,
      isShowPhone:false,
      isShowPass:false,
      isShowTrade:false,
      isShow:false,
      selLoading:false,
      personShow:false,
      loadingUpQr:false,
      imgType:0,//1为支付宝二维码，2为微信二维码
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
      var Id=getCookie('mes');
      var phone=getCookie('phone');

      if(phone=="null"){
        this.$router.push('/personSet')
      }else{
        this.axios.get(this.oUrl+'/fcexchange/feuser/'+Id).then((res)=>{
          console.log(res)
          this.userMessage=res.data.value
        });
      }

    },
    _getQrcode(){
      this.ress = getCookie('ress');
      var qrcode = new QRCode(document.getElementById("qrcode"), {width : 150,height : 150});
      let ress_addr =this.ress;
      qrcode.makeCode(ress_addr)
    },
    trepayQr(){
      // alert('111')
      this.personShow=true;
      this.$refs.upLoadPay.style.top="30%";
      this.$refs.upLoadPay.style.opacity="1";
      this.imgType=1;
    },
    wecahtQr(){
      this.personShow=true;
      this.$refs.upLoadPay.style.top="30%";
      this.$refs.upLoadPay.style.opacity="1";
      this.imgType=2;
    },
    closeUp(){
      this.$refs.upLoadPay.style.top="15%";
      this.$refs.upLoadPay.style.opacity="0"
      setTimeout(()=>{
        this.personShow=false;
      },300)
    },
    turnUp(){
      this.loadingUpQr=true;
      let imgQr=window.localStorage.getItem('Qr');
      let Id=getCookie('mes');
      let tok=getCookie('token');
      this.axios.post(this.oUrl+'/fcexchange/feusers/document',[{
        uid:Id,
        file:imgQr,
        documentType:this. imgType,
        mimeType:'jpg'
      }],
      {headers:{
        'Content-Type':'application/json',
        'Accept':'application/json',
        'Authorization':tok
      }}
    ).then((res)=>{
      this.loadingUpQr=false;
      localStorage.clear()
    }).catch((error)=>{
      console.log(error.response)
    })
    },
    upQr(e){
      var _this=this;
      _this.selLoading=true;
      let file = e.target.files[0];
      //通过canvas压缩图片
      var reader=new FileReader();
      reader.readAsDataURL(file);
      // var result=reader.result
      var img=new Image;
      reader.onload=function(e){
        var width=400,
        quality=0.1,
        canvas=document.createElement("canvas"),
        drawer=canvas.getContext("2d");
        img.src=this.result;
        img.onload=()=>{
          canvas.width=width;
          canvas.height=width*(img.height/img.width);
          drawer.drawImage(img,0,0,canvas.width,canvas.height);
          img.src=canvas.toDataURL('image/png',quality);
        }
      };
      setTimeout(()=>{
        // this.picIs=img.src
        var Is=img.src.split('');
        var IsStr=Is.splice(0,22);
        window.localStorage.setItem('Qr',Is.join(''))
        this.$refs.Qr.src=img.src;
        _this.selLoading=false;
      },500)
    },
    showIn(){
      this.isShow=true
    },
    hideIn(){
      this.isShow=false
    }
  },
  created(){
    this.getMe();
  },
  mounted(){
    this._getQrcode();
  },
  components:{
    HeaderUser
  }
}
</script>

<style lang="scss" scoped>
.personal_center{
  .personCen_mask{
    width: 100%;
    height:100%;
    background: rgba(0,0,0,.5);
    position:fixed;
    top:0;
    left:0;
    z-index: 500;
  }
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
        .upLoadPay{
          width: 20%;
          height:30%;
          min-height: 285px;
          min-width:380px;
          background: white;
          position: fixed;
          top:15%;
          opacity: 0;
          left:50%;
          margin-left: -10%;
          border-radius: 5px;
          z-index: 505;
          transition: all 1s;
          .inMask{
            width: 40%;
            height:50%;
            background: rgba(0,0,0,.5);
            text-align: center;
            box-sizing: border-box;
            position: absolute;
            top:15%;
            left:30%;
            border-radius:5px;
            z-index: 1;
            .upload{
              width: 100%;
              height:100%;
              cursor:pointer;
              opacity:0;
              z-index: 100;
            }
            .el-icon-plus{
              font-size:6rem;
              color:white;
              opacity:.9;
              position: absolute;
              left:33%;
              top:20%;
              z-index: -1;
            }
            .in_title{
              width: 100%;
              margin-top:10px;
              color:white;
              opacity:.9;
              font-size: 1.4rem;
              position: absolute;
              left:0;
              top:60%;
              z-index: 1;
            }
          }
          .showIm{
            width: 40%;
            height:50%;
            position: absolute;
            left:30%;
            background: rgba(0,0,0,.8);
            top:15%;
            border-radius:5px;
            img{
              width: 100%;
              height:100%;
              border-radius: 5px;
            }
          }
          .turnUp{
            width: 100%;
            text-align: center;
            position: absolute;
            bottom:0;
            padding-bottom: 3%;
            height:13%;
            button{
              width: 20%;
              height:100%;
              border-radius:5px;
              background: #5277cc;
              color:white;
            }
          }
          .closeIcon{
            position:absolute;
            right:5%;
            top:5%;
            width: 7%;
            height:8%;
            background: #5277cc;
            text-align: center;
            border-radius:50%;
            padding-top:.5%;
            font-size: 1.3rem;
            box-sizing: border-box;
            color:white;
            cursor: pointer;
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
