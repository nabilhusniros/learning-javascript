// const names = ["Nabil", "Nadiah", "Nadim"];

// for (let i = 0; i < names.length; i++) {
//     console.log(names[i])
// }

// const numbers = [1, 2, 3, 4]

// for (let j = 0; j < numbers.length; j++) {
//     console.log(numbers[j] * 2)
// }

// let password = "Tomorrow";
// let userGuess = "";

// while (userGuess !== password) {
//     userGuess = prompt("Enter the password");
// }

let factorial = 1;
let number = 5;
let original = number;

do {
    factorial = factorial * number;
    number--
} while(number > 0);

console.log(original + " factorial is " + factorial)