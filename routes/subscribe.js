const express = require("express");
const router = express.Router();

router.post("/", async (req, res, next) => {
  const { name, email } = req.body;
  console.log('123')
  res.render("subscribe", { name, email });
});

module.exports = router;
