<template lang="html">
  <div class="buyer-wapper">
    <Loge/>
    <div class="buyer-wapper">
      <h3>这是买家页面</h3>
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
  .buyer-wapper{
    text-align: center;
    line-height: 300px;
  }
</style>
