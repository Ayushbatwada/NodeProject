var mangoose = require('mongoose')

var taskModel = mangoose.Schema({
    title:{
        type:String,
        required:true
    },
    description:{
        type:String,
        required:true
    },
    status:{
        type:String,
        required:true
    },

    create_date: {
        type: Date,
        default: Date.now
    },

    complete_date:{
        type:Date,
        default:Date.now
    },
    
    deadline_date:{
        type:Date,
        default:Date.now
    }

});


module.exports = mangoose.model('TaskModel', taskModel)