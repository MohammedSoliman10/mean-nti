// feh akter men haga mkantsh covered feh day 1 bs kano sahlen fa 3mltohm 
// i stoped at task 22 cuz we didnt take  functions

// tsk 1 
console.log("js is running successful")

// task 2 

window.alert("ready to practice ")

// task 3

var productName = "laptop";
var price = 15000;
var isAvailable = true;

console.log(typeof productName)
console.log(price)
console.log(isAvailable)


// task 4 
document.getElementById("mainTitle").textContent = "Practice Time";

// task 5
var city = "Cairo";
var Country = "Egypt";

console.log(city+","+" "+Country)

// task 6

console.log(`${city}, ${Country}`)

// task 7

var itemPrice = 120;
var quantity = 3 ;

console.log(itemPrice+quantity)
console.log(400- itemPrice*quantity)
console.log(itemPrice*quantity)
console.log(itemPrice/quantity)
console.log(itemPrice%quantity)
console.log(quantity**2)

// task 8
var Color = window.prompt("what is your favorite color ")
console.log("Your favorite color is:  "+ Color)


// task 9 
var score =20;
textScore = "20";

console.log(score==textScore)
console.log(score===textScore)

// !!!!!!!!!!! 
// i belive we didnt take this part in day1 but i searched for it on the internet 
// and i found that  == compare the value only and dont diffinate between the date types 
// === compare the value and also the data type 
// so ==  score = 20 and textscore =20  so 20 = 20 which is true 
// === score = 20 and its number and textscore = 20 and its a string 
// so both have same value but not same data type and that why it is false 
// معلومه جديده

// task 10 

var number =  window.prompt("enter how many ")
console.log(typeof Number(number))
console.log(typeof parseInt(number))
console.log(typeof +number)


// task 11

var fruits = ["apple", "banana", "mango"];

console.log(fruits[1]); 
fruits[1] = "orange";  
fruits.push("grape"); 
// this .push we didnt also cover but its simple to know 
console.log(fruits); 


// task 12

var course = { 
    title: "JavaScript ", 
    hours: 120, 
    level: "easy" };
    
console.log(course.hours);
course.title = "html and css";
console.log(course);


// task 13 
var hasAccount = true;
var isVerified = false;

console.log(hasAccount && isVerified);
console.log(hasAccount || isVerified); 
console.log(!isVerified);  

// also this part didnt cover but it  also easy 

// task 14

var balance = 50;

balance += 30; 
balance *= 2;  
balance -= 20; 
console.log(balance); 

// task 15 

var hotelName = window.prompt("Enter hotel name:");
var nights = window.prompt("Enter number of nights:");
var isconfirm = window.confirm("is is Confirmed");
// this confirm also we didnt cover but also easy to know 
// just replace prompt with confirm BINGOOOO


var message = `Hotel: ${hotelName}, Nights: ${nights}, Confirmed: ${isconfirm}`;

alert(message);
console.log(message);

// task 16

// 2 + 8 = 10  // 10 + "0"  = 100 becouse zero is string

// "2" + 8 == 28 cuz its string + number so we put them as one string // "28" + 0 same also put them as a string "280"

// 2 + "8"  = 28 (we already know how ) // "28" + 0  = '280

console.log(2 + 8 + "0"); 
console.log("2" + 8 + 0);
console.log(2 + "8" + 0);

// task 17 

var city1 = "Alex";
var city2 = city1;
city2 = "Giza";
console.log(city1, city2);

// i dont really understand this but i think that we tried to make city2 = alex and then chamged it to giza 
// so output is alex giza 


var car1 = { brand: "Toyota" };
var car2 = car1; 
car2.brand = "Honda"; 
console.log(car1, car2);

// in this one it didnt get changed and i dont know why  !!!!!!!!!!!!!!!

// i dont undersatnd this task // im sorry but i will leave it 


// task 18 

var mixedBag = ["hello", 42, true, null, undefined, [1, 2, 3]];


console.log(typeof mixedBag[0])
console.log(typeof mixedBag[1])
console.log(typeof mixedBag[2])
console.log(typeof mixedBag[3])
console.log(typeof mixedBag[4])
console.log(typeof mixedBag[5])


// null i dont now raally why its something in the language itself  (update on the internet they say its a bug and they didnt fix and left it )




// task 19 


var customerName = window.prompt("Enter your name:");
var orderPrice = Number(window.prompt("Enter order price:"));
var isPaid = window.confirm("Has the payment been made?");



var orderMessage = `Customer: ${customerName}, Price: ${orderPrice}, Paid: ${isPaid}`;
console.log(orderMessage);

document.getElementById("result").innerText = orderMessage;

// task 20 

var num1 = Number(window.prompt("Enter first number:"));
var num2 = Number(window.prompt("Enter second number:"));

console.log(num1 + num2);
console.log(num1 - num2);
console.log(num1 * num2);
console.log(num1 / num2);
console.log(num1 % num2);
console.log(num1 ** num2);



// ahhhhhhhhhhhhhhhhhhhhhhhhhhh
// homa kterrrrrrrr kda lehhh 

// task 21

// tanyyyyy

var a = 40; 
var b = 50; 
var c = "60"; 
var d = 30; 
var e = 30; 
console.log(a + b + c + d + e);

// var c = "60";  hyaaa dee el problem 

console.log(a + b + +c + d + e);



//  اعتقد كده كفايه 

// task 22 // daa 3n el function and we still didnt cover today 