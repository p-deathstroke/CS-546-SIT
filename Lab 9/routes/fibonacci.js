const express = require('express');
const router = express.Router();

router.post("/", (req, res) => {
    res.render("screen/form");
  });

  router.get("/", (req, res) => {
    res.render("screen/form");
  });


module.exports = router;