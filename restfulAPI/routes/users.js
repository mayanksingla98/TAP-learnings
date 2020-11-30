const express = require("express");
const User = require("../models/user")

const router = express.Router()

router.get("/", async(req, res)=>{
    try{
        const users = await User.find();
        res.status(200).json(users);
        // res.send("GET REquest")
    }
    catch(err)
    {
        res.status(404).send('Error' + err);
    }
});

router.get("/filtered", async(req, res)=>{
    try{
        const users = await User.aggregate([
            {$match : { name: "Mayank"} },
            {$project : {name : 1}}
        ]);
        res.status(200).json(users);
        // res.send("GET REquest")
    }
    catch(err)
    {
        res.status(404).send('Error' + err);
    }
});

router.get("/:id", async(req, res)=>{
    try{
        const users = await User.findById(req.params.id);
        res.status(200).json(users);
    }
    catch(err)
    {
        res.status(404).send('Error' + err);
    }
});

router.post("/", async(req, res)=>{
    const user = new User({
        name: req.body.name,
        employee_id: req.body.employee_id,
        age: req.body.age
    })
    try{
        const a1 = await user.save();
        res.json(a1);
    }
    catch(err)
    {
        res.status(404).send('Error' + err);
    }
});

module.exports = router