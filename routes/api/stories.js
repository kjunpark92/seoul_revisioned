const express = require("express");
const router = express.Router();

//@route GET api/stories/test
//@desc test stories page
//@access Public

router.get("/test", (req, res) => {
  res.json({ msg: "Stories page works" });
});

module.exports = router;
