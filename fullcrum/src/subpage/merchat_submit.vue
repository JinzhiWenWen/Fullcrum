<template lang="html">
  <div class="mechat_submit">
    <HeaderUser>
      <p class="slot-mine">商家申请</p>
    </HeaderUser>
    <div class="merchat_sub_con">
      <p>您的资料已成功提交，请等待我们的工作人员进行审核，</p>
      <p>审核结果将通过手机短信，邮件等形式告知。</p>
      <p>
        <!-- <button type="button" name="button"></button> -->
        <router-link to="/person" tag="button">返回个人中心</router-link>
      </p>
    </div>
  </div>
</template>

<script>
import HeaderUser from '@/components/header-user'
export default {
  components:{
    HeaderUser
  }
}
</script>

<style lang="scss" scoped>
.merchat_sub_con{
  width: 1142px;
  height:auto;
  position: absolute;
  left:50%;
  margin-left: -571px;
  padding-top:234px;
  padding-bottom:234px;
  p{
    width:100%;
    text-align: center;
    font-size:2.4rem;
    button{
      width: 286px;
      height:60px;
      border-radius: 5px;
      background: #5277cc;
      color:white;
      font-size: 2.4rem;
      margin-top:160px;
    }
  }
}
</style>
