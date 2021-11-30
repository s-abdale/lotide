const assertEqual = require('../assertEqual');

assertEqual("Lighthouse Labs", "Bootcamp"); // should fail
assertEqual(1, 1); // should pass
assertEqual("fluff", "fluff"); // should pass
assertEqual(1,"1"); // should fail
assertEqual(1, 100); // should fail