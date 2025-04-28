const express = require('express');
const userController = require("../controllers/userControllers")
const { validateToken } = require('../middlewares/authMiddleware')

const router = express.Router()

router.route("/")
    .get(validateToken,userController.getMe)

module.exports = router

/*
/time/:uid  
get all activitys

post = post an activity

dlelete = activity

update = activity update

*/
