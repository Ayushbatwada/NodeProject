const mongoose = require('mongoose')

var signupModel = mongoose.Schema({
    name:{
        type:String,
        required:true
    },

    email:{
        type:String,
        required:true
    },

    password:{
        type:String,
        reuired:true
    },

    create_date:{
        type:Date,
        default:Date.now()
    }
})

module.exports = mongoose.model('users' , signupModel)