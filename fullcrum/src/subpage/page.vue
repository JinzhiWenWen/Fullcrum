<template lang="html">
  <div class="page-wapper">
      <Banner/>
      <router-link to='/vendor' tag='span' class='vendor'>卖家</router-link>
      <router-link to='/buyer'  tag='span' class='buyer'>买家</router-link>
      <Nav/>
  </div>
</template>

<script>
import Banner from '../components/banner-wapper'
import Nav from '../components/nav-wapper'
export default {
  components:{
    Banner,
    Nav
  }
}
</script>

<style lang="scss" scoped>
  .vendor{
    display: inline-block;
    width:60px;
    background: black;
    text-align: center;
    color:white;
    position: absolute;
    right:50%;
    margin-right:-28%;
    top:30px;
    z-index:99;
  }
  .buyer{
    display: inline-block;
    width:60px;
    background: black;
    text-align: center;
    color:white;
    position: absolute;
    left:50%;
    margin-left: -28%;
    top: 30px;
    z-index: 99;
  }
</style>
