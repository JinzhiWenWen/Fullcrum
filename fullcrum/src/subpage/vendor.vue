<template lang="html">
  <div class="sign-wapper">
    <Banner/>
    <Nav/>
    <div class="content_top">
      <div class="top_left">
          <p class="alt_top">如何为发票融资？</p>
          <div class="title_left">
            <div class="title">
              <p class="num">1.</p>
              <p class="alt">
                <span class="alt_1">找到一个感兴趣的票据</span>
                <br><br>
                <span class="alt_2">使用我们的全球票据市场，检查有关业务的所有可用信息，评估风险</span>
              </p>
            </div>
            <div class="title">
              <p class="num">2.</p>
              <p class="alt">
                <span class="alt_1">找到一个感兴趣的票据</span>
                <br><br>
                <span class="alt_2">使用我们的全球票据市场，检查有关业务的所有可用信息，评估风险</span>
              </p>
            </div>
            <div class="title">
              <p class="num">3.</p>
              <p class="alt">
                <span class="alt_1">找到一个感兴趣的票据</span>
                <br><br>
                <span class="alt_2">使用我们的全球票据市场，检查有关业务的所有可用信息，评估风险</span>
              </p>
            </div><div class="title">
              <p class="num">4.</p>
              <p class="alt">
                <span class="alt_1">找到一个感兴趣的票据</span>
                <br><br>
                <span class="alt_2">使用我们的全球票据市场，检查有关业务的所有可用信息，评估风险</span>
              </p>
            </div>
          </div>

      </div>
      <div class="top_right">

      </div>
    </div>
    <div class="content_center">
      <div class="center_left">

      </div>
      <div class="center_right">
        <p class="center_title">票据融资凭条</p>
        <span class="center_tions">
          FULCRUM使来自世界各地的票据买家能够参与全球票<br/><br/>
          据市场。票据购买者讲竞争购买他们认为合适的利率的<br/><br/>
          票据，并且如果出价成功，当票据由票据销售者结算时<br/><br/>
          将收取本金和利息。<br/><br/><br/><br/>
          票据买家还可以购买票据，风险及小，因为Populous为<br/><br/>
          保护买家在延迟付款甚至违约情况下采取独特保障措施。
        </span>
        <p class="fulcrum_more">
          更多关于FULCRUM的信息
        </p>
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
  display: flex;
  display: -webkit-flex;
  .top_left{
    width: 50%;
    height:843px;
    padding-left:192px;
    padding-top:120px;
    box-sizing: border-box;
    .title_left{
      margin-top:60px;
      .title{
        margin-top:30px;
      }
    }
    .alt_top{
      font-size:3.6rem;
    }
    p{
      display: inline-block;
      margin:0!important;
    }
      .num{
        font-size:7rem;
        color: #353bf7;
      }
      .alt_1{
        font-size: 2rem;
        margin-bottom: 18px;
        color:#333;
        font-weight: bold;
      }
      .alt_2{
        font-size: 1.6rem;
        color:#999;
      }
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
    box-sizing: border-box;
    padding-top:156px;
    padding-left:80px;
    p{
      margin: 0;
    }
    .center_title{
      font-size: 3.5rem;
      margin-bottom:100px;
    }
    .center_tions{
      font-size: 1.6rem;
      color:#6d6d6d;
    }
    .fulcrum_more{
      margin-top:64px;
      color:#6e71f8;
      cursor:pointer;
    }
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
