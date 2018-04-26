<template lang="html">
  <div class="login-wapper">
    <div class="title">
      <p class='alt_1'>
        <span>区块链时代全球首个</span>
        <br>
        <span>金融票据数字资产交易平台</span>
      </p>
      <p class="alt_2">
        运用区块链技术打造一个自发的、自治的、不断自我迭代的、去中心化的金融票据数字资产交易平台
      </p>
    </div>
    <router-link to='/login' name='Login'>
      <el-button type="primary" plain class="login-btn">登陆</el-button>
    </router-link>
  </div>
</template>

<script>
export default {
}
</script>

<style lang="scss" scoped>
  .title{
    position: absolute;
    top:250px;
    color:white;
    text-align: center;
    left:50%;
    margin-left: -356px;
    .alt_1{
      font-size:48px;
    }
    .alt_2{
      font-size:16px;
      margin-top: 70px;
    }

  }
  .login-btn{
    width: 140px;
    height: 54px;
    font-size: 24px;
    position: absolute;
    top:60%;
    left:50%;
    margin-left: -70px;
  }
</style>
