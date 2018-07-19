<template lang="html">
  <div class="logo">
    <div class="loge-wapper">
      <router-link to='/' name='Page' tag='p' class="loge-img"><img src="../img/Logo.png" alt=""></router-link>
    </div>
  </div>

</template>

<script>
export default {
}
</script>

<style lang="scss" scoped>
.logo{
  width: 100%;
  position: relative;
  min-width: 1080px;
  z-index: 600;
  .loge-wapper{
    width: 200px;
    height:60px;
    position: absolute;
    left:50%;
    margin-left: -90px;
    top:20px;
    text-align: center;
    box-sizing: border-box;
    // line-height: 10px;
    .loge-img{
      cursor: pointer;
    }
  }
}

</style>
