<template lang="html">
  <div class="banner-wapper">
    <img src='../img/timg.jpg' alt='你好啊' class='img-responsive'>
    <Login/>
  </div>
</template>

<script>
import Login from './login-wapper'
export default {
  components:{
    Login
  }
}
</script>

<style lang="scss" scoped>
  .banner-wapper{
    width:100%;
    height:auto;
    .img-responsive{
      display: inline-block;
      width:100%;
      height:auto;
    }
  }
</style>
