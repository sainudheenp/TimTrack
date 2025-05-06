const mongoose = require('mongoose')

const RoomSchema = new mongoose.Schema({
    roomName:{type:String },
    roomId:{type:String,unique:true,required:true},
    users:[{
        type: Schema.Types.ObjectId,
        ref: 'User'  
      }]
})