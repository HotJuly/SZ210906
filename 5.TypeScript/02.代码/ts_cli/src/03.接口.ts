(function () {
  /*
        需求: 创建人的对象, 需要对人的属性进行一定的约束

            id是number类型, 必须有, 只读的
            name是string类型, 必须有
            age是number类型, 必须有
            sex是string类型, 可以没有
    
    */

  // object虽然可以约束一个变量内部必须存放一个对象,但是无法对对象中的属性以及属性值进行约束
  //   let person: object = {
  //     id: "0001",
  //     name: "小明",
  //     age: 23,
  //     sex: "男",
  //   };

  /*
    对象接口->普通接口
        接口的用处就是约束某个对象中的情况,如果不满足接口的需求,就会报错
        接口就类似于Vue中对象格式的props
        接口可以约束某个对象必须拥有哪些属性名,以及对应属性值的类型

        面试题:请问js中的const和ts中的readonly有什么区别?
        解答:
            1.相同点
                const声明的常量和readonly声明的属性的值都不能进行修改,否则报错
                他们都是浅监听,只监视属性值或者变量值的变化

            2.不同点
                const是用于声明常量的
                readonly是用来约束对象中属性的
  
  */
//  const a = 123;
//  a=666;

    interface IPerson{
        readonly id: string,
        name: string,
        age: number,
        sex?: string
    }

    let person: IPerson = {
        id: "0001",
        name: "小明",
        age: 23
    };

    // person.id = "123";
    person.sex="男"
})();


(function(){

    /*
        函数接口
            函数接口可以约束一个函数可以接受的实参个数,实参的类型,以及返回值类型
    
    */
    interface IFn{
        (x:string,y:string):string
    }

    let fn:IFn = function(x:string,y:string){
        return x + y
    }
    console.log(fn("1","2"))
})();


(function(){

    /*
        类接口
            类接口可以约束一个类中必须拥有哪些方法,以及哪些属性
            类可以通过关键字implements来使用某个接口约束自己
    */

    interface IAnimal{
        say:(text)=>void;
    }

    interface IPerson extends IAnimal{
        name:string;
        age:number;
        sex:string;
    }

    class Person implements IPerson{
        name:string;
        age:number;
        sex:string;

        constructor(name:string,age:number,sex:string){
            this.name = name;
            this.age = age;
            this.sex = sex;
        }

        say(text){
            console.log('say',text)
        }
    }

    const p1 = new Person("小明",23,"男");
    p1.say("大家好")
})();