<template>
  <el-popover placement="top" width="160" v-model="visible">
    <p>{{title}}</p>
    <div style="text-align: right; margin: 0">
      <el-button size="mini" type="text" @click="visible = false"
        >取消</el-button
      >
      <el-button type="primary" size="mini" @click="visible = false"
        >继续</el-button
      >
    </div>
    <el-button v-bind="$attrs" v-on="$listeners" slot="reference">按钮</el-button>
    <!-- <el-button :type="type" :size="size"  v-on="$listeners" slot="reference">按钮</el-button> -->
  </el-popover>
</template>

<script>
export default {
  data() {
    return {
        visible: false
    };
  },
//   props:["title","type","size"],
  props:["title"],
  methods: {},
};
</script>

<style></style>
