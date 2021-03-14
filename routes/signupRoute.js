const express = require('express')
const router = express.Router()

const SignupController = require('../controllers/signupController.js')

router.route('/new')
    .post(SignupController.registerNewUser)

router.route('/verify',)
    .post(SignupController.verifyUserLoginRequst)


module.exports = router;    