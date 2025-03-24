const mongoose = require("mongoose");
const dotenv = require("dotenv");

dotenv.config();

const ConnectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI, {});
    console.log("DataBase connected successfully");
  } catch (error) {
    console.error("MongoDB connection error:", error);
    process.exit(1);
  }
};

ConnectDB();

const app = require("./app");
const PORT = process.env.PORT || 3000;
const server = app.listen(PORT, () => {
  console.log(`App Running on port ${PORT}`);
});
