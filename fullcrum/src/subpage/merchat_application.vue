<template lang="html">
  <div class="merchat_application">
    <HeaderUser>
      <p class="slot-mine">商家申请</p>
    </HeaderUser>
    <div class="merchat_ali_con">
      <div class="merchat_ali_title">
        <p class="alt">怎样成为尊贵的商家？</p>
        <p class="stepOne">
          <span style="color:#666;">步骤一：发送视频申请邮件</span>
          <br><br>
          <span>请录制一段不超过三分钟的视频，视频要求如下：</span>
          <br><br>
          <span>请手持身份证正面站在光线充足处，进行视频录制，保持录制过程中无明显抖动，音像全部清晰。</span>
          <br><br>
          <span>视频需用普通话朗读以下文字，这段文字信息需和本人手持身份证信息一致：”
            <span style="color:#666;">本人姓名XXX、身份证号码XXXXXXX。我的资金来源合法可靠，</span>
          </span>
          <br><br>
          <span style="color:#666;">自愿交易FC并不只限于FC等数字货币，本人已经充分了解数字货币概念及其潜在风险，本人为合法自然人，具有完全民事能力，本人具有抗风险</span>
          <br><br>
          <span style="color:#666;">能力并愿意承担一切因此带来的风险。</span>”
          <br><br>
          <span>请将以上录制好的视频资料和申请材料发送邮件至123456789@168.com，并标明”申请成为商家”。</span>
          </p>
        <p class="stepTwo">
          <span style="color:#666;">步骤二：资料填写</span>
          <br><br>
          <span>在下一页面按要求认真填写申请资料，并点击同意冻结5000FUL作为商家保证金。</span>
          </p>
        <p class="stepThree">
          <span style="color:#666;">步骤三：资料审核</span>
          <br><br>
          <span>我们将在48小时内对您的商家申请资料进行审核，请保持你预留的联系方式畅通并留意邮箱。我们会派服务专员与您联系。</span>
          </p>
      </div>
      <p class="merchat_ali_chose">
        <button type="button" name="button" class="back" @click="appBack()">返回</button>
        <router-link to='/merchatmes' tag='button' class="next">下一步</router-link>
      </p>
    </div>
  </div>
</template>

<script>
import HeaderUser from '@/components/header-user'
export default {
  methods:{
    appBack(){
      window.history.back()
    }
  },
  components:{
    HeaderUser
  }
}
</script>

<style lang="scss" scoped>
.merchat_application{
  width: 100%;
  height:auto;
  .merchat_ali_con{
    width: 1142px;
    height:1000px;
    position: absolute;
    left:50%;
    margin-left:-571px;
    padding-top:60px;
    .merchat_ali_title{
      width: 100%;
      height:680px;
      box-shadow: 3px 3px 3px #eee;
      border-radius: 12px;
      border:1px solid #f5f5f5;
      padding-left:32px;
      padding-right:32px;
      p{
        color:#999;
        font-size: 1.6rem;
      }
      .alt{
        width: 100%;
        height: 70px;
        line-height: 70px;
        font-size:2rem ;
        border-bottom:2px solid #eee;
        color:black;
      }
      .stepOne{
        margin-top: 32px;
        margin-bottom: 56px;
      }
      .stepTwo{
        // margin-top: 32px;
        margin-bottom: 56px;
      }
    }
    .merchat_ali_chose{
      width: 100%;
      height:88px;
      padding-top:48px;
      box-sizing: border-box;
      text-align: center;
      button{
        width:120px;
        height:40px;
        border-radius: 5px;
      }
      .next{
        color:white;
        background: #5277cc;
        margin-left:10px;
      }
      .back{
        color:#5277cc;
        background: white;
        border:1px solid #5277cc;
        margin-right: 10px;
      }
    }
  }
}
</style>
