// Exercise 1: Temperature Check (if-else)
let temperature = 22;

if (temperature < 0) {
    console.log("It's freezing!");
} else if (temperature >= 0 && temperature <= 15) {
    console.log("It's cold.");
} else if (temperature >= 16 && temperature <= 25) {
    console.log("It's mild.");
} else {
    console.log("It's warm.");
}

// Temperature Check (switch)
let tempRange;
if (temperature < 0) tempRange = "freezing";
else if (temperature >= 0 && temperature <= 15) tempRange = "cold";
else if (temperature >= 16 && temperature <= 25) tempRange = "mild";
else tempRange = "warm";

switch (tempRange) {
    case "freezing":
        console.log("It's freezing!");
        break;
    case "cold":
        console.log("It's cold.");
        break;
    case "mild":
        console.log("It's mild.");
        break;
    case "warm":
        console.log("It's warm.");
        break;
}

// Exercise 2: Divisibility Check (if-else)
let number = 12;

if (number % 2 === 0 && number % 3 === 0) {
    console.log("Divisible by both.");
} else if (number % 2 === 0) {
    console.log("Divisible by 2.");
} else if (number % 3 === 0) {
    console.log("Divisible by 3.");
} else {
    console.log("Not divisible by 2 or 3.");
}

// Divisibility Check (switch)
let divBy2 = number % 2 === 0;
let divBy3 = number % 3 === 0;
let divisorCase = (divBy2 ? "two" : "") + (divBy3 ? "three" : "");

switch (divisorCase) {
    case "twothree":
        console.log("Divisible by both.");
        break;
    case "two":
        console.log("Divisible by 2.");
        break;
    case "three":
        console.log("Divisible by 3.");
        break;
    default:
        console.log("Not divisible by 2 or 3.");
}

// Exercise 3: For Loops
// 3.1 Print numbers 1 to 10
console.log("Numbers 1 to 10:");
for (let i = 1; i <= 10; i++) {
    console.log(i);
}

// 3.2 Print even numbers 1 to 20
console.log("Even numbers 1 to 20:");
for (let i = 2; i <= 20; i += 2) {
    console.log(i);
}

// 3.3 Sum of numbers 1 to 100
let sumTotal = 0;
for (let i = 1; i <= 100; i++) {
    sumTotal += i;
}
console.log("Sum of 1 to 100:", sumTotal);

// 3.4 Print each element in array
const numbersArray = [1, 2, 3, 4, 5];
console.log("Array elements:");
for (let i = 0; i < numbersArray.length; i++) {
    console.log(numbersArray[i]);
}

// 3.5 Find largest number
const numbersArray2 = [3, 7, 2, 5, 10, 6];
let largest = numbersArray2[0];
for (let i = 1; i < numbersArray2.length; i++) {
    if (numbersArray2[i] > largest) {
        largest = numbersArray2[i];
    }
}
console.log("Largest number:", largest);

// Exercise 4: While Loops
// 4.1 Print numbers 1 to 10
console.log("While loop - Numbers 1 to 10:");
let w = 1;
while (w <= 10) {
    console.log(w);
    w++;
}

// 4.2 Print even numbers 1 to 20
console.log("While loop - Even numbers 1 to 20:");
let e = 2;
while (e <= 20) {
    console.log(e);
    e += 2;
}

// 4.3 Sum of numbers 1 to 100
let sumWhile = 0;
let s = 1;
while (s <= 100) {
    sumWhile += s;
    s++;
}
console.log("Sum of 1 to 100 (while):", sumWhile);

// 4.4 Multiples of 5 less than 50
console.log("Multiples of 5 less than 50:");
let m = 5;
while (m < 50) {
    console.log(m);
    m += 5;
}

// Exercise 5: Do While Loops
// 5.1 Print numbers 1 to 10
console.log("Do-while - Numbers 1 to 10:");
let d = 1;
do {
    console.log(d);
    d++;
} while (d <= 10);

// 5.2 Sum of numbers 1 to 100
let sumDoWhile = 0;
let iDo = 1;
do {
    sumDoWhile += iDo;
    iDo++;
} while (iDo <= 100);
console.log("Sum of 1 to 100 (do-while):", sumDoWhile);