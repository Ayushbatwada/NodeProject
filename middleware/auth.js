const jwt = require('jsonwebtoken')

module.exports = (req,res,next) => {
    token = req.headers['x-access-token'];
    try{
        const decode = jwt.verify(token,'myDetails')
        req.userData = decode;
        next()
    }
    catch{
        res.json({
            code:401,
            status:'failure',
            message:'Auth failed'
        })
    }

}