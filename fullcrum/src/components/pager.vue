<template lang="html">
  <div class="pager">
    <el-pagination
      background
      layout="prev, pager, next"
      :total="50">
    </el-pagination>
  </div>
</template>

<script>
export default {
}
</script>

<style lang="scss" scoped>
.pager{
  width: 100%;
  text-align: center;
  margin-top: 60px;
}
</style>
