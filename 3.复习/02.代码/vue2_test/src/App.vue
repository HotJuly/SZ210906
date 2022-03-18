<template>
  <div id="app" class="B">
    <ul>
      <li v-for="(item,index) in arr" :key="item">
        <label>{{item}}</label>
        <input type="text">
      </li>
    </ul>
    <button @click="handleClick">添加</button>
  </div>
</template>

<script>
export default {
  data(){
    return{
      arr:[1,2,3,4,5]
    }
  },
  methods:{
    handleClick(){
      this.arr.splice(1,0,6);
    }
  }
}
</script>

<style></style>
