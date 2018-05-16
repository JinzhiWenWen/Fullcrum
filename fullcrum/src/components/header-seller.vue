<template lang="html">
  <div class="header_user">
      <div class="loge">
        <Loge/>
        <More/>
        <router-link to="/sellerma" tag='p'>票据市场</router-link>
        <div class="right">
          <p @click="malists()">票据管理</p>
          <div class="ma_lists" v-show="isShowMa">
            <ul>
              <router-link to='/rele' tag='li'>票据发布</router-link>
              <li>票据列表</li>
            </ul>
          </div>
          <router-link to='/sellerass' tag='p'>资产</router-link>
          <span class="user_pic" @click="backCenter()"></span>
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
      isShowMa:false
    }
  },
  methods:{
    backCenter(){
      this.$router.push('/seller')
    },
    malists(){
      this.isShowMa=!this.isShowMa
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
    .ma_lists{
      width:80px ;
      height:88px;
      position: absolute;
      top: 80px;
      right:54%;
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
