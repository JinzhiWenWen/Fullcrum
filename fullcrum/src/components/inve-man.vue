<template lang="html">
  <div class="inve_man">
    <p class="title">
      我想在线收购他人的票据<br/>
      然后一夜暴富
    </p>
    <div class="form">
      <el-form :model="ruleForm2" status-icon :rules="rules2" ref="ruleForm2" class="demo-ruleForm">
        <el-form-item prop="phoneNum">
          <span>手机号码或邮箱</span>
          <el-input v-model="ruleForm2.phoneNum" auto-complete="off" class=""></el-input>
        </el-form-item>
        <el-form-item prop="code">
          <span>验证码</span>
          <el-input v-model="ruleForm2.code" auto-complete="off" class=""></el-input>
        </el-form-item>
        <el-form-item prop="pass">
          <span>密码</span>
          <el-input type="password" v-model="ruleForm2.pass" auto-complete="off" class=""></el-input>
        </el-form-item>
        <el-form-item prop="turnpass">
          <span>确认密码</span>
          <el-input type="password" v-model="ruleForm2.turnpass" auto-complete="off" class=""></el-input>
        </el-form-item>
        <div class="next_btn">
          <el-form-item>
            <el-button style="font-size:2.2rem;width:286px;height:60px;" type="primary" @click="submitForm('ruleForm2')">下一步</el-button>
          </el-form-item>
        </div>

      </el-form>
      <button class="obtain" @click="obtain" :disabled="disabled" ref="obtain" type="button" name="button">{{btnTxt}}</button>
    </div>
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
          callback(new Error('请输入正确的手机号码或邮箱'))
      }else{
        if(num === false){
          callback(new Error('请输入正确的邮箱'))
        }
        callback()
      }
    };
    var validatePass = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('请输入密码'));
      }else if(value!=='123'){
        callback(new Error('密码必须至少包含8个字符,且至少包含一个大写字母'))
      }
    };
    var validatePass2=(rule,value,callback)=>{
        if(value===''){
          callback(new Error('请再次输入密码'))
        }else if(value!==this.ruleForm2.pass){
          callback(new Error('密码不匹配'))
        }else{
          callback()
        }
    }
    var validatecode=(rule,value,callback)=>{
      if(value===''){
        callback(new Error('请输入验证码'))
      }else{
        callback()
      }
    }
    return {
        btnTxt:'获取',
        time:10,
        disabled:false,
        ruleForm2: {
          pass: '',
          phoneNum: '',
          code:'',
          turnpass:''
        },
        rules2: {
          phoneNum: [
            { validator: validateNum, trigger: 'blur' }
          ],
          pass: [
            { validator: validatePass, trigger: 'blur' }
          ],
          turnpass:[
            { validator: validatePass2, trigger: 'blur' }
          ],
          code:[
            { validator: validatecode, trigger: 'blur' }
          ]
        }
      };
    },
    methods: {
      obtain(){
        if(this.time>0){
          this.time--;
          this.disabled=true;
          this.btnTxt=this.time+'s';
          this.$refs.obtain.style.background="#dcdcdc"
          setTimeout(this.obtain,1000)
        }else{
          this.time=10;
          this.disabled=false;
          this.btnTxt='从新获取';
          this.$refs.obtain.style.background="#4f8ef3"
        }
      },
      submitForm(formName) {
        this.$refs[formName].validate((valid) => {
          if (valid) {
            alert('登陆成功!');
          } else {
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
.inve_man{
  width: 100%;
  padding-top:20px;
  height:740px;
  position: relative;
  .title{
    font-size:1.4rem;
    color:#6d6d6d;
    margin-bottom:54px;
    text-align: center;
  }
  .form{

    span{
      font-size: 1.4rem;
      color:#333;
    }
    .next_btn{
        position: absolute;
        top:80%;
        left:50%;
        margin-left: -143px;
    }
    .obtain{
      width: 92px;
      height:40px;
      position: absolute;
      top:33%;
      right:0;
      font-size: 1.7rem;
      background: #4f8ef3;
      color:white;
      border-radius:5px;
    }
  }
}

</style>
