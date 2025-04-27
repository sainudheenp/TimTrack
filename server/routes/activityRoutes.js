const express = require('express');
const activityController = require("../controllers/activityController")
const { validateToken } = require('../middlewares/authMiddleware')

const router = express.Router()

router.route("/")
    .post(validateToken,activityController.createActivity)
    .get(activityController.getAllActivity)

module.exports = router

/*
/time/:uid  
get all activitys

post = post an activity

dlelete = activity

update = activity update

*/
