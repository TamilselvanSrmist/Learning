const csv = require("csv-parser");
const fs = require("fs");
const User = require("../models/UserModel");
const path = require('path');
const bcrypt = require('bcrypt');

exports.bulkRegister = async (req,res,next) => {
    
    if(!req.files || !req.files.file){
        return res.status(400).json({
            success:false,
            message:'No file is uploaded'
        });
    }

    const file = req.files.file;
   
    const filePath = path.join(__dirname, '..', 'uploads',file.name);
   
    file.mv(filePath,(err) => {
        if(err){
            return res.status(500).json({
                success:false,
                message:'Error moving file',
                error: err
            });
        }

        const users = [];
        const failedUsers = [];
        const successfulUsers = [];

        fs.createReadStream(filePath)
           .pipe(csv())
           .on('data',(row) => {
            users.push(row);
           })
           .on('end',async() => {
            for(const userData of users){
                try{
                    const user = new User(userData);
                    await user.validate();
                    successfulUsers.push(userData);
                }
                catch(err){
                    failedUsers.push({userData,error:err.message})
                }
            }

            if(successfulUsers.length > 0){
                try{
                    const hashedUsers = await Promise.all(successfulUsers.map(async(hashusers) => {
                          const hashedPassword = await bcrypt.hash(hashusers.password,10);
                          return {...hashusers,password:hashedPassword};
                    }))
                    await User.insertMany(hashedUsers);
                }
                catch(err){
                    return res.status(500).json({
                        message:'Error inserting users',error:err
                    });
                }
            }

            fs.unlink(filePath, (err) => {
                if(err){
                    console.log('Error removing file',err);
                }
            });

            res.status(200).json({
                success:true,
                message:'Bulk Registration completed',
                successfulUsers:successfulUsers.length,
                failedUsers
            });
           });
    });


}