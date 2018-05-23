<template lang="html">
  <div class="more">
    <div class="icon" ref="icon" @click="Deg()">
      <i class="el-icon-plus"></i>
    </div>
    <div class="icon_close" ref="icon_close" @click="DegBack()">
      <i class="el-icon-close"></i>
    </div>
    <div class="side_navigation" ref="side_navigation">

    </div>
    <div class="mask" ref="mask" @click="close()">

    </div>
  </div>
</template>

<script>
export default {
  methods:{
    Deg(){
      this.$refs.icon.style.transform='rotate(45deg)';
      this.$refs.icon_close.style.transform='rotate(0)';
      setTimeout(()=>{
        this.$refs.icon.style.display='none';
      },301);
      setTimeout(()=>{
        this.$refs.icon_close.style.display='block';
      },302)
      this.$refs.side_navigation.style.left='0';
        this.$refs.mask.style.display='block';
    },
    DegBack(){
      this.$refs.icon_close.style.transform='rotate(-45deg)';
      this.$refs.icon.style.transform='rotate(0)';
      setTimeout(()=>{
        this.$refs.icon_close.style.display='none';
      },303)
      setTimeout(()=>{
        this.$refs.icon.style.display='block';
      },304)
      this.$refs.side_navigation.style.left='-20%'
      this.$refs.mask.style.display='none';
    },
    close(){
      this.$refs.icon_close.style.transform='rotate(-45deg)';
      this.$refs.icon.style.transform='rotate(0)';
      setTimeout(()=>{
        this.$refs.icon_close.style.display='none';
      },303)
      setTimeout(()=>{
        this.$refs.icon.style.display='block';
      },304)
      this.$refs.side_navigation.style.left='-20%'
      this.$refs.mask.style.display='none';
    }
  }
}
</script>

<style lang="scss" scoped>
.more{
  width: 100%;
  height:100%;
  overflow: hidden;
}
  .icon{
    position: absolute;
    right:22px;
    top:16px;
    transition: .3s;
    font-size: 3.4rem;
    color:white;
    cursor:pointer;
    z-index: 20;
  }
  .icon_close{
    position: absolute;
    right:22px;
    top:16px;
    display: none;
    font-size: 3.4rem;
    color:white;
    transition: .5s;
    cursor:pointer;
    z-index: 20;
  }
  .side_navigation{
    width: 20%;
    height:1000px;
    position: fixed;
    left:-20%;
    top:0;
    background: blue;
    transition: 1s;
    z-index: 9999;
  }
  .mask{
    width: 100%;
    height:1000px;
    background: black;
    opacity:.5;
    position: fixed;
    right:0;
    top:0;
    z-index: 10;
    display: none;
  }
</style>
