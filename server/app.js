const express = require("express");

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true, limit: "10kb" }));


//routes
// app.use('/',)
// app.use('/',)





module.exports = app;
