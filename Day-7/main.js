// day 7 es6 tasksd

// 1 
// function test(){
//     t = "hello"; 
//     console.log(t);
// }
// test();
// console.log(t); // still works outside too



// 2
// function testStrict(){
//     "use strict";
//     try{
//         g = "hello";
//         console.log(g);
//     }catch(error){
//         console.log(error.message);
//     }
// }
// testStrict();



// 3

// function test(){
//     "use strict";
//     var localVar = "test";
//     try{
//         delete localVar;
//     }catch(error){
//         console.log(error.message);
//     }

//     var obj = {name:"ali"};
//     delete obj.name;
//     console.log(obj);
// }
// test();



// part b


// 4

// 4
// console.log(x);
// var x = 10;
// console.log(x);
// // undefined then 10


// 5
// sayHi();
// function sayHi(){
//     console.log("Hi");
// }
// // works fine


// sayBye();
// var sayBye = function () {
// console.log("Bye");
// };

// // Uncaught TypeError: sayBye is not a function


//6

// console.log(a);
// let a = 5;

// //Uncaught ReferenceError: Cannot access 'a' before initialization



// 7

// var n = 1;
// function demo() {
//   console.log(n);
//   var n = 2;
//   console.log(n);
// }
// demo();
// console.log(n);

// // undefined
// //  2
// //  1

// part c

//8

// function f1(){
//     var v1 = "a";
//     console.log(v1);
//     if(true){
//         var v1 = "b"; 
//         console.log(v1);
//     }
//     console.log(v1); 
// }
// f1();



//9

// function f(){
//     let v = "a";
//     console.log(v);
//     if(true){
//         let v = "b"; 
//         console.log(v);
//     }
//     console.log(v); 
// }
// f();






//10


// var x = 1;
// var x = 2;
// console.log(x);

// let y = 1;
// // let y = 2;  // error
// console.log(y);




// 11

// const student = {
//     name:"ali", 
//     age:20, 
//     city:"cairo"};


// student.age = 21;
// console.log(student);

// student.grade = "A";
// console.log(student);

// delete student.city;
// console.log(student);



// 12

// const nums = [1,2,3];
// nums.push(4);
// console.log(nums);

// nums[0] = 100;
// console.log(nums);  // all good


// nums = [9,9,9];  // error
// console.log(nums);


//13

// var a;  // good
// let b;  // good 
// // const c;  // error // const habe to be initialized




//14

// var g1 = "var global";
// let g2 = "let global";
// const g3 = "const global";


// window.g1  
// window.g2  
// window.g3





// 15


// const handlers = {};
// for (let i = 0; i < 3; i++) {  // change VAR to let
//   handlers["fn" + i] = function () {
//     return "index: " + i;
//   };
// }


// console.log(handlers.fn0());
// console.log(handlers.fn2());





// part d

// 16


// function welcomeOld(name){
//     return "Welcome, " + name + "!";
// }

// var welcome = name => `Welcome, ${name}!`;
// console.log(welcome("mona"));



// 17

// var fullInfo = (first, last, age) => `${first} ${last} is ${age} years old`;
// console.log(fullInfo("Ali", "Hassan", 25));






//18 

// var multiply = (a, b) => a * b;
// console.log(multiply(3, 4));

// var addAndPrint = (a, b) => {
//     console.log(a, b);
//     return a + b;
// }
// console.log(addAndPrint(2, 5));













// part e

//19

// const product = {
// title: "Laptop",
// price: 15000,
// inStock: true,
// brand: "Dell"
// };

// const {title, price, inStock} = product;
// console.log(title, price, inStock);




//20


// const [first, second] = ["HTML", "CSS", "JS", "React"];
// console.log(first, second);



//21

// function greet(name = "Guest", message = "Hello"){
//     return `${message}, ${name}!`;
// }
// console.log(greet("Ali", "Hi"));
// console.log(greet("Sara"));
// console.log(greet());






//22


// function sumAll(...numbers){
//     var total = 0;
//     for(var n of numbers){
//         total += n;
//     }
//     return total;
// }
// console.log(sumAll(1, 2, 3));
// console.log(sumAll(10, 20, 30, 40));





//23
// const merged = [...[1, 2], ...[3, 4, 5]];
// console.log(merged);




// const orig = [10, 20, 30];
// const copy = [...orig];
// copy.push(40);
// console.log(copy);
// console.log(orig);



//24

// const user = {name: "Sara", age: 22};
// const contact = {email: "sara@nti.com", age: 23};
// const mergedUser = {...user, ...contact};
// // the age in contact is the last to be intilazed so age is 23

// console.log(mergedUser);


//25

// const values = [2, 4, 6, 8];
// function total(a, b, c, d){
//     return a + b + c + d;
// }
// console.log(total(...values));





//26


// let person1 = {name: "Ali", child: {age: 5}};
// let person2 = person1;
// person2.name = "Omar";
// console.log(person1.name);

// // omar 



//27

// const original = {
//     name: "Mona",
//     details: {city: "Cairo"}
// };
// const copy = {...original};
// copy.name = "Sara";
// copy.details.city = "Alex";

// console.log(original);
// console.log(copy);



//28



// const deep = structuredClone(original);
// deep.details.city = "Giza";

// console.log(original.details.city); 
// console.log(deep.details.city); 







// part f


// 30 



