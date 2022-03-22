(function(){
    let str:string = "12345";

    let boolean:boolean = true;
    boolean = false;
    //由于声明变量的时候,已经说明当前变量只能存放布尔值,所以存储数字报错 boolean=123;

    let num:number = 1;
    num = 0x0012;
    num = 0b001;
    num = 0.01;

    // undefined和null在非严格模式下,他们算是所有类型的子类
    // 在严格模式下,他们就不算任何类型的子类
    let un:undefined = undefined;
    // un=1;

    let nu:null = null;
    // nu=2;

    str=undefined;
    str=null;

    let arr:Array<number> = [1,2,3];
    // arr[0]="str";

    let arr2:number[] = [1,2,3];

    // 一下写法就是元组的写法
    // 元组就是长度和类型都进行了约束的数组
    let arr3:[number,string,boolean] = [1,"str",true];
    // arr3[3] = 0;
    // arr3[1] = "1";
    // arr3[0].


    enum City{
        "shanghai" = 100,
        "beijing" = 200,
        "quanzhou" = 666,
        "wuhan"
    }

    
    let person = {
        name:"xiaoming",
        city:City["shanghai"],
        gender:1
    }

    // console.log(person,City[person.city])
    // console.log(City)

    let a:any = true;
    a = 12;
    a = "123";

    let a1:string = "123";

    // let v:void = undefined;

    function fn():void{
        console.log(123)
    }
    fn();

    let obj:object = {}
    // obj = true;

    let val:string|number = "str";
    val = 1234;
    // val = true;

    function getValue(val:number|string){
        if((val as string).length){
            return (<string>val).length
        }else{
            return val
        }
    }

    console.log(getValue("abc"),getValue(6))

    let value1 = 123;
    value1 = 6;
    value1 = "string";
})();