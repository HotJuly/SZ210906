<template>
  <div  class="b">
    B
  </div>
</template>

<script>
export default {
  name: 'B',
  mounted(){
    console.log('B mounted')
  },
  beforeDestroy() {
    console.log('B beforeDestroy')
  },
  methods:{
  }
}
</script>

<style scoped>
</style>
