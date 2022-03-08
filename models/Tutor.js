const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const TutorSchema = new Schema({
  name: String,
  usename: String,
  email: String,
  password: String,
  profileimage: String,
  totalquestionanswered:Number
});
module.exports = mongoose.model("Tutor", TutorSchema);
