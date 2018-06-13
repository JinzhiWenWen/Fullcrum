<template lang="html">
  <div class="page-wapper">
      <Banner/>
      <Nav/>
      <Content/>
  </div>
</template>

<script>
import Banner from '../components/banner-wapper'
import Nav from '../components/nav-wapper'
import Content from '../components/page_content'
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
    text-align: center;
    position: fixed;
    left:50%;
    margin-left:-28%;
    top:30px;
    z-index:99;
    font-size:1.6rem;
    cursor:pointer;
    color:white;
  }
  .buyer{
    display: inline-block;
    width:70px;
    text-align: center;
    position: fixed;
    right:50%;
    margin-right: -28%;
    top: 30px;
    z-index: 99;
    font-size:1.6rem;
    cursor: pointer;
    color:white;
  }
</style>
