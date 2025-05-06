const factory = require('./handlerFactory')
const Room = require('../models/roomModel')
const catchAsync = require('../utils/catchAsync')
const mongoose = require('mongoose')

// exports.createRoom = factory.createOne(Room)

exports.createRoom = catchAsync(
    async (req, res) => {
        const { roomId, roomName } = req.body;
        try {

            // let existingRoom = await Room.findOne({ users: req.user.uid })
            // if (existingRoom) {
            //     existingRoom.updateMany({ users: req.user.uid },
            //         { $pull: { users: req.user.uid } }
            //     )
            // }
            // await existingRoom.save()


            await Room.updateMany(
                { users: req.user.uid },
                { $pull: { users: req.user.uid } }
            );


            let room = await Room.findOne({ roomId })
            // console.log(req.user)
            if (!room) {
                room = new Room({ roomId, roomName, users: [req.user.uid] });
            } else {
                if (!room.users.includes(req.user.uid)) {
                    room.users.push(req.user.uid)
                }
            }
            await room.save()

            res.status(200).json({
                status: "success",
                message: "User added to room", room
            })


        } catch (error) {
            console.error(error);
            res.status(500).json({ error: 'room error' });
        }
    }
)

