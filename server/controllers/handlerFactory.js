const AppError = require("../utils/appError");
const catchAsync = require("../utils/catchAsync");

exports.createOne = (Model) => {
    return catchAsync(async (req, res, next) => {
        const doc = await Model.create({ ...req.body, userId: req.user.uid })
        res.status(201).json({
            status: 'Succces',
            data: {
                data: doc
            }
        })

    })
}

exports.getAll = (Model) => {
    return catchAsync(async (req, res, next) => {
        const doc = await Model.find({ userId: req.user.uid }).limit(5).sort({updatedAt: -1})


        res.status(201).json({
            status: 'Succces',
            data: {
                data: doc
            }
        })

    })
}