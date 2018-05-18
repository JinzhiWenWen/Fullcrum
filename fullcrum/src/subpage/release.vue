<template lang="html">
  <!-- 商家发布广告 -->
  <div class="release">
    <HeaderBuyer>
      <p class="slot-mine">发布广告</p>
    </HeaderBuyer>
    <div class="content">
      <div class="mess">
        <p class="table">
          <el-radio v-model="radio" label="1" @click.native="sell()">出售</el-radio>
          <el-radio v-model="radio" label="2" @click.native="buy()">购买</el-radio>
        </p>
        <p class="amount">
          金额
          <span>
            <input type="text" class="need" name="" value="">  FC
            <span style="color:#667dcc;" ref="blan" class="blan">（资产余额：100000FC）</span>
          </span>
        </p>
        <p class="limit">
          限额
          <input type="text" class="need" name="" value=""> FC -
          <input type="text" name="" value="">
        </p>
        <p class="ratio">
          比率
          <input type="text" class="need" name="" value="1"> FC ：
          <input type="text" name="" value="1">元
        </p>
      </div>
      <p class="chose">
        <button type="button" name="button" class="rele">发布</button>
        <button type="button" name="button" class="cancel">取消</button>
      </p>
    </div>
  </div>
</template>

<script>
import HeaderBuyer from '@/components/header-merchat'
export default {
  data () {
      return {
        radio: '1'
      };
    },
    methods:{
      buy(){
        this.$refs.blan.style.display='none'
      },
      sell(){
        this.$refs.blan.style.display='block'
      }
    },
    components:{
      HeaderBuyer
    }
}
</script>

<style lang="scss" scoped>
.content{
  width: 756px;
  height:800px;
  position: absolute;
  left:50%;
  margin-left: -378px;
  margin-top: 46px;
  .mess{
    width: 100%;
    height:288px;
    border-radius:12px;
    padding-left:26px;
    padding-right:26px;
    border:1px solid #fcfcfc;
    box-shadow: 0 5px 10px #ddd;
    .table{
      width: 100%;
      border-bottom: 2px solid #eee;
      padding-top:24px;
      padding-bottom:26px;
      margin-bottom: 16px;
    }
    p{
      width: 100%;
      width: 100%;
      border-bottom: 1px solid #eee;
      padding-top:16px;
      padding-bottom:16px;
      font-size:1.4rem;
      color:#999;
      position: relative;
      input{
        width:70px;
        text-align: center;
        border:1px solid #eee;
        color:#999;
        height:20px;
      }
      .need{
        margin-left: 150px;
      }
      .blan{
        position: absolute;
        top:32%;
        left:40%;
      }
    }
  }
  .chose{
    width: 100%;
    text-align: center;
    margin-top: 76px;
    button{
      width: 230px;
      height:72px;
      border-radius: 5px;
      font-size: 2.4rem;
    }
    .rele{
      background: #4262c3;
      color:white;
      margin-right: 80px;
    }
    .cancel{
      background: white;
      color:#4262c3;
      border:1px solid #4262c3;
      margin-left: 80px;
    }
  }
}
</style>
