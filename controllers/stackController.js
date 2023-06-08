var express = require('express');
var router = express.Router();

const Stack = require("../classes/Stack");
const myStack = new Stack();

router.get("/", (req, res) => {
    res.status(200).json({"message" : "this is the stack route"});
})

router.post("/", (req, res) => {
    console.log("req:", req)
    const { nums } = req.body; // '2,3,4'
    console.log('nums: ', nums)
    try {
        myStack.push(nums);
        res.status(200).json({
            status: 'success', 
            stack: myStack
        });
    } catch (error){
        res.status(500).send(error)
    }
})

router.get("/pop", (req, res) => {
    const myStack = new Stack();
    let poppedNums = myStack.pop();

    console.log(myStack)
    res.status(200).json({status: 'success', nums: myStack});
})

module.exports = router;
