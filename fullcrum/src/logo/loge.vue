<template lang="html">
  <div class="loge-wapper">
    <router-link to='/' name='Page' tag='p' class="loge-img"><img src="../img/Logo.png" alt=""></router-link>
  </div>
</template>

<script>
export default {
}
</script>

<style lang="scss" scoped>
  .loge-wapper{
    width: 200px;
    height:60px;
    position: absolute;
    left:50%;
    margin-left: -100px;
    top:10px;
    text-align: center;
    box-sizing: border-box;
    // line-height: 10px;
    .loge-img{
      cursor: pointer;
    }
  }
</style>
