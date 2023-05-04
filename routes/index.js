var express = require('express');
var router = express.Router();

const spinWords = require('../utils/spinWords')

router.get('/spinWords/:str', (req, res) => {
  try {
    const { str } = req.params;
    // console.log(str)
    res.status(200).send(spinWords(str))

  } catch (err){
    res.status(500).send(err)
  }
})

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express'});
});

module.exports = router;
