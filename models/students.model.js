const mongoose = require("mongoose");

const studentSchema = new mongoose.Schema({
  name: { type: String, required: true, trim: true },
  age: {
    type: Number,
    min: 5,
    max: 120,
    required: true,
  },
  gender: String,
  marks: {
    type: Number,
    min: 0,
    max: 100,
    required: true,
  },
  attendance: {
    type: Number,
    min: 0,
    max: 100,
    required: true,
  },
  grade: String,
  required: true,
});

const Student = mongoose.model("Student", studentSchema);

module.exports = { Student };
