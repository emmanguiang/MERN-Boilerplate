let express = require("express"),
  router = express.Router();

// set up a route to redirect http to https
// router.get("*", function(req, res) {
//   res.redirect("https://" + req.headers.host + req.url);
// });

//create our collection of routers
router.get("/", function(req, res) {
  res.send("Hello World!");
});
router.use("/todos", require("./todo"));
router.use("/students", require("./student"));

module.exports = router;
