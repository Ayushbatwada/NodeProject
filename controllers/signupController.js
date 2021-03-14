 const SignupModel = require('../models/signupModel')
 const bcrypt = require('bcrypt')
 const jwt = require('jsonwebtoken')
 
 exports.registerNewUser = (req,res)=>{
     SignupModel.find({email : req.body.email},(err , users)=>{
        if(err){ 
            res.json({
                code:400,
                message:'Bad request',
                status:'failure'
            })  
        } else{
            if(users.length > 0){
                res.json({
                    code:200,
                    message:'User already exists',
                    status:'success'
                })
            }else{
                var addUser = new SignupModel()
                tempPass= req.body.password
                bcrypt.hash(tempPass , 10 , (err, result) => {
                    if(err){
                        res.json({
                            code:400,
                            message:'Bad request',
                            status:'failure'
                        })  
                    }else{
                       addUser.password=result
                       addUser.name = req.body.name,
                       addUser.email = req.body.email,
           
                       addUser.save((error , responce) => {
                           res.json({
                               code:200,
                               message:'User added',
                               status:'success'
                           })
                       })
                    }
                })
    
            }
        }
    }) 
 }

 exports.verifyUserLoginRequst = (req,res) => {
    SignupModel.find({email:req.body.email}, (err,users)=>{
        if(err){
            res.json({
                code:400,
                message:'Bad request',
                status:'failure'
            })
        } else{
            if(users.length==0){
                res.json({
                    code:401,
                    message:'Unauthorized',
                    status:'failure'
                })
            }else{
                bcrypt.compare(req.body.password , users[0].password,(err,result)=>{
                if(result===true){
                    const webToken = jwt.sign(
                        {
                            email:users[0].email,
                            name:users[0].name,
                        },
                        'myDetails',
                        {
                            expiresIn:'1h'
                        }  
                    )
                    res.json({
                        code:200,
                        message:'User found',
                        data:{
                            name:users[0].name,
                            _id:users[0]._id,
                            token:webToken,
                            email:users[0].email
                        },
                        status:'success'
                    })
                } else{
                    res.json({
                        code:401,
                        message:'Unauthorized',
                        status:'failure'
                    })
                }   
                })
            }
        }
    })
 }