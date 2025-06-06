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

exports.getAll = (Model, cus = {}) => {
    return catchAsync(async (req, res, next) => {
        const doc = await Model.find({ userId: req.user.uid, ...cus }).sort({ updatedAt: -1 })


        res.status(201).json({
            status: 'Succces',
            data: {
                data: doc
            }
        })

    })
}

exports.updateOne = (Model) => {
    return catchAsync(async (req, res, next) => {
        const doc = await Model.findByIdAndUpdate(
            req.body._id, { ...req.body }
        )

        if (!doc) {
            return res.status(404).json({
                status: 'fail',
                message: 'Document not found',
            });
        }

        res.status(200).json({
            status: 'Success',
            data: {
                data: doc,
            },
        });
    });
};

exports.DeleteOne = (Model) => {
    return catchAsync(async (req, res, next) => {
        console.log("SERVER HI")
        // console.log(req.body)
        // const doc = await Model.findByIdAndDelete(req.body._id)
        const doc = await Model.findByIdAndDelete({ _id: req.body._id, userId: req.user.uid })
        res.status(200).json({
            status: 'Succces',
            data: {
                data: doc
            }
        })

    })
}