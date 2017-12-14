/**
 * 布尔值 boolean
 */

let buer:boolean = false;

 /**
  * 数字 number
  */

let num1:number = 1234;
let num2:number = 0x123f;

/**
 * 字符串 string
 */

let str1:string = '123';
let str2:string = `test template ${str1}`;

/**
 * 数组 type[] Array<type>
 */

let list1:number[] = [1,2,3];
let list2:Array<number> = [1, 2, 3];

/**
 * 元组 [type, type ...]
 */

let tuple:[string, number] = ["123", 123];

/**
 * 枚举 enum
 */

enum ENUM1 {One, Two, Three};

console.log(ENUM1.One);

enum ENUM2 {One = 1, Two};

console.log(ENUM2.One);