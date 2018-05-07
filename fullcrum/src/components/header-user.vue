<template lang="html">
  <div class="header_user">
      <div class="loge">
        <Loge/>
        <More/>
        <p>票据市场</p>
        <p>FUL（CNY）市场</p>
        <div class="left">
          <p>订单</p>
          <p>资产</p>
          <span class="user_pic" @click="lists"></span>
        </div>
        <div class="chose_lists" v-show="isShow">
          <ul>
            <li>个人中心</li>
            <li>我的发布</li>
            <li>商家申请</li>
          </ul>
        </div>
      </div>
      <div class="banner">
        <p>
          个人中心
        </p>
      </div>
      <div class="content">
        <div class="account_security">
          <p class="account_title">
            <span class="title_left">账户与安全</span>
            <span class="title_right">安全等级：<span style="color:red;">低</span></span>
          </p>
          <div class="account_message">
            <p class="user_name">
              <span class="nick_name">昵称</span>
              <span>{{userMessage.userName}}</span>
              <span>修改</span>
            </p>
          </div>
        </div>
      </div>
  </div>
</template>

<script>
import Loge from '@/logo/loge'
import More from '@/components/more'
export default {
  data(){
    return{
      isShow:false,
      userMessage:{
        userName:'张无忌的老师傅'
      }
    }
  },
  methods:{
    lists(){
      this.isShow=!this.isShow
    },
    closeList(){
      this.isShow=false
    }
  },
  components:{
    Loge,
    More
  }
}

</script>

<style lang="scss" scoped>
.header_user{
  width: 100%;
  height:280px;
  background:url('../img/Background.png');
  background-size: 100% 100%;
  .loge{
    width: 100%;
    height:80px;
    border-bottom:1px solid black;
    position: relative;
    p{
      display: inline-block;
      color:white;
      line-height: 80px;
      padding-left:48px;
      cursor:pointer;
    }
    .left{
      position:absolute;
      right:5%;
      top:.5%;
      display:flex;
      .user_pic{
        width: 32px;
        height:32px;
        background: red;
        border-radius:50%;
        margin-left:48px;
        margin-top:22px;
        cursor:pointer;
      }
    }
    .chose_lists{
      width:80px ;
      height:132px;
      position: absolute;
      top: 80px;
      right:4%;
      background:#272961;
      ul{
        display: flex;
        -webkit-flex-wrap:wrap;
        li{
          width:100%;
          height:44px;
          text-align: center;
          line-height: 44px;
          color:white;
          cursor:pointer;
        }
      }
    }
  }
  .banner{
    color:white;
    text-align: center;
    box-sizing: border-box;
    p{
      margin-top: 70px;
      font-size: 4.6rem;
    }
  }
  .content{
    width: 820px;
    height:1500px;
    margin-top:69px;
    position: absolute;
    left:50%;
    margin-left:-410px;
    padding-top:60px;
    .account_security{
      width: 100%;
      height:350px;
      border-radius:12px;
      border:1px solid #f5f5f5;
      box-shadow: 3px 3px 3px #eee;
      padding:24px;
      .account_title{
        padding-bottom:24px;
        border-bottom:2px solid #eee;
        margin-bottom: 14px;
        .title_left{
          font-size: 1.8rem;
          color:#333;
        }
        .title_right{
          margin-left:76%;
          font-size: 1.4rem;
        }
      }
    }
    .account_message{
      padding-left:32px;
      .user_name{
        width:100%;
        height:50px;
        border-bottom:1px solid #eee;
        line-height: 50px;
      }
      .nick_name{
        font-size: 1.4rem;
        color:#a1a1a1;
      }
    }
  }
}
</style>
