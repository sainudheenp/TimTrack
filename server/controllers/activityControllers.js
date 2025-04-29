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
            $match: { userId: req.user.uid,createdAt:{$gte:oneWeekAgo} }
        },
        {
            $group: {
                _id: "$projectName",
                totalTime: { $sum: "$activityDuration"}
            }
        }

    ])

    res.status(200).json({
        status: "success",
        data,
    });
}
)

exports.getAllActivity = factory.getAll(Activity)