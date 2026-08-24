// // task 1

// for (var i = 1; i <= 10; i++) {
//   console.log(i);
// }

// // task 2 


// for (var i = 2; i <= 20; i += 2) {
//   console.log(i);
// }


// // task 3

// var Total_sales = 0;
// for (var i = 1; i <= 15; i++) {
//   Total_sales += i;
// }
// console.log( Total_sales);

// // task 4

// var count = 1;
// while (count <= 7) {
//   console.log(count);
//   ticket++;
// }


// // task 5

// var countdown = 8;
// while (countdown >= 1) {
//   console.log(countdown);
//   countdown--;
// }


// // task 6

// var c = 1;
// do {
//   console.log(c);
//   i++;
// } while (c <= 5);


// // task 7


// var itemsInCart = 10;


// // while 

// while (itemsInCart < 5) {
//   console.log("while: start shopping");
// }
// // nothing will be printed becaouse itemsInCart is > 5


// // do while

// do {
//   console.log("do...while: start shopping");
// } while (itemsInCart < 5);

// // it will be printed one time becaose do will print itemsInCart then check the condtion 


// // task 8


// var userName = "Ali";
// var userAge = 22;
// var isStudent = true;

// console.log(userName + typeof userName);
// console.log(userAge +  typeof userAge);
// console.log(isStudent +  typeof isStudent);

//task 9

// var dbPrice = 10;
// var inputPrice = "10";

// console.log(dbPrice == inputPrice);  
// // this will print true becouse == only check value 


// console.log(dbPrice === inputPrice);
// // this will print false becouse ===  check value  and data type


// task 10


// var name = prompt("what is your name");
// alert(`Welcome ,  ${name}`);
// console.log(`Welcome, ${name}`);


//task 11

// var c = prompt("enter quantity:");



// console.log( typeof +c);


// console.log( typeof Number(c));

// console.log(typeof parseInt(c));


// task 12

// var a = 10;
// var b = 3;

// console.log( a + b);
// console.log( a - b);
// console.log( a * b);
// console.log( a / b);
// console.log(a % b );
// console.log(  a ** b );

// task 13

// var age = 1;
// if (age >= 18) {
//   console.log("You can enter");
// } else {
//   console.log("Sorry, underage");
// }

// task 14



// var grade = 1;
// if (grade > 90) {
//   console.log("A");
// }  else if (grade > 80) {
//   console.log("B");
// } else if (grade > 70) {
//   console.log("C");
// } else if (grade > 60) {
//   console.log("F");
// }

// task 15

// var age = prompt("enter age");

// console.log(age >= 18 ? "Adult" : "Minor" );


// task 16 

// //ana used only friday and monday


// var day = prompt("enter day");
// switch (day) {
//   case "Monday":
//     console.log("work");
//     break;
//   case "Friday":
//     console.log("relax");
//     break;
  
//   default:
//     console.log("invalid day ");
// }


// task 17

// var price = prompt("enter price:");
// price  = Number(price);
// for (var i = 1; i <= 10; i++) {
//   console.log(` ${i} * ${price} = ${i * price} `);

// }



// task 18

// var fileSize = Number(prompt("enter file size:"));
// if (fileSize > 0) {
//   for (var i = 1; i <= fileSize; i++) {
//     console.log(i);
//   }
// } else {
//   console.log("invalid file size");
// }


//task 19


// var start = Number(prompt(" start number:"));
// var end = Number(prompt(" end number:"));
// for (var i = start ; i <= end; i++) {
//   if (i % 2) {
//     console.log(`${i} express`);

//   } else {
//     console.log(`${i} normal`);
//   }
// }


// task 20

// var students = ["Ahmed", "Sara", "Omar"];
// for (var i = 0; i < students.length; i++) {
//   console.log(i+1 + " student "+students[i]);
// }


// task 21


// var total = 0;
// var days = 5;
// for (var i = 1; i <= days; i++) {
//   var expense = Number(prompt("enter expense today "));
//   total += expense;
// }
// console.log("Total:", total);
// console.log("Average:", total /days);



// task 22

// var correctPin = "1234";
// var attempts = 0;

// while (attempts < 3) {
//   var enteredPin = prompt("enter pin");
//   attempts++;

//   if (enteredPin == correctPin) {
//     console.log("correct pin");
//     break;
//   } else if (attempts == 3) {
//     console.log("false pin");
//   }
// }


// task 23


// var hasAccount = true;
// var isVerified = false;



// if (hasAccount && isVerified) {
//   console.log("Welcome back");
// } else if (hasAccount && !isVerified) {
//   console.log("Please verify your account");
// } else {
//   console.log("Please sign up");
// }




// task 24

// var a = 40;
// var b = 50;
// var c = "60";  // el problem
// var d = 30;
// var e = 30;

// var total = a + b + +c + d + e;
// console.log(total); // 210

// if (total <= 20) {
//   for (var i = 1; i <= total; i++) {
//     console.log(i);
//   }
// } else {
//   console.log("Too big to print by line");
// }

// task 25



var n = Number(prompt("Enter a number:"));

if (n < 0) {
  console.log("error number must be positive");
} else {
  var factorial = 1;
  for (var i = 1; i <= n; i++) {
    factorial *= i;
  }
  console.log(`${n}! = ${factorial}`);
  alert(`${n}! = ${factorial}`);
}

// DONEEEEE // alhamdulillah


