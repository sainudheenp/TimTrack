const { auth } = require('../config/firebase')


const validateToken = async (req, res, next) => {
    console.log("appjs cookie", req.cookies);

    try {
        const token = req.headers.authorization.split('Bearer ')[1] || req.cookies.token
        if (!token) {
            return res.status(401).json({
                success: false,
                message: "Auth token missing",
                redirect: '/login',

            })
        }

        const decodedToken = await auth().verifyIdToken(token)
        req.user = decodedToken
        

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