<template lang="html">
  <div class="nav-wapper" ref="nav_wapper">
    <Loge/>
    <Icon/>
  </div>
</template>

<script>
import Loge from '../logo/loge'
import Icon from './more'
export default {
  methods:{
    handleScroll () {
      var scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop
      if(scrollTop>=260){
        this.$refs.nav_wapper.style.background="#181f28"
      }else{
        this.$refs.nav_wapper.style.background="";
      }
    }
  },
  mounted(){
      window.addEventListener('scroll',this.handleScroll)
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
  }
</style>
