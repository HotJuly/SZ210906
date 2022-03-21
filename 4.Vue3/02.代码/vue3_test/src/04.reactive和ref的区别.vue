<template>
  <div id="app">
    <h1>我是App</h1>
    <ul>
      <!-- <li>名字:{{obj2.name}}</li>
      <li>年龄:{{obj2.age}}</li>
      <li>性别:{{obj2.sex}}</li> -->

      <li>名字:{{obj3.name}}</li>
      <li>年龄:{{obj3.age}}</li>
      <li>性别:{{obj3.sex}}</li>
    </ul>
    <button @click="addAge">过了一年</button>
    <button @click="changeName">换老爸</button>
  </div>
</template>

<script>
import { ref , reactive } from 'vue';
export default {
  name: "App",
  setup() {
    /*
      reactive和ref的区别
        1.reactive不需要.value就可以使用,而ref需要.value才能使用
        2.一般情况下,基础数据类型使用ref,对象数据类型使用reactive
          其实ref也可以对对象数据类型使用
            而且如果将对象交给ref,那么返回的ref对象的value中,会存储一个代理对象(元对象是传入的对象)
          
          小总结:
            1.reactive能做到的ref都能做到,ref能做到的reactive不一定能做到
              ref如果遇到对象数据类型,会自动调用reactive生成对应的代理对象

            2.如果有一个对象,未来只会操作该对象内部的属性值,就使用reactive即可
                            未来如果会替换为新的对象,就使用ref即可
                例如:商品列表
                    如果未来只是会对列表数组中的数据进行排序,增删改等操作,就使用reactive
                    如果未来可能会得到新的列表数组去替换旧的列表数组,就使用ref
                    
            3.ref不仅可以监视对象属性值的变化,还可以监视对象地址值的变化
    
    */
    const obj = {
      name:"小明",
      age:23,
      sex:"男"
    }

    let obj2 = reactive(obj);

    const obj3 = ref(obj);

    // console.log(obj3)

    const addAge = ()=>{
      // reactive修改属性值的语法
      // obj2.age += 1;

      // ref修改属性值的语法
      obj3.value.age += 1;
    }

    const changeName = ()=>{
      // obj2.name = "王" + obj2.name
      // obj3.value.name = "王" + obj3.value.name


      // 该语法是将新的普通对象传入给obj2变量,并没有在操作代理对象,所以代理对象没有接收到操作信息,最终页面没有响应式效果
      obj2 = {
        name:"王小明",
        age:23,
        sex:"男"
      }

      // console.log(obj2,obj)

      // 由于ref对象的value属性是响应式属性,所以当他的值被修改时,如果属性值是一个对象,那么该对象会被reactive函数处理
      // obj3.value = {
      //   name:"王小明",
      //   age:23,
      //   sex:"男"
      // }
    }


    return {
      obj,
      obj2,
      obj3,
      addAge,
      changeName
    }
  },
};
</script>

<style></style>
