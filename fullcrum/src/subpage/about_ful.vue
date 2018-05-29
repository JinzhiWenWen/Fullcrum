<template lang="html">
  <div class="about_as">
    <HeaderAbout/>
    <div class="content_main">
      <div class="content_top">
        <div class="top_left">
          <p class="top_title">
            FULCRUM
          </p>
          <span class="top_alt">
            由于票据的电子化和单方不可逆，
            各种交易中出现的票据背书后资金不能回
            <br/><br/>
            笼甚至被诈骗比比皆是，进而更加恶化了信任
            环境。由于票据目前不能分拆，虽投
            <br/><br/>
            资利润相对较高，风险较低，但是一般投资人无法进行票据小额投资，及其需要一<br/><br/>
            种穿透机制，打破目前票据不可分拆的弊端。
          </span>
        </div>
        <div class="top_right">

        </div>
      </div>
      <div class="content_bot">
        <div class="bot_left">

        </div>
        <div class="bot_right">
          <p class="bot_title">平台介绍</p>
          <span class="bot_alt">
            由于票据的电子化和单方不可逆，
            各种交易中出现的票据背书后资金不能回
            <br/><br/>
            笼甚至被诈骗比比皆是，进而更加恶化了信任
            环境。由于票据目前不能分拆，虽投
            <br/><br/>
            资利润相对较高，风险较低，但是一般投资人无法记性票据小额投资，及其需要一<br/><br/>
            种穿透机制，打破目前票据不可分拆的弊端。
          </span>
        </div>
      </div>
    </div>
    <div class="content_todo"><!-- 需要挪用 -->
      <p class="about_fulcrum">运作模式</p>
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
    <div class="content_team">
      <p class="team_title">创始团队</p>
      <div class="founder">
        <div class="founder_list" v-for="founder in founder_list">
          <div class="founder_pic">

          </div>
          <div class="founder_message">
            <p class="founder_name">{{founder.name}}</p>
            <span>{{founder.position}}</span>
            <br>
            <span>{{founder.manager}}</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import HeaderAbout from '@/components/header-about'
export default {
  data(){
    return{
      founder_list:[
        {
          id:0,
          name:'吕程',
          position:'创始人',
          manager:'曾就职于中植集团资产端 担任中融信托财富中心副总经理，曾参与多个大型信托项目'
        },
        {
          id:1,
          name:'赵忠华',
          position:'联合创始人',
          manager:'具备金融票据行业二十年从业经验，经手的票据规模近万亿'
        },
        {
          id:2,
          name:'李勋浩',
          position:'CTO',
          manager:'2008年毕业于中国科学技术大学计算机系，2010年硕士毕业于University of Alberta计算机系，曾在IBM多伦多实验室从事程序语言和编译器优化工作。他创建的Monad Consulting咨询公司曾为AMD, Imagination Technologies, 华为，Nebula AI等公司提供智能合约设计，静态分析，编译器和芯片设计组服务'
        }
      ]
    }
  },
  components:{
    HeaderAbout
  }
}
</script>

<style lang="scss" scoped>
.about_as{
  width: 100%;
  height:100%;
  .content_main{
    width: 100%;
    height:1570px;
    position: relative;
    .content_top{
      width: 100%;
      height:auto;
      display: flex;
      display: -webkit-flex;
      .top_left{
        width: 46%;
        height:910px;
        text-align: right;
        padding-top:100px;
        padding-right:52px;
        .top_title{
          padding-left:160px;
          font-size: 3rem;
          color:#333;
          font-weight: bold;
          padding-bottom:64px;
          padding-right:172px;
        }
        .top_alt{
          font-size: 1.4rem;
          text-indent:40px;
          text-align: left;
        }
      }
      .top_right{
        width: 54%;
        height:910px;
        background: black;
        opacity: .5;
      }
    }
    .content_bot{
      width: 100%;
      height:auto;
      display: flex;
      display:-webkit-flex;
      position: absolute;
      top:48%;
      .bot_left{
        width: 54%;
        height:910px;
        background: black;
        opacity:.5;
      }
      .bot_right{
        width: 46%;
        height:910px;
        padding-left:52px;
        padding-top:260px;
        .bot_title{
          padding-left:174px;
          padding-bottom:62px;
          font-size:3.4rem;
          font-weight: bold;
        }
        .bot_alt{
          text-indent:40px;
          font-size: 1.4rem;
        }
      }
    }
  }
  .content_todo{
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
  .content_team{
    width: 100%;
    height:auto;
    background:#fcfcfc;
    .team_title{
      width: 100%;
      text-align: center;
      padding-top:102px;
      font-size: 3.6rem;
      font-weight: bold;
      padding-bottom:70px;
    }
    .founder{
      width: 100%;
      height:auto;
      padding-bottom:200px;
      padding-left:384px;
      .founder_list{
        width: 100%;
        padding-top:70px;
        padding-bottom: 70px;
        display:flex;
        display:-webkit-flex;
        .founder_pic{
          width: 480px;
          height:480px;
          background: #666;
        }
        .founder_message{
          width:568px;
          // background: red;
          margin-left:92px;
          .founder_name{
            color:#333;
            font-size: 1.8rem;
            margin-bottom:24px;
          }
          span{
            margin-bottom: 26px;
            font-size: 1.2rem;
            color:#333;
          }
        }
      }
    }
  }
}
</style>
