const taskModel = require('../models/taskDetailsModel');
exports.getAllTasksList = (req,res) => {
    taskModel.find((error,tasksList) => {
        if(error){
            res.json({
                code:400,
                status:'failure',
                message:'Data Not Found'
            })
        } else{
            res.json({
                code:200,
                status:'Success',
                message:'Data Found',
                data : tasksList
            })  
        }
    })
}

exports.addNewTask = (req,res)=>{
    var newTask = new taskModel();
    newTask.title = req.body.title,
    newTask.description = req.body.description,
    newTask.status = req.body.status

    newTask.save((error,task) => {
        if(error){
            res.json({
                code:400,
                status:'failure',
                message:'Data Not added'
            })  
        } else{
            res.json({
                code:200,
                status:'Success',
                message:'Data Found',
                data : task
            })  
        }
    })
}