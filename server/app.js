const express = require("express");
const cookieParser = require('cookie-parser');
// require('./config/firebase')
const app = express();
const activityRoutes = require('./routes/activityRoutes')
app.use(express.json());
app.use(express.urlencoded({ extended: true, limit: "10kb" }));
app.use(cookieParser())

//routes
app.use('/api/v1/activity', activityRoutes)




// app.use('/',)





module.exports = app;
