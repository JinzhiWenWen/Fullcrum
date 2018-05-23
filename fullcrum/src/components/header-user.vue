<template lang="html">
  <div class="header_user">
      <div class="loge" ref="loge">
        <Loge/>
        <More/>
        <div class="left">
          <router-link to="/mark" tag='p'>票据市场</router-link>
          <router-link to="/fcshop" tag='p'>FC市场</router-link>
        </div>
        <div class="right">
          <router-link to='/personalor' tag="p">订单</router-link>
          <router-link to='/personass' tag='p'>资产</router-link>
          <span class="user_pic" @click="lists"></span>
        </div>
        <div class="chose_lists" v-show="isShow">
          <ul>
            <router-link to='/person' tag='li'>个人中心</router-link>
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
    },
    handleScroll () {
      var scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop
      if(scrollTop>=260){
        this.$refs.loge.style.background="#181f28"
      }else{
        this.$refs.loge.style.background="";
      }
    }
  },
  mounted(){
    window.addEventListener('scroll',this.handleScroll)
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
    position: fixed;
    top:0;
    left:0;
    z-index: 500;
    transition: .5s;
    p{
      display: inline-block;
      color:white;
      line-height: 80px;
      padding-left:48px;
      cursor:pointer;
    }
    .left{
      position: absolute;
      top:.5%;
      left:.5%;
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
      height:88px;
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
      margin-top: 150px;
      font-size: 4.6rem;
    }
  }
}
</style>
