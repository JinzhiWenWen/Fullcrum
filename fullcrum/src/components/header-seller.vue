<template lang="html">
  <div class="header_user">
      <div class="loge" ref="loge">
        <Loge/>
        <More/>
        <router-link class="left" to="/sellerma" tag='p'>票据市场</router-link>
        <div class="right">
          <p @mouseenter="malists()" @mouseleave="hidemali()">票据管理</p>
          <div class="ma_lists" v-show="isShowMa"  @mouseenter="malists()" @mouseleave="hidemali()">
            <ul >
              <li></li>
              <router-link to='/sellerse' tag='li'>票据发布</router-link>
              <router-link to='/selleror' tag="li">票据列表</router-link>
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
      isShowMa:false,
      myData:{}
    }
  },
  methods:{
    backCenter(){
      this.$router.push('/seller')
    },
    malists(){
      this.isShowMa=true;
    },
    hidemali(){
      this.isShowMa=false
    },
    handleScroll () {
      var scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop
      var self=this;
      if(scrollTop>=260){
        self.$refs.loge.style.background="#181f28"
      }else{
        self.$refs.loge.style.background="";
      }
    },
    obtain(){
      var Id=sessionStorage.getItem('mes');
      this.axios.get(this.oUrl+'/fcexchange/feuser/'+Id).then((res)=>{
        this.myData=res.data
        // console.log(this.myData)
      })
    }
  },
  mounted(){
    window.addEventListener('scroll',this.handleScroll);
    this.obtain()
  },
  destroyed(){
    window.addEventListener('scroll',this.handleScroll());
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
  background:url('../img/banner_center.png');
  background-size: 100% 100%;
  .loge{
    width: 100%;
    height:80px;
    position: fixed;
    top:0;
    left:0;
    z-index: 500;
    transition:all .5s;
    p{
      display: inline-block;
      color:white;
      line-height: 80px;
      padding-left:48px;
      cursor:pointer;
    }
    .left{
      position: absolute;
      left:.5%;
      top:.5%;
    }
    .right{
      position:absolute;
      right:5%;
      top:.5%;
      display:flex;
      .user_pic{
        width: 32px;
        height:32px;
        background: url('../img/UserPic.png');
        background-size: 100% 100%;
        border-radius:50%;
        margin-left:48px;
        margin-top:22px;
        cursor:pointer;
      }
    }
    .ma_lists{
      width:80px ;
      height:auto;
      position: absolute;
      top: 20px;
      right:55%;
      z-index: -1;
      border-radius: 5px;
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
          background: #272961;
        }
        li:nth-child(1){
          opacity: 0;
        }
        li:nth-child(2){
          border-top-left-radius: 5px;
          border-top-right-radius: 5px;
        }
        li:nth-child(3){
          border-bottom-left-radius: 5px;
          border-bottom-right-radius: 5px;
        }
        li:hover{
          background: red;
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
