<template lang="html">
  <div class="more">
    <div class="icon" ref="icon" @click="Deg()">
      <i class="el-icon-plus"></i>
    </div>
    <div class="icon_close" ref="icon_close" @click="DegBack()">
      <i class="el-icon-close"></i>
    </div>
    <div class="side_navigation" ref="side_navigation">
      <ul class="more_chose">
        <li ref="more_login">登录</li>
        <li ref="more_page">首页</li>
        <li ref="more_center">个人中心</li>
        <li ref="more_market">票据市场</li>
        <li ref="more_about" @click="moreAbout()">关于我们</li>
      </ul>
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
        this.$refs.more_login.style.transform='translateX(0)';
      },150)
      setTimeout(()=>{
        this.$refs.more_page.style.transform='translateX(0)';
      },300)
      setTimeout(()=>{
        this.$refs.more_center.style.transform='translateX(0)';
      },450)
      setTimeout(()=>{
        this.$refs.more_market.style.transform='translateX(0)';
      },600)
      setTimeout(()=>{
        this.$refs.more_about.style.transform='translateX(0)';
      },750)
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
      this.$refs.more_login.style.transform='translateX(-150px)';
      this.$refs.more_page.style.transform='translateX(-150px)';
      this.$refs.more_center.style.transform='translateX(-150px)';
      this.$refs.more_market.style.transform='translateX(-150px)';
      this.$refs.more_about.style.transform='translateX(-150px)';
      setTimeout(()=>{
        this.$refs.icon_close.style.display='none';
      },303)
      setTimeout(()=>{
        this.$refs.icon.style.display='block';
      },304)
      this.$refs.side_navigation.style.left='-20%';
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
      this.$refs.side_navigation.style.left='-20%';
      this.$refs.mask.style.display='none';
      this.$refs.more_login.style.transform='translateX(-150px)';
      this.$refs.more_page.style.transform='translateX(-150px)';
      this.$refs.more_center.style.transform='translateX(-150px)';
      this.$refs.more_market.style.transform='translateX(-150px)';
      this.$refs.more_about.style.transform='translateX(-150px)';
    },
    moreAbout(){
      this.$router.push('/about')
    },
    query(){
      var Id=sessionStorage.getItem('mes');
      console.log(Id)
      if(Id){
        this.$refs.more_login.style.display='none'
      }else{
        this.$refs.more_login.style.display='block'
      }
    }
  },
  mounted(){
    this.query()
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
    background: rgba(28,31,129,.9);
    transition: 1s;
    z-index: 9999;
    padding-top:10%;
    .more_chose{
      width: 100%;
      height:auto;
      li{
        color:white;
        cursor:pointer;
        height:60px;
        line-height: 60px;
        text-align: left;
        font-size: 1.8rem;
        padding-left:60px;
        transform: translateX(-150px);
        transition:all 1s;
      }
    }
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
