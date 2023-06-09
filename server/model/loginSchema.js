const mongoose = require('mongoose');
const { use } = require('../router/auth');
const jwt = require('jsonwebtoken');
const loginSchema = new mongoose.Schema({
    email: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true,
    },
    tokens: [
        {
            token: {
                type: String,
                required: true,
            }

        }]
});

loginSchema.methods.generateAuthToken = async function () {
    try {
        let token = jwt.sign({ _id: this._id }, process.env.SECRET_KEY);
        this.tokens = this.tokens.concat({ token: token });
        await this.save();
        return token;
    }
    catch (error) { console.log(error); }
}

const Login = mongoose.model('Login', loginSchema);

module.exports = Login;