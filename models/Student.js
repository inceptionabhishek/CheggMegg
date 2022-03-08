const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const StudentSchema = new Schema({
  name: String,
  usename: String,
  email: String,
  password: String,
  profileimage: String,
  totalquestionsaksed:Number
});
module.exports = mongoose.model("Student", StudentSchema);
