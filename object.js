// let student = {
//     name: "boldo",
//     age: 15,
//     school: "oyunlag",
//     gender: "male",
//     grades: [80, 90, 50],
// };
// student.age = 16;
// student.grades[1] = 100;
// // console.log(student);

// let students = [
//     {name: "alex", age: 15, gender: "male"},
//     {name: "alyx", age: 18, gender: "female"},
//     {name: "alexa", age: 23, gender: "female"},
//     {name: "andy", age:13, gender: "male"},
//     {name: "anton", age:31, gender: "male"},
// ]

// let findAdults = (input) => {
//     let adults = [];
//     for (let i = 0; i < input.length; i++) {
//         if (input[i].age >= 18) adults.push(input[i]);
//     }
//     return adults;
// }

// let findMinors = (input) => {
//     let minors = [];
//     for (let i = 0; i < input.length; i++) {
//         if (input[i].age < 18) minors.push(input[i]);
//     }
//     return minors;
// }

// let adultList = findAdults(students);
// let minorList = findMinors(students);
// // console.log(ageResult);
// // console.log(minorList);

// let findMales = (input) => {
//     let males = [];
//     for (let i = 0; i < input.length; i++) {
//         if (input[i].gender === "male") males.push(input[i]);
//     }
//     return males;
// }

// let findFemales = (input) => {
//     let females = [];
//     for (let i = 0; i < input.length; i++) {
//         if (input[i].gender === "female") females.push(input[i]);
//     }
//     return females
// }

// let maleList = findMales(students);
// let femaleList = findFemales(students);
// // console.log(maleList);
// // console.log(femaleList);

let students = [
    { name: 'Boldoo', age: 15, grades: [10, 20, 30, 90, 80], gender: "male" },
    { name: 'Saraa', age: 14, grades: [70, 60, 85, 90, 75], gender: "female" },
    { name: 'Tuvshuu', age: 16, grades: [55, 40, 75, 80, 90], gender: "male" },
    { name: 'Anu', age: 15, grades: [95, 85, 70, 90, 88], gender: "female" },
    { name: 'Enkhee', age: 17, grades: [50, 45, 60, 70, 80], gender: "male" },
    { name: 'Temuulen', age: 14, grades: [60, 70, 90, 80, 95], gender: "male" },
    { name: 'Nandin', age: 15, grades: [80, 85, 90, 75, 88], gender: "female" },
    { name: 'Batsaikhan', age: 16, grades: [40, 50, 60, 70, 80], gender: "male" },
    { name: 'Ariunaa', age: 14, grades: [75, 85, 95, 90, 80], gender: "female" },
    { name: 'Zoljargal', age: 17, grades: [55, 65, 75, 85, 95], gender: "female" },
    { name: 'Bat-Erdene', age: 15, grades: [40, 50, 60, 70, 80], gender: "male" },
    { name: 'Uchral', age: 16, grades: [85, 90, 95, 88, 80], gender: "female" },
    { name: 'Amaraa', age: 14, grades: [60, 70, 75, 85, 90], gender: "male" },
    { name: 'Odnoo', age: 15, grades: [50, 60, 70, 80, 90], gender: "female" },
    { name: 'Erdenee', age: 17, grades: [45, 55, 65, 75, 85], gender: "male" },
    { name: 'Sukhbat', age: 14, grades: [90, 95, 88, 85, 80], gender: "male" },
    { name: 'Gantulga', age: 16, grades: [40, 60, 70, 80, 90], gender: "male" },
    { name: 'Tsolmon', age: 15, grades: [80, 85, 90, 95, 88], gender: "female" },
    { name: 'Khuslen', age: 14, grades: [70, 75, 80, 85, 90], gender: "female" },
    { name: 'Bayar', age: 17, grades: [60, 70, 80, 90, 95], gender: "male" },
]

let findOneStudentAvgGrade = (oneStudents) => {
    let grades = oneStudents.grades;
    let sum = 0;
    for(let i = 0; i < grades.length; i++) {
        sum = sum + grades[i]; 
    }
    let average = sum / grades.length;
    return average;
}

// let findAllAverageGrade = (allStudents) => {
//     sum = 0;
//     allAverage = 0;
//     for (let i = 0; i < allStudents.length; i++) {
//         let average = findOneStudentAvgGrade(allStudents[i]);
//         sum = sum + average;
//         allAverage = sum / allStudents.length;
//     }
//     return allAverage
// }

// let result = findAllAverageGrade(students);
// console.log(result);

// let findGenderPercentage = (input) => {

// }

let findAverageAge = (ageOfStudents) => {
    
    let avgAge = 0;
    for(let i = 0; i < allAge.length; i++) {
        avgAge = avgAge + allAge.age[i];
    }
}

console.log(findAverageAge(students));
