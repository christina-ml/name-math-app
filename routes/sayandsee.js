var express = require('express');
var router = express.Router();

const lookAndSay = require('../utils/lookAndSay');

router.get("/:num", (req, res) => {
    let {num} = req.params;

    try {
        if (isNaN(num)){
            throw 'error not a number';
        }
        if (num < 1){
            throw 'cant be less than 1';
        }
        res.status(200).json({numAsSeen: lookAndSay(num, 1)});
    } catch(error){
        res.status(500).send(error);
    }
})

module.exports = router;
