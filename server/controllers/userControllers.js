const express = require('express')

exports.getMe = (req, res) => {
    try {
        if (!req.user) {
            throw error
        }
        res.status(200).json({
            status: 'success',
            user: wreq.user
        })
    } catch (error) {
        console.log("Get Me Error", error)
    }
}

