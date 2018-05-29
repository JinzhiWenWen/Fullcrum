<template lang="html">
  <div class="sgin_up" ref="sgin_up">
    <div class="loge" ref="loge">
      <Loge/>
      <More/>
      <div class="logo" ref="logo">

      </div>
  </div>
  <div class="title">
    <slot>
      <p class="slot-tit">注册FULCRUM</p>
    </slot>
  </div>
</div>
</template>

<script>
import Loge from '@/logo/loge'
import More from '@/components/more'
export default {
  components:{
    Loge,
    More
  }
}
</script>

<style lang="scss" scoped>
.sgin_up{
  width: 100%;
  height:280px;
  background:url('../img/banner_center.png');
  background-size: 100% 100%;
  box-sizing: border-box;
  .loge{
    width: 100%;
    height:80px;
    position:absolute;
    left:0;
    top:0;
    z-index:500;
    transition:all .5s;
  }
  .title{
    width:100%;
    height:200px;
    color:white;
    font-size: 4.8rem;
    text-align: center;
    padding-top:8%;
  }
}
</style>
