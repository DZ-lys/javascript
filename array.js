// let numbers = [11, 12, 13, 14, 15, 16, 18, 17, 19, 20, 21, 22, 23, 24, 25];

// function findOddNumbers(input) {
//     let oddNumbers = [];
//     for(let i = 0; i < numbers.length; i++) {
//         if (input[i] % 2 === 0) oddNumbers.push(input[i]);
//     }
//     return oddNumbers;
// }

// let answer = findOddNumbers(numbers);
// console.log(answer);

// function findMaxNum(input) {
//     let max = answer[0];
//     for(let i = 0; i < answer.length; i++) {
//         if (input[i] > max) max = input[i];
//     }
//     return max;
// }

// let max = findMaxNum(answer);
// console.log(max);

// let TransActions = [-5000, 25000, -15000, -3000, 2500, -1, 10000, -100000, 50];

// let income = (transfers) => {
//     let income = [];
//     for(let i = 0; i < TransActions.length; i++) {
//         if (transfers[i] > 0) income.push(transfers[i]);
//     }
//     return income;
// }

// let expenses = (transfers) => {
//     let expenses = [];
//     for(let i = 0; i < TransActions.length; i++) {
//         if (transfers[i] < 0) expenses.push(transfers[i]);
//     }
//     return expenses;
// }

// let spent = expenses(TransActions);
// let gains = income(TransActions);

// console.log(spent);
// console.log(gains);

// let TransActions = [-5000, 25000, -15000, -3000, 2500, -1, 10000, -100000, 50];
// let deposits = TransActions.filter((g) => g > 0);
// let withdraws = TransActions.filter((g) => g < 0);
// console.log({deposits});
// console.log({withdraws});

// const greetings = (name) => {
//     console.log("hello", name);
// };

// const question = () => {
//     console.log("how was your day");
// };

// greetings("Dzed");

// const funcTest = (a, b, c) => {
//     b();
//     console.log(a);
//     console.log(c);
// };

// funcTest(null, question,);

// () => works as a function so does function(){} without naming it but only works in a functions call
// b(); is a way to call a function in a function 

let grades = [1, 15, 3, -2, 14, 7, 71, 8, 11, 5];

// map method can return anything and needs only one definition needed
grades.map((grade) => {
    // console.log(grade);
});

// sort method takes 2 definition and can return neg or pos objects
let sorted = grades.sort((a, b) => {
    return a - b;
}); 

console.log(sorted);

// filter method can take 1 definition and will return bolean(true or false) 
let filtered = grades.filter((grade) => {
    return grade > 0;
});

// console.log({filtered});

let mappedGrades = grades.map((grade) => {
    if(grade > 0){
        return {
            type: "orlogo",
            amount: grade
        }
    }else {
        return {
            type: "zarlage",
            amount: grade
        }
    }
})
// console.log(mappedGrades);