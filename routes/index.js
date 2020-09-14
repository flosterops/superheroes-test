const express = require("express");
const router = express.Router();
const fetch = require("node-fetch");

/* GET home page. */
router.get("/", async function (req, res, next) {
  try {
    const response = await fetch('https://mdn.github.io/learning-area/javascript/oojs/json/superheroes.json')
    const { members } = await response.json()
    const headerTitles = Object.keys(members[0]).map(key => key);
    res.render("index", { title: "Express", members, headerTitles});
  } catch (e) {
    res.render("error", { message: e.message, error: e });
  }

});

module.exports = router;
