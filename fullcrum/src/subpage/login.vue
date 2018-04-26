<template lang="html">
  <div class="login-wapper">
    <Loge/>
    <h3>这是登陆页面</h3>
  </div>
</template>

<script>
import Loge from '../logo/loge'
export default {
  components:{
    Loge
  }
}
</script>

<style lang="scss" scoped>
  .login-wapper{
    line-height: 300px;
    text-align: center;
  }
</style>
