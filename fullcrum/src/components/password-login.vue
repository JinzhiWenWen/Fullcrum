<template lang="html">
  <div class="password_login">
    <el-form :model="ruleForm2" status-icon :rules="rules2" ref="ruleForm2" class="demo-ruleForm">
      <el-form-item prop="phoneNum">
        <el-input  placeholder="请输入手机号/邮箱" v-model="ruleForm2.phoneNum" auto-complete="on" class="phonenum"></el-input>
      </el-form-item>
      <el-form-item prop="pass">
        <el-input placeholder="请输入密码" type="password" v-model="ruleForm2.pass" auto-complete="on" class="password"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button  style="font-size:1.8rem;margin-top:18px;width:112px;height:54px;" type="primary" @click="submitForm('ruleForm2')">登录</el-button>
        <!-- <el-button style="width:112px;height:54px;" @click="resetForm('ruleForm2')">重置</el-button> -->
      </el-form-item>
    </el-form>
<p class="more_way">
  没有账号？
  <router-link to='/logiup' tag="span">注册</router-link>
  /<span>忘记密码？</span>
  </p>
</div>
</template>

<script>
export default {
  data() {
    var validateNum = (rule, value, callback) => {
      var phone=/^1[34578]\d{9}$/;
      var email=/^([a-zA-Z0-9]+[_|\_|\.]?)*[a-zA-Z0-9]+@([a-zA-Z0-9]+[_|\_|\.]?)*[a-zA-Z0-9]+\.[a-zA-Z]{2,3}$/;
      var num=false;
      var ema=false;
      if(phone.test(value)||email.test(value))num=true;
      // if(email.test(value))ema=true;
      if (value === ''){
        callback(new Error('请输入手机号码'));
      } else if(num === false){
          callback(new Error('请输入正确的手机号码'))
      }else{
        if(num === false){
          callback(new Error('请输入正确的邮箱'))
        }
        callback()
      }
    };
    var validatePass2 = (rule, value, callback) => {
      var userpass='123456';
      if (value === '') {
        callback(new Error('请输入密码'));
      }else{
        if(value !== userpass){
          callback(new Error('密码错误，请从新输入'))
        }
        callback();
      }
    };
    return {
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
            alert('登陆成功!');
          } else {
            // alert('请填写错误信息');
            console.log(this.ruleForm2.phoneNum)
            return false;
          }
        });
      },
      resetForm(formName) {
        this.$refs[formName].resetFields();
      }
    }
  }
</script>

<style lang="scss" scoped>
  .password_login{
    width:80%;
    height:320px;
    .phonenum {
      margin-top: 60px;
      input::-webkit-input-placeholder{
        color:#999;
        font-size: 1.6rem;
      }
    }
    .password{
      input::-webkit-input-placeholder{
        color:#999;
        font-size: 1.6rem;
      }
    }
    .more_way{
      color:#999;
      span{
        color:#4f8ef3;
        cursor:pointer;
        text-decoration: underline;
      }
    }
  }
</style>
