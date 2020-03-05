const mongoose = require("mongoose");

const todoSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true
    },
    description: String
  },
  {
    collection: "todos",
    timestamps: true
  }
);

module.exports = {
  schema: todoSchema,
  model: mongoose.model("ToDo", todoSchema)
};
