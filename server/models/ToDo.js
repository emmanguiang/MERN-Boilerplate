const mongoose = require("mongoose");

const todoSchema = new mongoose.Schema(
  {
    title: String,
    description: String
    // created: Date,
    // lastModified: Date
  },
  {
    collection: "todos"
  },
  {
    timestamps: true
  }
);

module.exports = mongoose.model("ToDo", todoSchema);
