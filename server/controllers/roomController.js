const factory = require('./handlerFactory')
const Room = require('../models/roomModel')


exports.createRoom = factory.createOne(Room)