const express = require('express');
router = express.Router();
const webauthenticate = require('../middleware/auth')

const SalaryHistoryController = require('../controllers/salaryDetailsController');

router.route('/transactions')
    .get(webauthenticate,SalaryHistoryController.getAllSalaryTransaction)
  
router.route('/transaction/new')
.post(webauthenticate,SalaryHistoryController.addNewSalaryTransaction) 

router.route('/transactions/:transactionId')
    .get(webauthenticate,SalaryHistoryController.getSpecifiedSalaryTransaction)
    .patch(webauthenticate,SalaryHistoryController.updateSalaryTransaction)
    .put(webauthenticate,SalaryHistoryController.updateSalaryTransaction)
    .delete(webauthenticate,SalaryHistoryController.deleteSalaryTransaction);


module.exports = router;