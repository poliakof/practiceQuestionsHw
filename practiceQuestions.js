
/* Question 1: Array Element Parity

 Given an array of integers, write a function that returns a new array containing only the numbers that are either entirely odd or entirely even. Use a 'for' loop to iterate through the array and the 'if-else' statement to check the parity. */

let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
let odd = []
let even = []

for(let i = 0; i < numbers.length; i++) {
       
    if (numbers[i] % 2 == 0) {
        even.push(numbers[i])
    } else if (numbers[i] % 2 !== 0) {
        odd.push(numbers[i])
    }    

}
 
console.log(odd)
console.log(even)



/* Bonus: Try implementing it using the 'forEach' method once. */

let numbersBonus = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
let oddBonus = []
let evenBonus = []

numbersBonus.forEach((numbersBonus) => numbersBonus % 2 === 1 && oddBonus.push(numbersBonus))
numbersBonus.forEach((numbersBonus) => numbersBonus % 2 !== 1 && evenBonus.push(numbersBonus))

console.log(oddBonus)
console.log(evenBonus)



/* Question 2: Object Properties Switch

You have an object that maps a person's name to their age. Write a function that takes a name and updates the person's age based on specific criteria:

If the current age is between 0 and 12, set the age to 13.
If the current age is between 13 and 19, increase the age by 1.
Otherwise, set the age to 21.

Use a 'switch' statement to implement the logic based on age ranges. */

let person = { name: "John" }
person.age = 10

switch (true) {
    case person.age >= 0 && person.age <= 12:
        console.log(`John's age is 13.`);
        break;
    case person.age > 13 && person.age <= 19:
        console.log(`John's age is ${person.age + 1}.`);
        break;
    case person.age > 19:
        console.log(`John's age is 21.`);
        break;
    default:
        console.log(`There is not enough data.`);
}



/* Question 3: Sum of Squares

Create a function that takes an array of numbers as input and returns the sum of the squares of these numbers. Utilize a 'for' loop to iterate through the array and the 'Math.pow()' method to square each number before summing them up. */

let numbersArray = [1, 5, 1]
let sum = 0

for (let i = 0; i < numbersArray.length; i++) {
  sum += (Math.pow(numbersArray[i], 2))
}

console.log(sum)



/* Question 4: Nested Object Finder

Given a nested object (an object that contains objects), write a function that searches for a property within any of the nested objects. The function should return the property's value if found or 'null' if not. To explore the nested objects, use a recursive strategy or a 'for...in' loop. */

let robot = {};
 robot.color = "red";
 robot.size = "small";

let size = robot.hasOwnProperty ? "small" : "null";

console.log(size)



/* Question 5: Grading System

Create a function that assigns a letter grade (A, B, C, D, F) to a list of student scores stored in an array based on these criteria:

A: score >= 90
B: score >= 80 and < 90
C: score >= 70 and < 80
D: score >= 60 and < 70
F: score < 60

Use a 'for' loop to iterate through the scores and an 'else if' ladder to determine each grade. The function should return a new array of grades corresponding to the scores. */

let studentScore = [90, 55, 2, 85, 68, 72, 81, 92, 93, 70]
let newScore = []

for(let i = 0; i < studentScore.length; i++) {
       
    if (studentScore[i] >= 90 && studentScore[i] < 100) {
        newScore.push(studentScore[i] = "A")
    } else if (studentScore[i] >= 80 && studentScore[i] < 90) {
        newScore.push(studentScore[i] = "B")
    } else if (studentScore[i] >= 70 && studentScore[i] < 80) {
        newScore.push(studentScore[i] = "C")
    } else if (studentScore[i] >= 60 && studentScore[i] < 70) {
        newScore.push(studentScore[i] = "D")
    } else if (studentScore[i] > 0 && studentScore[i] < 60) {
        newScore.push(studentScore[i] = "F")
    }

}
 
console.log(newScore)



/* Question 6: Object Transformation

You have an array of objects where each represents a student and their score on a test. Write a function that transforms this array into an object where each key is a student's name and the value is their test score. Use a 'for' loop to process the array. */

let classroom = [
    {
        name: "Jen",
        score: 80,
    },
    {
        name: "Paul",
        score: 90,
    },
    {
        name: "Thomas",
        score: 30,
    },
]

for (let i = 0; i < classroom.length; i++) {
    classroom[i]
}

console.log(Object.assign({}, [classroom]))



/* Question 7: Min and Max Finder

Write a function that takes an array of numbers and returns an object with two properties: 'min' and 'max', representing the smallest and largest numbers in the array. Use the 'Math.min()' and 'Math.max()' functions and the spread operator to find these values. */

let numArray = [10, 23, 1, 430, 550, 5, 9900, 803, 45]

let minArray = (Math.min(...numArray))
let maxArray = (Math.max(...numArray))

let minMax = {minArray, maxArray}

console.log(Object.assign({}, minMax))