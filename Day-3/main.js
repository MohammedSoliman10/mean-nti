// task1

// var n = "mohamed";
// console.log(n.length);

// task 2

// var s = "I am learning JavaScript";
// console.log(s.toUpperCase());
// console.log(s.toLowerCase());

// task3

// var email = "student@nti.com";
// console.log(email.includes("@"));

// task4

// var wowrd = "JavaScript";
// console.log(w[0]);
// console.log(w[w.length - 1]);


// task5

// var r = "This is a bad day";
// console.log(r.replace("bad", "good"));

// task6

// var b = "I love coding";
// var a = b.split(" ").join("-");
// console.log(a);

// task7

// var text7 = " nti egypt training ";
// var result7 = text7.trim().toUpperCase().replace("EGYPT", "CAIRO");
// console.log(result7);

// EASYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYY

// task8
// var string = "45.8";
// var num = +string;
// console.log(num);


// task9
// var n = 7.6;
// console.log(Math.round(n));
// console.log(Math.floor(n));
// console.log(Math.ceil(n));

// task10

// var nums = [12, 5, 28, 9];
// var max = 0;
// var min = 0;
// for (var i = 0; i < nums.length; i++) {
//     if (nums[i] > max) {
//         max = nums[i];
//     }

//     if (nums[i] < min) {

//         min = nums[i];
//     }
// }
// console.log(max);
// console.log(min);

// OR 
// console.log(Math.max(...nums));
// console.log(Math.min(...nums));


// task11
// var random = Math.floor(Math.random() * 20) + 1;
// console.log(random);
// task13

// var randdom = [];
// var sum = 0;

// for (var i = 0; i < 5; i++) {
//   var r = Math.floor(Math.random() * 50) + 1;
//   randdom[i] = r;
//   sum += r;
// }

// var max = Math.max(...randdom);
// var min = Math.min(...randdom);
// console.log(max);
// console.log(min);
// console.log(sum/randdom.length);


// task14
// for (var i = 1; i <= 20; i++) {
//   console.log(i);
// }

// task15
// for (var i = 1; i <= 15; i=i+2) {
//     console.log(i);
  
// }

// task16
// var c = 10;
// while (c >= 1) {
//   console.log(c);
//   c--;
// }

// task17
// var ns = ["Sara", "Omar", "Mona", "Youssef"];
// for (var name of ns) {
//   console.log(name);
// }

// task18
// for (var i = 1; i <= 10; i++) {
//   if (i === 7) break;
//   console.log(i);
// }
// task19
// for (var i = 1; i <= 3; i++) {
//   for (var j = 1; j <= 3; j++) {
//     console.log(i + " * " + j + " = " + i * j);
//   }
// }
// task20
// for (var i = 1; i <= 30; i++) {
//   if (i == 25) 
//     break;
//   if (i % 3 == 0) 
//     continue;
//   console.log(i);
// }


//task21
// var w = "HELLO";
// for (var i = 0; i < w.length; i++) {
//   console.log(w[i]);
// }

//task22
// var n = [10, 20, 30, 40];
// var s = 0;
// for (var i = 0; i < nums22.length; i++) {
//   s += n[i];
// }
// console.log(s);

//task23
// var s = "JavaScript is amazing and awesome";
// var s_a = s.toUpperCase();
// var cOFa = 0;
// for (var i = 0; i < s_a.length; i++) {
//   if (s_a[i] === "A") {
//     cOFa++;
//   }
// }
// console.log(cOFa);


//task24
// var g = [70, 85, 92, 60, 77, 88];
// for (var i = 0; i < g.length; i++) {
//   if (g[i] % 2 == 0) {
//     console.log(g[i]);
//   }
// }

//task25
for (var i = 1; i <= 4; i++) {
  var l = "";
  for (var j = 1; j <= i; j++) {
    l += "*";
  }
  console.log(l.trim());
}
//task26

var s = ["ahmed", "sara", "omar", "laila", "hassan"];
var m_c = 0;
for (var i = 0; i < s.length; i++) {
  var upper = s[i].toUpperCase();
  if (upper[0] == "A" || upper[0] == "S") {
    console.log(upper);
    m_c++;
  }
}
console.log(m_c);

