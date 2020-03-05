let mongoose = require("mongoose"),
  express = require("express"),
  router = express.Router();

// Todo Model
let todoModel = require("../models/ToDo");

// CREATE Todo
router.route("/create-todo").post((req, res, next) => {
  todoModel.create(req.body, (error, data) => {
    if (error) {
      return next(error);
    } else {
      res.json(data);
    }
  });
});

// READ Todo
router.route("/").get((req, res) => {
  todoModel.find((error, data) => {
    if (error) {
      return next(error);
    } else {
      res.json(data);
    }
  });
});

// Get Single Todo
router.route("/edit-todo/:id").get((req, res) => {
  todoModel.findById(req.params.id, (error, data) => {
    if (error) {
      return next(error);
    } else {
      res.json(data);
    }
  });
});

// Update Todo
router.route("/update-todo/:id").put((req, res, next) => {
  todoModel.findByIdAndUpdate(
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
  todoModel.findByIdAndRemove(req.params.id, (error, data) => {
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
