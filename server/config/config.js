const mongoose = require("mongoose");
require("colors");

//connecDB Function

const connectDb = async () => {
  try {
    mongoose.connect('mongodb://127.0.0.1:27017/iapp',{useNewUrlParser: true,useNewUrlParser: true, useUnifiedTopology: true});
    const db = mongoose.connection;
    db.once('open', function() {
      console.log("Successfully connected to the database");
  });
  } catch (error) {
    console.log(`Error : ${error.message}`.bgRed);
    process.exit(1);
  }
};

//export
module.exports = connectDb;
