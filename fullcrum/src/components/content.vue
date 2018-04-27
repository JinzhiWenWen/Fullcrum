<template lang="html">
  <div class="content-wapper">
      <div class="content_top">
          <p class="title">加快您的现金流量<br>来扩大您的业务</p>
          <p class="title_chose">
            <span class="about_vendor">关于票据销售商</span>
            <span class="about_buyer">关于票据购买者</span>
          </p>
          <div class="title_img">
            <div class="top">

            </div>
            <div class="bottom">

            </div>
          </div>
      </div>
      <div class="content_center">
        <div class="bottom_left">

        </div>
        <div class="bottom_right">
          <p class="title_left">FULCRUM做了什么？</p>
          <span class="title_text" style="text-indent:2em；text-align:center;">
            由于票据的电子化和单方不可逆，各种交易中出现的票据背书后资<br/><br/>金
            不能回笼甚至被诈骗比比皆是，进而更加恶化了信任环境。由于票据<br/><br/>
            的目前不能分拆，虽然投资利润相对较高，风险较低，但一般投资人无<br/><br/>
            法进行票据小额投资，及其需要一种穿透机制，打破目前票据不可分拆<br/><br/>
            的弊端。
          </span>
        </div>
      </div>
      <div class="content_bottom">
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
      <div class="content_state">
        <div class="vendor">
          <p>票据销售商</p>
        </div>
        <div class="bill">
          <p>FULCRUM如何运作？</p>
        </div>
        <div class="buyer">
          <p>票据购买者</p>
        </div>
      </div>
      <div class="about_us">
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
        <el-button type="primary" plain class="load_more">更多</el-button>
      </div>
  </div>
</template>

<script>
export default {
}
</script>

<style lang="scss" scoped>
  .content-wapper{
    width:100%;
    height:auto;
    margin:0;
    padding:0;
    .content_top{
      width: 100%;
      height:834px;
      padding-top:114px;
      padding-bottom: 96px;
      position: relative;
      // background: #ccc;
      box-sizing: border-box;
      // padding-left:20%;
      .title{
        width: 50%;
        text-align: center;
        margin-top:186px;
        font-size: 4.6rem;
        color:#666;
      }
      .title_chose{
        width: 50%;
        text-align: center;
        margin-top: 266px;
        font-size: 2rem;
        color:#666;
        cursor: pointer;
        span{
          padding-bottom:6px;
        }
        .about_vendor{
          margin-right:114px;
        }
        span:hover{
          border-bottom: 2px solid red;
        }
      }
      .title_img{
        width:624px;
        height:624px;
        position: absolute;
        top:114px;
        left:50%;
        box-sizing: border-box;
        .top{
          width: 564px;
          height:564px;
          background: #666;
        }
        .bottom{
          width: 564px;
          height:564px;
          background: #ccc;
          position: absolute;
          top: 60px;
          left:60px;
          z-index: -1;
        }
      }
    }
    .content_center{
      width: 100%;
      height:auto;
      display: flex;
      .bottom_left{
        width: 50%;
        height:843px;
        background:#666;
      }
      .bottom_right{
        width: 50%;
        height:843px;
        background: #ccc;
        padding-top:110px;
        box-sizing: border-box;
        .title_left{
          font-size: 3.6rem;
          font-weight: bold;
          margin-bottom: 60px;
          margin-left:162px;
        }
        .title_text{
          display: inline-block;
          margin-left:94px;
          font-size: 1.6rem;
          color:#666;
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
    .content_state{
      width: 100%;
      // height:843px;
      // background: black;
      display: flex;
      display: -webkit-flex;
      p{
        margin:0;
      }
      .vendor{
        width: 35%;
        height:843px;
        background: #ccc;
        position: relative;
        p{
          color:#333;
          font-size: 2rem;
          position: absolute;
          bottom:54px;
          right:158px;
        }
      }
      .bill{
        width: 30%;
        height: 843px;
        box-sizing: border-box;
        padding-top: 152px;
        p{
          font-size: 3.6rem;
          font-weight: bold;
          text-align: center;
        }
      }
      .buyer{
        width: 35%;
        height:843px;
        background: #ccc;
        position: relative;
        p{
          color:#333;
          font-size: 2rem;
          position: absolute;
          bottom:54px;
          left:158px;
        }
      }
    }
    .about_us{
      width: 100%;
      height:843px;
      background: url('../img/Background.png');
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
  }
  @media screen and (max-width:1366px){
      .content_top{
        .title{
          font-size:3.2rem!important;
        }
        .title_chose{
          font-size: 1.4rem!important;
        }
      }
      .bottom_right{
        .title_left{
          font-size:2.4rem!important;
        }
        .title_text{
          font-size: 1rem!important;
        }
      }
      .content_bottom{
        .about_fulcrum{
          font-size: 2.4rem!important;
        }
        .icon_title{
          font-size: 1.6rem!important;
        }
        .icon_alt{
          font-size: 1rem!important;
        }
      }
      .content_state{
        .bill{
          p{
            font-size: 2.4rem!important;
          }
        }
        .buyer{
          p{
            font-size: 1rem!important;
          }
        }
        .vendor{
          p{
            font-size: 1rem!important;
          }
        }
      }
      .about_us{
        .regard{
          font-size: 2.6rem!important;
        }
        .what_to_do{
          font-size: 2.2rem!important;
        }
        .explain{
          font-size: 1rem!important;
        }
        .load_more{
          max-width:80px;
          max-height:30px;
          font-size: 1.6rem!important;
        }
      }
      .uls_icon{
          li{
            img{
              max-width:150px;
              max-height:150px;
            }
          }
        }
  }
</style>
