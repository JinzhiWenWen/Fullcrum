<template lang="html">
  <div class="fcmarket">
    <HeaderFc>
      <p class="slot-mine">FC市场</p>
    </HeaderFc>
    <div class="content">
      <div class="radio">
        <router-link @click.native="Buy()" to="/fcshop" name="Purchase" tag="span" style="margin-right:120px;">
          <el-radio v-model="radio" label="1">购买</el-radio>
          </router-link>
        <router-link @click.native="Sell()" to="/sell" tag="span">
          <el-radio v-model="radio" label="2">出售</el-radio>
        </router-link>
      </div>
      <div class="data_view">
        <router-view></router-view>
      </div>
    </div>
  </div>
</template>

<script>
import HeaderFc from '@/components/header-user'
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
    HeaderFc
  }
}
</script>

<style lang="scss" scoped>
.content{
  width: 1142px;
  height:1116px;
  position: relative;
  left:50%;
  margin-left: -571px;
  padding-top:54px;
  .data_view{
    width: 100%;
    margin-top:60px;
    height:auto;
  }
}
</style>
