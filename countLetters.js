// assertEqual Function:
const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🚨 Assertion Failed: ${actual} !== ${expected}`);
  }
};



// countLetters Function:
let countLetters = function(letters) {
  let results = {};
  let combinedStr = letters.replace(/\s+/g, ""); //

  for (let letter of combinedStr) {
    if (!results[letter]) {
      // if results[letter] does not exist, push results[letter] with a value of 1
      results[letter] = 1;
    } else {
      // else if the letter exists in the results array, push the current value + 1 to raise the count
      results[letter] += 1;
    }
  }
  console.log(results);
};



// Testing:
countLetters("lighthouse in the house");