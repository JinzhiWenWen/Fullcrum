<template lang="html">
  <div class="seller_sell">
    <HeaderSeller>
      <p class="slot-mine">票据出售</p>
    </HeaderSeller>
    <div class="seller_sell_con">
      <p class="seller_sell_loader">
        <span class="el_upload">
          <el-upload
            action="https://jsonplaceholder.typicode.com/posts/"
            list-type="picture-card"
            :on-preview="handlePictureCardPreview"
            :on-remove="handleRemove">
            <i class="el-icon-plus"></i>
            <br>
            <span class="el-title">点击上传票据（正面）</span>
          </el-upload>
          <el-dialog :visible.sync="dialogVisible">
            <img width="100%" :src="dialogImageUrl" alt="">
          </el-dialog>
        </span>
        <span class="el_upload_two">
          <el-upload
            action="https://jsonplaceholder.typicode.com/posts/"
            list-type="picture-card"
            :on-preview="handlePictureCardPreview"
            :on-remove="handleRemove">
            <i class="el-icon-plus"></i>
            <br>
            <span class="el-title">点击上传票据（反面）</span>
          </el-upload>
          <el-dialog :visible.sync="dialogVisible">
            <img width="100%" :src="dialogImageUrl" alt="">
          </el-dialog>
        </span>
      </p>
      <div class="seller_sell_mess" :model="paper_lists">
        <p class="seller_sell_title">票面必填信息</p>
        <span>
          票号
          <input
          v-model="paper_lists.orderOn"
          style="margin-left:152px;"
          type="text" placeholder="点击输入"
          name="" value="">
        </span>
        <span>
          金额
          <input
          v-model="paper_lists.amount"
          style="margin-left:152px;"
          type="text" placeholder="单位（FC）"
          name="" value="">
        </span>
        <span>
          付款行
          <input
          v-model="paper_lists.payingBank"
          style="margin-left:140px;"
          type="text" placeholder="点击输入"
          name="" value="">
        </span>
        <span>
          兑现日期
          <input
          v-model="paper_lists.date"
          style="margin-left:128px;"
          type="text" placeholder="例：20180804"
          name="" value="">
        </span>
        <span>
          上一家备书企业
          <input
          v-model="paper_lists.enterprise"
          style="margin-left:92px;"
          type="text" placeholder="点击输入"
          name="" value="">
        </span>
        <span>
          票据可迁转
          <input
          v-model="paper_lists.moving"
          style="margin-left:118px;"
          type="radio" name="true" value="">
        </span>
        <span>
          利率（年化）
          <input
          v-model="paper_lists.rate"
          style="margin-left:108px;"
          type="text" placeholder="例：4.5%" name="" value="">
        </span>
      </div>
      <p class="seller_sell_chose">
        <button type="button" name="button" class="release">发布</button>
        <button type="button" name="button" class="cancel">取消</button>
      </p>
      <p class="warning_title">
        <span>1、请确保您的票据是可签转的，一经校验恶意操作将会被系统拉黑。</span>
        <span>2、您的FC收益会按照票据全额进入账户，提现时系统会自动扣除您所设置利率对应的人民币。</span>
      </p>
    </div>
  </div>
</template>

<script>
import HeaderSeller from '@/components/header-seller'
export default {
  data() {
    return {
      dialogImageUrl: '',
      dialogVisible: false,
      paper_lists:{
        orderNo:'',
        amount:'',
        payingBank:'',
        data:'',
        enterprise:'',
        moving:'',
        rate:''
      }
    };
  },
  methods: {
    handleRemove(file, fileList) {
      console.log(file, fileList);
    },
    handlePictureCardPreview(file) {
      this.dialogImageUrl = file.url;
      this.dialogVisible = true;
    }
  },
  components:{
    HeaderSeller
  }
}
</script>

<style lang="scss">
.seller_sell_con{
  width: 750px;
  height:auto;
  position: absolute;
  left:50%;
  margin-left: -375px;
  padding-top:80px;
  padding-bottom:80px;
  .seller_sell_loader{
    width: 100%;
    height:250px;
    background: #eee;
    display: flex;
    .el_upload{
      position: relative;
      border-right:5px solid #fff;
      .el-title{
        color:white;
        position: absolute;
        top:20%;
        left:30%;
        font-size: 1.8rem;
      }
      .el-upload--picture-card{
        width: 370px;
        height:250px;
        border:0;
        border-radius: 0;
        background: black;
        opacity: .5;
        line-height: 250px;
        .el-icon-plus{
          color:white;
          font-size: 10rem;
        }

      }
    }
    .el_upload_two{
      position: relative;
      border-left:5px solid #fff;
      box-sizing: border-box;
      .el-title{
        color:white;
        position: absolute;
        top:20%;
        left:30%;
        font-size: 1.8rem;
      }
      .el-upload--picture-card{
        width: 370px;
        height:250px;
        border:0;
        border-radius: 0;
        background: black;
        opacity: .5;
        line-height: 250px;
        .el-icon-plus{
          color:white;
          font-size: 10rem;
        }

      }
    }
  }
  .seller_sell_mess{
    width: 100%;
    height:474px;
    border-radius: 12px;
    margin-top:60px;
    box-shadow: 0 5px 10px #ddd;
    padding-left:26px;
    padding-right:26px;
    .seller_sell_title{
      width: 100%;
      padding-top:26px;
      padding-bottom:26px;
      border-bottom: 2px solid #eee;
      font-size: 1.8rem;
      margin-bottom: 14px;
    }
    span{
      width: 100%;
      border-bottom:1px solid #eee;
      color:#999;
      padding-top:16px;
      padding-bottom:16px;
    }
  }
  .seller_sell_chose{
    width: 100%;
    box-sizing: border-box;
    padding:54px 74px 54px 74px;
    button{
      width:230px;
      height:72px;
      border-radius: 5px;
      font-size: 2.2rem;
    }
    .release{
      margin-right: 138px;
      background: #4262c3;
      color:white;
    }
    .cancel{
      background: white;
      border:1px solid #4262c3;
      color:#4262c3;
    }
  }
  .warning_title{
    font-size:1.6rem;
    color:#999;
  }
}
</style>
