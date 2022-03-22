<template>
  <div class="addPlanContainer">
    <h2>添加计划</h2>
    <el-form
      label-position="left"
      label-width="100px"
      :model="item"
      style="max-width: 460px"
    >
      <el-form-item label="计划时间">
        <el-input v-model="item.planTime" />
      </el-form-item>
      <el-form-item label="计划内容">
        <el-input v-model="item.planText" />
      </el-form-item>
    </el-form>

    <div class="saveContainer">
      <el-button type="primary" @click="save">保存</el-button>
      <el-button @click="cancel">取消</el-button>
    </div>
  </div>
</template>

<script>
import { reactive , defineProps , defineEmits } from "vue";
export default {
  name: "AddPlan",
};
</script>

<script setup>
const item = reactive({
  planTime: "00:00",
  planText: "",
});

const props = defineProps(["item"]);
console.log(props)

const emits = defineEmits(["update:item","addPlan"]);

const save = ()=>{
    emits("addPlan",{id:Date.now(),...item})
    emits("update:item",null);
}

const cancel = ()=>{
    emits("update:item",null);
}
</script>

<style lang="less" scoped>
.addPlanContainer{
    position: relative;
    height:200px;
    .saveContainer {
        width: 250px;
        position: absolute;
        right:0;
    }
}
</style>
