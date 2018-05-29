<template lang="html">
  <div class="banner-user">
    <img src='../img/Banner.png' alt='你好啊' class='img-responsive'>
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
    <p class="icon_share">
      <i class="iconfont icon-wechat"></i>
      <i class="iconfont icon-weibo1"></i>
      <i class="iconfont icon-facebook"></i>
      <i class="iconfont icon-twitter1"></i>
      </p>
    <p class="icon_deco">
        <i class="iconfont icon-shubiao"></i>
      </p>
    <div class="layer" ref="layer_box">

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
  }
}
</script>

<style lang="scss" scoped>
.active{
  background: white!important;
  color:#4f8ef3!important;
}
  .banner-user{
    width:100%;
    height:auto;
    text-align: center;
    // position: fixed;
    top:0;
    left:0;
    box-sizing: border-box;
    margin-bottom:-3px;
    overflow: hidden;
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
    .icon_share{
      width: 200px;
      height:20px;
      position: absolute;
      left:16.4%;
      bottom: 6.8%;
      i{
        font-size: 2.8rem;
        color:white;
        cursor: pointer;
        margin-left:12px;
      }
    }
    .icon_deco{
      position:absolute;
      bottom:5.4%;
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
  }
  @media screen and (max-width:1366px){
    .login_fill{
      width: 350px!important;
      height:280px!important;
      margin-left:-175px!important;
      .table{
        .chose_table{
          li{
            font-size: 1.6rem!important;
          }
        }
      }
    }
    .view_input{
      padding-left:18%!important;
    }
    .title{
      margin-left:-260px!important;
    }
    .alt_1{
      font-size: 4rem!important;
    }
    .alt_2{
      font-size: 1rem!important;
    }
    .login_btn{
      max-width: 100px;
      max-height:40px;
      font-size: 1.8rem!important;
    }
  }
</style>
