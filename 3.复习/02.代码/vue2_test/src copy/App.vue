<template>
  <div id="app">
    <HelloWorld ref="hello" class="a1" v-model="msg"/>
    <!-- <HelloWorld :value="msg" @input="data=>msg=data"/> -->

    <!-- <button v-if="isEdit" @click="handleClick">添加</button> -->
    <input ref="input666" type="text" v-model="msg">

    <!-- <input type="text" :value="msg" @input="handleInput"> -->

    <!-- <h1>{{user.name | myFilter}}</h1>
    <h1>{{user.age | ageFilter}}</h1> -->
  </div>
</template>

<script>
import Vue from 'vue';
import HelloWorld from './components/HelloWorld.vue'

// App.vue文件暴露出去的是一个配置对象,根据当前的配置对象Vue会生成组件实例对象
export default {
  // name: 'App',
  components: {
    HelloWorld
  },
  data() {
    return {
      isEdit:true,
      user:{
        name:"小明",
        age:28
      },
      msg:"atguigu666"
    }
  },
  provide:{
    user:Vue.observable({
      name:"小明",
      age:28
    })
  },
  count:2,
  mounted() {
    // 使用this.$options可以找到生成当前组件实例对象的配置对象
    // console.log('mounted',this.$options.count)
    // Object.assign(this.$data,this.$options.data())

    // console.log(c)

    /*
      nextTick使用场景
        语法:this.$nextTick(callback)或者Vue.nextTick(callback)
        用处:在下次 DOM 更新循环结束之后执行延迟回调。在修改数据之后立即使用这个方法，获取更新后的 DOM。
    
      问题1:Vue更新状态数据是同步还是异步?
        同步更新数据

      问题二:Vue更新视图是同步还是异步?
        说明和事件轮训有关(宏任务还是微任务)
        异步更新视图(使用到了nextTick去更新视图)

      问题三:如果现在有一件事情,需要在视图更新之后才进行,怎么办?
        可以使用nextTick解决(nextTick可以将函数延迟执行)

      问题四:在js中,有什么方法可以实现异步执行函数?
        说明和事件轮训有关(宏任务还是微任务)
        nextTick是一个.then(微任务)

    
    */
      // setTimeout(()=>{
      //   console.log('setTimeout');
      // },0)

      // 感觉这里有一个看不见的nextTick
      // this.isEdit=false;

      // Promise.resolve().then(()=>{
      //   console.log('then1')
      // })

      // this.$nextTick(()=>{
      //   console.log('$nextTick1');
      // })

      // Promise.resolve().then(()=>{
      //   console.log('then2')
      // })

      // this.$nextTick(()=>{
      //   console.log('$nextTick2');
      // })
      // console.log('app',this.$options.name)

      // console.log('app',this)
      // setTimeout(()=>{
      //   this._provided.user.age = 38;
      // },5000)
      console.log(this.$refs.hello)
  },
  methods:{
    handleClick(){
      // this.isEdit=false;

      // setTimeout(()=>{
      //   console.log('setTimeout');
      // },0)

      // this.$nextTick(()=>{
      //   this.$refs.input666.focus();
      // })

      // this.$set(this.user,"age",23);

      // this.user.age = 23;

      // this.user.name = "小红"
      // delete this.user.name;

      this.$delete(this.user,"name");
      console.log(this.user)
    },
    changeEdit(value){
      this.isEdit = value;
    },
    handleInput(event){
      // console.log('event',event)
      const value  = event.target.value;
      this.msg=value;
    }
  },
  filters:{
    ageFilter(value){
      return value - 10;
    }
  }
}
</script>

<style></style>
