const User = require('../models/UserModel');

exports.registerCredentials = async (req,res,next) => {
    const {name,initial,lastName,email,password,role,registerNo} = req.body;
    console.log(req.body);
    try{

        const registerNo1 = await User.findOne({
            'registerNo':registerNo
        });
        const email1 = await User.findOne({
            'email':email
        })
        if(registerNo1 || email1){
            console.log(registerNo1)
            return res.status(401).json({
                success:false,
                message:"User already exists!",
            })
        }
    const user = await User.create({
       
       name:name,
       initial:initial,
       lastName:lastName,
       email:email,
       password:password,
       role:role,
       registerNo:registerNo
    });
   
    if(user){
        return res.status(201).json({
            success:true,
            message:"User created Successfully",
            user
        })
    }
}
catch(error){
    console.log(error);
    return res.status(401).json({
        success:false,
        message:"User creation failed",
        error:error
    })
}
}

exports.registerUser = async(req,res,next) => {
    try{
    const user = await User.create(req.body);
    if(user){
        return res.status(201).json({
            success:true,
            message:"User added Successfully",
            user
        })
    }
}
catch(error){
    return res.status(401).json({
        success:false,
        message:"User creation failed",
        error:error
    })
}
}

exports.loginUser = async (req,res,next) => {
    const {registerNo,password} = req.body;
    if(!registerNo || !password ){
        return res.status(401).json({
            success:false,
            message:"Please enter the Credentials",
        });
    }

    const user = await User.findOne({registerNo}).select("+password");

    if(!user){
        return res.status(401).json({
            success:false,
            message:"User not found"
        });
    }
    if(!await user.validatePassword(password)){
        return res.status(401).json({
            success:false,
            message:"Incorrec password",
        })
    }

    return res.status(201).json({
        success:true,
        message:"User loggedin successfully",
        user
    })
}