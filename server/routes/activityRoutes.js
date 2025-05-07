const express = require('express');
const activityController = require("../controllers/activityControllers")
const { validateToken } = require('../middlewares/authMiddleware')

const router = express.Router()

router.route("/")
    .post(validateToken, activityController.createActivity)
    .get(validateToken, activityController.getAllActivity)

router.route("/weekStatus/")
    .get(validateToken, activityController.getWeeklyActivity)

router.route("/todo")
    .get(validateToken, activityController.getTodos)
    .post(validateToken, activityController.createActivity)


module.exports = router

/*
/time/:uid  
get all activitys

post = post an activity

dlelete = activity

update = activity update

*/
