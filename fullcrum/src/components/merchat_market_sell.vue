<template lang="html">
  <div class="merchat_market_buy">
    <p class="mark_title">
      <span>商家（成单数 | 完成率）</span>
      <span style="margin-left:220px;">收购数量</span>
      <span style="margin-left:210px;">限额</span>
      <span style="margin-left:280px;">收购单价</span>
    </p>
    <ul class="lists">
      <li v-for="(item,index) in lists" :key="index">
        <span class="por">
          <span class="status"></span>
        </span>
        <span class="name">{{item.name}}</span>
        <span class="num">{{item.num}}</span>
        <span class="limit">{{item.limit}}</span>
        <span class="per">{{item.per}}</span>
      </li>
    </ul>
    <Pager/>
  </div>
</template>

<script>
import Pager from '@/components/pager'
import HeaderMerchat from '@/components/header-merchat'
export default {
  data(){
    return{
      lists:[
        {
          name:'海绵海绵我是大星（123 | 97%）',
          num:'100000.00FC',
          limit:'1000-5200FC',
          per:'0.99CNY'
        },{
          name:'海绵海绵我是大星（123 | 97%）',
          num:'100000.00FC',
          limit:'1000-5200FC',
          per:'0.99CNY'
        },{
          name:'海绵海绵我是大星（123 | 97%）',
          num:'100000.00FC',
          limit:'1000-5200FC',
          per:'0.99CNY'
        },{
          name:'海绵海绵我是大星（123 | 97%）',
          num:'100000.00FC',
          limit:'1000-5200FC',
          per:'0.99CNY'
        },{
          name:'海绵海绵我是大星（123 | 97%）',
          num:'100000.00FC',
          limit:'1000-5200FC',
          per:'0.99CNY'
        },{
          name:'海绵海绵我是大星（123 | 97%）',
          num:'100000.00FC',
          limit:'1000-5200FC',
          per:'0.99CNY'
        },{
          name:'海绵海绵我是大星（123 | 97%）',
          num:'100000.00FC',
          limit:'1000-5200FC',
          per:'0.99CNY'
        },{
          name:'海绵海绵我是大星（123 | 97%）',
          num:'100000.00FC',
          limit:'1000-5200FC',
          per:'0.99CNY'
        },{
          name:'海绵海绵我是大星（123 | 97%）',
          num:'100000.00FC',
          limit:'1000-5200FC',
          per:'0.99CNY'
        },{
          name:'海绵海绵我是大星（123 | 97%）',
          num:'100000.00FC',
          limit:'1000-5200FC',
          per:'0.99CNY'
        }
      ]
    }
  },
  components:{
    HeaderMerchat,
    Pager
  }
}
</script>

<style lang="scss" scoped>
.merchat_market_buy{
  .mark_title{
    width: 1120px;
    height:30px;
    border-bottom: 2px solid #eee;
    padding-left:18px;
    span{
      font-size: 1.6rem;
      color:#999;
    }
  }
  .lists{
    width: 100%;
    height:auto;
    li{
      width:1108px;
      padding-top:16px;
      padding-bottom:10px;
      border-bottom:1px solid #eee;
      box-sizing: border-box;
      position: relative;
      margin-left: 16px;
      span{
        font-size: 1.4rem;
      }
      .por{
        width: 36px;
        height:36px;
        border-radius: 50%;
        background: #999;
        position: relative;
        .status{
          width:8px;
          height:8px;
          border-radius: 50%;
          background: #0fd12a;
          position: absolute;
          top:80%;
          left:70%;
        }
      }
      .name{
        color:#4a78bf;
        position: absolute;
        top:26px;
        left:50px;
      }
      .num{
        position: absolute;
        top:26px;
        left:35.5%;
      }
      .limit{
        position:absolute;
        top:26px;
        left:59%;
      }
      .per{
        position: absolute;
        top:26px;
        left:90%;
        color:#72a485;
      }
    }
    li:hover{
      box-shadow: 0 0 15px #ccc;
      border-radius: 5px;
      width:1140px;
      padding-left:10px;
      padding-right:10px;
      margin-left: 0;
      padding-top:26px;
      padding-bottom:20px;
      .name{
        top:36px;
        left:64px;
      }
      .num{
        top:36px;
        left:36%;
      }
      .limit{
        top:36px;
        left:58.8%;
      }
      .per{
        top:36px;
        left:88.8%;
      }
    }
  }
}
</style>
