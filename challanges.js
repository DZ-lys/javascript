// task 1
// let apples = 1.5;
// let bananas = 0.8;
// let total = apples + apples + apples + bananas + bananas;
// console.log(total)

// task 2
// let num = 7;
// let answer = num % 2;
// if (answer == 0) {
//     console.log("even")
// } else {
//     console.log("odd")
// }

// task 2.5
// let num = 7;
// let answer = num % 2;
// if (answer == 0) {
//     console.log("even");
// } else {
//     console.log("odd");
// }
// if (num < 0) {
//     console.log("negative");
// } else {
//     console.log("positive");
// }

// task 3
// let username = "admin";
// let password = "12345";
// if (username == "admin") {
//     if (password == "12345") {
//         console.log("Log in successful!");
//     } else {
//         console.log("the password is incorrect");
//     }
// } else {
//     console.log("the username is incorrect");
// }

// task 4
// let age = 121;
// if (age < 13) {
//     console.log("Child");
// } else {
//     if (19 > age) {
//         console.log("Teenager");
//     } else {
//         console.log("Adult");
//     }
// }

// task 5
// let num1 = 10;
// let num2 = 2;
// let addition = num1 + num2;
// let subtraction = num1 - num2;
// let multiplication = num1 * num2;
// let division = num1 / num2;
// console.log(num1, "+", num2, "=", addition);
// console.log(num1, "-", num2, "=", subtraction);
// console.log(num1, "x", num2, "=", multiplication);
// console.log(num1, "/", num2, "=", division);

// task 6
// let x = false;
// if (x) {
//     console.log("True");
// } else {
//     console.log("False");
// }

// task 7
// let tempC = 32;
// let tempF = tempC * (9/5) + 32;
// console.log(tempF);

// task 8
// let year = 2024;
// if (year % 400 == 0) {
//     console.log(year, "is a leap year");
// } else {
//     if (year % 100 == 0) {
//         console.log(year, "is not a leap year");
//     } else{
//         if (year % 4 == 0) {
//             console.log(year, "is a leap year");
//         } else {
//             console.log(year, "is not a leap year");
//         }
//     }
// }

// task 9
// let num1 = 6;
// let num2 = 5;
// let num3 = 4;
// if (num1 < num2) {
//     if (num1 < num3) {
//         console.log(num1);
//     } else {
//         console.log(num3);
//     }
// } else {
//     if (num2 < num3) {
//         console.log(num2);
//     } else {
//         console.log(num3);
//     }
// }

// challange 1
    // function gatsuurGenerator(n) {
    // let od = "*";
    //  for (let i = 0; i < n; i++) {
    //     console.log(od);
    //     od = od + "*";
    //  }
    // }
    // gatsuurGenerator(3);
// // challange 2 
// let numbers = (a, b, c) => {
//     if (a >= b && a <= c || a <= b && a >= c) return a; 
//     if (b <= a && b >= c || b >= a && b <= c) return b;
//     return c;
// }

// console.log(numbers(7, 12, 9)); 

// // challange 3
// const Numbers = (n) => {
//     for(let i = 1; i <= n; i++) {
//         if (i % 3 === 0 && i % 5 === 0) console.log("fizzbuzz");
//         else if (i % 3 === 0) console.log("fizz");
//         else if (i % 5 === 0) console.log("buzz");
//         else console.log(i);
//     }
// }

// Numbers(15);

//SPREAD OPERATOR
// let numbers = [3, 5, 6, 2, 1];
// let numbers2 = [4, 6, 1, 10, 23];
// //Hamgiin ih toog ol
// let allNumbers = [...numbers, ...numbers2];
// let max = allNumbers[0];
// allNumbers.map((number) => {
//   if (max < number) {
//     max = number;
//   }
// });
// console.log(max);

// let person = {
//   name: "Bilguun",
//   age: 21,
// };

// let employee = {
//   ...person,
//   gender: "male",
//   skill: "js",
// };
// console.log(employee);

const names = [
    { name: "Alice", age: 20 },
    { name: "Bob", age: 25 },
    { name: "John", age: 30 },
    { name: "Jane", age: 35 },
    { name: "Joe", age: 40 },
  ];
  const name2 = [
    { name: "Andy", age: 20 },
    { name: "Bilguun", age: 25 },
    { name: "Jargalmaa", age: 30 },
    { name: "Anguuch", age: 35 },
    { name: "Mah", age: 40 },
    { name: "Chinguun", age: 45 },
  ];
  // 1. FIND FIRST PERSON THAT NAME STARTS WITH 'C'
  // 2. FIND FIRST PERSON THAT OLDER THAN 25
 
  let allNames = [...names, ...name2];
  
  let firstC = allNames.find((name) => {
    return name.name[0] === "C";
  });
  console.log(firstC);

  let first25 = allNames.find((age) => {
    return age.age >= 25;
  });
  console.log(first25);