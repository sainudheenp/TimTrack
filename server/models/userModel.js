const mongoose = require('mongoose')


const UserSchema = new mongoose.Schema({
    uid: {type: String, required: true, unique: true },
    displayName: String,
    email: String,
    photoURL: String,
}, { timestamps: true })


module.exports =mongoose.model('User',UserSchema)