<template>
  <div>
    <el-row justify="space-between" type="flex">
      <el-col :span="5">
        <div class="userTotal totalBox">
          <h3>总用户数</h3>
          <h2>{{userTotal}}个</h2>
        </div>
      </el-col>
      <el-col :span="5">
        <div class="orderTotal totalBox">
          <h3>总订单数</h3>
          <h2>{{orderTotal}}单</h2>
        </div>
      </el-col>
      <el-col :span="5">
        <div class="sendTotal totalBox">
          <h3>配送中</h3>
          <h2>{{sendTotal}}单</h2>
        </div>
      </el-col>
      <el-col :span="5">
        <div class="finishTotal totalBox">
          <h3>已完成订单</h3>
          <h2>{{finishTotal}}单</h2>
        </div>
      </el-col>
    </el-row>
  </div>
</template>
<script>
export default {
  data() {
    return {
        userTotal:22,
        orderTotal:324,
        sendTotal:45,
        finishTotal:256
    };
  },
  methods: {}
};
</script>
<style>
.totalBox {
  border-radius: 5px;
  padding: 10px;
  color: white;
}
.userTotal{
    background-image: linear-gradient(
    to bottom right,
    rgb(109, 205, 243),
    rgb(117, 22, 224));
  }
  .orderTotal{
    background-image: linear-gradient(
    to bottom right,
    rgb(23, 211, 195),
    rgb(255, 0, 234));
  }
  .sendTotal{
    background-image: linear-gradient(
    to bottom right,
    rgb(23, 51, 211),
    rgb(183, 0, 255));
  }
  .finishTotal{
    background-image: linear-gradient(
    to bottom right,
    rgb(23, 211, 195),
    rgb(0, 162, 255));
  }
</style>\