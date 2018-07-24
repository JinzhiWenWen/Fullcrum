<template lang="html">
  <div class="query">
    <HeaderUser>
      <p class="slot-mine">区块链浏览器</p>
    </HeaderUser>
    <div class="query_con">

    </div>
  </div>
</template>

<script>
import HeaderUser from '@/components/header-user'
export default {
  components:{
    HeaderUser
  }
}
</script>

<style lang="scss">
.query{
  width: 100%;
  height:100%;
  .query_con{
    width: 70%;
    height:80%;
    position: absolute;
    left:50%;
    margin-left: -35%;
  }
}
</style>
