var express = require('express');
var router = express.Router();

const collatz = require('../utils/collatz');
/* 
Memoization:
  an object, save it to an object
  as processing a number, check if that n is already in the object
*/

// variable for object to save collatz values of numbers already checked
let memoObj = {};

router.get("/:num", (req, res) => {
	const { num } = req.params;

	try {
    // if num is not a number
    if (isNaN(num)){
      throw "num is not a number"
    }
    if (parseInt(num) < 1){
      throw "num must be 1 or greater"
    } 

    // add collatz value to memoObject
    if (!memoObj[num]){
      console.log("num first time");
      const collatzValue = collatz(num, '', memoObj); // recursive function
      memoObj[num] = collatzValue;
    }
		res.status(200).send(`the collatz value of ${num} and memoObj is ${memoObj[num]}`);

	} catch (error){
		res.status(500).send(error);
	}
})

module.exports = router;
