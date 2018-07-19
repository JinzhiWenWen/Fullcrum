<template lang="html">
  <div class="personalor">
    <HeaderPerson>
      <p class="slot-mine">我的订单</p>
    </HeaderPerson>
    <div class="content">
      <div class="radio">
        <router-link @click.native="Buy()" to="/personalor/fc" tag="span" style="margin-right:120px;">
          <el-radio v-model="radio" label="1">FC</el-radio>
          </router-link>
        <router-link @click.native="Sell()" to="/personalor/paperor" tag="span">
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
      this.radio='1';
    },
    Sell(){
      this.radio='2'
    },
    getQuery(){
      this.radio=this.$route.query.radio;//接收默认选填参数
      if(this.radio==undefined){ //判断是否从购买完成页面进入
        this.radio='1'
      }
    }
  },
  created(){
    this.getQuery();
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
