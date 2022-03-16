<template>
  <div id="app">
    <!-- <showBigImg/> -->

    <!-- <HelloWorld a="A" b="B" @input777=""/> -->
    <!-- <MyButton :title="title" :type="color" size="mini" @click="showName"/> -->
    <HelloWorld v-show="false" :username.sync="username"/>
    <!-- <HelloWorld :username="username" @update:username="data=>username=data"/> -->
    <h1 v-once>{{info.a}}</h1>
    {{info.b}}
    {{info.c}}
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
      username:"小红",
      info:Object.freeze({
        a:1,
        b:2
      })
    }
  },
  methods:{
    showName(){
      console.log(this.name)
    }
  },
  mounted(){
    // this.$myBus.$on("sendMsg",(data)=>{
    //   // console.log('sendMsg',data)
    //   this.username = data;
    // })

    // this.info.c=3;
    // this.$forceUpdate();
    // this.$destroy();
    // this.info.a = 2;
    // console.log(this.info)

    // this.info.a = 2;
    // console.log('info',this.info)
  }
}
</script>

<style></style>
