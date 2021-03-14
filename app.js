const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const app = express();
const SalaryHistoryRoute = require("./routes/salaryDetailsRoute")
const TaskHistoryRoute = require("./routes/taskDetailsRoute")
const SignupRoute = require("./routes/signupRoute.js")

mongoose.connect('mongodb://localhost/salaryhistory', { useNewUrlParser: true,useUnifiedTopology: true });
const db = mongoose.connection;

app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept,X-Access-Token');
    res.header('Access-Control-Allow-Methods', 'OPTIONS, GET, POST, PUT, DELETE');
    if('OPTIONS' === req.method) {
        res.sendStatus(200);
    } else {
        console.log(`${req.ip} ${req.method} ${req.url}`);
        next();
    }
});

app.use(bodyParser.urlencoded({
    extended: true
 }));
app.use(bodyParser.json());

if(!db)
    console.log("Error connecting db");
else
    console.log("Db connected successfully");

app.use('/api/salary', SalaryHistoryRoute);
app.use('/api/signup', SignupRoute);
app.use('/api/login', SignupRoute);
app.use('/api/task', TaskHistoryRoute);

module.exports=app;

