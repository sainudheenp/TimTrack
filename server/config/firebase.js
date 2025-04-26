const mongoose = require("mongoose")
const admin = require('firebase-admin')
const activitiesSchema = require('../models/ActivitiesSchema')

admin.initializeApp({
    credential: admin.credential.applicationDefault(),

})

const createActivity = async (req, res) => {
    try {
        const tokenId = req.headers.authorization.split('Bearer')[1]
        //if tokn res400
        const decodedToken = await admin.auth().verifyIdToken(tokenId);
        const firebaseUserId = decodedToken.uid;

        const newDoc = new Activity({

            activityName: "test",
            activityDuration: 2323,
            projectName: "dsfdsf",
            userId: firebaseUserId
        })


    } catch (error) {

    }
}