const mongoose = require('mongoose')
const { Schema } = mongoose;
const RoomSchema = new mongoose.Schema({
    roomName:{type:String },
    roomId:{type:String,unique:true,required:true},
    users:[{
        type: Schema.Types.ObjectId,
        ref: 'User'  
      }],
    uid:String
})

module.exports = mongoose.model('Room', RoomSchema);