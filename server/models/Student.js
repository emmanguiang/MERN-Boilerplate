const mongoose = require("mongoose");
const Schema = mongoose.Schema;
let todoSchema = require("./ToDo").schema;

let studentSchema = new Schema(
  {
    name: {
      type: String
    },
    email: {
      type: String
    },
    rollno: {
      type: Number
    },
    todos: [todoSchema]
  },
  {
    collection: "students",
    timestamps: true
  }
);

module.exports = mongoose.model("Student", studentSchema);
