// Add answers here

//### Conditional Algorithms

/* #### 1. Los or New?
Create a function named "_nameOfCity_". If a passed string begins with "_Los_" or "_New_", then return the full string. If not, return "_The city name does not begin with Los or New_". The function should be **case insensitive**.
 */

const _nameOfCity_ = (string) => {
  if (
    string.toLowerCase().startsWith(`_Los_`.toLowerCase()) ||
    string.toLowerCase().startsWith(`_New_`.toLowerCase())
  ) {
    return string;
  } else {
    return "_The city name does not begin with Los or New_";
  }
};

/* #### 2. isDivisible?
Create a function named "_isDivisible_". The function should take an integer as an argument. If the integer is divisible by 100, then return true. If not, return false. */

const _isDivisible_ = (integer) => integer % 100 === 0;

/* #### 4. What's the weather?
Use a **ternary operator** to complete this task. Create a function named "_isRaining_". If passed `true`, return "_wet day - you need an umbrella_". If passed `false`, return "_dry day - leave your umbrella at home_". */

const _isRaining_ = (boolean) => {
  boolean === true
    ? `_wet day - you need an umbrella_`
    : `_dry day - leave your umbrella at home_`;
};

/* #### 1. Sequence
Create a function named "_geometricalSequence_" and **use a loop** to return the following sequence: _`1 2 4 8 16 32 64 128 256`_. Concatenate each value to a string and return a string. */

const _geometricalSequence_ = () => {
  let finalArray = [];
  for (let i = 1; i <= 256; i = i * 2) {
    finalArray.push(i);
  }
  return finalArray.join(` `);
};

/* #### 2. Multiples
Create a function named "_multiplesOfThree_" and **use a loop** to return the first five multiples of three: _`3 6 9 12 15`_. Concatenate each value to a string and return a string.
 */
const _multiplesOfThree_ = () => {
  let finalArray = [];
  for (let i = 3; i <= 15; i = i + 3) {
    finalArray.push(i);
  }
  return finalArray.join(` `);
};

/* #### 1. You've got the power
Create a function named "_powerOf_" which takes an integer as an argument and returns the integer to the power of itself. You should **use a Math object method** to make the calculation. */
const _powerOf_ = (integer) => {
  return Math.pow(integer, integer);
};

/* #### 1. How many? 
Create a function named "_vowelCount_" that accepts a string as an argument. Check how many vowels (A, a, E, e, I, i, O, o, U, u) the string contains, if any. **Return the vowel count** of the string. 
 */

const _vowelCount_ = (string) => {
  let sum = 0;
  for (let i = 0; i < string.length; i++) {
    if (`aeiou`.includes(string[i].toLowerCase())) {
      sum += 1;
    }
  }
  return sum;
};

// DO NOT EDIT below this line - This will result in an automatic fail
// module.exports = {nameOfCity, isDivisible, missingAngle, isRaining, geometricalSequence, multiplesOfThree, powerOf, vowelCount};
