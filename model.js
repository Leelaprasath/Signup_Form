const mongoose = require('mongoose');
const Schema = require('mongoose').Schema;
const conn = require('./db');

conn.connectToMongooseDB();

const SignupSchema = new Schema({
    name: {
        type: String,
        required : [true, "Name is required"]
    },
    email: {
        type: String,
        required: [true, "email is mandatory"]
    },
    password: {
        type: String,
        required: [true, "password is mandatory"]
    }
});



const SignupCollection = mongoose.model("users", SignupSchema);


module.exports = {SignupCollection};