<template>
  <div id="app" class="B">
    app
    <router-view></router-view>
    <router-link to="/about">toAbout</router-link>
    <button @click="handleClick">toHome</button>
  </div>
</template>

<script>
export default {
  data(){
    return{
    }
  },
  methods:{
    handleClick(){
        this.$router.push('/home')
    }
  }
}
</script>

<style></style>
