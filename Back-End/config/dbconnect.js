const mongoose = require("mongoose");

const dbConnect = () => {
  try {
    const connection = mongoose.connect(process.env.MONGODB_URL);
    console.log("Database Connected Successfully");
  } catch (error) {
    console.log("Database error n dbconnection.js ----- :", error.message);
  }
};

module.exports = dbConnect;
 