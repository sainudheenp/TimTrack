const Activity = require('../models/activitiesModel')

exports.createActivity = (req, res) => {
    try {
        if (req.user.uid) {
            const newActivity = Activity.create(req.body, ...req.user.uid)
            res.status(201).json({
                status: 'Success',
                data: {
                    newActivity
                }
            })
        }
    } catch (error) {
        console.log("Activity Create Error", error)
        res.status(400).json({
            status: 'Failed',
            message: error
        })
    }
}

exports.getAllActivity = (req, res) => {
    res.status(200).json({
        status: "Success",
        message: "Hey am Working"
    })
}