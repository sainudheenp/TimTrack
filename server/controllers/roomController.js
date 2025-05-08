const factory = require('./handlerFactory')
const Room = require('../models/roomModel')
const catchAsync = require('../utils/catchAsync')
const mongoose = require('mongoose')
const Activity = require('../models/activitiesModel')
const User = require('../models/userModel')

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

exports.getRoomDatas = catchAsync(
    async (req, res) => {
        const uid = req.user.uid
        const rooms = await Room.find({ users: uid })
        // console.log(room)
        const room = rooms[0]
        const userUids = room.users;

        //fetch users

        const users = await User.find({ uid: { $in: userUids } })

        const today = new Date();
        today.setHours(0, 0, 0, 0);

        const activities = await Activity.aggregate([
            { $match: { userId: { $in: userUids } } },
            {
                $group: {
                    _id: "$userId",
                    totalHours: { $sum: "$activityDuration" },
                    todayHours: {
                        $sum: {
                            $cond: [{ $gte: ["$createdAt", today] }, "$activityDuration", 0]
                        }
                    },
                    projects: { $addToSet: "$projectName" },

                }
            }
        ]);


        const activityMap = {};
        activities.forEach((act) => {
            activityMap[act._id] = {
                totalHours: act.totalHours || 0,
                todayHours: act.todayHours || 0,
                projects: act.projects
            };
        })

        const members = users.map(user => {
            const stats = activityMap[user.uid] || {};
            return {
                name: user.displayName || user.email.slice(0, user.email.indexOf('@')),
                email: user.email,
                uid: user.uid,
                totalHours: stats.totalHours || 0,
                todaysHours: stats.todayHours || 0,
                numberOfProj: stats.projects.length
            }
        })



        // console.log(userUids)
        res.status(200).json({
            status: "success",
            users: members
        })
    }
)

