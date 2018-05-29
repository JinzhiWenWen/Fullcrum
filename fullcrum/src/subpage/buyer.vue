<template lang="html">
  <div class="buyer-wapper">
    <Banner/>
    <Nav/>
    <div class="content_top">
      <div class="top_left">

      </div>
      <div class="top_right">

      </div>
    </div>
    <div class="content_center">
      <div class="center_left">

      </div>
      <div class="center_right">

      </div>
    </div>
    <div class="content_bottom"><!-- 需要挪用 -->
      <p class="about_fulcrum">FULCRUM提供什么？</p>
      <ul class="uls_icon">
        <li>
          <img src="../img/icon_safety.png" alt="">
          <br/>
          <span class="icon_title">前所未有的安全</span>
          <br/>
          <span class="icon_alt">
            去中心化交易所，利用<br/>
            只能合约触发，链上结<br/>
            算，保障账户安全。
          </span>
        </li>
        <li>
          <img src="../img/icon_earning.png" alt="">
          <br/>
          <span class="icon_title">前所未有的安全</span>
          <br/>
          <span class="icon_alt">
            去中心化交易所，利用<br/>
            只能合约触发，链上结<br/>
            算，保障账户安全。
          </span>
        </li>
        <li>
          <img src="../img/icon_flow.png" alt="">
          <br/>
          <span class="icon_title">前所未有的安全</span>
          <br/>
          <span class="icon_alt">
            去中心化交易所，利用<br/>
            只能合约触发，链上结<br/>
            算，保障账户安全。
          </span>
        </li>
        <li>
          <img src="../img/icon_deal.png" alt="">
          <br/>
          <span class="icon_title">前所未有的安全</span>
          <br/>
          <span class="icon_alt">
            去中心化交易所，利用<br/>
            只能合约触发，链上结<br/>
            算，保障账户安全。
          </span>
        </li>
      </ul>
    </div>
    <div class="about_us"><!-- 需要挪用 -->
      <p class="regard">关于FULCRUM</p>
      <p class="what_to_do">FULCRUM在做什么？</p>
      <span class="explain">
        FULCRUM利用智能合约的出发机制，在票据上链的同时
        实现了票据的分析与流转，实现了穿透。打破了由大额资金和部分中间
        商垄断的中心化市<br/><br/>场，从部分人控制的集体经济到人人可参与的
        共享经济，真正的实现了去中心化的票据应用场景。FULCRUM运用区块链技术
        提供了安全、高效、可信<br/><br/>任的金融资产数字化上链并流通的解决方案。欢颜之长期的银行
        承兑汇票，Abs资产不能满足企业即刻的资金使用需求，那么我们<br/><br/>
        将提供更低成本、更高效率、更安全的解决方案，帮助企业补充资金流动性，更好的发展商业。
      </span>
      <br>
      <router-link to='/about'>
        <el-button type="primary" plain class="load_more">更多</el-button>
      </router-link>
    </div>
  </div>
</template>

<script>
import Banner from '../components/banner-user'
import Nav from '../components/nav-wapper'
export default {
  components:{
    Banner,
    Nav
  }
}
</script>

<style lang="scss" scoped>
.content_top{
  width: 100%;
  height:auto;
  box-sizing: border-box;
  // background: red;
  display: flex;
  display: -webkit-flex;
  .top_left{
    width: 50%;
    // background:#ccc ;
    height:843px;
  }
  .top_right{
    width: 50%;
    background: #ccc;
    height:843px;
  }
}
.content_center{
  width: 100%;
  height:auto;
  box-sizing: border-box;
  display: flex;
  display: -webkit-flex;
  .center_left{
    width: 50%;
    background: #ccc;
    height:843px;
  }
  .center_right{
    width: 50%;
    height:843px;
  }
}
.content_bottom{
  width: 100%;
  height:843px;
  padding-top: 148px;
  padding-bottom:116px;
  box-sizing: border-box;
  .about_fulcrum{
    width: 100%;
    text-align: center;
    font-size: 3.6rem;
    font-weight: bold;
    color:#333;
    margin-bottom: 90px;
  }
  .uls_icon{
    width: 80%;
    height:440px;
    list-style: none;
    margin-left: 10%;
    display: flex;
    display: -webkit-flex;
    li{
      width: 25%;
      height:auto;
      text-align: center;
      img{
        display: inline-block;
        width:auto;
        height:auto;
      }
      span{
        display: inline-block;
      }
      .icon_title{
        margin-top:90px;
        font-size: 2.8rem;
        color:#333;
      }
      .icon_alt{
        font-size: 1.6rem;
        color:#666;
        margin-top: 40px;
      }
    }
  }
}
.about_us{
  width: 100%;
  height:843px;
  background: url('../img/Banner_bot.png');
  background-size: 100% 100%;
  color:white;
  text-align: center;
  box-sizing: border-box;
  padding-top:190px;
  .regard{
    font-size: 3.6rem;
    font-weight: bold;
    margin-bottom:80px;
  }
  .what_to_do{
    font-size: 3.2rem;
    font-weight: bold;
    margin-bottom:30px;
  }
  .explain{
    display: inline-block;
    font-size: 1.6rem;
    margin-bottom:160px;
  }
  .load_more{
    width: 141px;
    height:54px;
    font-size: 2.8rem;
  }
}
</style>
