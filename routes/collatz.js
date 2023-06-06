var express = require('express');
var router = express.Router();

const collatz = require('../utils/collatz');

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

    const collatzValue = collatz(num); // recursive function
		res.status(200).send(`the collatz value of ${num} is ${collatzValue}`);

	} catch (error){
		res.status(500).send(error);
	}
})

module.exports = router;
