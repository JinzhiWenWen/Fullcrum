<template lang="html">
  <div class="release">
    <HeaderSeller>
      <p class="slot-mine">发布广告</p>
    </HeaderSeller>
    <div class="content">
      <div class="mess">

      </div>
      <p class="chose">
        <button type="button" name="button" class="rele">发布</button>
        <button type="button" name="button" class="cancel">取消</button>
      </p>
    </div>
  </div>
</template>

<script>
import HeaderSeller from '@/components/header-seller'
export default {
  components:{
    HeaderSeller
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
    background: red;
    border-radius:12px;
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
