<template lang="html">
  <div class="merchat_market">
    <HeaderMerchat>
      <p class="slot-mine">FC市场</p>
    </HeaderMerchat>
    <div class="merchat_market_con">
      <router-link @click.native="Buy()" to='/merchatma' tag='span'>
        <el-radio v-model="radio" label="1">出售</el-radio>
      </router-link>
      <router-link @click.native="Sell()" to="/merchatmase" tag="span">
        <el-radio v-model="radio" label="2">购买</el-radio>
      </router-link>
      <div class="view_box">
        <router-view></router-view>
      </div>
    </div>

  </div>
</template>

<script>
import HeaderMerchat from '@/components/header-merchat'
export default {
  data(){
    return{
      radio:'1'
    }
  },
  methods:{
    Buy(){
      this.radio='1'
    },
    Sell(){
      this.radio='2'
    }
  },
  components:{
    HeaderMerchat
  }
}
</script>

<style lang="scss" scoped>
.merchat_market_con{
  width: 1142px;
  height:auto;
  padding-top:54px;
  position: absolute;
  left:50%;
  margin-left:-571px;
  span{
    margin-right: 120px;
  }
  .view_box{
    margin-top: 60px;
    padding-bottom:60px;
  }
}
</style>
