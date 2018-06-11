<template lang="html">
  <div class="header_about">
      <div class="loge" ref="loge">
        <Loge/>
        <More/>
        <router-link to='/vendor' tag='span' class='vendor'>卖家入口</router-link>
        <router-link to='/buyer'  tag='span' class='buyer'>买家入口</router-link>
      </div>
      <div class="banner">
        <slot>
          <p class="slot-mine">关于我们</p>
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
    }
  },
  mounted(){
    window.addEventListener('scroll',this.handleScroll)
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
.header_about{
  width: 100%;
  height:280px;
  background:url('../img/banner_center.png');
  background-size: 100% 100%;
  .vendor{
    display: inline-block;
    width:70px;
    text-align: center;
    position: absolute;
    left:50%;
    margin-left:-28%;
    top:30px;
    z-index:99;
    font-size:1.6rem;
    cursor:pointer;
    color:white;
    z-index: 505;
  }
  .buyer{
    display: inline-block;
    width:70px;
    text-align: center;
    position: absolute;
    right:50%;
    margin-right: -28%;
    top: 30px;
    z-index: 99;
    font-size:1.6rem;
    cursor: pointer;
    color:white;
    z-index: 505;
  }
  .loge{
    width: 100%;
    height:80px;
    position: fixed;
    top:0;
    left:0;
    z-index: 500;
    transition: .5s;
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
