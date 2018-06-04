<template lang="html">
  <div class="password_login">
    <el-form :model="ruleForm2" status-icon :rules="rules2" ref="ruleForm2" class="demo-ruleForm">
      <el-form-item prop="phoneNum">
        <el-input  placeholder="请输入手机号" v-model="ruleForm2.phoneNum" auto-complete="off" class="phonenum"></el-input>
      </el-form-item>
      <el-form-item prop="pass">
        <el-input placeholder="请输入验证码" type="password" v-model="ruleForm2.pass" auto-complete="off" class="password"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button class="elBtn_one"  style="font-size:1.8rem;margin-top:18px;width:112px;height:54px;" type="primary" @click="submitForm('ruleForm2')">登录</el-button>
        <el-button class="elBtn_two"  style="font-size:1.2rem;margin-top:-18px;width:70px;height:36px;" type="primary" @click="submitForm('ruleForm2')">登录</el-button>
      </el-form-item>
    </el-form>
<p class="more_way">没有账号？<span>注册</span></p>
<button class="obtian" ref="obtian" :disabled="disabled" type="button" name="button" @click="timer">{{btnText}}</button>
<p class="title_stop">读秒结束后可从新获取</p>
</div>
</template>

<script>
export default {
  data() {
    var validateNum = (rule, value, callback) => {
      var phone=/^1[34578]\d{9}$/;
      var num=false;

      if(phone.test(value))num=true;
      if (value === ''){
        callback(new Error('请输入手机号码'));
      } else{
        if(num === false){
          callback(new Error('请输入正确的手机号码'))
        }
        callback()
      }
    };
    var validatePass2 = (rule, value, callback) => {
      var userpass='123456';
      if (value === '') {
        callback(new Error('请输入验证码'));
      }else{
        if(value !== userpass){
          callback(new Error('验证码错误，请从新输入'))
        }
        callback();
      }
    };
    return {
        disabled:false,
        time:10,
        btnText:'获取',
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
            // alert('登陆成功!');
            this.$axios.get('http://v.juhe.cn/xiangji_weather/real_time_weather.php').then((res)=>{
              console.log(res)
            })
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
      timer(){
        if(this.time>0){
          this.time--;
          this.btnText=this.time+'s';
          setTimeout(this.timer,1000);
          this.disabled=true;
          this.$refs.obtian.style.color='white';
          this.$refs.obtian.style.background="#999"
        }else{
          this.time=10;
          this.btnText="获取";
          this.disabled=false;
          this.$refs.obtian.style.background="#409eff"
        }
      }
    }
  }
</script>

<style lang="scss" scoped>
@media screen and (max-width:1366px){
  .obtian{
    width: 42px!important;
    height:30px!important;
    font-size: 1.4rem!important;
    top:48%!important;
  }
  .title_stop{
    top:61%!important;
  }
}
  .password_login{
    width:80%;
    height:340px;
    .phonenum {
      margin-top: 60px;
    }
    .elBtn_two{
      display: none;
    }
    .more_way{
      color:#999;
      span{
        color:#4f8ef3;
        cursor:pointer;
        text-decoration: underline;
      }
    }
    .obtian{
      width: 65px;
      height:40px;
      border:0;
      border-radius: 5px;
      background: #409eff;
      position: absolute;
      top: 45%;
      right:18%;
      outline: none;
      color:#fff;
      font-size: 1.6rem;
      cursor:pointer;
    }
    .title_stop{
      position: absolute;
      top: 57%;
      right:18%;
      color:#409eff;
    }
  }
</style>
