<template>
  <div id="app">
    <!-- <showBigImg/> -->

    <!-- <HelloWorld a="A" b="B" @input777=""/> -->
    <!-- <MyButton :title="title" :type="color" size="mini" @click="showName"/> -->
    <HelloWorld :username.sync="username"/>
    <!-- <HelloWorld :username="username" @update:username="data=>username=data"/> -->
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import showBigImg from './components/showBigImg.vue'
import MyButton from './components/MyButton.vue'

export default {
  components: {
    HelloWorld,
    showBigImg,
    MyButton
  },
  data(){
    return{
      title:"你接下来要做的事情非常危险,是否继续?",
      color:"danger",
      username:"小红"
    }
  },
  methods:{
    showName(){
      console.log(this.name)
    }
  },
  mounted(){
    this.$myBus.$on("sendMsg",(data)=>{
      // console.log('sendMsg',data)
      this.username = data;
    })
  }
}
</script>

<style></style>
