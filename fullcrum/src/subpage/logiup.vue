<template lang="html">
  <div class="sgin_up">
    <Headerup/>
    <p class="for">注册为</p>
    <div class="matter">
      <p class="table">
        <router-link to='/logiup/boor' tag='span' class="boor" @click.native="boor" :class="{active:color==1}">买家</router-link>
        <router-link to='/logiup/inve' tag='span' class="inve" @click.native="inve" :class="{active:color==2}">卖家</router-link>
      </p>
      <div class="view_box">
        <router-view></router-view>
      </div>
    </div>
  </div>
</template>

<script>
import Headerup from '@/components/header-sginUp'
export default {
  data(){
    return{
      color:1
    }
  },
  methods:{
    boor(){
      this.color=1;
    },
    inve(){
      this.color=2;
    }
  },
  components:{
    Headerup
  }
}
</script>

<style lang="scss" scoped>
.active{
  background: #4f8ef3!important;
  color:white!important;
}
.sgin_up{
  width: 100%;
  height:100%;
  .for{
    width:100%;
    font-size: 1.6rem;
    margin:0;
    box-sizing: border-box;
    padding-top:60px;
    padding-bottom: 60px;
    text-align: center;
  }
  .matter{
    width: 684px;
    height:800px;
    position: absolute;
    left:50%;
    margin-left:-342px;
    box-sizing: border-box;
    padding-left:56px;
    padding-right:56px;
    .table{
      width: 100%;
      margin:0!important;
      display: flex;
      height:60px;
      line-height: 60px;
      background: white;
      span{
        display: inline-block;
        width:50%;
        text-align: center;
        font-size: 2.4rem;
        cursor:pointer;
      }
    }
    .view_box{
      width: 100%;
      height: 740px;
    }
  }
}


</style>
