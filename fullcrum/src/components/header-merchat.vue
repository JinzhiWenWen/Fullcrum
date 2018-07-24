<template lang="html">
  <div class="header_user">
      <div class="loge" ref="loge">
        <Loge/>
        <More/>
        <div class="" style="width:100%;height:80px;position:absolute;top:0;min-width:1080px;">
          <router-link class="left" to="/merchatma" tag='p'>FC市场</router-link>
          <div class="right">
            <router-link to='/merchator' tag="p">订单</router-link>
            <router-link to='/merchatass' tag='p'>资产</router-link>
            <span class="user_pic" @mouseenter="merlists()" @mouseleave="mernolist()"></span>
          </div>
        </div>
        <div class="chose_lists" v-show="isShow">
          <ul  @mouseenter="merlists()" @mouseleave="mernolist()">
            <li></li>
            <router-link to='/merchat' tag='li'>个人中心</router-link>
            <router-link to='rele' tag='li'>发布广告</router-link>
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
    merlists(){
      this.isShow=true;
    },
    mernolist(){
      this.isShow=false
    },
    handleScroll () {
      var self=this;
      var scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop;
      if(scrollTop>=260){
        self.$refs.loge.style.background="#181f28"
      }else{
        self.$refs.loge.style.background="";
      }
    },
    getMes(){
      var id=sessionStorage.getItem('mes');
      this.axios.get(this.oUrl+'/fcexchange/feuser/'+id).then((res)=>{
        console.log(res)
      })
    }
  },
  created(){
    this.getMes()
  },
  mounted(){
    window.addEventListener('scroll',this.handleScroll)
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
      right:20vh;
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
        z-index: 20;
      }
    }
    .chose_lists{
      width:80px ;
      height:132px;
      position: absolute;
      top: 36px;
      right:3.7%;
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
