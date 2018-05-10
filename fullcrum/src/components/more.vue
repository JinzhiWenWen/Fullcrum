<template lang="html">
  <div class="more">
    <div class="icon" ref="icon" @click="Deg()">
      <i class="el-icon-plus"></i>
    </div>
    <div class="icon_close" ref="icon_close" @click="DegBack()">
      <i class="el-icon-close"></i>
    </div>
  </div>
</template>

<script>
export default {
  methods:{
    Deg(){
      this.$refs.icon.style.transform='rotate(45deg)';
      setTimeout(()=>{
        this.$refs.icon.style.display='none';
      },500);
      setTimeout(()=>{
        this.$refs.icon_close.style.display='block';
      },510)
    },
    DegBack(){
      this.$refs.icon_close.style.transform='rotate(-45deg)';
    }
  }
}
</script>

<style lang="scss" scoped>
  .icon{
    position: fixed;
    right:22px;
    top:16px;
    transition: .5s;
    font-size: 3.4rem;
    color:white;
    cursor:pointer;
  }
  .icon_close{
    position: fixed;
    right:22px;
    top:16px;
    display: none;
    font-size: 3.4rem;
    color:white;
    transition: .5s;
    cursor:pointer;
  }
</style>
