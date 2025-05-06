const mongoose = require('mongoose')
const { Schema } = mongoose;
const RoomSchema = new mongoose.Schema({
    roomName:{type:String },
    roomId:{type:String,unique:true,required:true},
    uid:String,
    users: [{ type: String }]
    // users:[{
    //     type: Schema.Types.ObjectId,
    //     ref: 'User' ,
    //   }],
})

module.exports = mongoose.model('Room', RoomSchema);