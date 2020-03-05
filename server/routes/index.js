let express = require("express"),
  router = express.Router();

//create our collection of routers
router.get("/", function(req, res) {
  res.send("Hello World!");
});
router.use("/todos", require("./todo"));
router.use("/students", require("./student"));

module.exports = router;
