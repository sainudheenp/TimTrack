const mongoose = require('mongoose')


const ProjectSchema = new mongoose.Schema({
    projectName: {
        type: String
    },
    ProjectDuration: {
        type: Date
    },
    userId: {
        type: String
    }
}, { timestamps: true }
)
module.exports = mongoose.model('Project', ProjectSchema);