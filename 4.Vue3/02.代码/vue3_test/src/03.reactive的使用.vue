<template>
  <div id="app">
    <h1>我是App</h1>
    <ul>
      <li>名字:{{obj2.name}}</li>
      <li>年龄:{{obj2.age}}</li>
      <li>性别:{{obj2.sex}}</li>
      <li>车库:
          <ul>
            <li v-for="item in obj2.cars" :key="item">{{item}}</li>
          </ul>
      </li>
    </ul>
    <button @click="addAge">过了一年</button>
    <button @click="addCar">努力了十年</button>
    <button @click="changeCar">遇到富婆了</button>
    <button @click="removeCar">身子虚了,被富婆甩了</button>
  </div>
</template>

<script>
import { reactive } from 'vue';
export default {
  name: "App",
  setup() {

    /*
      reactive
        表面现象:通过reactive函数,可以将一个对象中所有的属性变成响应式的
        完整说法:将一个元对象传入reactive函数,会返回一个Proxy代理对象
            当开发者操作代理对象的时候,元对象也会受到相同的影响

            reactive会用于实现对象的响应式效果

        使用reactive函数的时候具有两个对象:
          1.被代理对象(元对象)
          2.代理对象(Proxy对象)

          注意:
            1.不要直接操作元对象,因为元对象只是一个普通的对象,没有响应式效果,操作他页面不会展示最新结果
            2.当操作代理对象的时候,代理对象会同步修改元对象身上的对应属性,同时自动将最新结果渲染到页面上(具有响应式的特点)

      总结:Vue3成功的解决了Vue2的许多问题
        1.直接通过对象.属性的方式添加的属性,不具有响应式效果
        2.不能直接操作数组的下标来替换数据
        3.不能直接使用delete关键字删除响应式属性,不具有响应式效果

        最终,Vue2的delete,set以及数组重写的7个方法全部失效,Vue3不需要这些东西了
        不用再担心操作数据的时候,是否是响应式这一点
    
    */

    const obj = {
      name:"小明",
      age:23,
      sex:"男",
      // cars:["宝马","五菱宏光"]
    }

    const obj2 = reactive(obj);

    // console.log(obj,obj2)

    const addAge = ()=>{
      obj2.age += 1;
      // obj.age += 1;
      console.log('addAge',obj2,obj)
    }

    const addCar = ()=>{
      // 如果是Vue2,后续给响应式对象新增一个属性,不用set方法将无法变为响应式属性
      // this.$set(obj2,"cars",["五菱宏光"])
      // Vue.set(obj2,"cars",["五菱宏光"])

      // 在Vue3中,如果想要给对象添加一个属性,自动会具有响应式的特点
      obj2.cars = ["五菱宏光"]
    }

    const changeCar = ()=>{
      // 如果是Vue2,是不能够直接操作数组的下标来替换数据的,没有响应式的效果
      // obj2.cars.splice(0,1,"劳斯莱斯幻影");

      // 在Vue3中,可以直接通过数组的下标对数组的内容进行操作,都具有响应式效果
      obj2.cars[0] = "劳斯莱斯幻影"
    }

    const removeCar = ()=>{
      // 如果是Vue2,直接使用delete关键字删除响应式属性,该操作是不会具有响应式效果的
      // Vue.delete(obj2,"cars")
      // this.$delete(obj2,"cars")

      // 在Vue3中,可以直接通过delete关键字删除响应式对象的任意属性,都具有响应式效果
      delete obj2.cars
    }

    return {
      obj,
      obj2,
      addAge,
      addCar,
      changeCar,
      removeCar
    }
  },
};
</script>

<style></style>
