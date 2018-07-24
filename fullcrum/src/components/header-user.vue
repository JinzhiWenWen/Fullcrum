<template lang="html">
  <div class="header_user">
      <div class="loge" ref="loge">
        <Loge/>
        <More/>
        <div class="" style="width:100%;height:80px;position:absolute;top:0;min-width:1080px;">
          <div class="left">
            <router-link to="/mark" tag='p'>票据市场</router-link>
            <router-link to="/fcshop" tag='p'>FC市场</router-link>
          </div>
          <div class="right">
            <router-link to='/personalor' tag="p">订单</router-link>
            <router-link to='/personass' tag='p'>资产</router-link>
            <span class="user_pic" @mouseenter="lists()" @mouseleave="nolist()"></span>
          </div>
        </div>
        <div class="chose_lists" v-show="isShow">
          <ul @mouseenter="lists()" @mouseleave="nolist()">
            <li class="null"></li>
            <router-link to='/person' tag='li'>个人中心</router-link>
            <router-link to='/merchatap' tag='li'>商家申请</router-link>
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
      this.isShow=true
    },
    nolist(){
      this.isShow=false
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
    buyerMe(){
      var Id=sessionStorage.getItem('mes');
      this.axios.get(this.oUrl+'/fcexchange/feuser/'+Id).then((res)=>{
        // console.log(res)
      })
    }
  },
  created(){
    window.addEventListener('scroll',this.handleScroll);
    this.buyerMe()
  },
  beforeDestroy(){
    window.removeEventListener('scroll',this.handleScroll);
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
  min-width: 1080px;
  background:url('../img/banner_center.png');
  background-size: 100% 100%;
  .loge{
    width: 100%;
    min-width: 100%;
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
      right:8%;
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
        z-index: 10;
      }
    }
    .chose_lists{
      width:80px ;
      height:140px;
      position: absolute;
      top: 36px;
      right:6.5%;
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
          background:#272961;
        }
        li:hover{
          background: red;
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
