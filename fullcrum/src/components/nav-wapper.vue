<template lang="html">
  <div class="nav-wapper" ref="navWapper">
    <Loge/>
    <router-link to='/vendor' tag='span' class='vendor'>卖家入口</router-link>
    <router-link to='/buyer'  tag='span' class='buyer'>买家入口</router-link>
    <Icon/>
  </div>
</template>

<script>
import Loge from '../logo/loge'
import Icon from './more'
export default {
  mounted(){
      var self=this;
      window.addEventListener('scroll',self.handleScroll)
  },
  methods:{
    handleScroll () {
      var self=this;
      var scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop;
      if(scrollTop>=260){
        self.$refs.navWapper.style.background="#181f28"
      }else{
        self.$refs.navWapper.style.background="";
      }
    }
  },
  destroyed(){
    window.addEventListener('scroll',self.handleScroll())
  },
  components:{
    Loge,
    Icon
  }
}
</script>

<style lang="scss" scoped>
  .nav-wapper{
    width:100%;
    height:80px;
    position: fixed;
    top: 0;
    left:0;
    z-index: 12;
    transition:all .5s;
    .vendor{
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
    }
    .buyer{
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
    }
  }
</style>
