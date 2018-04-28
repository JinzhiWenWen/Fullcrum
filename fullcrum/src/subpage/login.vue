<template lang="html">
  <div class="login-wapper">
    <Navg/>
    <div class="login">
      <h1>这是登陆页面</h1>
    </div>
  </div>
</template>

<script>
import Navg from '../components/nav_global'
export default {
  components:{
    Navg
  }
}
</script>

<style lang="scss" scoped>
  .login{
    line-height: 300px;
    text-align: center;
    font-size: 2rem;
  }
</style>
