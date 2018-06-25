<template lang="html">
  <div class="page-wapper">
      <Banner/>
      <Nav/>
      <Content/>
  </div>
</template>

<script>
import Banner from '../components/banner-wapper'
import Nav from '../components/nav-wapper'
import Content from '../components/page_content'
export default {
  components:{
    Banner,
    Nav,
    Content
  }
}
</script>

<style lang="scss" scoped>
.page-wapper{
  width: 100%;
  height:100%;
}
</style>
