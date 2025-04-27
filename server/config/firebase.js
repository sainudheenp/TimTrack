const admin = require('firebase-admin')
const ServiceAccount = require('./timtrack-6db41-firebase-adminsdk-fbsvc-7ebdbeed16.json')


const firebaseAdmin = admin.initializeApp({
    credential: admin.credential.cert(ServiceAccount),
})

module.exports = firebaseAdmin;