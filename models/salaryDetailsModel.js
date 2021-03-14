var mongoose = require('mongoose');

var salaryHistory = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    amount: {
        type: String,
        required: true
    },
    phone: {
        type:String,
        required:true
    },
    description:{
        type:String,
        required:true
    },
    transactionType:{
        type:String,
        required:true
    },
    transactionMode:{
        type:String,
        required:true
    },
    receiveFrom:{
        type:String,
        required:true
    },
    givenTo:{
        type:String,
        required:true
    },
    create_date: {
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model('TransactionDetails', salaryHistory);
