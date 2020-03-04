let mongoose = require("mongoose"),
  express = require("express"),
  router = express.Router();

// Todo Model
let todoSchema = require("../models/ToDo");

// CREATE Todo
router.route("/create-todo").post((req, res, next) => {
  todoSchema.create(req.body, (error, data) => {
    if (error) {
      return next(error);
    } else {
      console.log(data);
      res.json(data);
    }
  });
});

// READ Todo
router.route("/").get((req, res) => {
  todoSchema.find((error, data) => {
    if (error) {
      return next(error);
    } else {
      res.json(data);
    }
  });
});

// Get Single Todo
router.route("/edit-todo/:id").get((req, res) => {
  todoSchema.findById(req.params.id, (error, data) => {
    if (error) {
      return next(error);
    } else {
      res.json(data);
    }
  });
});

// Update Todo
router.route("/update-todo/:id").put((req, res, next) => {
  todoSchema.findByIdAndUpdate(
    req.params.id,
    {
      $set: req.body
    },
    (error, data) => {
      if (error) {
        return next(error);
        console.log(error);
      } else {
        res.json(data);
        console.log("Todo updated successfully!");
      }
    }
  );
});

// Delete Todo
router.route("/delete-todo/:id").delete((req, res, next) => {
  todoSchema.findByIdAndRemove(req.params.id, (error, data) => {
    if (error) {
      return next(error);
    } else {
      res.status(200).json({
        msg: data
      });
    }
  });
});

module.exports = router;
