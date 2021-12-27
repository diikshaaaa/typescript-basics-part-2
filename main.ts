// function log(message) {
//     console.log(message)
// }
// var message = "Hello World";

// log(message);


// ======================================================================================


// function doSomething() {
//     for(var i=0; i<5; i++){
//         console.log(i);
//     }
//     console.log('Finally: ' + i);
// }

// doSomething();


// =============================================================================

// let a: number;
    // a = 1;
    // a = true;
    // a = 'a';
// point here is once we have declared let a: number; it will take type of 'a' as number and not any other type   

// let a: number;
// let b: boolean;
// let c: string;
// let d: any;
// let e: number[] = [1, 2, 3];
// let f: any[] = [1, true, 'a', false];

// const ColorRed = 0;
// const ColorGreen = 1;
// const ColorBlue = 2;

// enum Color {Red=0, Green=1, Blue=2};
// let backgroundColor = Color.Red;
// Enums stands for Enumerations. Enums are a new data type supported in TypeScript. It is used to define the set of named constants, i.e., a collection of related values. TypeScript supports both numeric and string-based enums. 
// difference between enums and classes
// An enum cannot be used to create objects, and it cannot extend other classes (but it can implement interfaces).
// Array will hold same type of data while enum can hold different datatypes at a time.


// ===========================================================================================


// let message;
// message='abc';
// let endsWithC = (<string>message).endsWith('c');

// see above(let message;) we have not specified the type of variable message, so it will take type any by default . that is why we need to specify the type of varible like <string>message, to avoid getting error
// endsWith() method returns true if a string ends with a specified string. Otherwise it returns false.The endsWith() method is case sensitive.
// below is an alternative way for the above condition

// let alternativeWay = (message as string).endsWith('c');

// here endsWithC and alternativeWay are variable names


// let log = function(message){
//     console.log(message);
// }

// alternative approach to the above condition

// let doLog= () =>  console.log();
// TypeScript provides an arrow function which is the shorthand syntax for defining the anonymous function. It omits the function keyword

// annotations
// JavaScript is not a typed language so we cannot specify the type of a variable such as a number, string, Boolean in JavaScript. However, in TypeScript, we can specify the type of variables, function parameters, and object properties because TypeScript is a typed language.

// interface Point{
//     x: number;
//     y: number;
//     draw: () => void
// }
// let drawPoint=(point: Point)=>{
//     // ...
// } 
//  
// let getDistance=(pointA: Point, pointB: Point)=>{
//         // ...
//     }
// drawPoint({
//      x = 1;
//      y = 2;
// })
// }
// but we can not perform a function using interface because we can only declare method, variables using interface  


// let point: Point =new Point();
// New keyword is used to create an instance of an object that has a constructor function. On calling the constructor function with 'new' operator, the following actions are taken: A new empty object is created. 'this' variable is made to point to the newly created object

// point.x = 1;
// point.y = 2;
// point.draw();

// ==================================================================

// class Point{
//         constructor(private _x?: number, private _y?: number){
//         this.x = x;
//         this.y = y;
//     }
//     draw: (){
//         console.log('X: ' + this.x + ', Y: ' + this.y);
//     } 
//     getDistance(another: Point){
    // here another is a varible 
//          // ...
// }
// 
// let point: Point;
// point.draw();
//     get X(){
//         return this.x;
//     }
//     set X(value){
//         if (value < 0)
//             throw new Error('value cannot be less than 0');

//         this.x = value;
//     }

// }

// let point =new Point(1, 2);
// point.draw();
