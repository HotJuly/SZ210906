(function () {
  // 命名函数
  function add(x:number, y:number):number{
    return x + y;
  }

  // 匿名函数
//   let myAdd = function (x:number, y:number):number{
//     return x + y;
//   };

  
//   let myAdd:(x:number,y:number)=>number = function (x, y){
//     return x + y;
//   };

  let myAdd:(x:number,y:number)=>number = 
  function (x:number, y:number):number{
    return x + y;
  };

//   console.log(add(1,2))
})();

(function () {
    // 命名函数
    function add(x:number, y:number = 7 ,z?:number):number{
        if(z){
            return x + y + z;
        }else{
            return x + y;
        }
    }

    // console.log(add(1))
    // console.log(add(1,2))
    // console.log(add(1,2,3))
  })();
  

(function () {
    // 命名函数
    function add(x:number, y:number = 7 ,z?:number,...args:number[]):number{
        console.log(args)
        if(z){
            return x + y + z;
        }else{
            return x + y;
        }
    }

    // console.log(add(1))
    // console.log(add(1,2))
    // console.log(add(1,2,3))
    // console.log(add(1,2,3,4,5,"6"))
  })();
  

  (function () {
      /*
        需求:现在需要一个函数,对其要求如下:
            1.该函数具有两个形参,可以接收两个实参
                实参只能是数字或者字符串
            2.如果两个实参都是数字,那么返回数字相乘的结果
                如果两个实参都是字符串,那么返回字符串累加的结果
      
      */

        function fn(a:number,b:number):number
        function fn(a:string,b:string):string
        function fn(a:number|string,b:number|string){
            if(typeof a==="number"&&typeof b==="number"){
                return a*b;
            }
            if(typeof a==="string"&&typeof b==="string"){
                return a+b;
            }
        }

        console.log(fn(3,6));
        console.log(fn("3","6"));
        console.log(fn(3,"6"));
    })();
    
  
