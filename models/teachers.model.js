const mongoose = require("mongoose");

const teacherSchema = new mongoose.Schema({
  name: String,
  age: Number,
  gender: String,
  subjects: {
    type: [String],
  },
});

module.exports = mongoose.model("Teacher", teacherSchema);
