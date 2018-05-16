<template lang="html">
  <div class="personalor">
    <HeaderPerson>
      <p class="slot-mine">我的订单</p>
    </HeaderPerson>
    <div class="content">
      <div class="radio">
        <router-link @click.native="Buy()" to="/personalor" tag="span" style="margin-right:120px;">
          <el-radio v-model="radio" label="1">FC</el-radio>
          </router-link>
        <router-link @click.native="Sell()" to="/paperor" tag="span">
          <el-radio v-model="radio" label="2">票据</el-radio>
        </router-link>
      </div>
      <div class="data_view">
        <router-view></router-view>
      </div>
    </div>
  </div>
</template>

<script>
import HeaderPerson from '@/components/header-user'
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
    HeaderPerson
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
    height:auto
  }
}
</style>
