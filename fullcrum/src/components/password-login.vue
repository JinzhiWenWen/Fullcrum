<template lang="html">
  <div class="password_login">
    <div class="elForm">
      <el-form :model="ruleForm2" status-icon :rules="rules2" ref="ruleForm2" class="demo-ruleForm">
        <el-form-item prop="phoneNum">
          <el-input  placeholder="请输入手机号/邮箱" type="text" v-model="ruleForm2.phoneNum" auto-complete="off" class="phonenum"></el-input>
        </el-form-item>
        <el-form-item prop="pass">
          <el-input  placeholder="请输入密码" type="password" v-model="ruleForm2.pass" auto-complete="off" class="password"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button class="elBtn_one"  style="font-size:1.8rem;margin-top:18px;width:112px;height:54px;" type="primary" @click="submitForm('ruleForm2')">登录</el-button>
          <el-button class="elBtn_two"  style="font-size:1.2rem;margin-top:-18px;width:70px;height:36px;" type="primary" @click="submitForm('ruleForm2')">登录</el-button>
        </el-form-item>
      </el-form>
    </div>
<p class="more_way">
  没有账号？
  <router-link @click.native="aa()" to='/logiup' tag="span">注册</router-link>
  /<span>忘记密码？</span>
  </p>
<div class="chose_iden" v-show="tiShi">
  <p>请选择您的身份</p>
  <router-link to="/mark" tag="button" style="margin-right:40px;">买家</router-link>
  <router-link to="/merchat" tag="button" style="margin-left:40px;">商家</router-link>
</div>
</div>
</template>

<script>
import {setCookie} from '@/assets/util'
export default {
  data() {
    var validateNum = (rule, value, callback) => {
      var phone=/^1[34578]\d{9}$/;
      var email=/^([a-zA-Z0-9]+[_|\_|\.]?)*[a-zA-Z0-9]+@([a-zA-Z0-9]+[_|\_|\.]?)*[a-zA-Z0-9]+\.[a-zA-Z]{2,3}$/;
      var num=false;
      var ema=false;
      if(phone.test(value)||email.test(value))num=true;
      if (value === ''){
        callback(new Error('请输入手机号码'));
      } else{
        callback()
      }
    };
    var validatePass2 = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('请输入密码'));
      }else{
        callback();
      }
    };
    return {
        tiShi:false,
        ruleForm2: {
          pass: '',
          phoneNum: ''
        },
        rules2: {
          phoneNum: [
            { validator: validateNum, trigger: 'blur' }
          ],
          pass: [
            { validator: validatePass2, trigger: 'blur' }
          ]
        }
      };
      },
    methods: {
      submitForm(formName) {
        this.$refs[formName].validate((valid) => {
          if (valid) {
          this.axios.post(this.oUrl+'/fcexchange/login',{
            "email":this.ruleForm2.phoneNum,
            "passcode":this.ruleForm2.pass
          },
            {header:{'Content-type':'application/json'}}
          ).then((res)=>{
            if(res.status==200){
              var iden=res.data.identity;
              var id=res.data.id;
              sessionStorage.setItem('mes',id)
              setCookie('mes',id)
              if(iden==='buyer'){
                this.$router.push('/mark')
              }else if(iden==='seller'){
                this.$router.push('/sellerma')
              }else if(iden==='merchants'){
                this.tiShi=true;
              }
            }else{
              alert('账号或密码错误！')
            }
          });
          // this.axios.get(this.oUrl+'/fcexchange/feusers').then((res)=>{
          //   console.log(res)
          // })
          } else {
            // alert('请填写错误信息');
            console.log(this.ruleForm2.phoneNum)
            return false;
          }
        });
      },
      resetForm(formName) {
        this.$refs[formName].resetFields();
      },
      aa(){
        console.log(this.$refs.login_fill)
      }
    }
  }
</script>

<style lang="scss">
@media screen and(max-width:1366px){
  .elBtn_one{
    display: none;
  }
  .elBtn_two{
    display: block!important;
    margin-left: 34%;
    margin-top: 15px!important;
  }
  .phonenum{
    margin-top:5px!important;

  }

  .more_way{
    margin-top: -18px;
    font-size: 1rem!important;
  }
}
.chose_iden{
  width: 500px;
  height:340px;
  position: fixed;
  top:344px;
  left:50%;
  margin-left: -250px;
  background: white;
  padding-top:80px;
  box-sizing: border-box;
  p{
    color:black;
    width: 100%；auto;
    text-align: center;
    font-size: 1.8rem;
    margin-bottom: 60px;
  }
  button{
    width: 102px;
    height:42px;
    background: #4f8ef3;
    border-radius: 5px;
    color:white;
    font-size: 1.6rem;
  }
}
  .password_login{
    width:80%;
    height:340px;
    .phonenum {
      margin-top: 60px;
      input::-webkit-input-placeholder{
        color:#999;
        font-size: 1.4rem;
      }
    }
    .password{
      input::-webkit-input-placeholder{
        color:#999;
        font-size: 1.4rem;
      }
    }
    .elBtn_two{
      display: none;
    }
    .more_way{
      color:#999;
      text-align: center;
      span{
        color:#4f8ef3;
        cursor:pointer;
        text-decoration: underline;
      }
    }
  }
</style>
