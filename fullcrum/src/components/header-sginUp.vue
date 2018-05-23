<template lang="html">
  <div class="sgin_up">
    <div class="loge">
      <Loge/>
      <More/>
      <div class="logo">

      </div>
      <p class="title">注册FULCRUM</p>
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
  box-sizing: border-box;
  .logo{
    width: 100%;
    height:80px;
    border-bottom:1px solid black;
  }
  .title{
    width:100%;
    color:white;
    margin-top: 70px;
    font-size: 4.8rem;
    text-align: center;
  }
}
</style>
