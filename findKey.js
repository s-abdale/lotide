// assertEqual Function: (for testing)
const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🚨 Assertion Failed: ${actual} !== ${expected}`);
  }
};


const findKey = function(object, callback) {

  for (const [key, value] of Object.entries(object)) {
    if (callback(value)) {
      return key;
    }
  }
};




// Testing:
console.log("2/5 star word:");
console.log(findKey({
  "Blue Hill": { stars: 1 },
  "Akaleri":   { stars: 3 },
  "noma":      { stars: 2 },
  "elBulli":   { stars: 3 },
  "Ora":       { stars: 2 },
  "Akelarre":  { stars: 3 }
}, x => x.stars === 2)); // returns Noma

console.log("---");

console.log("3/5 star word:");
let inputStatement = (findKey({
  "Blue Hill": { stars: 1 },
  "Akaleri":   { stars: 3 },
  "noma":      { stars: 2 },
  "elBulli":   { stars: 3 },
  "Ora":       { stars: 2 },
  "Akelarre":  { stars: 3 }
}, x => x.stars === 3));

console.log(inputStatement); // returns Akaleri
assertEqual(inputStatement,"Akaleri"); // returns Pass

console.log("---");

let movieList = {
  "Dune": { stars: 4 },
  "Addams Family Values": { stars: 3 },
  "Knives Out": { stars: 4 },
  "The Nightmare Before Christmas": { stars: 4 },
  "Venom: Let There Be Carnage": { stars: 2 },
  "Mac and Me": { stars: 0 },
};

console.log("4/5 star movie:");
console.log(findKey(movieList, x => x.stars === 4)); // returns Dune
assertEqual((findKey(movieList, x => x.stars === 4)), "Dune"); // returns Pass