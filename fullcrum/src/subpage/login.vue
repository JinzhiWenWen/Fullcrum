<template lang="html">
  <div class="login">
    <HeaderLogin>
      <p class="slot-mine">登录</p>
    </HeaderLogin>
    <div class="login_con">
      <p><input type="text" placeholder="请输入手机号" ref="phone"/></p>
      <p  style="margin-top:2%;"><input type="password" placeholder="请输入密码" ref="pass"/></p>
      <p><button type="button" class="login_btn"
        v-loading="loadingLogin"
        element-loading-text="登录中"
        element-loading-spinner="el-icon-loading"
        element-loading-background="#5277cc"
        @click="login()"
        >登录</button></p>
    </div>
  </div>
</template>

<script>
import HeaderLogin from '@/components/header-sginUp'
import {setCookie} from '@/assets/util'
export default {
  data(){
    return{
        loadingLogin:false
    }
  },
  methods:{
    login(){
      let _this=this;
      _this.loadingLogin=true;
      let em=_this.$refs.phone.value;
      let pa=_this.$refs.pass.value;
      if(em==''||pa==''){
        _this.loadingLogin=false;
        this.$notify.error({
          title: '错误',
          message: '请输入账号密码！',
          offset:100
        });
      }else{
        _this.axios.post(_this.oUrl+'/fcexchange/login',
        {
          "email":em,
          "passcode":pa
        },
        {header:{
          'Content-Type':'application',
          'Accept':'application'
        }}
      ).then((res)=>{
        console.log(res)
        var id=res.data.value.id;
        var token=res.data.value.appToken;
        var iden=res.data.value.identity;
        var ress=res.data.value.feWalletAddress;
        var phone=res.data.value.phone;
        sessionStorage.setItem('mes',id);
        setCookie('mes',id);
        setCookie('token',token);
        setCookie('ide',iden)
        setCookie('ress',ress)
        setCookie('phone',phone)
        _this.loadingLogin=false;
        if(res.data.value.identity=='buyer'){
          this.$router.push('/mark')
        }else{
          this.$router.push('/sellerma')
        }
      }).catch((error)=>{
        console.log(error.response)
        if(error.response.data.code==0){
          _this.loadingLogin=false
          _this.$notify.error({
            title: '错误',
            message: '账号密码错误或未注册！',
            offset:100
          });
        }
      })
      }

    }
  },
  components:{
    HeaderLogin
  }
}
</script>

<style lang="scss">
.login{
  width: 100%;
  height:100%;
  .login_con{
    width: 60%;
    height:70%;
    position: absolute;
    left:50%;
    margin-left: -30%;
    p{
      width: 100%;
      height:10%;
      input{
        width: 60%;
        height:100%;
        border-bottom:1px solid #5277cc;
        padding-bottom:.5%;
      }
    }
    .login_btn{
      width: 8%;
      height:70%;
      background: #5277cc;
      border-radius: 5px;
      color:white;
      font-size: 1.6rem;
      margin-top: 5%;
    }
  }
}
</style>
