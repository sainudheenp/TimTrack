const express = require('express')

exports.getMe = (req, res) => {
    try {
        if (!req.user) {
            throw error
        }
        res.send(200).json({
            status: 'success',
            user: req.user
        })
    } catch (error) {
        console.log("Get Me Error", error)
    }
}

