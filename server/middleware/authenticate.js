const jwt = require('jsonwebtoken');
const User = require('../model/loginSchema');
const cookieParser = require('cookie-parser');
const authenticate = async (req, res, next) => {
    try {
        const token = req.cookies.jwtoken;
        const verifyToken = jwt.verify(token, process.env.SECRET_KEY);
        const rootUser = await User.findOne({ _id: verifyToken._id, "tokens.token": token });
        if (!rootUser) { throw new Error('User not found') }
        req.token = token;
        req.rootUser = rootUser;
        req.userID = rootUser._id;
        next();

    } catch (error) {
        res.status(401).send('Unauthorized: No token provided');
    }
}

module.exports = authenticate;