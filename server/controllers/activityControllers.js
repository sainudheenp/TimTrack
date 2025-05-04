const Activity = require('../models/activitiesModel')
const factory = require('./handlerFactory')
const catchAsync = require('../utils/catchAsync')


exports.createActivity = catchAsync(async (req, res, next) => {
    const newActivity = await Activity.create({
        ...req.body,
        userId: req.user.uid
    });

    res.status(201).json({
        status: 'Success',
        data: {
            newActivity
        }
    });
});

exports.getWeeklyActivity = catchAsync(

    async (req, res, next) => {


        const oneWeekAgo = new Date();
        oneWeekAgo.setDate(oneWeekAgo.getDate() - 7);
        const data = await Activity.aggregate([
            {
                $match: { userId: req.user.uid, createdAt: { $gte: oneWeekAgo } }
            },
            {
                $group: {
                    _id: "$projectName",
                    totalTime: { $sum: "$activityDuration" },
                    activity: { $addToSet: "$activityName" }
                }
            }

        ])

        res.status(200).json({
            status: "success",
            data,
        });
    }
)

exports.getDasboardData = catchAsync(
    async (req, res) => {
        console.log("AM endpoint getdb")
        const oneWeekAgo = new Date()
        oneWeekAgo.setDate(oneWeekAgo.getDate() - 7)


        const [weeklyStats, recentActivities, recentProjects] = await Promise.all([
            Activity.aggregate([
                {
                    $match: { userId: req.user.uid, createdAt: { $gte: oneWeekAgo } }
                },
                {
                    $group: {
                        _id: "$projectName",
                        totalTime: { $sum: "$activityDuration" },
                        activity: { $addToSet: "$activityName" }
                    }
                }

            ]),
            Activity.find({ userId: req.user.uid }).sort({ createdAt: -1 }).limit(5),
            Activity.aggregate([
                { $match: { userId: req.user.uid, projectName: { $exists: true, $nin: [null,""] } } },
                { $sort: { createdAt: -1 } },
                { $group: { _id: "$projectName" ,    totalTime: { $sum: "$activityDuration" },            } },
                { $limit: 5 }
            ])


        ])


        res.status(200).json({
            status: 'success',
            data: {
                weeklyStats, recentActivities, recentProjects
            }
        })
    }

)

exports.getAllActivity = factory.getAll(Activity)