<template lang="html">
  <div class="personal_assets">
    <HeaderPerson>
      <p class="slot-mine">资产</p>
    </HeaderPerson>
    <div class="person_content">
      <div class="fc" ref="fc">
        <p class="spec_fc">FC</p>
        <p class="blance">
          <span class="num">账户余额：100000.00FC</span>
          <button type="button" name="button" class="buy">购买</button>
          <button type="button" name="button" class="sell">出售</button>
          <button type="button" name="button" class="sell" @click="ex">兑换</button>
          <div style="margin-top: 40px;height: 152px;" class="al_ex">
            <el-collapse-transition>
              <div v-show="isShow">
                <div class="transition-box">
                  <img src="../img/part.png" alt="" class="ex_icon">
                  <p class="title">FC兑换USDT<span>实时汇率  1USDT=6.3452FC；1FC=0.1576USDT</span></p>
                  <p class="ex_inp">
                    <span>Icon</span>
                    <input type="text" class="usdt_inp" name="" value="" placeholder="USDT">
                    <br>
                    <input type="text" name="" class="fc_inp" value="" placeholder="FC">
                    <span class="ex_oper">
                      <button type="button" name="button" style="background:#5277cc;color:white;">确认</button>
                      <button type="button" name="button"
                      style="margin-left:6px;border:2px solid #5277cc;color:#5277cc;background:white;"
                      @click="close"
                      >取消</button>
                    </span>
                  </p>
                </div>
              </div>
            </el-collapse-transition>
          </div>
        </p>
      </div>
      <div class="usdt" :class="{active:num==1}">
        <p class="spec_fc">USDT</p>
        <p class="blance">
          <span class="num">账户余额：233333.00USDT</span>
          <button type="button" name="button" class="buy">充值</button>
          <button type="button" name="button" class="sell">兑换</button>
          <button type="button" name="button" class="sell">提币</button>
        </p>
      </div>
    </div>
  </div>
</template>

<script>
import HeaderPerson from '@/components/header-user'
export default {
  data(){
    return{
      isShow:false,
      num:0
    }
  },
  methods:{
    ex(){
      if(this.isShow=!this.isShow){
        this.num=1;
      }else{
          this.num=0;
      }
    },
    close(){
      this.isShow=false;

      this.num=0;
    }
  },
  components:{
    HeaderPerson
  }
}
</script>

<style lang="scss" scoped>
.slot-mine{
  margin-top: 70px;
  font-size: 4.6rem;
}
.active{
  margin-top: 200px!important;
}
.transition-box {
    box-sizing: border-box;
    width:100%;
    height:152px;
    background: #eee;
    border-radius: 12px;
    box-shadow: 0 5px 10px #ddd;
    padding-left:34px;
  }
.ex_icon{
    position: absolute;
    top:23%;
    left:86%;
}
.title{
  font-size: 1.8rem;
  padding-top:26px;
  padding-bottom:36px;
  span{
    font-size: 1.2rem;
    color:#4262c3;
    margin-left: 14px;
  }
}
.ex_inp{
  height:52px;
  position: relative;
  input{
    height:22px;
    border:1px solid #ddd;
    border-radius:5px;
    padding-left:10px;
  }
  span{
    height:52px;
    background: #ccc;
  }
  .fc_inp{
    position: absolute;
    top:32px;
    left:28px;
  }
  .ex_oper{
    position: absolute;
    right:8%;
    height:0;
    top:10%;
    button{
      width:120px;
      height:40px;
      border-radius: 5px;
      font-size: 1.8rem;
    }
  }
}
.person_content{
  width: 756px;
  height:1000px;
  position: absolute;
  left:50%;
  margin-left: -378px;
  padding-top:64px;
  .fc{
    width:100%;
    height:152px;
    border-radius: 12px;
    box-shadow: 0 5px 10px #ddd;
    padding-left:34px;
    padding-right:34px;
    .spec_fc{
      padding-top:26px;
      padding-bottom:26px;
      border-bottom: 2px solid #eee;
      font-size: 1.6rem;
    }
    .blance{
      padding-top:20px;
      button{
        width: 120px;
        height:40px;
        border-radius: 5px;
        background: white;
        font-size: 1.8rem;
      }
      .num{
        font-size: 1.4rem;
        color:#b8b8b8;
      }
      .buy{
        margin-left: 146px;
        background: #5277cc;
        color:white;
      }
      .sell{
        margin-left: 6px;
        border:2px solid #5277cc;
        color:#5277cc;
      }
    }
  }
  .usdt{
    margin-top:60px;
    width:100%;
    height:152px;
    border-radius: 12px;
    box-shadow: 0 5px 10px #ddd;
    padding-left:34px;
    padding-right:34px;
    transition: .5s;
    .spec_fc{
      padding-top:26px;
      padding-bottom:26px;
      border-bottom: 2px solid #eee;
      font-size: 1.6rem;
    }
    .blance{
      padding-top:20px;
      button{
        width: 120px;
        height:40px;
        border-radius: 5px;
        background: white;
        font-size: 1.8rem;
      }
      .num{
        font-size: 1.4rem;
        color:#b8b8b8;
      }
      .buy{
        margin-left: 126px;
        background: #5277cc;
        color:white;
      }
      .sell{
        margin-left: 6px;
        border:2px solid #5277cc;
        color:#5277cc;
      }
    }
  }
}
</style>
