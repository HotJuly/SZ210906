<template>
  <div  class="a">
    Home
  </div>
</template>

<script>
export default {
  name: 'Home',
  data(){
    return{
    }
  },
  beforeRouteEnter (to, from, next) {
    console.log('beforeRouteEnter',to,from);
    next();
  }
}
</script>

<style scoped>
</style>
