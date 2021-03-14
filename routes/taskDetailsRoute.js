const express = require('express')
router = express.Router()

const TaskHistoryController = require('../controllers/taskDetailsController');

router.route('/list')
    .get(TaskHistoryController.getAllTasksList)

// router.route('/update/:taskId')
//     .put(TaskHistoryController.updateTask)

router.route('/add/new')
    .post(TaskHistoryController.addNewTask)

// router.route('/delete/:taskId')
//     .delete(TaskHistoryController.deleteTask)


module.exports = router