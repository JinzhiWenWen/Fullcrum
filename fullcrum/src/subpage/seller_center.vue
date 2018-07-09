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
            <span class="nick_pass_last" ref="nick_pass"></span>
            <span class="nick_mod" @click="change_pass">修改</span>
            <input type="text" name=""
            ref="change_pass" value=""
            placeholder="请输入登录密码"
            v-show="isShowPass" class="change_btn">
          </p>
          <p class="user_trade">
            <span class="nick_trade">交易密码</span>
            <span class="nick_trade_last" ref="nick_trade"></span>
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
            <span class="nick_num_last" ref="nick_num"></span>
            <span class="nick_number"></span>
            <span class="nick_mod">修改</span>
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
            <span class="company_name_last"></span>
            <span class="push_btn">添加</span>
            </p>
          <p class="company">
            <span class="company_name">企业固话</span>
            <span class="company_name_last"></span>
            <span class="push_btn">添加</span>
            </p>
          <p class="company">
            <span class="company_name">企业银行账号</span>
            <span class="cor_banknum"></span>
            <span class="push_btn">添加</span>
            </p>
          <p class="company">
            <span class="company_name">大额行号</span>
            <span class="company_name_last"></span>
            <span class="push_btn">添加</span>
            </p>
          <p class="company">
            <span class="company_name">手机号</span>
            <span class="phone_num"></span>
            <span class="push_btn">添加</span>
            </p>
          <p class="company">
            <span class="company_name">邮箱</span>
            <span class="email_num"></span>
            <span class="push_btn">添加</span>
            </p>
          <div class="verify">
            <div class="busi">
              <div class="" style="">
                <div class="inMask" v-show="isShowIn" @mouseleave="hideIn()">
                  <input type="file" accept="image/*" class="upload" name="" @change="Upload">
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
                  <img src="../img/Banner.png" alt="">
                </div>
              </div>
              <p class="busi_title">营业执照</p>
            </div>
            <div class="idc">
              <div class="" style="">
                <div class="inMaskId"  v-show="isShow" @mouseleave="hideUpId()">
                  <input type="file" accept="image/*" class="uploadId" name="" @change="UploadIde">
                  <i class="el-icon-plus"></i>
                  <br>
                  <span  class="in_title">点击添加图片</span>
                </div>
                <div class="showImId"
                @mouseenter="showUpId()"
                v-loading="selIdLoading"
                element-loading-text="请稍后"
                element-loading-spinner="el-icon-loading"
                element-loading-background="rgba(0,0,0,.8)"
                >
                  <img src="../img/Banner.png" alt="">
                </div>
              </div>
              <p class="tive_title">法人身份证正面</p>
              <div class="" style="">
                <div class="inMaskIdT" v-show="isShowUpT"  @mouseleave="hideUpIdT()">
                  <input type="file" accept="image/*" class="uploadIdT" name="" @change="UploadIdeT">
                  <i class="el-icon-plus"></i>
                  <br>
                  <span  class="in_title">点击添加图片</span>
                </div>
                <div class="showImT"
                @mouseenter="showUpIdT()"
                v-loading="selIdTLoading"
                element-loading-text="请稍后"
                element-loading-spinner="el-icon-loading"
                element-loading-background="rgba(0,0,0,.8)"
                >
                  <img src="../img/Banner.png" alt="">
                </div>
              </div>
              <p class="reve_title">法人身份证背面</p>
            </div>
          </div>
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
import HeaderUser from '@/components/header-seller'
import {getCookie} from '@/assets/util'
import {setCookie} from '@/assets/util'
export default {
  data(){
    return{
      isShowName:false,
      isShowEmail:false,
      isShowPhone:false,
      isShowPass:false,
      isShowTrade:false,
      dialogImageUrl: '',
      dialogVisible: false,
      isShowTive:false,
      isShowRever:false,
      userMessage:{},
      token:null,
      isShow:false,
      isShowUpT:false,
      isShowIn:false,
      selLoading:false,
      selIdLoading:false,
      selIdTLoading:false
    }
  },
  methods:{
    showUpId(){
      this.isShow=true
    },
    hideIn(){
      this.isShowIn=false
    },
    hideUpId(){
      this.isShow=false
    },
    showUpIdT(){
      this.isShowUpT=true
    },
    hideUpIdT(){
      this.isShowUpT=false
    },
    showIn(){
      this.isShowIn=true
    },
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
    Upload(e){
      this.selLoading=true
      this.isShowIn=false
      var that=this;
      let file = e.target.files[0];
      //通过canvas压缩图片
      var reader=new FileReader();
      reader.readAsDataURL(file);
      // var result=reader.result
      var img=new Image;
      reader.onload=function(e){
        var width=img.width,
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
        console.log(img.src)
        //创建axios
        this.token= getCookie('token')
        var Id=getCookie('mes')
        this.axios.post(this.oUrl+'/fcexchange/feusers/document',
          [{
            uid:Id,
            file:img.src,
            documentType:'1',
            mimeType:'jpg'
          }],
          {headers:{
            'Content-Type':'application/json',
            'Accept':'application/json',
            'Authorization':this.token
          }}
        ).then((res)=>{
          this.selLoading=false
          console.log(res)
        }).catch((error)=>{
          this.selLoading=false
          console.log(error.response)
        })
      })
    },
    UploadIde(e){
      this.selIdLoading=true;
      this.isShow=false
      var that=this;
      let file = e.target.files[0];
      //通过canvas压缩图片
      var reader=new FileReader();
      reader.readAsDataURL(file);
      // var result=reader.result
      var img=new Image;
      reader.onload=function(e){
        var width=1080,
        quality=0.3,
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
        // console.log(img.src)
        //创建axios
        this.token= getCookie('token')
        var Id=getCookie('mes')
        this.axios.post(this.oUrl+'/fcexchange/feusers/document',
          [{
            uid:Id,
            file:img.src,
            documentType:'2',
            mimeType:'jpg'
          }],
          {headers:{
            'Content-Type':'application/json',
            'Accept':'application/json',
            'Authorization':this.token
          }}
        ).then((res)=>{
          this.selIdLoading=false
          console.log(res)
        }).catch((error)=>{
          this.selIdLoading=false
          console.log(error.response)
        })
      })
    },
    UploadIdeT(e){
      this.selIdTLoading=true;
      this.isShowUpT=false;
      var that=this;
      let file = e.target.files[0];
      //通过canvas压缩图片
      var reader=new FileReader();
      reader.readAsDataURL(file);
      // var result=reader.result
      var img=new Image;
      reader.onload=function(e){
        var width=1080,
        quality=0.3,
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
        // console.log(img.src)
        //创建axios
        this.token= getCookie('token')
        var Id=getCookie('mes')
        this.axios.post(this.oUrl+'/fcexchange/feusers/document',
          [{
            uid:Id,
            file:img.src,
            documentType:'3',
            mimeType:'jpg'
          }],
          {headers:{
            'Content-Type':'application/json',
            'Accept':'application/json',
            'Authorization':this.token
          }}
        ).then((res)=>{
          console.log(res)
          this.selIdTLoading=false
        }).catch((error)=>{
          console.log(error.response)
          this.selIdTLoading=false
        })
      })
    },
    showTive(){
      this.isShowTive=true;
    },
    hideTive(){
      this.isShowTive=false;
    },
    showReve(){
      this.isShowRever=true;
    },
    hideReve(){
      this.isShowRever=false;
    },
    obUser(){
      var Id=getCookie('mes');
      this.axios.get(this.oUrl+'/fcexchange/feuser/'+Id).then((res)=>{
        this.userMessage=res.data.value
        console.log(res)
        if(this.userMessage.tradePassword===null){
          this.$router.push('/sellerSet')
        }
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
    HeaderUser
  }
}
</script>

<style lang="scss">
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
      height:774px;
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
        .verify{
          width: 100%;
          height:auto;
          display: flex;
          margin-top: 26px;
          .busi_title{
            width: 66%;
            text-align: center;
            padding-top:8px;
            font-size: 1.4rem;
            position: absolute;
            top:90%;
            left:16%;
          }
          .busi{
            width: 50%;
            height:304px;
            padding-left:90px;
            position: relative;
            .inMask{
              width: 200px;
              height:272px;
              background: rgba(0,0,0,.5);
              text-align: center;
              box-sizing: border-box;
              position: absolute;
              top:0;
              left:24%;
              border-radius:5px;
              z-index: 1;
              .upload{
                width: 200px;
                height:272px;
                cursor:pointer;
                opacity:0;
                z-index: 100;
              }
              .el-icon-plus{
                font-size:11rem;
                color:white;
                opacity:.9;
                position: absolute;
                left:23%;
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
              width: 200px;
              height:272px;
              position: absolute;
              left:24%;
              background: rgba(0,0,0,.8);
              top:0;
              border-radius:5px;
              img{
                width: 100%;
                height:100%;
                border-radius: 5px;
              }
            }
          }
          .idc{
            width: 30%;
            height:304px;
            // padding-left:10px;
            position: relative;
            .inMaskId{
              width: 230px;
              height:118px;
              background: rgba(0,0,0,.5);
              z-index: 1;
              text-align: center;
              box-sizing: border-box;
              position: absolute;
              top:0;
              left:25%;
              border-radius:5px;
              .uploadId{
                width: 230px;
                height:118px;
                cursor:pointer;
                opacity:0;
                z-index: 100;
                margin-left: 5%;
              }
              .el-icon-plus{
                font-size:5rem;
                color:white;
                opacity:.9;
                position: absolute;
                left:40%;
                top:15%;
                z-index: -1;
              }
              .in_title{
                width: 100%;
                margin-top:10px;
                color:white;
                opacity:.9;
                font-size: 1.4rem;
                position: absolute;
                left:2%;
                top:55%;
                z-index: -1;
              }
            }
            .showImId{
              width: 232px;
              height:118px;
              position: absolute;
              left:25%;
              background: rgba(0,0,0,.8);
              top:0;
              border-radius:5px;
              img{
                width: 100%;
                height:100%;
                border-radius: 5px;
              }
            }
            .inMaskIdT{
              width: 230px;
              height:118px;
              background: rgba(0,0,0,.5);
              z-index: 1;
              text-align: center;
              box-sizing: border-box;
              position: absolute;
              top:50%;
              left:25%;
              border-radius:5px;
              .uploadIdT{
                width: 232px;
                height:118px;
                cursor:pointer;
                opacity:0;
                z-index: 100;
              }
              .el-icon-plus{
                font-size:5rem;
                color:white;
                opacity:.9;
                position: absolute;
                left:40%;
                top:15%;
                z-index: -1;
              }
              .in_title{
                width: 100%;
                margin-top:10px;
                color:white;
                opacity:.9;
                font-size: 1.4rem;
                position: absolute;
                left:2%;
                top:55%;
                z-index: -1;
              }
            }
            .showImT{
              width: 232px;
              height:118px;
              position: absolute;
              left:25%;
              background: rgba(0,0,0,.8);
              top:50%;
              border-radius:5px;
              img{
                width: 100%;
                height:100%;
                border-radius: 5px;
              }
            }
            .tive_title{
              position: absolute;
              top: 41%;
              left:57%;
            }
            .reve_title{
              position: absolute;
              top: 92%;
              left:57%;
            }
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
