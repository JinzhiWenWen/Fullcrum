<template lang="html">
  <div class="nav_global">
    <Loge/>
    <More/>
  </div>
</template>

<script>
import Loge from '../logo/loge'
import More from './more'
export default {
  components:{
    Loge,
    More
  }
}
</script>

<style lang="scss" scoped>
  .nav_global{
    width: 100%;
    height:80px;
    box-sizing: border-box;
    position: absolute;
    top: 0;
    left:0;
    // border-bottom:1px solid #000;
    background: -webkit-linear-gradient(blue, black); /* Safari 5.1 - 6.0 */
    background: -o-linear-gradient(blue, black); /* Opera 11.1 - 12.0 */
    background: -moz-linear-gradient(blue, black); /* Firefox 3.6 - 15 */
    background: linear-gradient(blue, black)
  }
</style>
