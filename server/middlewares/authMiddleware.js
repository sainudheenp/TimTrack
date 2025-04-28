const { auth } = require('../config/firebase')


const validateToken = async (req, res, next) => {
    console.log("appjs cookie",req.cookies);

    try {
        const token = req.cookies.token || req.headers.authorization.split('Bearer ')[1]
        if (!token) {
            return res.status(401).json({
                success: false,
                message: "Auth token missing",
                redirect:'/login',
            
            })
        }

        const decodedToken = await auth().verifyIdToken(token)

        req.user = {
            uid: decodedToken.uid,
            email: decodedToken.email
        }
        next()

    } catch (error) {
        console.log("Token validation failed")
        res.status(403).json({
            success: false,
            message: 'Invalid Token',
            error: error.message
        })
    }
}
module.exports = {
    validateToken
}