const salaryDetails = require('../models/salaryDetailsModel');
exports.getAllSalaryTransaction = (req, res) => {
    salaryDetails.find(function (error, salaryTransactions) {
        if (error) {
            res.json({
                code:400,
                status: "failed",
                message: "Result Not Found",
            });
        }else{
            res.status(200).json({
                code:200,
                status: "success",
                message: "All salary transactions",
                data: salaryTransactions
            });
        }  
    });
};
exports.addNewSalaryTransaction = function (req, res) {
            var salaryDetail = new salaryDetails();
            salaryDetail.name = req.body.name;
            salaryDetail.amount = req.body.amount;
            salaryDetail.phone = req.body.phone;
            salaryDetail.description = req.body.description;
            salaryDetail.transactionType = req.body.transactionType;
            salaryDetail.transactionMode = req.body.transactionMode;
            salaryDetail.receiveFrom = req.body.receiveFrom;
            salaryDetail.givenTo = req.body.givenTo;
    salaryDetail.save(function (error) {
        if (error){
            res.json({
                code:400,
                status: "failed",
                message: "Transaction Not added",
            });
        }else{
            res.json({
                code:200,
                status:"success",
                message: 'New transaction!',
                data: salaryDetail
            });
        }
    }); 
};
exports.getSpecifiedSalaryTransaction = (req, res) => {
    salaryDetails.findById(req.params.transactionId, function (error, transactionDetail) {
        if (error){
            res.json({
                code:400,
                status:"failed",
                message:"Result Not Found"
            })
        }else{
            res.json({
                code:200,
                status:"Success",
                message: 'Specified Transaction detail',
                data: transactionDetail
            });
        }
    });
};
exports.updateSalaryTransaction = (req, res) => {
    salaryDetails.findById(req.params.transactionId,(error, salaryDetail) => {   
        if (error){
            res.json({
                code:400,
                status:"failed",
                message:"Transaction Not found"
            })
        }else{
            salaryDetail.name = req.body.name ? req.body.name : salaryDetail.name;
            salaryDetail.amount = req.body.amount?req.body.amount:salaryDetail.amount;
            salaryDetail.phone = req.body.phone ? req.body.phone : salaryDetail.phone;
            salaryDetail.description = req.body.description ? req.body.description : salaryDetail.description;
            salaryDetail.transactionType = req.body.transactionType ? req.body.transactionType : salaryDetail.transactionType;
            salaryDetail.transactionMode = req.body.transactionMode ? req.body.transactionMode : salaryDetail.transactionMode;
            salaryDetail.receiveFrom = req.body.receiveFrom ?  req.body.receiveFrom : salaryDetail.receiveFrom;
            salaryDetail.givenTo = req.body.givenTo ?  req.body.givenTo : salaryDetail.givenTo;

            salaryDetail.save(function (error) {
                if (error){
                    res.json({
                        code:400,
                        status:"failed",
                        message:"Result Not updated"
                    })
                }else{
                    res.json({
                        code:200,
                        status:"success",
                        message: 'Transaction updated',
                        data: salaryDetail
                    });
                }
            });
        }
    });
};

exports.deleteSalaryTransaction = function (req, res) {
    salaryDetails.remove({
        _id: req.params.transactionId
    },(error, transactionDetail)=>{
        if (error){
            res.json({
                code:400,
                status: "failed",
                message: 'Transaction not deleted',
            });
        }else{
            res.json({
                code:200,
                status: "success",
                message: 'Transaction deleted',
                data:transactionDetail
            });
        }     
    });
};