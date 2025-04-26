const mongoose = require("mongoose")
const admin = require('firebase-admin')
const activitiesSchema = require('../models/ActivitiesSchema')
console.log("firere")
admin.initializeApp({
    credential: admin.credential.applicationDefault(),

})
const createActivity = async (req, res) => {
    try {
        const tokenId = req.headers.authorization.split('Bearer')[1] || 'eyJhbGciOiJSUzI1NiIsImtpZCI6IjkwOTg1NzhjNDg4MWRjMDVlYmYxOWExNWJhMjJkOGZkMWFiMzRjOGEiLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiU2FpbnVkaGVlbiBQIiwicGljdHVyZSI6Imh0dHBzOi8vbGgzLmdvb2dsZXVzZXJjb250ZW50LmNvbS9hL0FDZzhvY0x3Z3d0a1FZVWFSVVNrWGc0YWt6OHRrX3MySXNaOXBfcXFDd3pzak55Mm4xaV9wdz1zOTYtYyIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS90aW10cmFjay02ZGI0MSIsImF1ZCI6InRpbXRyYWNrLTZkYjQxIiwiYXV0aF90aW1lIjoxNzQ1Njk3NTY4LCJ1c2VyX2lkIjoiTzFwU3RYclpRWmVuQlQ4TklNSzV6aGVhWUpGMiIsInN1YiI6Ik8xcFN0WHJaUVplbkJUOE5JTUs1emhlYVlKRjIiLCJpYXQiOjE3NDU2OTc1NjgsImV4cCI6MTc0NTcwMTE2OCwiZW1haWwiOiIwMDAyc2FpbnVkaGVlbnZmdEBnbWFpbC5jb20iLCJlbWFpbF92ZXJpZmllZCI6dHJ1ZSwiZmlyZWJhc2UiOnsiaWRlbnRpdGllcyI6eyJnb29nbGUuY29tIjpbIjExMTIxMzI1NzE4MjE4MDY4MjY5NCJdLCJlbWFpbCI6WyIwMDAyc2FpbnVkaGVlbnZmdEBnbWFpbC5jb20iXX0sInNpZ25faW5fcHJvdmlkZXIiOiJnb29nbGUuY29tIn19.P5iInhCF2YAWlkFcunFkW4EOmLJmifeLSi5qSWxfEI33H1Ai91jqnditcnrdGiibl70SV8FqNHlKJqp66EKHbE9tuaAeI_t7j4yFRRtFpCKCCY2pofbW08514WPv-oh_3Vd2B7dDgEZ-_uzSl8txNfKe8GZKGqTxdmvUs95g79jt7LvueQXh88p4tvkr6FBc72ZnvltpSsSbeZBKbTNkKetK2sC6XweSb89l4NFTtqPVlniV4b8OYfQnfehQFuUuA_qq6PA9BiFf2HoLrAh2u2s3uxwj6XPA68TEk_TDlvQqerQGRtER-a5tI6hJqOkFU2L6XaIdfIu_ba1O0GiugA'
        //if tokn res400
        const decodedToken = await admin.auth().verifyIdToken(tokenId);
        console.log("DEVO ",decodedToken)
        const firebaseUserId = decodedToken.uid;

        const newDoc = new Activity({

            activityName: "test",
            activityDuration: 2323,
            projectName: "dsfdsf",
            userId: firebaseUserId
        })

    await newDoc.save


    } catch (error) {

    }
}

createActivity()
