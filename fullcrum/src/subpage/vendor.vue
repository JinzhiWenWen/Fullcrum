<template lang="html">
  <div class="sign-wapper">
    <Loge/>
    <div class="vendor">
      <h3>这是卖家页面</h3>
    </div>

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
.vendor{
  text-align: center;
  line-height: 300px;
}
</style>
