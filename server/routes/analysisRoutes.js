const express = require('express');
const activityController = require("../controllers/activityControllers")
const { validateToken } = require('../middlewares/authMiddleware')

const router = express.Router()

router.route("/")
    .get(validateToken, activityController.getAnalysis)



module.exports = router
