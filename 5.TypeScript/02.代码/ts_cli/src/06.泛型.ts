(function () {
  /*
        现在具有一个函数,该函数接受两个实参
            1.需要填充的数据内容
            2.需要填充的数据个数
            最终该函数会返回出去一个数组,数组的长度为填充的个数,数组的内容为填充的内容
    
    */
  //    问题:在开发中,很有可能出现封装函数的时候,无法预知未来使用该函数时,会传入什么数据,所以无法声明形参的数据类型
  //      传入数据的类型只有在调用函数的那一瞬间,才能知道用户会传入什么数据
  function createArray(value: any, count: number): any[] {
    const arr: any[] = [];
    for (let index = 0; index < count; index++) {
      arr.push(value);
    }
    return arr;
  }

  //   const arr1 = createArray(11, 3)
  //   const arr2 = createArray('aa', 3)
  //   console.log(arr1[0],arr2)
})();

(function () {
  //    问题:在开发中,很有可能出现封装函数的时候,无法预知未来使用该函数时,会传入什么数据,所以无法声明形参的数据类型
  //      传入数据的类型只有在调用函数的那一瞬间,才能知道用户会传入什么数据

  // 泛型我个人认为很像是一种全新的形参,它用于接收开发者在调用函数时候传入的数据类型声明
  // 泛型可以提前声明一个泛型变量,当用户调用该函数时,可以传入数据类型,最终会被泛型变量接收
  function createArray<T>(value: T, count: number): T[] {
    const arr: T[] = [];
    for (let index = 0; index < count; index++) {
      arr.push(value);
    }
    return arr;
  }

  //   const arr1 = createArray<number>(11, 3);
  //   const arr2 = createArray<string>('aa', 3)
  //   console.log(arr1[0],arr2)
})();

(function () {
  // function getArr<JK,KJ>(a:JK,b:KJ):[JK,KJ]{
  //     return [a,b]
  // }
  // const arr = getArr<number,string>(1,'value');
  // const arr2 = getArr<boolean,string>(true,'value');
})();

(function () {
//   interface IUserCURD {
//     data: User[];
//     add: (user: User) => void;
//     getById: (id: number) => User;
//   }

//   interface IStudentCURD {
//     data: Student[];
//     add: (user: Student) => void;
//     getById: (id: number) => Student;
//   }

//   interface IBaseCURD<T>{
//     data: T[];
//     add: (user: T) => void;
//     getById: (id: number) => T;
//   }

//   class User {
//     id?: number; //id主键自增
//     name: string; //姓名
//     age: number; //年龄

//     constructor(name, age) {
//       this.name = name;
//       this.age = age;
//     }
//   }

//   class UserCRUD implements IBaseCURD<User> {
//     data: User[] = [];

//     add(user: User): void {
//       user = { ...user, id: Date.now() };
//       this.data.push(user);
//       console.log("保存user", user.id);
//     }

//     getById(id: number): User {
//       return this.data.find((item) => item.id === id);
//     }
//   }

//   const userCRUD = new UserCRUD();
//   userCRUD.add(new User("tom", 12));
//   console.log(userCRUD.data);

//   class Student {
//     id?: number; //id主键自增
//     name: string; //姓名
//     age: number; //年龄

//     constructor(name, age) {
//       this.name = name;
//       this.age = age;
//     }
//   }

//   class StudentCRUD implements IBaseCURD<Student> {
//     data: Student[] = [];

//     add(user: Student): void {
//       user = { ...user, id: Date.now() };
//       this.data.push(user);
//       console.log("保存user", user.id);
//     }

//     getById(id: number): Student {
//       return this.data.find((item) => item.id === id);
//     }
//   }

//   const studentCRUD = new StudentCRUD();
//   studentCRUD.add(new Student("tom", 12));
//   console.log(studentCRUD.data);
})();

(()=>{
    // class GenericNumber<T> {
    //     zeroValue: T
    //     add: (x: T, y: T) => T
    //   }
      
    //   let myGenericNumber = new GenericNumber<number>()
    //   myGenericNumber.zeroValue = 0
    //   myGenericNumber.add = function(x, y) {
    //     return x + y 
    //   }
    //   console.log(myGenericNumber.add(myGenericNumber.zeroValue, 123))
      
    //   let stringNumeric = new GenericNumber<string>()
    //   stringNumeric.zeroValue = 'abc'
    //   stringNumeric.add = function(x, y) { 
    //     return x + y
    //   }
      
    //   console.log(stringNumeric.add(stringNumeric.zeroValue, 'test'))
})();

(()=>{
    interface ILength{
        length:number;
    }

    function fn<T extends ILength>(x:T): void {
        console.log(x.length)  // error
    }
    fn<string>("123");
})();
