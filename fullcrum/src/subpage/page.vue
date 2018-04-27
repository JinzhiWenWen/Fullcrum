<template lang="html">
  <div class="page-wapper">
      <Banner/>
      <router-link to='/vendor' tag='span' class='vendor'>卖家入口</router-link>
      <router-link to='/buyer'  tag='span' class='buyer'>买家入口</router-link>
      <Nav/>
      <Content/>
  </div>
</template>

<script>
import Banner from '../components/banner-wapper'
import Nav from '../components/nav-wapper'
import Content from '../components/content'
export default {
  components:{
    Banner,
    Nav,
    Content
  }
}
</script>

<style lang="scss" scoped>
  .vendor{
    display: inline-block;
    width:70px;
    // background: black;
    text-align: center;
    color:red;
    position: absolute;
    right:50%;
    margin-right:-28%;
    top:30px;
    z-index:99;
    font-size:1.6rem;
    cursor:pointer;
  }
  .buyer{
    display: inline-block;
    width:70px;
    // background: black;
    text-align: center;
    color:red;
    position: absolute;
    left:50%;
    margin-left: -28%;
    top: 30px;
    z-index: 99;
    font-size:1.6rem;
    cursor: pointer;
  }
</style>
