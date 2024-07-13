const mongoose = require('mongoose');
const validator = require('validator');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true,"Please enter your name"],
        maxLengtth: [30, "Name cannot exceeds 30 characters"],
    },
    initial:{
        type:String,
        required: [true,"Please enter your initial"],
        maxLength:[4,"Initial cannot exceeds 30 characters"],
    },
    lastName:{
        type:String,
        required: [true,"Please enter you Last Name"],
        maxLength:[30,"Last name cannot exceeds 30 characters"],
    },
    age:{
        type:Number,
    },
    dob:{
        type:Date,

    },
    gender:{
        type:String,
        enum:{
            values:['Male','Female','Others']
        }
    },
    registerNo: {
        type:String,
        required:[true,"Register number is required"],
    },
    aadharNo: {
        type: Number,
    },
    panNo: {
        type:String,
    },
    drivingLicenseNo: {
        type:String,
    },

    email:{
        type: String,
        required: [true,"Please enter your Email"],
        unique: true,
        validate: [validator.isEmail, 'Invalid Email'],
    },
    role:{
        type: String,
        enum: {
            values:['admin','dean','faculty','student'],
        },
        required: true,

    },
    password:{
        type:String,
        required: [true, "Password is required!"],
        select:false,
    },
    mobileNo: {
        type:Number,
    },
    department: {
        type:String,
    },
    nationality: {
        type:String,
        // enum: {
        //     values: []
        // }
    },
    bloodGroup : {
        type:String,
        enum: {
            values: ['O positive','O negative','A positive','A negative','B positive','B negative','AB positive','AB negative'],
        }
    },
    createdAt: {
        type: Date,
        default: Date.now(),
    }

})