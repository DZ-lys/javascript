// let lines = ["Baby Shark", "Mommy shark", "Daddy shark", "Grandma shark", 
//     "Grandpa shark", "Let's go hunt", "Run away", "Safe at last", "It's the end"];
// let dodo = ("replace doo, doo, doo, doo, doo, doo");
// lines.map((lyrics) => {
//     let line = dodo.replace("replace", lyrics);
//     for (let i = 0; i < 3; i++) {
//         console.log(line);
//     }
//     console.log(lyrics + "!");
// })
 //challange 1

// let input = "Hello world! I am Fullstack Developer";
// let split = input.split(" ");
// let output = split.sort((a, b) => {
//     return  b.length - a.length;
// });
// console.log(output[0]);

let input = "Hello world! I am Fullstack Developer";
let split = input.split(" ");
let replacement = input.replace(split[split.length-1], split[0]);
let output = replacement.replace(split[0], split[split.length -1]);
console.log(output);
