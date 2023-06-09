const express = require('express');
const router = express.Router();
const jwt = require('jsonwebtoken');
require('../db/conn');
const Login = require('../model/loginSchema');
const authenticate = require('../middleware/authenticate');

router.post('/', async (req, res) => {
    try {
        const { email, password } = req.body;
        if (!email || !password) {
            return res.status(200).json({ error: "Please fill the field properly" });
        }
        const userExist = await Login.findOne({ email: email });
        if (password === userExist.password && email === userExist.email) {
            let token = await userExist.generateAuthToken();
            res.cookie("jwtoken", token, {
                expires: new Date(Date.now() + 25892000000),
                httpOnly: true
            });
            res.status(201).json({ message: "Login successfull" });
        } else {
            console.log("Login failed");
            res.status(202).json({ message: "Login failed" });
        };
    } catch (error) {
        console.log(error);
    }
});
router.get('/home', authenticate, (req, res) => {
    res.send(req.rootUser);
});
module.exports = router;