<template>
  <div id="app" class="B">
    <!-- <keep-alive include="A"> -->
    <!-- <keep-alive exclude="A"> -->
    <!-- <keep-alive max="2">
      <A v-if="showComponent"/>
      <B v-else/>
    </keep-alive> -->
    <!-- <component :is="showComponent"/> -->
    <!-- <button @click="handleClick">变化</button> -->

    <!-- <HelloWorld>
      <template>
        <A></A>
      </template>
      <template #header>
        <B></B>
      </template>
      <template #footer="scope123">
        <h1>我是{{scope123.title}}插槽</h1>
        <h2>我来自父组件App</h2>
      </template>
    </HelloWorld> -->
    <showBigImg>
      <template #com="{listeners}">
        <h1 v-on="listeners">放大</h1>
      </template>
      <!-- <template #com="scope">
        <h1 v-on="scope.listeners">放大</h1>
      </template> -->
    </showBigImg>
  </div>
</template>

<script>
import A from './components/A.vue'
import B from './components/B.vue'
import HelloWorld from './components/HelloWorld.vue'
import showBigImg from './components/showBigImg.vue'
export default {
  components: {
    A,
    B,
    HelloWorld,
    showBigImg
  },
  data(){
    return{
      // showComponent:true
      // showComponent:A,
      flag:false
    }
  },
  methods:{
    // handleClick(){
    //   this.showComponent = !this.showComponent;
    // }
  },
  beforeCreate(){
    console.log('------------beforeCreate--------------')
    // console.log(this,this.$data,this.flag,this.$el)
    console.log(this.$options,this.$data)
  },
  created(){
    console.log('------------created--------------')
    // console.log(this,this.$data,this.flag,this.$el)
  },
  beforeMount(){
    console.log('------------beforeMount--------------')
    // console.log(this,this.$data,this.flag,this.$el)
    // _vnode中存储的是当前组件的虚拟DOM,而$vnode存储的是父组件的虚拟DOM
    console.log(this._vnode,this.$vnode)
  },
  mounted(){
    console.log('------------mounted--------------')
    // console.log(this,this.$data,this.flag,this.$el)
    console.log(this._vnode,this.$vnode)
  }
}
</script>

<style></style>
