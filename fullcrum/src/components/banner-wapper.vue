<template lang="html">
  <div class="banner-wapper">
    <img ref="aaa" src='../img/Background.png' alt='你好啊' class='img-responsive'>
    <div class="title">
      <p class='alt_1'>
        <span>区块链时代全球首个</span>
        <br>
        <span>金融票据数字资产交易平台</span>
      </p>
      <p class="alt_2">
        运用区块链技术打造一个自发的、自治的、不断自我迭代的、去中心化的金融票据数字资产交易平台
      </p>
      <el-button type="primary" plain class="login_btn"  @click="login">登陆</el-button>
    </div>
    <p class="icon_share">
      <i class="iconfont icon-wechat"></i>
      <i class="iconfont icon-weibo1"></i>
      <i class="iconfont icon-facebook"></i>
      <i class="iconfont icon-twitter1"></i>
    </p>
    <p class="icon_deco">
        <i class="iconfont icon-shubiao"></i>
    </p>
    <div class="login_fill" ref="login_fill">
      <div class="table">
        <ul class="chose_table">
          <router-link
          to='/' tag='li'
          @click.native="pass"
          class="password_login" ref="pass_style"
          :class="{active:color==1}"
          >账号密码登录</router-link>
          <router-link
          to='/auth' @click.native="auth"
          ref="auth" tag='li' class="auth_login"
          :class="{active:color==2}"
          >手机验证码登录</router-link>
        </ul>
      </div>
      <div class="view_input">
        <router-view></router-view>
      </div>
    </div>
    <div class="layer" ref="layer_box" @click="close">

    </div>
  </div>

</template>

<script>
export default {
  data(){
    return{
      color:1,
      aaa:'nima'
    }
  },
  methods:{
    login(){
      this.$refs.layer_box.style.display="block";
      setTimeout(()=>{
        this.$refs.login_fill.style.top="330px";
      },200)
    },
    close(){
      this.$refs.layer_box.style.display="none";
      this.$refs.login_fill.style.top="-400px";
    },
    pass(){
      this.color=1;
    },
    auth(){
      this.color=2;
    },
    change(){
      // this.$refs.aaa.style.transform='translateX(-50%)'
    }
  },
  mounted(){
    this.change()
  },
}
</script>

<style lang="scss" scoped>
.active{
  background: white!important;
  color:#4f8ef3!important;
}
  .banner-wapper{
    width:100%;
    height:auto;
    text-align: center;
    position: relative;
    box-sizing: border-box;
    margin-bottom:-3px;
    .img-responsive{
      display: inline-block;
      width:100%;
      height:100%;
      transition: 10s;
    }
    .title{
      text-align: center;
      position: absolute;
      top:25%;
      left:50%;
      margin-left: -348px;
      .alt_1{
        font-size: 4.8rem;
        font-weight: bold;
        color:white;
      }
      .alt_2{
        margin-top:70px;
        font-size: 1.6rem;
        color:white;
      }
      .login_btn{
        width: 140px;
        height:54px;
        font-size: 2.8rem;
        margin-top:70px;
      }

    }
    .icon_share{
      width: 200px;
      height:20px;
      // background: red;
      position: absolute;
      left:16.4%;
      bottom: 3.8%;
      i{
        font-size: 2.8rem;
        color:white;
        cursor: pointer;
        margin-left:12px;
      }
    }
    .icon_deco{
      position:absolute;
      bottom:3.8%;
      margin:0;
      left:50%;
      margin-left:-25px;
      i{
        color:white;
        font-size: 5rem;
      }
    }
    .layer{
      width: 100%;
      height:1200px;
      background: black;
      opacity: .5;
      z-index: 100;
      position: fixed;
      top: 0;
      left:0;
      display:none;
    }
    .login_fill{
        width: 500px;
        height:400px;
        position: fixed;
        top: -400px;
        left:50%;
        margin-left:-250px;
        background: white;
        border-radius: 5px;
        z-index: 101;
        transition: .3s;
        box-sizing: border-box;
        // padding-left:10%;
        .view_input{
          width: 100%;
          box-sizing: border-box;
          padding-left: 17%;
        }
        .table{
          width: 100%;
          height:60px;
          background: white;
          box-sizing: border-box;
          border-top-left-radius: 5px;
          border-top-right-radius: 5px;
          .chose_table{
            width: 100%;
            height:60px;
            margin:0;
            padding:0;
            display: flex;
            display: -webkit-flex;
            list-style:none;
            li{
              height:60px;
              width: 50%;
              font-size: 2rem;
              text-align: center;
              line-height: 60px;
              cursor:pointer;
            }
            .password_login{
              background:#4f8ef3;
              color:white;
              border-top-left-radius: 5px;
            }
            .auth_login{
              background:#4f8ef3;
              color:white;
              border-top-right-radius: 5px;
            }
          }
        }
    }
  }
  @media screen and (max-width:1366px){
    .title{
      margin-left:-260px!important;
    }
    .alt_1{
      font-size: 4rem!important;
      // color:red!important;
    }
    .alt_2{
      font-size: 1rem!important;
      // color:red!important;
    }
    .login_btn{
      max-width: 100px;
      max-height:40px;
      font-size: 1.8rem!important;
    }
  }
</style>
