console.log('***** Function Practice *****')

// Add the required code to complete the functions below
// After _each_ function, use a console log to call the function
// to test it and display the result

// 1. Function to return 'Hello World!'
function hello() {
  return 'Hello World!';
}
// Call the function to test
console.log('#1 Test - should say "Hello World!"', hello());


// 2. Function to return an personalized hello, using the `name` argument.
//    for example 'Hello, Jo!', or 'Hello, Stacy!'
function helloName( name ) {
  return `Hello, ${name}`;
}
// Remember to call the function to test
console.log("#2 calling helloName('Joe'):", helloName('Joe'));

// 3. Function to add two numbers together & return the result
function addNumbers( firstNumber, secondNumber) {
  return firstNumber + secondNumber;
  // return firstNumber + secondNumber;
}
console.log('#3 calling addNumbers(4, 5):', addNumbers(4, 5));

// 4. Function to multiply three numbers & return the result
function multiplyThree( oneX, twoX, triX){
  return (oneX * twoX * triX);
}
console.log('#4 calling multiplyThree(3, 4, 5):', multiplyThree(3, 4, 5));

// 5. Function that will return true if a number is positive,
//    or greater than zero, and false otherwise
function isPositive( number ) {
  if ( number > 0 ){
    return true;
  } else {
    return false;
  }
}
// Call the function to test each outcome (true & false)
console.log('#5 calling isPositive(4)', isPositive(4));
console.log('#5 calling isPositive(-5)', isPositive(-5));
// Write a separate console.log statement for each outcome
console.log('#5 isPositive - should say true', isPositive(3) );
console.log('#5 isPositive - should say false', isPositive(0) );
console.log('#5 isPositive - should say false', isPositive(-3) );


// 6. Function to return the _last_ item in an array. If the
//    array is empty, return `undefined`.
function getLast( array ) {
  if (array.at(-1) === undefined){
      return undefined;
  } else {
    return array.at(-1);
  }
}
//Test arrays to call getLast() on
let testArray = [1, 5, 15];
let testArray2 = [];

console.log('#6 Result of calling getLast(testArray):', getLast(testArray));
console.log('#6 Result of calling getLast(testArray2):', getLast(testArray2));

// 7. Function to find a value in an array. Return true if the
//    value is found and false otherwise. Use a loop;
//    DO NOT use Array.includes, Array.indexOf, or Array.find
function find( value, array ){
  let i = 0;
  for (let x of array){
    if (x === value){
      i++;
    }
  }
  if (i > 0){
    return true;
  } else {
    return false;
  }
}
console.log('#7 Result of calling find(5, testArray):', find(5, testArray));
console.log('#7 Result of calling find(3, testArray):', find(3, testArray));

// ----------------------
// Stretch Goals
// ----------------------
// 8. Function to check if a letter is the first letter in a
//    string. Return true if it is, and false otherwise
function isFirstLetter(letter, string) {
  if (letter === string.at(0)){
    return true;
  } else {
    return false;
  }
  }

console.log( '#8 isFirstLetter - should say true', isFirstLetter('a', 'apple') );
console.log( '#8 isFirstLetter - should say false', isFirstLetter('z', 'apple') );

// 9. Function to return the sum of all numbers in an array
let testArray3 = [615, 4, 33, 1515, -100, 41, 61241423];

function sumAll(array) {
  let sum = 0
  for (let x of array){
    sum += x;
  }
  // TODO: loop to add items
  return sum;
}
console.log('#9 result of calling sumAll(testArray3):', sumAll(testArray3));
console.log('#9 result of calling sumAll(testArray):', sumAll(testArray));

// 10. Function to return a new array of all positive (greater than zero)
//     numbers contained in an input array. If there are no positive numbers
//     return an empty array. Note: The input array should not change.
let testArray4 = [-5, -10, -200, -5000];

function posArray(array) {
  let retArray = [];
  for (let x of array){
    if (x > 0){
      retArray.push(x);
    }
  }
  return retArray;
}
console.log('#10 result of calling posArray(testArray3):', posArray(testArray3));
console.log('#10 result of calling posArray(testArray4):', posArray(testArray4));

// 11. Pick a problem from Edabit(https://edabit.com/) or
//     CodeWars(https://www.codewars.com/). Then describe it
//     here in a comment, write the function, and test it!
// THE PROBLEM:
// Complete the solution so that it splits the string into pairs of two characters.
// If the string contains an odd number of characters then it should replace the
// missing second character of the final pair with an underscore ('_').
// SAMPLE TESTS:
// const { assert } = require('chai');
// describe("Split Strings", () => {
//   it("Basic tests", () => {
//     assert.deepEqual(solution("abcdef"), ["ab", "cd", "ef"]);
//     assert.deepEqual(solution("abcdefg"), ["ab", "cd", "ef", "g_"]);
//     assert.deepEqual(solution(""), []);
//   });
// });
// MY SOLUTION
function solution(str){
  let splArr = []; //Empty array to build out and return
  let count = (str.length % 2); //Give me a reference of whether str is odd or even
  let sliceTwo; //Will be used to slice
  //First conditional appends the underscore to odd-length strings
  if (count === 1){
    str += '_';
  }
  //Probably a better way to do this part, but this grabs two letters at a time
  // based on the counted value of i.
  for (let i = 0; i < str.length; i++){
    sliceTwo = str.slice(i, (i+2));
    splArr.push(sliceTwo);
    i++;
  }
  return splArr;
}
// Some examples of it working!
let testStr = 'flajflkdfjwmen';
let testStr2 = 'alalakrmdns';
console.log('#11 calling solution(testStr):', solution(testStr));
console.log('#11 calling solution(testStr2):', solution(testStr2));
