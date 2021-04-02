const mongoose = require("mongoose");

mongoose.connect(
  "Mongodb://localhost:3001/test",
  {
    useNewUrlParser: true,
  },
  (err) => {
    if (!err) {
      console.log("Connected successfully");
    } else {
      console.log("Could not connect" + err);
    }
  }
);

require("./posts.model");
