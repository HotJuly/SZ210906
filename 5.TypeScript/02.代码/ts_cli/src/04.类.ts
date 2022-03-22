(function () {
  /*
        关键字
            public->表明当前的属性是所有人都可见的属性
            protected->表明当前的属性只有在子类或者当前类的方法中才能够访问
            private->表明当前的属性只能在当前类的方法中进行访问
    
    */
  class Person {
    public name: string;
    protected age: number;
    private sex: string;

    constructor(name: string, age: number, sex: string) {
      this.name = name;
      this.age = age;
      this.sex = sex;
    }

    say(text) {
      console.log("say", text, this.sex);
    }
  }

  class Student extends Person {
    readonly price: number;

    constructor(name: string, age: number, sex: string, price: number) {
      // Person.call(this,name,age,sex)
      super(name, age, sex);
      this.price = price;
    }

    sayAge() {
      console.log(this.age);
    }
  }

  const s1 = new Student("小红", 23, "女", 100000000);
  s1.price = 0;
  console.log(s1.name, s1.age, s1.sex);
  s1.sayAge();
  s1.say("大家好,我是小红");
})();

(function () {
    // interface IAnimal{
    //     eat:(food:string)=>void
    // }

    // class Animal{
    //     say(text){
    //         console.log(text)
    //     }
    // }

    /*
        抽象类其实很像接口,
            但是接口只能约束一个类必须具有哪些属性,无法给当前类提供可以使用的方法,
            而抽象类不仅可以约束子类必须拥有哪些属性,而且还可以给子类提供可以使用的方法
    
    */
    abstract class Animal{
        abstract eat(food);
        say(text){
            console.log(text)
        }
    }
    class Dog extends Animal {
        eat(food) {
            // console.log()
            return '狗正在吃'+food
        }
    }

    new Dog().say('hello')
})();
