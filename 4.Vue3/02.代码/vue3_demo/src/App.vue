<template>
  <el-card class="box-card" v-if="!item">
    <el-card>
      <el-input v-model="searchInput" placeholder="Please input" clearable />
    </el-card>
    <el-card>
      <el-button type="primary" @click="showAddPlan">添加计划</el-button>
      <PlanListVue
        :list="list"
        :searchInput="searchInput"
        @deletePlan="deletePlan"
        @selectPlan="selectPlan"
      />
    </el-card>
  </el-card>

  <el-card class="box-card" v-else>
    <AddPlanVue
      v-model:item="item"
      @addPlan="addPlan"
      @updatePlan="updatePlan"
    />
  </el-card>
</template>

<script>
import { ref, reactive } from "vue";

import PlanListVue from "./components/PlanList.vue";
import AddPlanVue from "./components/AddPlan.vue";
export default {
  name: "App",
  components: {
    PlanListVue,
    AddPlanVue,
  },
};
</script>

<script setup>
const searchInput = ref("");

const list = reactive([
  {
    id: 1,
    planTime: "08:25",
    planText: "播放音乐",
  },
  {
    id: 2,
    planTime: "08:35",
    planText: "开始上课",
  },
  {
    id: 3,
    planTime: "08:36",
    planText: "开始签到",
  },
]);

const item = ref(null);

const showAddPlan = () => {
  item.value = {};
};

const addPlan = (item) => {
  list.push(item);
};

const deletePlan = (row) => {
  // console.log('deletePlan',row)
  const index = list.findIndex((item) => {
    return item.id === row.id;
  });

  list.splice(index, 1);
};

const selectPlan = (row) => {
  // console.log("selectPlan", row);
  item.value = row;
};

const updatePlan = (row) => {
  // console.log("updatePlan", row);
  const index = list.findIndex((item)=>{
    return item.id === row.id;
  })
  list[index] = row;
};
</script>

<style lang="less" scoped>
.box-card {
  width: 600px;
}
</style>
