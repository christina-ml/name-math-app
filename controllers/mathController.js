var express = require('express');
var router = express.Router();

const isEvenlyDivisibleBy = require('../utils/math')

router.get('/:divisor/:dividend', (req, res) => {
  const { divisor, dividend } = req.params;
  try {
    if (isNaN(divisor) && isNaN(dividend)){
      throw `${divisor} and ${dividend} are both not a number`;
    }
    if (isNaN(divisor)){
      throw `${divisor} is not a number`;
    }
    if (isNaN(dividend)){
      throw `${dividend} is not a number`;
    }
   
    if (isEvenlyDivisibleBy(dividend, divisor)){
    // if (Number(dividend) % Number(divisor) === 0){
      res.status(200).send(`${dividend} is evenly divisible by ${divisor}`);
    } else {
      res.status(200).send(`${dividend} is not evenly divisible by ${divisor}`);
    }
  } catch (err){
    res.status(500).send(err);
  }
})

router.get('/', (req, res) => {
  const { num1, num2 } = req.query;
  try {
    if (num1 === undefined || num2 === undefined){
      throw `Add a query string after '/math' such as '?num1=3&num2=2' to see a Math object with sum and product`
    }
    
    let obj = {
      sum: (Number(num1) + Number(num2)),
      product: (Number(num1) * Number(num2))
    }
    res.status(200).json(obj);
  } catch (err){
    res.status(500).send(err);
  }
})

module.exports = router;
