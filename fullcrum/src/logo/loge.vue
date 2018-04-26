<template lang="html">
  <div class="loge-wapper">
    <router-link to='/' name='Page' tag='p' class="loge-img">这是Logo</router-link>
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
    background: black;
    top:10px;
    text-align: center;
    line-height: 30px;
    p{
      color:white;
    }
  }
</style>
