<template>
  <div id="app">
    <transition :name="transitionName">
      <router-view class="trans-view"></router-view>
    </transition>
  </div>
</template>

<script>

// import Banner from './components/banner-wapper'
export default {
  name: 'App',
  data(){
    return{
      transitionName:'slide-left'
    }
  },
  method(){

  },
  watch:{
    '$route'(to,from){
      if(to.path=='/'){
        this.transitionName='slide-right';
      }else{
        this.transitionName='slide-left';
      }
    }
  }
}
</script>

<style>
  #app{
    margin:0;
    padding:0;
  }
  .trans-view{
    position: absolute;
    left: 0;
    top: 0;
    width:100%;
    height:100%;
    transition: all .8s cubic-bezier(.55,0,.5,1)
  }
  .slide-left-enter,.slide-right-leave-active{
    opacity:0;
    -webkit-transfrom:translate(0,20px);
    transform:translate(0,20px);
  }
  .slide-left-leave-active, .slide-right-enter {
  opacity: 0;
  -webkit-transform: translate(0,20px);
  transform: translate(0,20px);
}
</style>
