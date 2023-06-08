var express = require('express');
var router = express.Router();

const lookAndSay = require('../utils/lookAndSay');

// to do: make as a post route (test in Postman)

// memoization using an object:
let object = {};

router.get("/:num", (req, res) => {
    let {num} = req.params;

    try {
        if (isNaN(num)){
            throw 'error not a number';
        }
        if (num < 1){
            throw 'cant be less than 1';
        }
        // res.status(200).json({numAsSeen: lookAndSay(num, 1)});

        if (!object[num]) {
            let seen = lookAndSay(num, 1)
            object[num] = seen[0]
        }
        res.json({ numAsSeen: object[num] })
    } catch(error){
        res.status(500).send(error);
    }
})

module.exports = router;
