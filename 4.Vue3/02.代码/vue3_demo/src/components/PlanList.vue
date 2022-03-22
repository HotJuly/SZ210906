<template>
  <el-table :data="showList" stripe style="width: 100%">
    <el-table-column prop="planTime" label="时间" width="180" />
    <el-table-column prop="planText" label="计划" width="180" />
    <el-table-column label="操作">
      <template #default="{row}">
        <el-button type="primary" size="small" @click="selectPlan(row)">编辑</el-button>
        <el-popconfirm
          confirm-button-text="确定"
          cancel-button-text="取消"
          icon-color="red"
          title="你确定要删除该选项吗?"
          @confirm="deletePlan(row)"
        >
          <template #reference>
            <el-button size="small" type="danger">删除</el-button>
          </template>
        </el-popconfirm>
      </template>
    </el-table-column>
  </el-table>
</template>

<script>
import { computed, defineProps , defineEmits } from "vue";
export default {
  name: "PlanList",
};
</script>

<script setup>
const props = defineProps(["list", "searchInput"]);

const showList = computed(() => {
  if (props.searchInput) {
    return props.list.filter((item) => {
      return (
        item.planTime.includes(props.searchInput) ||
        item.planText.includes(props.searchInput)
      );
    });
  }

  return props.list;
});

const emits = defineEmits(["deletePlan","selectPlan"]);
// console.log(emits)

const deletePlan = (row)=>{
  // console.log('row',row)
  emits("deletePlan",row)
}

const selectPlan = (row)=>{
  // console.log('row',row)
  emits("selectPlan",row)
}
</script>

<style lang="scss" scoped></style>
