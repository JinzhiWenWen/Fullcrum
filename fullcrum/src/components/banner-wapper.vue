<template lang="html">
  <div class="banner-wapper">
    <img src='../img/Background.png' alt='你好啊' class='img-responsive'>
    <div class="title">
      <p class='alt_1'>
        <span>区块链时代全球首个</span>
        <br>
        <span>金融票据数字资产交易平台</span>
      </p>
      <p class="alt_2">
        运用区块链技术打造一个自发的、自治的、不断自我迭代的、去中心化的金融票据数字资产交易平台
      </p>
      <router-link to='/login' name='Login'>
        <el-button type="primary" plain class="login_btn">登陆</el-button>
      </router-link>
      <p class="icon">

      </p>
    </div>
  </div>
</template>

<script>
export default {
}
</script>

<style lang="scss" scoped>
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
