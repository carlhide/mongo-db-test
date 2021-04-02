const mongoose = require("mongoose");

/*
	"_id" : ObjectId("6047d7560f943e186b9a0e5a"),
	"title" : "Post Two",
	"body" : "Body of post two",
	"category" : "Technology",
	"date" : "Tue Mar 09 2021 21:15:18 GMT+0100 (CET)"
*/

var postsSchema = new mongoose.Schema({
  _id: {
    type: Number,
    required: "This field is required",
  },
  title: {
    type: String,
    required: "This field is required",
  },
  body: {
    type: String,
    required: "This field is required",
  },
  category: {
    type: String,
    required: "This field is required",
  },
  date: {
    type: String,
    required: "This field is required",
  },
});

mongoose.model("posts", postsSchema)
