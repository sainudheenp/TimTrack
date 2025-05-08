const express = require('express')
const roomController = require('../controllers/roomController')
const { validateToken } = require('../middlewares/authMiddleware')

const router = express.Router()


router.route('/')
    .post(validateToken, roomController.createRoom)
    .get(validateToken, roomController.getRoomDatas)

module.exports = router
