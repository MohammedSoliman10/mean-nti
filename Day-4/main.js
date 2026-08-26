// // PART A

// // 1
// var car = { 
//     brand: "toyota", 
//      model: "corolla", 
//     year: 2010, 
//     color: "red" };
// console.log(car);


// // 2

// console.log(car.brand);
// console.log(car["year"]);



// //3


// car.color = "black";
// car.price = 10;
// console.log(car);

// //4

// delete car.year;
// console.log(car.year);  
// // undifined cuz the year is no longer exist 

//5

// var student = { 
//     "student-name": "sara", 
//     age: 20 };
// console.log(student["student-name"]);



//6

// var book = {
//   title: "1984",
//   author: { 
//     firstName: "george", 
//     lastName: "orwell" 
//     }
// };
// console.log(book.author.lastName);


// 7





// part b

//9

// var cities = ["Cairo", "Giza", "Alex", "Aswan", "Luxor"];
// console.log(cities);
// console.log(cities.length);


//10
// console.log(cities[0]);
// console.log(cities[1]);
// console.log(cities[cities.length - 1]);

//11

// cities.push("Mansoura");
// console.log(cities);
// cities.unshift("Tanta");
// console.log(cities);


//12
// cities.pop();
// console.log(cities);
// cities.shift();
// console.log(cities);


//13

// var langs = ["HTML", "CSS", "JS", "React"];
// console.log(langs.indexOf("JS"));
// console.log(langs.includes("Python"));


// //14

// var items = ["pen", "book", "bag"];
// items.forEach(function (item) {
//   console.log(item);
// });
// items.forEach(function (item, index) {

//   console.log(index, item);


// });

// //15

// var colors = ["red", "green", "blue", "yellow"];
// for (var color of colors) {
//   if (color == "blue") 
//     break;
//   console.log(color);
// }


//16 

// var letters = ["A", "B", "C"];
// letters.push("D", "E");
// letters.shift();
// console.log(letters);
// console.log(letters.length);




/// PART c

// // 17

// var fruits = ["apple", "banana", "cherry"];
// var upper = fruits.map(function (f) {
//   return f.toUpperCase();
// });
// console.log(upper);
// console.log(fruits);


// //18

// var numbers = [10, 55, 30, 80, 45, 90];
// var big = numbers.filter(function (n) {
//   return n > 50;
// });
// console.log(big);


// 19

// var egy = ["Cairo", "Giza", "Alex", "Aswan"];
// var foundCity = egy.find(function (c) {
//   return c.startsWith("A");
// });


// var foundIndex = egy.findIndex(function (c) {
//   return c.startsWith("A");
// });

// console.log(foundCity);
// console.log(foundIndex);



//20

// var l = ["a", "b", "c", "d", "e"];
// var sliced = l.slice(1, 4);
// console.log(sliced);
// console.log(l); // original unchanged





// // 21
// var n = ["one", "two", "three", "four", "five"];
// var removed = n.splice(1, 2);
// console.log(removed);
// console.log(n);


//23


// var ages = [16, 21, 17, 19];
// console.log(ages.some(function (age) {
//      return age >= 18; }));
// console.log(ages.every(function (age) {
    
//     return age >= 18; }));


//24

// var num = [5, 10, 15, 20];
// var total = num.reduce(function (acc, n) {
//   return acc + n;
// }, 0);
// console.log(total);


/////// part d

//// 25
// var students = [
//   { name: "Omar", grade: 80 },
//   { name: "Mona", grade: 90 },
//   { name: "Ali", grade: 70 }
//   ];



// for (var i = 0; i < students.length; i++) {
//   console.log(students[i].name, students[i].grade);
// }


// 26

