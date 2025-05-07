const mongoose = require('mongoose');
const Project = require('./ProjectsSchema')

const activitiesSchema = new mongoose.Schema({
    activityName: {
        type: String,
        required: true,
        trim: true
    },
    activityDuration: {
        type: Number,
        required: true
    },
    projectName: {
        type: String
    },
    userId: {
        type: String,
        required: true
    },
    isTodo: { type: Boolean, default: false },
    expectedTime: Number,
    isCompleted: { type: Boolean, default: false }
}
    ,
    { timestamps: true });

module.exports = mongoose.model('Activity', activitiesSchema);