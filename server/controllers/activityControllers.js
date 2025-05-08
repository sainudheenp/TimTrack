const Activity = require('../models/activitiesModel')
const factory = require('./handlerFactory')
const catchAsync = require('../utils/catchAsync')


// exports.getAllActivity = factory.getAll(Activity,{isTodo:false})
exports.getAllActivity = factory.getAll(Activity,{})

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
                { $match: { userId: req.user.uid, projectName: { $exists: true, $nin: [null, ""] } } },
                { $sort: { createdAt: -1 } },
                { $group: { _id: "$projectName", totalTime: { $sum: "$activityDuration" }, } },
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



exports.getAnalysis = catchAsync(

    async (req, res) => {

        const startOfToday = new Date();
        startOfToday.setHours(0, 0, 0, 0);
        const lastSevenDays = new Date()
        lastSevenDays.setDate(lastSevenDays.getDate() - 7);

        const [TotalCard, BarChart, PieChart] = await Promise.all([

            Activity.aggregate([
                { $match: { userId: req.user.uid, projectName: { $nin: [null, ""] } } },
                // { $group: { _id: null, Tactivities: { $sum: 1 }, Tprojects: { $addToSet: "$projectName" }, Hours: { $sum: '$activityDuration' } } }
                {
                    $facet: {
                        overall: [
                            {
                                $group: {
                                    _id: null,
                                    totalHours: { $sum: "$activityDuration" },
                                    projects: { $addToSet: "$projectName" },

                                    TActivities: { $sum: 1 }
                                }
                            }
                        ],
                        today: [
                            { $match: { createdAt: { $gte: startOfToday } } },
                            { $group: { _id: 'null', todayHours: { $sum: "$activityDuration" } } }
                        ]
                    }
                }
            ]),

            //bar chart
            Activity.aggregate([
                { $match: { userId: req.user.uid, createdAt: { $gte: lastSevenDays } } },
                {
                    $group: {
                        _id: { $dateToString: { format: "%Y-%m-%d", date: "$createdAt" } },
                        projects: { $addToSet: "$projectName" },
                        projectDuration: { $sum: "$activityDuration" },


                    }
                },
                {
                    $sort: { _id: 1 }
                }
            ]),

            //piechart
            Activity.aggregate([
                { $match: { userId: req.user.uid, createdAt: { $gte: startOfToday }, projectName: { $exists: true, $nin: [null, ""] } } },
                { $group: { _id: "$activityName", actDuration: { $sum: "$activityDuration" } } }
            ]),




        ])


        res.status(200).json({
            status: 'success',
            data: { TotalCard, BarChart, PieChart }
        });

    }
)


//get all todo
exports.getTodos = factory.getAll(Activity, { isTodo: true })

exports.updateTodo = factory.updateOne(Activity)