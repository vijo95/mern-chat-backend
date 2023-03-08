const mongoose = require("mongoose");
require("dotenv").config();

mongoose.connect(
  `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PW}@mernchat.lmefmug.mongodb.net/MernChat?retryWrites=true&w=majority`,
  () => console.log("CONNECTED TO MONGODB")
);
