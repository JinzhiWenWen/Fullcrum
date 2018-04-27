<template lang="html">
  <div class="nav-wapper">
    <Loge/>
    <Icon/>
  </div>
</template>

<script>
import Loge from '../logo/loge'
import Icon from './more'
export default {
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
    border-bottom: 1px solid black;
    position: absolute;
    top: 0;
    left:0;
    z-index: 12;
  }
</style>
