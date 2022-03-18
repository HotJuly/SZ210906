<template>
  <div  class="a">
    A
  </div>
</template>

<script>
export default {
  name: 'A',
  mounted(){
    console.log('A mounted')
  },
  beforeDestroy() {
    console.log('A beforeDestroy')
  },
  methods:{
  }
}
</script>

<style scoped>
</style>
