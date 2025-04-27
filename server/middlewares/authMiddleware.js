const admin = require('firebase-admin')

const validateToken = async (req, res, next) => {
    try {
        const token = req.headers.authorization?.split('Bearer')[1]
        if (!token) {
            return res.status(401).json({
                success: false,
                message: "Auth token missing"
            }).send("/login")
        }

        const decodedToken = await admin.auth().verifyIdToken(token)
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