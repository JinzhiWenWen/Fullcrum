<template lang="html">
  <div class="header_user">
      <div class="loge">
        <Loge/>
        <More/>
        <router-link to="/mark" tag='p'>票据市场</router-link>
        <router-link to="/fcshop" tag='p'>FC市场</router-link>
        <div class="right">
          <router-link to='/personalor' tag="p">订单</router-link>
          <router-link to='/personass' tag='p'>资产</router-link>
          <span class="user_pic" @click="lists"></span>
        </div>
        <div class="chose_lists" v-show="isShow">
          <ul>
            <router-link to='/person' tag='li'>个人中心</router-link>
            <li>我的发布</li>
            <li>商家申请</li>
          </ul>
        </div>
      </div>
      <div class="banner">
        <slot>
          <p class="slot-mine">个人中心</p>
        </slot>
      </div>
  </div>
</template>

<script>
import Loge from '@/logo/loge'
import More from '@/components/more'
export default {
  data(){
    return{
      isShow:false
    }
  },
  methods:{
    lists(){
      this.isShow=!this.isShow
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
    .right{
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
    .slot-mine{
      display: inline-block;
      margin-top: 70px;
      font-size: 4.6rem;
    }
  }
}
</style>
