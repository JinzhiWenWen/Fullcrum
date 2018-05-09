<template lang="html">
  <div class="sgin_up">
    <div class="loge">
      <Loge/>
      <More/>
    </div>
    <div class="banner">
      <p class="myComponent">
        <slot>
          注册FULCRUM
        </slot>
      </p>
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
  background:url('../img/Background.png');
  background-size: 100% 100%;
  .loge{
    width: 100%;
    height:80px;
    border-bottom:1px solid black;
  }
  .banner{
    color:white;
    text-align: center;
    box-sizing: border-box;
    p{
      margin-top: 70px;
      font-size: 4.6rem;
    }
  }
}
</style>
