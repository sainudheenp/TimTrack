const { auth } = require('../config/firebase')
const User = require('../models/userModel')
const Room = require('../models/roomModel')

const validateToken = async (req, res, next) => {

    try {
        const token = req.headers.authorization?.startsWith('Bearer ')
            ? req.headers.authorization.split('Bearer ')[1]
            : req.cookies?.token;


        console.log("middleware cookie", token.slice(0, 10));

        if (!token) {
            return res.status(401).json({
                success: false,
                message: "Auth token missing",
            })
        }

        const decodedToken = await auth().verifyIdToken(token)
        req.user = decodedToken

        const { uid, email, name, picture } = decodedToken;
        let user = await User.findOne({ uid })
        if (!user) {
            user = await User.create({
                uid,
                email,
                displayName: name,
                photoURL: picture
            });
            await Room.updateOne(
                { roomId: "Room1" },
                { $addToSet: { users: req.user.uid } }
            );
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