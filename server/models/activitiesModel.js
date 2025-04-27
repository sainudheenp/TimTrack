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
        // ref: 'Project'
    },
    userId: {
        type: String,
        required: true
    }
}
    ,
    { timestamps: true });

module.exports = mongoose.model('Activity', activitiesSchema);